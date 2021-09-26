import styled from "styled-components";

export default function OneLineCodeBlock({ code }: { code: string }) {
  return <Container>{code}</Container>;
}

const Container = styled.code`
  position: relative;
  font-size: 90% !important;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;
  background-color: rgb(245, 242, 240) !important;
  padding: 4px 2px;
`;
