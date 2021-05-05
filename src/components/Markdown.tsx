import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/src/ast-to-react";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { Definition, Theorem } from "./Theorems";

interface Props {
  children: string;
}

export default function Markdown({ children }: Props) {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        children={children}
      />
    </div>
  );
}

const components: Components = {
  pre: "div",

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
