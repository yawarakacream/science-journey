import { useRouter } from "next/router";
import React from "react";
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
  display: flex;
  justify-content: space-around;
  flex: 1;
  background-color: lightblue;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 256px;
`;

const ItemOverlay = styled(Anchor)`
  position: absolute;
  height: calc(100% - 4px);
  width: 100%;
  z-index: 1;
  border-bottom: solid rgba(0, 0, 0, 0);
  transition: border-bottom 0.2s;

  &[data-selected="true"] {
    border-bottom: 4px solid darkblue;
  }
  &[data-selected="false"]:hover {
    border-bottom: 4px solid lightskyblue;
  }
`;

const ItemTitle = styled.div`
  font-size: 1.2rem;
`;

const ItemSubTitle = styled.div`
  font-size: 0.9rem;
`;
