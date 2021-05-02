import { PropsWithChildren } from "react";
import styled from "styled-components";

function TheoremBase({ name, color, children }: PropsWithChildren<{ name: string; color: string }>) {
  return (
    <Container color={color}>
      <Title>{name}</Title>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
}

const Container = styled.div<{ color: string }>`
  position: relative;
  margin: 32px 0;
  padding: 8px 0 0;
  border: 4px ${(props) => props.color} solid;
  border-radius: 16px;
  min-height: 64px;
`;

const Title = styled.h3`
  position: absolute;
  margin: -24px 0 0 16px;
  padding: 0 8px;
  font-size: 20px;
  background-color: white;
  z-index: 1;
`;

const ChildrenWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
`;

export function Definition({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <TheoremBase name={`定義：${title}`} color="pink">
      {children}
    </TheoremBase>
  );
}
