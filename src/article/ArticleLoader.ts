import fs from "fs";
import {
  Article,
  MarkdownMetadata,
  BookMarkdownMetadata,
  UnitMarkdownMetadata,
  fromMarkdown,
  HomeArticle,
  NoteMarkdownMetadata,
  SectionMarkdownMetadata,
  BookArticleMetadata,
} from "./Article";

const getMarkdown = <T extends MarkdownMetadata>(...path: string[]) =>
  fromMarkdown<T>(fs.readFileSync("./articles/" + path.join("/")).toString());

export const getHomeArticle = (): HomeArticle => ({
  name: "home",
  ...getMarkdown("index.md"),
});

const indexMd = "index.md";
export const getNoteArticle = <T extends MarkdownMetadata>(
  book?: string,
  unit?: string,
  section?: string,
  note?: string
): Article<T> => {
  const array = [book, unit, section].filter((p) => p);
  return {
    name: array[array.length - 1],
    ...getMarkdown<T>(...array, note ? `${note}.md` : `${indexMd}`),
  };
};

export interface NoteMap {
  books: BookArticleMetadata[];
}

//TODO: 難しすぎる
const getNoteMap = (): NoteMap => {
  const home = getHomeArticle();
  return {
    books: home.metadata.books.reduce((books, bookName) => {
      const bookMetadata = getNoteArticle<BookMarkdownMetadata>(bookName).metadata;
      books.push({
        ...bookMetadata,
        name: bookName,
        units:
          bookMetadata.units?.reduce((units, unitName) => {
            const unitMetadata = getNoteArticle<UnitMarkdownMetadata>(bookName, unitName).metadata;
            units.push({
              ...unitMetadata,
              name: unitName,
              sections:
                unitMetadata.sections?.reduce((sections, sectionName) => {
                  const sectionMetadata = getNoteArticle<SectionMarkdownMetadata>(
                    bookName,
                    unitName,
                    sectionName
                  ).metadata;
                  sections.push({
                    ...sectionMetadata,
                    name: sectionName,
                    notes:
                      sectionMetadata.notes?.reduce((notes, noteName) => {
                        const noteMetadata = getNoteArticle<NoteMarkdownMetadata>(
                          bookName,
                          unitName,
                          sectionName,
                          noteName
                        ).metadata;
                        notes.push({
                          ...noteMetadata,
                          name: noteName,
                        });
                        return notes;
                      }, []) ?? [],
                  });
                  return sections;
                }, []) ?? [],
            });
            return units;
          }, []) ?? [],
      });
      return books;
    }, []),
  };
};

export const noteMap = getNoteMap();
