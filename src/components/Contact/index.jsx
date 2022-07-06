import styles from "./Contact.module.scss";

import { FaLocationArrow } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';


const ELink = ({ type, link }) => {
    return (
        <a href={`${type}:${link}`}>{link}</a>
    )
}

const ContactInfo = [
    { icon: <FaUser />, type: "Name", value: "Abhishek Pandey" },
    { icon: <FaLocationArrow />, type: "Location", value: "Banasthali, Kathmandu, Nepal" },
    { icon: <FaPhone />, type: "Call Me", value: <ELink type="tel" link="+9779861215345" /> },
    { icon: <FaEnvelope />, type: "Email Me", value: <ELink type="mailto" link="emailabhishekp@gmail.com" /> }
]

const ContactCards = ({ icon, type, value }) => (
    <li>
        <div className={` ${styles.media} align-items-center`}><span className={styles.info__icon}>{icon}</span>
            <div className={` ${styles.media__body} ${styles.info__details}`}>
                <h6 className={styles.info__type}>{type}</h6><span className="info__value">{value}</span>
            </div>
        </div>
    </li>
);


const Contact = () => (
    <section id="contact" className={styles.contact}>

        <div className="section__heading page__heading column" >
            <h2 className="section__title">Get in Touch</h2>
            <div className="animated__bar"></div>
        </div>
        <div className={styles.contact__section}>
            <div className="row">
                <div className="two-thirds column">
                    {/* <form className={styles.contact__form} id={styles.contact__form}
                        action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="22b1ad2a-7d14-4c33-9ea0-9e5859f4309a" />
                        <input type="hidden" name="subject" value="New Message from Portfolio" />
                        <input type="checkbox" name="botcheck" id="" /> */}
                    <form className={styles.contact__form} id={styles.contact__form}
                        action="#">

                        <h4 className={styles.content__title}>Message Me</h4>
                        <div className="row">
                            <div className={styles.group}>
                                <div className="one-half column">
                                    <div className={`${styles.form__group} ${styles.gap}`}><input className={styles.form__control} id={styles.contact__name} type="text"
                                        name="name" placeholder="Name" required="" /></div>
                                </div>
                                <div className="one-half column">
                                    <div className={`${styles.form__group} ${styles.gap} ${styles.c__email}`}><input className={styles.form__control} id={styles.contact__email}
                                        type="email" name="email" placeholder="Email" required="" /></div>
                                </div>
                            </div>
                            <div className={`column ${styles.form__group} nomargin`}><input className={styles.form__control} id={styles.contact__subject} type="text"
                                name="subject" placeholder="Subject" autoComplete="off" required="" /></div>
                            <div className={`column ${styles.form__group} nomargin`}><textarea className={styles.form__control} id={styles.contact__message}
                                name="message" placeholder="Message" rows="5" required=""></textarea></div>
                            <div className={`column ${styles.form__submit} nomargin`}><button className={`${styles.btn}`} id={styles.contact__submit}
                                data-tip="Not Implemented yet Sorry!!" >Send Message</button>
                                <p className={styles.contact__feedback}></p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="one-third column">
                    <div className={styles.contact__info}>
                        <h4 className={styles.content__title}>Contact Info</h4>
                        <ul className={`${styles.list__unstyled} ${styles.list__info}`}>
                            {ContactInfo.map((info, index) => (
                                <ContactCards key={index} icon={info.icon} type={info.type} value={info.value} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ReactTooltip place="right" type="light" effect="solid" />
    </section >



);

export default Contact;