import type { NextPage } from "next";
import Head from "next/head";

import Github from "../components/Cards/Github";
import HeroParagraph from "../components/HeroParagraph";
import HeroSection from "../components/HeroSection";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ted2xmen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection title="Tuğrul Erdem Dogru" />
      <HeroParagraph />
      <Github />
    </>
  );
};

export default Home;
