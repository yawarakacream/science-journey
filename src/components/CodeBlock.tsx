import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock({ title, language, code }: { title: string; language: string; code: string }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <SyntaxHighlighter language={language} children={code} lineNumberStyle={{ minWidth: 0 }} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  /* for SyntaxHighlighter */
  pre {
    font-size: 80% !important;
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  height: 24px;
  margin-top: 2px;
  padding: 0 12.8px 4px;
  background-color: rgb(245, 242, 240);
`;

const Title = styled.span`
  position: absolute;
  padding: 2px 4px;
  font-size: 80%;
  background-color: gainsboro;
`;
