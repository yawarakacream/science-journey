import { NextApiRequest, NextApiResponse } from "next";
import { noteMap } from "../../article/ArticleLoader";

type SitemapUrl = { loc: string };

class SitemapBuilder {
  readonly urls: SitemapUrl[] = [];

  add(url: SitemapUrl) {
    this.urls.push(url);
  }

  build() {
    return `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${this.urls.map((u) => `<url><loc>https://science-journey.net${u.loc}</loc></url>`.trim()).join("")}
      </urlset>
    `.trim();
  }
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const builder = new SitemapBuilder();
  noteMap.books.forEach((b) => {
    builder.add({ loc: `/${b.name}` });
    b.units.forEach((u) => {
      u.sections.forEach((s) => {
        builder.add({ loc: `/${b.name}/${u.name}/${s.name}` });
        s.notes.forEach((n) => builder.add({ loc: `/${b.name}/${u.name}/${s.name}/${n.name}` }));
      });
    });
  });

  res.setHeader("Content-Type", "application/xml");
  res.end(builder.build());
};
