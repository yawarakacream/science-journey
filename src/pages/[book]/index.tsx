import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import { Book, UnitArticleMetadata, UnitMarkdownMetadata } from "../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../article/ArticleLoader";
import FontAwesome from "../../components/FontAwesome";
import ArticleElement from "../../layout/ArticleElement";

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
      additionalContent={<UnitList units={noteMap.books.find((b) => b.name === book.name).units} />}
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

function UnitList({ units }: { units: UnitArticleMetadata[] }) {
  return (
    <>
      {units.map((u, i) => (
        <UnitContainer key={i}>
          <UnitTitle>
            <FontAwesome type={u.icon} fixed={true} style={{ fontSize: 20, marginRight: 4 }} />
            {u.title}
          </UnitTitle>
          <UnitDescription>{u.description}</UnitDescription>
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
  font: 20px sans-serif;
  margin: 24px 0 8px;
`;

const UnitDescription = styled.p`
  margin: 0 0 0 28px;
  @media (max-width: 600px) {
    margin: 0;
    font-size: 0.85rem;
  }
`;
