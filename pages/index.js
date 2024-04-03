// /pages/index.js

import Head from "next/head";
import Header from "../src/components/Header";
import About from "/src/components/About";
import Contact from "/src/components/Contact";
import Footer from "/src/components/Footer";
import Layout from "/src/components/Layout";
import Portfolio from "/src/components/Portfolio";
import Resume from "/src/components/Resume";
import Skills from "/src/components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek&apos;s Portfolio</title>
      </Head>
      <Layout>
        <Header />
        <About> </About>
        <Resume> </Resume>
        <Skills> </Skills>
        <Portfolio> </Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </Layout>
    </>
  );
}
