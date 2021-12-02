import React from "react";
import styled from "styled-components";
import Anchor from "../components/Anchor";

export default function Header() {
  return (
    <Container>
      <Overlay href="/" />
      <Title>科学の旅</Title>
      <SubTitle>理系大学生の数学・計算機科学の備忘録</SubTitle>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  height: 64px;
  display: flex;
  flex-direction: column;
  background-color: lightsteelblue;
  text-align: center;

  @media (max-width: 600px) {
    padding-left: 4px;
    text-align: left;
  }
`;

const Overlay = styled(Anchor)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  @media (max-width: 600px) {
    width: calc(100% - 4px);
  }
`;

const Title = styled.h1`
  padding-top: 4px;
  font-family: "ヒラギノ明朝 Pro W3", serif;
  font-size: calc(48px - 4px * 2 - 16px);
  margin: 0;
`;

const SubTitle = styled.span`
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
