import { FaLocationArrow } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa";

const Contact = () => (
    <section id="contact">
        <div className="section-heading page-heading column">
            <h2 className="section-title">Get in Touch</h2>
            <div className="animated-bar"></div>
        </div>
        <div className="contact-section single-section">
            <div className="row">
                <div className="two-thirds column">
                    <form className="contact-form" id="contact-form"
                        action="#">
                        <h4 className="content-title">Message Me</h4>
                        <div className="row">
                            <div className="group">
                                <div className="one-half column">
                                    <div className="form-group gap"><input className="form-control" id="contact-name" type="text"
                                        name="name" placeholder="Name" required="" /></div>
                                </div>
                                <div className="one-half column">
                                    <div className="form-group gap c-email"><input className="form-control" id="contact-email"
                                        type="email" name="email" placeholder="Email" required="" /></div>
                                </div>
                            </div>
                            <div className="column form-group nomargin"><input className="form-control" id="contact-subject" type="text"
                                name="subject" placeholder="Subject" autoComplete="off" required="" /></div>
                            <div className="column form-group form-message nomargin"><textarea className="form-control" id="contact-message"
                                name="message" placeholder="Message" rows="5" required=""></textarea></div>
                            <div className="column form-submit nomargin"><button className="btn button-main button-scheme" id="contact-submit"
                                type="submit">Send Message</button>
                                <p className="contact-feedback"></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="one-third column">
                    <div className="contact-info">
                        <h4 className="content-title">Contact Info</h4>
                        <ul className="list-unstyled list-info">
                            <li className="nomargin">
                                <div className="media align-items-center"><span className="info-icon"><FaUser></FaUser></span>
                                    <div className="media-body info-details">
                                        <h6 className="info-type">Name</h6><span className="info-value">Abhishek Pandey</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media align-items-center"><span className="info-icon"><FaLocationArrow></FaLocationArrow></span>
                                    <div className="media-body info-details">
                                        <h6 className="info-type">Location</h6><span className="info-value">Banasthali, Kathmandu, Nepal</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media align-items-center"><span className="info-icon"><FaPhone></FaPhone></span>
                                    <div className="media-body info-details">
                                        <h6 className="info-type">Call Me</h6><span className="info-value"><a href="tel:+9779861215345">+977
                                            9861215345</a></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media align-items-center"><span className="info-icon"><FaEnvelope></FaEnvelope></span>
                                    <div className="media-body info-details">
                                        <h6 className="info-type">Email Me</h6><span className="info-value"><a
                                            href="mailto:emailabhishekp@gmail.com">emailabhishekp@gmail.com</a></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>



);

export default Contact;