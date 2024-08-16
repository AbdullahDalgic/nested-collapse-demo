import Head from "next/head";
import dynamic from "next/dynamic";

const HomePageComponent = dynamic(() => import("@/components/pages/home"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Nested Collapse Documentation</title>
        <meta name="description" content="Nested Collapse Documentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageComponent />
    </>
  );
}
