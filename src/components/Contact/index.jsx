import styles from "./Contact.module.scss";

import { FaLocationArrow } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
import useWeb3forms from "use-web3forms";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Reaptcha from "reaptcha";


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


const Contact = () => {
    const [verified, setVerified] = useState(false);
    const [showText, setShowText] = useState("");
    const [textColor, setTextColor] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onVerify = e => {
        setVerified(true);
    };

    const onSubmit = data => {
        if (data.name && data.email && data.message && data.subject) {
            setTextColor("#868686");
            setShowText("Loading . . . ");
            submit({
                Name: data.name,
                Email: data.email,
                Subject: data.subject,
                Message: data.message
            })
        }
        else {
            setTextColor("#ff0000")
            setShowText("***Fill all the fields***")
        }
    }
    const { submit } = useWeb3forms({
        apikey: "6LdwrtUgAAAAAFO1Z21iOSBqjrAuGAMNOY4dyyVO",
        onSuccess: (successMessage, data) => {
            setTextColor("#1ce2c8")
            setShowText(successMessage)
        },
        onError: (errorMessage, data) => {
            setTextColor("#ff0000")
            setShowText(errorMessage)
        },
    });

    useEffect(() => {
        setTimeout(() => {
            setShowText("")
        }, 50000);
    }, [showText])

    return (
        <section id="contact" className={styles.contact}>

            <div className="section__heading page__heading column" >
                <h2 className="section__title">Get in Touch</h2>
                <div className="animated__bar"></div>
            </div>
            <div className={styles.contact__section}>
                <div className="row">
                    <div className="two-thirds column">
                        <form className={styles.contact__form} id={styles.contact__form}
                            onSubmit={handleSubmit(onSubmit)}>

                            <h4 className={styles.content__title}>Message Me</h4>
                            <div className="row">

                                <div className="one-half column">
                                    <div className={`${styles.form__group}`}>
                                        <input className={styles.form__control} id={styles.contact__name} type="text"
                                            name="name" placeholder="Name" {...register("name")} /></div>
                                </div>
                                <div className="one-half column">
                                    <div className={`${styles.form__group}`}>
                                        <input className={styles.form__control} id={styles.contact__email}
                                            type="email" name="email" placeholder="Email" {...register("email")} /></div>
                                </div>

                            </div>
                            <div className="row">
                                <div className={`column ${styles.form__group}`}><input className={styles.form__control} id={styles.contact__subject} type="text"
                                    name="subject" placeholder="Subject" autoComplete="off" {...register("subject")} /></div>
                            </div>
                            <div className="row">
                                <div className={`column ${styles.form__group} `}><textarea className={styles.form__control} id={styles.contact__message}
                                    name="message" placeholder="Message" rows="5" {...register("message")}></textarea></div>
                            </div>
                            <div className="row">
                                <div className={`column ${styles.form__submit} `}><button className={`${styles.btn}`} id={styles.contact__submit}
                                    type="submit" disabled={!verified}
                                >Send Message</button>
                                    <p className={styles.contact__feedback} style={{ color: textColor }}>{showText}</p>
                                </div>
                            </div>
                            <Reaptcha
                                sitekey="6LfZT9YgAAAAAPeJwbjkOR_v8Q4eLW6LisfuJSAW"
                                onVerify={onVerify}
                            />
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

    )
}
export default Contact;