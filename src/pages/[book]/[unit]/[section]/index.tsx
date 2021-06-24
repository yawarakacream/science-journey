import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { Section } from "../../../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../../../article/ArticleLoader";

const ArticleElement = dynamic(() => import("../../../../layout/ArticleElement"));

interface Props {
  bookName: string;
  unitName: string;
  unitTitle: string;
  section: Section;
  noteMap: NoteMap;
}

export default function SectionPage({ bookName, unitName, unitTitle, section, noteMap }: Props) {
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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: noteMap.books.flatMap((b) =>
    b.units.flatMap((c) =>
      c.sections
        .filter((s) => !s.notes?.length)
        .map((s) => ({ params: { book: b.name, unit: c.name, section: s.name } }))
    )
  ),
  fallback: false,
});
