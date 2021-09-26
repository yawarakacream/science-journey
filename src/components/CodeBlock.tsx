import styled from "styled-components";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import cpp from "react-syntax-highlighter/dist/cjs/languages/hljs/cpp";
import python from "react-syntax-highlighter/dist/cjs/languages/hljs/python";
import mathematica from "react-syntax-highlighter/dist/cjs/languages/hljs/mathematica";

SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("py", python);
SyntaxHighlighter.registerLanguage("nb", mathematica);

export default function CodeBlock({ title, language, code }: { title: string; language: string; code: string }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <SyntaxHighlighter language={language} children={code} style={xcode} lineNumberStyle={{ minWidth: 0 }} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  /* for SyntaxHighlighter */
  pre {
    background-color: rgb(245, 242, 240) !important;
    padding: 0 16px 8px !important;
    margin: 0;
    text-shadow: white 0px 1px;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    overflow: auto;

    code {
      font-size: 90% !important;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
    }
  }
`;

const TitleContainer = styled.div`
  position: relative;
  height: 24px;
  margin-top: 2px;
  padding: 0 12px 4px;
  background-color: rgb(245, 242, 240);
`;

const Title = styled.span`
  position: absolute;
  padding: 2px 4px;
  font-size: 80%;
  background-color: gainsboro;
`;
