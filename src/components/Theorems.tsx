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

  p {
    margin-left: 4px;
    margin-right: 4px;
  }

  p:first-child {
    margin-top: 4px;
  }

  p:last-child {
    margin-bottom: 4px;
  }
`;

const Title = styled.span`
  position: absolute;
  margin: -24px 0 0 16px;
  padding: 0 8px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  z-index: 1;
`;

const ChildrenWrapper = styled.div`
  height: 100%;
  width: calc(100% - 8px * 2 - 4px * 2);
  padding: 12px;
`;

export function Definition({ title, children }: PropsWithChildren<{ title: string }>) {
  return <TheoremBase name={`定義：${title}`} color="pink" children={children} />;
}

export function Theorem({ title, children }: PropsWithChildren<{ title: string }>) {
  return <TheoremBase name={`定理：${title}`} color="orange" children={children} />;
}
