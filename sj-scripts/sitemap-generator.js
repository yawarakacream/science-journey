/**
 * Science Journey sitemap-generator
 *
 * sitemap.xml を作成する
 */

const fs = require("fs");
const { exec } = require("child_process");

class SitemapBuilder {
  urls = [];

  add(url) {
    this.urls.push(url);
  }

  build() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${this.urls.map((u) => `<url><loc>https://science-journey.net${u.loc}</loc></url>`).join("")}
</urlset>`.replace(/\n/g, "");
  }
}

const createSitemap = () => {
  const builder = new SitemapBuilder();
  builder.add({ loc: "" });

  const addHtmls = (dir) => {
    fs.readdirSync(dir)
      .filter((f) => !f.includes("_next") && (!f.includes(".") || f.endsWith(".html")) && f !== "404.html")
      .map((f) => dir + "/" + f)
      .forEach((f) => {
        if (fs.lstatSync(f).isDirectory()) {
          addHtmls(f);
        } else {
          const loc = f.slice("./out".length, -".html".length);
          if (loc === "/index") {
            return;
          }
          builder.add({ loc });
        }
      });
  };

  addHtmls("./out");

  fs.writeFileSync("./public/sitemap.xml", builder.build());
};

const commit = () => {
  exec("git diff --name-only --cached", (_, stdout) => {
    if (stdout.length) {
      throw new Error("Staged files are uncommitted");
    }
    exec("git add ./public/sitemap.xml", () => {
      exec("git commit -m 'Update sitemap.xml (sitemap-generator)'");
    });
  });
};

const main = () => {
  createSitemap();
  commit();
};
main();
