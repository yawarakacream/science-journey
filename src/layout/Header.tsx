import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>科学の旅</Title>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  height: 64px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: lightblue;
`;

const Title = styled.h1`
  padding: 4px;
  font-size: calc(48px - 4px * 2);
  margin: 0;
`;
