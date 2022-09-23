import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=optional"
          rel="stylesheet"
        />
        <link href="./byzantine.svg" rel="shortcut icon" />
        {/* <link href="/static/favicons/site.webmanifest" rel="manifest" /> */}

        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
      </Head>
      <body className="text-white bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
