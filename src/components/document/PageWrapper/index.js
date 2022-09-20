import Head from "next/head";

export default function PageWrapper({ children, title = "Timothy M. Tse" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}