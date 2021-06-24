import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { HomeArticle } from "../article/Article";
import { getHomeArticle, noteMap, NoteMap } from "../article/ArticleLoader";

const ArticleElement = dynamic(() => import("../layout/ArticleElement"));

interface Props {
  noteMap: NoteMap;
  article: HomeArticle;
}

export default function Home({ article, noteMap }: Props) {
  return <ArticleElement header="科学の旅" noteMap={noteMap} content={article.content} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { noteMap, article: getHomeArticle() },
});
