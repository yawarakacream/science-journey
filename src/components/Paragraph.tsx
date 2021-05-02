import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function Paragraph({ children, ...p }: PropsWithChildren<JSX.IntrinsicElements["p"]>) {
  return (
    <Container className="" {...p}>
      {children}
    </Container>
  );
}

const Container = styled.div<any>``;
