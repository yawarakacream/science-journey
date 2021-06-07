import React from "react";
import styled from "styled-components";
import { NoteMap } from "../article/ArticleLoader";
import Anchor from "../components/Anchor";
import FontAwesome from "../components/FontAwesome";

interface Props {
  noteMap: NoteMap;
  bookName: string;
  unitName: string;
}

export default function Explorer({ noteMap, bookName, unitName }: Props) {
  const book = noteMap.books.find((b) => b.name === bookName);
  return (
    !!book?.units && (
      <Container>
        {book.units.map((u, i) => (
          <UnitContainer key={i} visible={!unitName || u.name === unitName}>
            <UnitData>
              <FontAwesome type={u.icon} fixed={true} style={{ fontSize: height - 8, marginRight: 4, padding: 4 }} />
              <UnitTitle>
                {u.title}
                {u.draft && "*"}
              </UnitTitle>
            </UnitData>
            {!!u.sections &&
              u.sections.map((s, i) => (
                <SectionContainer key={i}>
                  <SectionTitle href={`/${bookName}/${u.name}/${s.name}`}>
                    {s.title}
                    {s.draft && "*"}
                  </SectionTitle>
                  {!!s.notes &&
                    s.notes.map((n, i) => (
                      <PageContainer key={i}>
                        <Anchor href={`/${bookName}/${u.name}/${s.name}/${n.name}`}>
                          {n.title}
                          {n.draft && "*"}
                        </Anchor>
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

const Container = styled.nav`
  grid-area: explorer;
  display: flex;
  flex-direction: column;
  padding: 8px;

  @media (max-width: 1024px) {
    border-top: 2px dotted black;
  }
`;

const UnitContainer = styled.div<{ visible: boolean }>`
  padding: 8px 0;
  border-bottom: 2px lightsteelblue dotted;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1000px) {
    border-bottom: 2px lightsteelblue dotted;
    display: ${(p) => (p.visible ? "block" : "none")};
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
