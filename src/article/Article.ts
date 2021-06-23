import matter from "gray-matter";

export interface MarkdownMetadata {
  title: string;
  description: string;
  draft?: boolean;
}

export interface ArticleMetadata extends MarkdownMetadata {
  name: string;
}

export interface Article<T extends MarkdownMetadata> {
  name: string;
  metadata: T;
  content: string;
}

export const fromMarkdown = <T extends MarkdownMetadata>(markdown: string): { metadata: T; content: string } => {
  const parsed = matter(markdown);
  return { metadata: parsed.data as T, content: parsed.content };
};

export type HomeArticle = Article<HomeMarkdownMetadata>;
export interface HomeMarkdownMetadata extends MarkdownMetadata {
  books: string[];
}
export interface HomeArticleMetadata extends ArticleMetadata {
  books: BookArticleMetadata[];
}

export type Book = Article<BookMarkdownMetadata>;
export interface BookMarkdownMetadata extends MarkdownMetadata {
  subTitle: string;
  units?: string[];
}
export interface BookArticleMetadata extends ArticleMetadata {
  subTitle: string;
  units?: UnitArticleMetadata[];
}

export type Unit = Article<UnitMarkdownMetadata>;
export interface UnitMarkdownMetadata extends MarkdownMetadata {
  icon: string;
  sections?: string[];
}
export interface UnitArticleMetadata extends ArticleMetadata {
  icon: string;
  sections?: SectionArticleMetadata[];
}

export type Section = Article<SectionMarkdownMetadata>;
export interface SectionMarkdownMetadata extends MarkdownMetadata {
  notes?: string[];
}
export interface SectionArticleMetadata extends ArticleMetadata {
  notes?: NoteArticleMetadata[];
}

export interface Note extends Article<NoteMarkdownMetadata> {}
export interface NoteMarkdownMetadata extends MarkdownMetadata {}
export interface NoteArticleMetadata extends ArticleMetadata {}
