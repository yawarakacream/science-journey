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
    !!book?.units && (
      <Container>
        {book.units.map((c, i) => (
          <UnitContainer key={i}>
            <UnitData>
              <FontAwesome type={c.icon} fixed={true} style={{ fontSize: height - 8, marginRight: 4, padding: 4 }} />
              <UnitTitle>{c.title}</UnitTitle>
            </UnitData>
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
          </UnitContainer>
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

  @media (max-width: 1024px) {
    border-top: 2px dotted black;
  }
`;

const UnitContainer = styled.div`
  padding: 8px 0;
  border-bottom: 2px lightsteelblue dotted;

  &:last-child {
    border-bottom: none;
  }
`;

const UnitData = styled.div`
  display: flex;
  flex-direction: row;
`;
const UnitTitle = styled.div`
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
