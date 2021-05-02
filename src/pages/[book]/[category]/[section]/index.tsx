import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Section } from "../../../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../../../article/ArticleLoader";
import ArticleElement from "../../../../layout/ArticleElement";

interface Props {
  bookName: string;
  categoryTitle: string;
  section: Section;
  noteMap: NoteMap;
}

export default function BookPage({ bookName, categoryTitle, section, noteMap }: Props) {
  return (
    <ArticleElement
      bookName={bookName}
      title={section.metadata.title + " - " + categoryTitle}
      header={section.metadata.title}
      content={section.content}
      noteMap={noteMap}
    />
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    noteMap,
    bookName: params.book as string,
    categoryTitle: getNoteArticle(params.book as string, params.category as string).metadata.title,
    section: getNoteArticle(params.book as string, params.category as string, params.section as string),
  },
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: noteMap.books.flatMap((b) =>
      b.categories.flatMap((c) =>
        c.sections.map((s) => ({ params: { book: b.name, category: c.name, section: s.name } }))
      )
    ),
    fallback: false,
  };
};
