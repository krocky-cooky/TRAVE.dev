import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Open+Sans&family=Zen+Maru+Gothic:wght@500;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Zen+Maru+Gothic:wght@500;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+2&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+2&family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
