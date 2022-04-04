// /pages/index.js

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Abhishek&apos;s Portfolio</title>
            </Head>
            <Layout>
                <Landing> </Landing>
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
