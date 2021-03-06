import dynamic from "next/dynamic";
import { isValidElement, PropsWithChildren, ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/src/ast-to-react";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import styled from "styled-components";
import { isGooglebot } from "../utility";

const Anchor = dynamic(() => import("./Anchor"));
const Spoiler = dynamic(() => import("./Spoiler"));
const CoordinateSystem2D = dynamic(() => import("./CoordinateSystem2D"));
const Definition = dynamic<
  PropsWithChildren<{
    title: string;
  }>
>(() => import("./Theorems").then((t) => t.Definition));
const Theorem = dynamic<
  PropsWithChildren<{
    title: string;
  }>
>(() => import("./Theorems").then((t) => t.Theorem));
const CodeBlock = dynamic(() => import("./CodeBlock"));
const OneLineCodeBlock = dynamic(() => import("./OneLineCodeBlock"));

interface Props {
  children: string;
}

const katexOptions = {
  macros: {
    "\\defiff": "\\overset{def}{\\iff}",
    "\\C": "\\mathbb{C}",
    "\\Re": "\\operatorname{Re}",
    "\\Im": "\\operatorname{Im}",
  },
};

export default function Markdown({ children }: Props) {
  return (
    <Container>
      {isGooglebot ? (
        <ReactMarkdown components={components} children={children} />
      ) : (
        <ReactMarkdown
          components={components}
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex.bind(rehypeKatex, katexOptions)]}
          children={children}
        />
      )}
    </Container>
  );
}

const components: Components = {
  pre: "div",

  a: ({ ...props }) => <Anchor changeColorIfVisited={false} {...(props as any)} />,

  thead: ({ children }) => {
    // returns <></> if all th in tr in thead are empty
    if (children.length === 1 && isValidElement(children[0])) {
      const tr: ReactElement = children[0];
      const ths: ReactElement[] = tr.props.children;
      const thsChildren: any[] | undefined = ths.map((th) => th.props.children);
      if (thsChildren.every((c) => c === undefined)) {
        return <></>;
      }
    }
    return <thead children={children} />;
  },

  code: ({ node, inline, className, children, ...props }) => {
    if (typeof className !== "string") {
      if (Object.keys(props).length === 0) {
        return <OneLineCodeBlock code={children[0] as string} />;
      }
      throw new Error("Illegal className type");
    }

    const [type, title, ...data] = (className as string).substr("language-".length).split(":");
    if (!title) {
      return <code className={className} children={children} {...props} />;
    }

    if (children.length !== 1) {
      throw new Error("Illegal chldren length");
    }

    switch (type) {
      case "spoiler":
        if (title !== "open" && title !== "close") {
          throw new Error(`Unknown spoiler status: ${title}`);
        }
        return (
          <Spoiler
            openDefault={title === "open"}
            title={data.length ? data[0] : undefined}
            children={<Markdown children={children[0].toString()} />}
          />
        );
      case "definition":
        return <Definition title={title} children={<Markdown children={children[0].toString()} />} />;
      case "theorem":
        return <Theorem title={title} children={<Markdown children={children[0].toString()} />} />;
      case "graph": {
        if (title === "coordinate-system-2d") {
          return <CoordinateSystem2D {...eval(children[0].toString())} />;
        } else {
          throw new Error("Not implemented yet: " + title);
        }
      }
      case "code": {
        if (title === "input") {
          return <CodeBlock title="??????" language="io" code={children[0].toString().trim()} />;
        }
        if (title === "output") {
          return <CodeBlock title="??????" language="io" code={children[0].toString().trim()} />;
        }
        const language = title.substring(title.lastIndexOf(".") + 1);
        return <CodeBlock title={title} language={language} code={children[0].toString().trim()} />;
      }
      default:
        throw new Error("Unknown theorem type");
    }
  },
};

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  h1 {
    margin-top: 32px;
    font-size: 24px;
    border-bottom: solid 4px lightblue;

    @media (max-width: 600px) {
      margin-top: 16px;
      font-size: 20px;
    }
  }

  h2 {
    margin-top: 32px;
    font-size: 20px;
    border-bottom: dotted 2px lightsteelblue;

    @media (max-width: 600px) {
      margin-top: 16px;
      font-size: 18px;
      border-bottom: dotted 4px lightsteelblue;
    }
  }

  h3 {
    margin-top: 24px;
    border-bottom: dashed 2px lightgray;
  }

  h4 {
    margin-bottom: 0px;
  }

  table {
    display: block;
    margin: 8px 0;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    padding: 4px 12px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  strong {
    color: blue;
  }

  blockquote {
    margin: 0;
    padding: 4px 8px;
    background-color: floralwhite;
    border: 1px solid papayawhip;

    p {
      margin: 0;
      padding: 0;
    }
  }

  .katex-display .katex {
    text-align: left !important;
    padding-left: 32px;

    @media (max-width: 600px) {
      padding-left: 16px;
    }
  }
`;
