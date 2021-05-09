import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Book } from "../../article/Article";
import { getNoteArticle, NoteMap, noteMap } from "../../article/ArticleLoader";
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
      content={book.content}
      noteMap={noteMap}
    />
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { noteMap, book: getNoteArticle(params.book as string) },
});

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: noteMap.books.map((b) => ({ params: { book: b.name } })), fallback: false };
};
