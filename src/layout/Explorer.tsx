import React, { useState } from "react";
import styled from "styled-components";
import { UnitArticleMetadata } from "../article/Article";
import { NoteMap } from "../article/ArticleLoader";
import Anchor from "../components/Anchor";
import FontAwesome from "../components/FontAwesome";

interface ExplorerProps {
  noteMap: NoteMap;
  bookName: string;
  unitName?: string;
}

export default function Explorer({ noteMap, bookName, unitName }: ExplorerProps) {
  const book = noteMap.books.find((b) => b.name === bookName);
  return (
    !!book?.units && (
      <Container>
        {book.units.map((u, i) => (
          <Unit key={i} bookName={bookName} unit={u} openDefault={u.name === unitName} />
        ))}
      </Container>
    )
  );
}

interface UnitProps {
  bookName: string;
  unit: UnitArticleMetadata;
  openDefault: boolean;
}

function Unit({ bookName, unit, openDefault }: UnitProps) {
  const [open, setOpen] = useState(openDefault);
  return (
    <UnitContainer>
      <UnitData onClick={() => setOpen(!open)}>
        <FontAwesome
          type={open ? "minus" : "plus"}
          fixed={true}
          style={{ fontSize: height - 8, marginRight: 4, padding: 4 }}
        />
        <UnitTitle>
          {unit.title}
          {unit.draft && "*"}
        </UnitTitle>
      </UnitData>
      {open &&
        !!unit.sections &&
        unit.sections.map((s, i) => (
          <SectionContainer key={i}>
            {s.notes?.length ? (
              <span>{s.title}</span>
            ) : (
              <Anchor href={`/${bookName}/${unit.name}/${s.name}`}>
                {s.title}
                {s.draft && "*"}
              </Anchor>
            )}

            {!!s.notes &&
              s.notes.map((n, i) => (
                <PageContainer key={i}>
                  <Anchor href={`/${bookName}/${unit.name}/${s.name}/${n.name}`}>
                    {n.title}
                    {n.draft && "*"}
                  </Anchor>
                </PageContainer>
              ))}
          </SectionContainer>
        ))}
    </UnitContainer>
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
  cursor: pointer;

  &:hover {
    color: slateblue;
    transition: color 0.2s;
  }
`;
const UnitTitle = styled.div`
  padding: 0;
  margin: 0;
  height: ${height}px;
  font-size: ${fontSize}px;
`;

const SectionContainer = styled.div`
  margin-left: ${fontSize * 2}px;
  font-size: ${fontSize}px;
`;

const PageContainer = styled.div`
  margin-left: ${fontSize}px;
  font-size: ${fontSize}px;
`;
