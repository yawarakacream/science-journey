import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { NoteMap } from "../article/ArticleLoader";
import Anchor from "../components/Anchor";

export default function Navigator({ noteMap }: { noteMap: NoteMap }) {
  return (
    <Container>
      <Item title="ホーム" subTitle="Home" path="/" />
      {noteMap.books.map((book, i) => (
        <Item key={i} title={book.title} subTitle={book.subTitle} path={"/" + book.name} />
      ))}
    </Container>
  );
}

const Container = styled.nav`
  grid-area: navigator;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  background-color: lightblue;

  @media (max-width: 600px) {
    border-bottom: 2px solid lightgray;
    background-color: white;
  }
`;

function Item({ title, subTitle, path }: { title: string; subTitle: string; path: string }) {
  const currentPath = useRouter().asPath;
  const selected = path === "/" ? currentPath === "/" : currentPath.startsWith(path);
  return (
    <ItemContainer>
      <ItemOverlay href={path} data-selected={selected} />
      <ItemTitle>{title}</ItemTitle>
      <ItemSubTitle>{subTitle}</ItemSubTitle>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  position: relative;
  height: 100%;
  width: min(256px, 25%);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: calc(100% - 2px * 2);
    width: 100%;
    padding: 2px 0;
  }
`;

const ItemOverlay = styled(Anchor)`
  position: absolute;
  height: calc(100% - 4px);
  width: 100%;
  z-index: 1;
  border-radius: 2px;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  transition: border-bottom 0.2s;

  &[data-selected="true"] {
    border-bottom: 4px solid darkblue;
  }
  &[data-selected="false"]:hover {
    border-bottom: 4px solid lightskyblue;
  }

  @media (max-width: 600px) {
    height: 100%;
    width: calc(100% - 1px * 2);
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: none;

    &[data-selected="true"] {
      border-bottom: none;
      background-color: rgba(135, 206, 250, 0.1);
    }
    &[data-selected="false"]:hover {
      border-bottom: none;
    }
  }
`;

const ItemTitle = styled.span`
  font-family: "ヒラギノ明朝 Pro W3", serif;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ItemSubTitle = styled.span`
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 370px) {
    display: none;
  }
`;
