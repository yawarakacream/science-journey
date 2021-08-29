import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import { Book, NoteArticleMetadata, SectionArticleMetadata, UnitArticleMetadata } from "../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../article/ArticleLoader";
import Anchor from "../../components/Anchor";
import FontAwesome from "../../components/FontAwesome";

const ArticleElement = dynamic(() => import("../../layout/ArticleElement"));

interface Props {
  book: Book;
  noteMap: NoteMap;
}

export default function BookPage({ book, noteMap }: Props) {
  return (
    <ArticleElement
      bookName={book.name}
      title={book.metadata.title}
      description={book.metadata.description}
      header={book.metadata.title}
      noteMap={noteMap}
      content={book.content}
      additionalContent={
        <UnitList bookName={book.name} units={noteMap.books.find((b) => b.name === book.name).units} />
      }
    />
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { noteMap, book: getNoteArticle(params.book as string) },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: noteMap.books.map((b) => ({ params: { book: b.name } })),
  fallback: false,
});

function UnitList({ bookName, units }: { bookName: string; units: UnitArticleMetadata[] }) {
  return (
    <>
      {units.map((u, i) => (
        <UnitContainer key={i}>
          <UnitTitle>
            <FontAwesome type={u.icon} fixed={true} style={{ fontSize: 20, marginRight: 2 }} />
            {u.title}
          </UnitTitle>
          <UnitDescription>{u.description}</UnitDescription>
          <UnitContent>
            {u.sections.map((s, i) => (
              <Section key={i} bookName={bookName} unitName={u.name} section={s} />
            ))}
          </UnitContent>
        </UnitContainer>
      ))}
    </>
  );
}

const UnitContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const UnitTitle = styled.h2`
  margin: 24px 0 0;
  font: 20px sans-serif;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const UnitDescription = styled.p`
  margin: 0 0 8px 28px;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const UnitContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`;

function Section({
  bookName,
  unitName,
  section,
}: {
  bookName: string;
  unitName: string;
  section: SectionArticleMetadata;
}) {
  return (
    <SectionContainer>
      <SectionTitle>
        {section.notes?.length ? (
          <>{section.title}</>
        ) : (
          <Anchor href={`/${bookName}/${unitName}/${section.name}`}>
            {section.title}
            {section.draft && "*"}
          </Anchor>
        )}
      </SectionTitle>

      {section.notes.map((n, i) => (
        <Note key={i} bookName={bookName} unitName={unitName} sectionName={section.name} note={n} />
      ))}
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  margin-left: 28px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
`;

function Note({
  bookName,
  unitName,
  sectionName,
  note,
}: {
  bookName: string;
  unitName: string;
  sectionName: string;
  note: NoteArticleMetadata;
}) {
  return (
    <NoteContainer>
      <NoteTitle>
        <Anchor href={`/${bookName}/${unitName}/${sectionName}/${note.name}`}>
          {note.title}
          {note.draft && "*"}
        </Anchor>
      </NoteTitle>
    </NoteContainer>
  );
}

const NoteContainer = styled.div``;

const NoteTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  margin-left: 16px;
`;
