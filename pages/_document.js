import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href={'https://fonts.googleapis.com/css2?family=Play&family=Share+Tech+Mono&display=swap'} rel="stylesheet" />
        <meta author="Timothy Tse" />
        <mets description="Personal webstie for senior software engineer Timothy Tse based in the New Jersey/New York area" />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}