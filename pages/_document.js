import { useTheme } from 'hooks/useTheme';

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const { fontUrl } = useTheme();

  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href={fontUrl} rel="stylesheet" />
        <meta author="Timothy Tse" />
        <meta description="Personal webstie for senior software engineer Timothy Tse based in the New Jersey/New York area" />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}