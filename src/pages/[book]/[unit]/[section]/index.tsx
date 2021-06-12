import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import { NoteMetadata, Section } from "../../../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../../../article/ArticleLoader";
import Anchor from "../../../../components/Anchor";
import ArticleElement from "../../../../layout/ArticleElement";

interface Props {
  bookName: string;
  unitName: string;
  unitTitle: string;
  section: Section;
  noteMap: NoteMap;
}

export default function BookPage({ bookName, unitName, unitTitle, section, noteMap }: Props) {
  const notes = noteMap.books
    .find((b) => b.name === bookName)
    .units.find((u) => u.name === unitName)
    .sections.find((s) => s.name === section.name)
    .notes?.map((n) => ({ metadata: n, href: `/${bookName}/${unitName}/${section.name}/${n.name}` }));
  return (
    <ArticleElement
      bookName={bookName}
      unitName={unitName}
      title={section.metadata.title + " - " + unitTitle}
      description={section.metadata.description}
      header={section.metadata.title}
      content={section.content}
      additionalContent={
        notes && notes.length > 0 && <NoteList notes={notes} divider={section.content.trim().length > 0} />
      }
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

function NoteList({ notes, divider }: { notes: { metadata: NoteMetadata; href: string }[]; divider: boolean }) {
  return (
    <NoteListContainer divider={divider}>
      {notes.map((n, i) => (
        <NoteContainer key={i}>
          <Anchor href={n.href} underline={false} changeColorIfVisited={false} style={{ color: "darkblue" }}>
            {n.metadata.title}
          </Anchor>
        </NoteContainer>
      ))}
    </NoteListContainer>
  );
}

const NoteListContainer = styled.div<{ divider: boolean }>`
  margin-top: ${({ divider }) => (divider ? 64 : 16)}px;
  padding: 4px;
  border: 2px dashed lightgreen;
  border-radius: 8px;
`;

const NoteContainer = styled.div`
  margin: 4px;
  padding: 0;
  font-size: 18px;
`;
