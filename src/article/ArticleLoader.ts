import fs from "fs";
import {
  Article,
  ArticleMetadata,
  BookMetadata,
  CategoryMetadata,
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
  category?: string,
  section?: string,
  note?: string
): Article<T> => {
  const array = [book, category, section].filter((p) => p);
  return {
    name: array[array.length - 1],
    ...getMarkdown<T>(...array, note ? `${note}.md` : `${indexMd}`),
  };
};

export interface NoteMap {
  books: (Omit<BookMetadata, "categories"> & {
    name: string;
    categories: (Omit<CategoryMetadata, "sections"> & {
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
        categories:
          bookMetadata.categories?.reduce((categories, categoryName) => {
            const categoryMetadata = getNoteArticle<CategoryMetadata>(bookName, categoryName).metadata;
            categories.push({
              ...categoryMetadata,
              name: categoryName,
              sections:
                categoryMetadata.sections?.reduce((sections, sectionName) => {
                  const sectionMetadata = getNoteArticle<SectionMetadata>(bookName, categoryName, sectionName).metadata;
                  sections.push({
                    ...sectionMetadata,
                    name: sectionName,
                    notes:
                      sectionMetadata.notes?.reduce((notes, noteName) => {
                        const noteMetadata = getNoteArticle<NoteMetadata>(bookName, categoryName, sectionName, noteName)
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
            return categories;
          }, []) ?? [],
      });
      return books;
    }, []),
  };
};

export const noteMap = getNoteMap();
