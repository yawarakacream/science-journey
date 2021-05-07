import React from "react";
import styled from "styled-components";
import Anchor from "../components/Anchor";

export default function Footer() {
  return (
    <Container>
      <Copyright>
        <Anchor href="/" underline={false} changeColorIfVisited={false}>
          (c) 2021 科学の旅
        </Anchor>
      </Copyright>
    </Container>
  );
}

const Container = styled.footer`
  position: relative;
  height: 24px;
  text-align: center;
`;

const Copyright = styled.small`
  height: 100%;
  margin: auto;
`;
