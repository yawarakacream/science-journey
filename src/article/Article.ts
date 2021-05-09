import matter from "gray-matter";

export interface ArticleMetadata {
  title: string;
  description: string;
}

export interface Article<T extends ArticleMetadata> {
  name: string;
  metadata: T;
  content: string;
}

export const fromMarkdown = <T extends ArticleMetadata>(markdown: string): { metadata: T; content: string } => {
  const parsed = matter(markdown);
  return { metadata: parsed.data as T, content: parsed.content };
};

export type HomeArticle = Article<HomeArticleMetadata>;
export interface HomeArticleMetadata extends ArticleMetadata {
  books: string[];
}

export type Book = Article<BookMetadata>;
export interface BookMetadata extends ArticleMetadata {
  subTitle: string;
  units?: string[];
}

export type Unit = Article<UnitMetadata>;
export interface UnitMetadata extends ArticleMetadata {
  icon: string;
  sections?: string[];
}

export type Section = Article<SectionMetadata>;
export interface SectionMetadata extends ArticleMetadata {
  notes?: string[];
}

export interface Note extends Article<NoteMetadata> {}
export interface NoteMetadata extends ArticleMetadata {}
