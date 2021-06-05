import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Section } from "../../../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../../../article/ArticleLoader";
import ArticleElement from "../../../../layout/ArticleElement";

interface Props {
  bookName: string;
  unitName: string;
  unitTitle: string;
  section: Section;
  noteMap: NoteMap;
}

export default function BookPage({ bookName, unitName, unitTitle, section, noteMap }: Props) {
  return (
    <ArticleElement
      bookName={bookName}
      unitName={unitName}
      title={section.metadata.title + " - " + unitTitle}
      description={section.metadata.description}
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
    unitName: params.unit as string,
    unitTitle: getNoteArticle(params.book as string, params.unit as string).metadata.title,
    section: getNoteArticle(params.book as string, params.unit as string, params.section as string),
  },
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: noteMap.books.flatMap((b) =>
      b.units.flatMap((c) => c.sections.map((s) => ({ params: { book: b.name, unit: c.name, section: s.name } })))
    ),
    fallback: false,
  };
};
