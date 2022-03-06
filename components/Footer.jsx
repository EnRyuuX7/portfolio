import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";

const Footer = () => (
    <section id="footer">
        <footer>
            <div className="container">
                <div className="one-half column">

                    <ul className="footer-social">
                        <li><a href="https://www.linkedin.com/in/abhishek-pandey-52ab84170/"><FaLinkedin></FaLinkedin></a></li>
                        <li><a href="mailto:emailabhishekp@gmail.com"><FaEnvelope></FaEnvelope></a></li>
                        <li><a href="https://www.deviantart.com/en-ryuu"><FaDeviantart></FaDeviantart></a></li>
                        <li><a href="https://www.instagram.com/_en_ryuu/"><FaInstagram></FaInstagram></a></li>
                    </ul>

                </div>

                <div className="one-half column">
                    <div className="copyright">
                        <span>Made by Abhishek Pandey</span>
                    </div>
                </div>

                {/* <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><FaArrowUp></FaArrowUp></a>
                </div> */}
            </div>
        </footer>
    </section>
);

export default Footer;