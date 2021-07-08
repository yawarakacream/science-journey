import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";
import {
  BookArticleMetadata,
  HomeArticle,
  NoteArticleMetadata,
  SectionArticleMetadata,
  UnitArticleMetadata,
} from "../article/Article";
import { getHomeArticle, noteMap, NoteMap } from "../article/ArticleLoader";
import Anchor from "../components/Anchor";
import FontAwesome from "../components/FontAwesome";

const ArticleElement = dynamic(() => import("../layout/ArticleElement"));

interface Props {
  noteMap: NoteMap;
  article: HomeArticle;
}

export default function Home({ article, noteMap }: Props) {
  return (
    <ArticleElement
      header="科学の旅"
      noteMap={noteMap}
      content={article.content}
      additionalContent={
        <>
          {noteMap.books.map((b, i) => (
            <Book key={i} book={b} />
          ))}
        </>
      }
    />
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { noteMap, article: getHomeArticle() },
});

function Book({ book }: { book: BookArticleMetadata }) {
  return (
    <BookContainer>
      <BookTitle>{book.title}</BookTitle>
      {book.units.map((u, i) => (
        <Unit key={i} bookName={book.name} unit={u} />
      ))}
    </BookContainer>
  );
}

const BookContainer = styled.div`
  margin: 4px 0;
`;

const BookTitle = styled.h1`
  font-size: 24px;
  font-weight: normal;
  border-bottom: solid 4px lightblue;

  @media (max-width: 600px) {
    margin-top: 16px;
    font-size: 20px;
  }
`;

function Unit({ bookName, unit }: { bookName: string; unit: UnitArticleMetadata }) {
  return (
    <UnitContainer>
      <UnitTitle>
        <FontAwesome type={unit.icon} fixed={true} style={{ fontSize: 20, marginRight: 4 }} />
        {unit.title}
      </UnitTitle>
      <UnitContent>
        {unit.sections.map((s, i) => (
          <Section key={i} bookName={bookName} unitName={unit.name} section={s} />
        ))}
      </UnitContent>
    </UnitContainer>
  );
}

const UnitContainer = styled.div``;

const UnitTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 16px;
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
          <Anchor href={`${bookName}/${unitName}/${section.name}`}>{section.title}</Anchor>
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
        <Anchor href={`${bookName}/${unitName}/${sectionName}/${note.name}`}>{note.title}</Anchor>
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
