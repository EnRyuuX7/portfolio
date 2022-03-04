// /pages/index.js

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Main from "../components/Main";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <Layout>
            <Landing> </Landing>
            <Main> </Main>
            <Resume> </Resume>
            <Skills> </Skills>
            <Portfolio> </Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </Layout>
    );
}
