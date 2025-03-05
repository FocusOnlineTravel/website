import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Focus Online</title>
      </Head>
      <main>{children}</main>
    </>
  );
}