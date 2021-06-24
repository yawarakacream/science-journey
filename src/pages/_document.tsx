import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {process.env.NODE_ENV === "production" && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-FK8E6HH56L"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FK8E6HH56L');
              `,
                }}
              />
            </>
          )}
        </Head>
        <body style={{ padding: 0, margin: 0, overflowY: "scroll" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
