import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { Note } from "../../../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../../../article/ArticleLoader";

const ArticleElement = dynamic(() => import("../../../../layout/ArticleElement"));

interface Props {
  bookName: string;
  unitName: string;
  unitTitle: string;
  note: Note;
  noteMap: NoteMap;
}

export default function NotePage({ bookName, unitName, unitTitle, note, noteMap }: Props) {
  return (
    <ArticleElement
      bookName={bookName}
      unitName={unitName}
      title={`${note.metadata.title} - ${unitTitle}`}
      description={note.metadata.description}
      header={note.metadata.title}
      content={note.content}
      noteMap={noteMap}
    />
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    noteMap,
    bookName: params.book as string,
    unitName: params.unit as string,
    unitTitle: noteMap.books.find((b) => b.name === params.book).units.find((u) => u.name === params.unit).title,
    note: getNoteArticle(params.book as string, params.unit as string, params.section as string, params.note as string),
  },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: noteMap.books.flatMap((b) =>
    b.units.flatMap((c) =>
      c.sections.flatMap((s) =>
        s.notes.map((n) => ({ params: { book: b.name, unit: c.name, section: s.name, note: n.name } }))
      )
    )
  ),
  fallback: false,
});
