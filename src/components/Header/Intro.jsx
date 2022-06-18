import styles from './Intro.module.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Intro = () => (
    <section id={styles.intro}>
        <div className="row">
            <div className="container">
                <div className={styles.intro__title}><span>Abhishek Pandey</span><span>UI/UX Designer and<a className="intro__gitLink" target="_blank" rel="noreferrer" href="https://en-ryuu.github.io">Web Developer</a></span></div>
            </div>
            <div className="container">
                <ul className={styles.intro__social}>
                    <li><a href="https://www.github.com/en-ryuu"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/abhishek-pandey-52ab84170/"><FaLinkedin /></a></li>
                    <li><a href="mailto:emailabhishekp@gmail.com"><FaEnvelope /></a></li>
                    <li><a href="https://www.deviantart.com/en-ryuu"><FaDeviantart /></a></li>
                    <li><a href="https://www.instagram.com/_en_ryuu/"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    </section >
);

export default Intro;