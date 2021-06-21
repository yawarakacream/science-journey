import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { NoteMap } from "../article/ArticleLoader";
import Footer from "./Footer";
import Header from "./Header";
import Explorer from "./Explorer";
import Navigator from "./Navigator";
import dynamic from "next/dynamic";

const Markdown = dynamic(() => import("../components/Markdown"));

export interface Page {
  title?: string | undefined;
  description?: string | undefined;
  header: string;
  noteMap: NoteMap;
  bookName?: string;
  unitName?: string;
  content: string;
  additionalContent?: JSX.Element;
}

export default function ArticleElement({
  title,
  description,
  header,
  noteMap,
  bookName,
  unitName,
  content,
  additionalContent,
}: Page) {
  const displayTitle = title ? `${title} | 科学の旅` : "科学の旅 - 理系大学生の備忘録";
  const displayDescription =
    description ??
    "理系大学生の数学・計算機科学の備忘録です。厳密にかつ行間を埋め、やさしく数学や計算機科学を考えていきます。";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="title" content={displayTitle} />
        <meta name="description" content={displayDescription} />

        <meta property="og:title" content={displayTitle} />
        <meta property="og:site_name" content={displayTitle} />
        <meta property="og:description" content={displayDescription} />
        <meta property="og:type" content={title ? "website" : "article"} />
        <meta property="og:locale" content="ja_JP" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css" />
        <link rel="stylesheet" type="text/css" href="/style.css" />

        <title children={displayTitle} />
      </Head>

      <Root>
        <Header />
        <Body>
          <Navigator noteMap={noteMap} />
          {bookName && <Explorer noteMap={noteMap} bookName={bookName} unitName={unitName} />}
          <Main>
            <TitleHeader>{header}</TitleHeader>
            <Markdown children={content} />
            {additionalContent}
          </Main>
        </Body>
        <Footer />
      </Root>
    </>
  );
}

const Root = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Body = styled.div`
  height: 10vh;
  min-height: 100%;
  flex: 1;
  margin: 0;
  padding: 0;
  display: grid;

  grid-template-areas:
    "navigator navigator navigator"
    "explorer  main      .        ";
  grid-template-rows: 64px 1fr;
  grid-template-columns: 24% 52% 24%;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 100%;
    grid-template-areas:
      "navigator"
      "main     "
      "explorer ";
    grid-template-rows: 64px auto 1fr;
    grid-template-columns: 100%;
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: 100%;
    grid-template-areas:
      "navigator"
      "main     "
      "explorer ";
    grid-template-rows: 32px auto 1fr;
    grid-template-columns: 100%;
  }
`;

const Main = styled.main`
  grid-area: main;
  margin: 0;
  padding: 8px 16px;
  border-left: 1px lightgray solid;
  border-right: 1px lightgray solid;

  @media (max-width: 1024px) {
    border-left: none;
    border-right: none;
  }
`;

const TitleHeader = styled.h1`
  margin: 0 0 8px;
  font: 36px serif;
  border-bottom: 4px lightgreen solid;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
