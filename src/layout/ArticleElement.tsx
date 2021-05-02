import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Explorer from "./Explorer";
import { NoteMap } from "../article/ArticleLoader";
import Markdown from "../components/Markdown";
import katex from "katex";

export interface Page {
  header: string | undefined;
  title?: string | undefined;
  noteMap: NoteMap;
  bookName?: string;
  content: string;
}

export default function ArticleElement({ title, header, noteMap, bookName, content }: Page) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="理系大学生による高校大学の数学・計算機科学の備忘録です。" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"></link>
        <link rel="stylesheet" type="text/css" href="/style.css" />

        <title>{title ? `${title} | 科学の旅` : "科学の旅 - 理系大学生の備忘録"}</title>
      </Head>

      <Body>
        <Header noteMap={noteMap} />
        {bookName && <Explorer noteMap={noteMap} bookName={bookName} />}
        <Main>
          {header && (
            <TitleHeader
              dangerouslySetInnerHTML={{ __html: katex.renderToString(header, { strict: false }) }}
            ></TitleHeader>
          )}
          <Markdown children={content} />
        </Main>
        <Footer />
      </Body>
    </>
  );
}

const Body = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-row-gap: 8px;
  grid-template-areas:
    "header   header header"
    "explorer main   .  "
    ".        footer .     ";
  grid-template-rows: 128px 1fr 24px;
  grid-template-columns: 24% 52% 24%;
`;

const Main = styled.main`
  grid-area: main;
  padding: 8px 16px;
  border-left: 1px lightgray solid;
  border-right: 1px lightgray solid;
`;

const TitleHeader = styled.h2`
  margin: 0 0 8px;
  font-size: 32px;
  border-bottom: 4px lightgreen solid;
`;
