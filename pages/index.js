// /pages/index.js

import Header from "/src/components/Header";
import Layout from "/src/components/Layout";
import About from "/src/components/About";
import Resume from "/src/components/Resume";
import Skills from "/src/components/Skills";
import Portfolio from "/src/components/Portfolio";
import Contact from "/src/components/Contact";
import Footer from "/src/components/Footer";
import Head from "next/head";

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
