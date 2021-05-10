import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Explorer from "./Explorer";
import { NoteMap } from "../article/ArticleLoader";
import Markdown from "../components/Markdown";
import katex from "katex";
import Navigator from "./Navigator";

export interface Page {
  header: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  noteMap: NoteMap;
  bookName?: string;
  content: string;
}

export default function ArticleElement({ title, description, header, noteMap, bookName, content }: Page) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={
            description ??
            "理系大学生の数学・計算機科学の備忘録です。厳密にかつ行間を埋め、やさしく数学や計算機科学を考えていきます。"
          }
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css" />
        <link rel="stylesheet" type="text/css" href="/style.css" />

        <title>{title ? `${title} | 科学の旅` : "科学の旅 - 理系大学生の備忘録"}</title>
      </Head>

      <Root>
        <Header />
        <Body>
          <Navigator noteMap={noteMap} />
          {bookName && <Explorer noteMap={noteMap} bookName={bookName} />}
          <Main>
            {header && (
              <TitleHeader dangerouslySetInnerHTML={{ __html: katex.renderToString(header, { strict: false }) }} />
            )}
            <Markdown children={content} />
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
  margin: 8px 0;
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
  font-size: 32px;
  border-bottom: 4px lightgreen solid;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
