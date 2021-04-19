import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Louis Lecs";
export const siteTitle = "Next.js Fisrt Trial";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jo</title>
      </Head>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
