import fs from "fs";
import {
  Article,
  ArticleMetadata,
  BookMetadata,
  UnitMetadata,
  fromMarkdown,
  HomeArticle,
  NoteMetadata,
  SectionMetadata,
} from "./Article";

const getMarkdown = <T extends ArticleMetadata>(...path: string[]) =>
  fromMarkdown<T>(fs.readFileSync("./articles/" + path.join("/")).toString());

export const getHomeArticle = (): HomeArticle => ({
  name: "home",
  ...getMarkdown("index.md"),
});

const indexMd = "index.md";
export const getNoteArticle = <T extends ArticleMetadata>(
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
  books: (Omit<BookMetadata, "units"> & {
    name: string;
    units: (Omit<UnitMetadata, "sections"> & {
      name: string;
      sections: (Omit<SectionMetadata, "notes"> & {
        name: string;
        notes: (NoteMetadata & { name: string })[];
      })[];
    })[];
  })[];
}

//TODO: 難しすぎる
const getNoteMap = (): NoteMap => {
  const home = getHomeArticle();
  return {
    books: home.metadata.books.reduce((books, bookName) => {
      const bookMetadata = getNoteArticle<BookMetadata>(bookName).metadata;
      books.push({
        ...bookMetadata,
        name: bookName,
        units:
          bookMetadata.units?.reduce((units, unitName) => {
            const unitMetadata = getNoteArticle<UnitMetadata>(bookName, unitName).metadata;
            units.push({
              ...unitMetadata,
              name: unitName,
              sections:
                unitMetadata.sections?.reduce((sections, sectionName) => {
                  const sectionMetadata = getNoteArticle<SectionMetadata>(bookName, unitName, sectionName).metadata;
                  sections.push({
                    ...sectionMetadata,
                    name: sectionName,
                    notes:
                      sectionMetadata.notes?.reduce((notes, noteName) => {
                        const noteMetadata = getNoteArticle<NoteMetadata>(bookName, unitName, sectionName, noteName)
                          .metadata;
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
