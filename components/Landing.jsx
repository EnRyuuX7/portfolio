import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Landing = () => (
    <section id='landing'>
        <div className="row">
            <div className="container">
                <div className="title"><span>Abhishek Pandey</span><span>UI/UX Designer and<a className="p-link" target="_blank" href="https://enryuux7.github.io">Web Developer</a></span></div>
            </div>
            <div className="container">
                <ul className="intro-social">
                    <li><a href="https://www.linkedin.com/in/abhishek-pandey-52ab84170/"><FaLinkedin></FaLinkedin></a></li>
                    <li><a href="mailto:emailabhishekp@gmail.com"><FaEnvelope></FaEnvelope></a></li>
                    <li><a href="https://www.deviantart.com/en-ryuu"><FaDeviantart></FaDeviantart></a></li>
                    <li><a href="https://www.instagram.com/_en_ryuu/"><FaInstagram></FaInstagram></a></li>
                    {/* <li><a href="#"><FaLinkedin></FaLinkedin></a></li> */}
                </ul>
            </div>
        </div>
    </section >
);

export default Landing;