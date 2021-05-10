import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/src/ast-to-react";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import styled from "styled-components";
import Anchor from "./Anchor";
import { Definition, Theorem } from "./Theorems";

interface Props {
  children: string;
}

export default function Markdown({ children }: Props) {
  return (
    <Container>
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        children={children}
      />
    </Container>
  );
}

const components: Components = {
  pre: "div",

  a: ({ ...props }) => <Anchor changeColorIfVisited={false} {...(props as any)} />,

  code: ({ node, inline, className, children, ...props }) => {
    if (typeof className !== "string") {
      throw new Error("Illegal className type");
    }

    const [type, title] = (className as string).substr("language-".length).split(":");
    if (!title) {
      return <code className={className} children={children} {...props} />;
    }

    if (children.length !== 1) {
      throw new Error("Illegal chldren length");
    }

    switch (type) {
      case "definition":
        return <Definition title={title} children={<Markdown children={children[0].toString()} />} />;
      case "theorem":
        return <Theorem title={title} children={<Markdown children={children[0].toString()} />} />;
      default:
        throw new Error("Unknown theorem type");
    }
  },
};

const Container = styled.div`
  h1 {
    margin-top: 32px;
    font-size: 24px;
    border-bottom: solid 2px lightblue;
  }

  h2 {
    margin-top: 32px;
    font-size: 20px;
    border-bottom: dotted 2px lightsteelblue;
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
  p {
    font-family: sans-serif;

    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }

  strong {
    color: blue;
  }

  .katex-display {
  }

  .katex-display .katex {
    text-align: left !important;
    padding-left: 2rem;
    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`;
