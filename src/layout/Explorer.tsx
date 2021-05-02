import React from "react";
import styled from "styled-components";
import { NoteMap } from "../article/ArticleLoader";
import Anchor from "../components/Anchor";
import FontAwesome from "../components/FontAwesome";
interface Props {
  noteMap: NoteMap;
  bookName: string;
}

export default function Explorer({ noteMap, bookName }: Props) {
  const book = noteMap.books.find((b) => b.name === bookName);
  return (
    !!book?.categories && (
      <Container>
        {book.categories.map((c, i) => (
          <CategoryContainer key={i}>
            <CategoryData>
              <FontAwesome type={c.icon} fixed={true} style={{ fontSize: height - 8, marginRight: 4, padding: 4 }} />
              <CategoryTitle>{c.title}</CategoryTitle>
            </CategoryData>
            {!!c.sections &&
              c.sections.map((s, i) => (
                <SectionContainer key={i}>
                  <SectionTitle href={`/${bookName}/${c.name}/${s.name}`}>{s.title}</SectionTitle>
                  {!!s.notes &&
                    s.notes.map((n, i) => (
                      <PageContainer key={i}>
                        <Anchor href={`/${bookName}/${c.name}/${s.name}/${n.name}`}>{n.title}</Anchor>
                      </PageContainer>
                    ))}
                </SectionContainer>
              ))}
          </CategoryContainer>
        ))}
      </Container>
    )
  );
}

const height = 24;
const fontSize = height - 8;

const Container = styled.div`
  grid-area: explorer;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const CategoryContainer = styled.div`
  padding: 8px 0;
  border-bottom: 2px lightsteelblue dotted;
`;

const CategoryData = styled.div`
  display: flex;
  flex-direction: row;
`;
const CategoryTitle = styled.div`
  padding: 0;
  margin: 0;
  height: ${height}px;
  font-size: ${fontSize}px;
`;

const SectionContainer = styled.div`
  margin-left: ${fontSize * 2}px;
`;
const SectionTitle = styled(Anchor)`
  font-size: ${fontSize}px;
`;

const PageContainer = styled.div`
  margin-left: ${fontSize}px;
  font-size: ${fontSize}px;
`;
