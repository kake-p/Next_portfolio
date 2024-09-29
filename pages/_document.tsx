// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200&display=optional" />
        </Head>
        <body className="font-garamond">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;