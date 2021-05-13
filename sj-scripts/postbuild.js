/**
 * Science Journey postbuild script
 *
 * sitemap.xml を作成する
 */

const fs = require("fs");

class SitemapBuilder {
  urls = [];

  add(url) {
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

const builder = new SitemapBuilder();

const addHtmls = (dir) => {
  fs.readdirSync(dir)
    .filter((f) => !f.includes("_next") && (!f.includes(".") || f.endsWith(".html")) && f !== "404.html")
    .map((f) => dir + "/" + f)
    .forEach((f) => {
      if (fs.lstatSync(f).isDirectory()) {
        addHtmls(f);
      } else {
        builder.add({ loc: f.substr("./out".length) });
      }
    });
};
addHtmls("./out");

fs.writeFileSync("./public/sitemap.xml", builder.build());
