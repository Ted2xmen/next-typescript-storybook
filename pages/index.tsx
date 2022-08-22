import type { NextPage } from "next";
import Head from "next/head";

import Lastfm from "../components/Cards/Lastfm";
import ProjectContainer from "../components/containers/ProjectContainer";
import HeroLinks from "../components/Hero/HeroLinks";
import HeroParagraph from "../components/Hero/HeroParagraph";
import HeroSection from "../components/Hero/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ted2xmen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection title="T" />
      {/* <HeroParagraph />
      <HeroLinks /> */}
      <Lastfm />
      <ProjectContainer />
    </>
  );
};

export default Home;
