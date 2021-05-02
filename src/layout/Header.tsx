import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { NoteMap } from "../article/ArticleLoader";
import Anchor from "../components/Anchor";

export default function Header({ noteMap }: { noteMap: NoteMap }) {
  return (
    <Container>
      <Title>科学の旅</Title>
      <Navigation>
        <NavItem title="ホーム" subTitle="Home" path="/" />
        {noteMap.books.map((book, i) => (
          <NavItem key={i} title={book.title} subTitle={book.subTitle} path={"/" + book.name} />
        ))}
      </Navigation>
    </Container>
  );
}

const Container = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: lightblue;
`;

const Title = styled.h1`
  padding: 4px;
  font-size: calc(10vh / 2);
  margin: 0;
  height: calc(40% - 4px * 2);
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

function NavItem({ title, subTitle, path }: { title: string; subTitle: string; path: string }) {
  const currentPath = useRouter().asPath;
  const selected = path === "/" ? currentPath === "/" : currentPath.startsWith(path);
  return (
    <NavItemContainer>
      <NavItemOverlay href={path} data-selected={selected} />
      <NavItemTitle>{title}</NavItemTitle>
      <NavItemSubTitle>{subTitle}</NavItemSubTitle>
    </NavItemContainer>
  );
}

const NavItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 256px;
`;

const NavItemOverlay = styled(Anchor)`
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
    border-bottom: 4px solid rgba(135, 206, 250, 1); /* lightskyblue */
  }
`;

const NavItemTitle = styled.div`
  font-size: 1.2rem;
`;

const NavItemSubTitle = styled.div`
  font-size: 0.9rem;
`;
