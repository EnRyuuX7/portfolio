import styles from "./Portfolio.module.scss";
import { useState } from "react";

const items = [
    {
        link: "https://en-ryuu.github.io/",
        title: "Generative Art USing p5.js",
        type: "Graphic Design",
        image: "/design.jpg"
    },
    {
        link: "https://lostravens.com",
        title: "Lost Ravens",
        type: "Web Design",
        image: "/lost-ravens.png"
    },
    {
        link: "https://github.com/EnRyuuX7/discord-clone",
        title: "Discord Clone",
        type: "Web Development",
        image: "/discord-c.jpg"
    },
    {
        link: "https://www.deviantart.com/en-ryuu/art/Breeze-Hacked-Cursor-For-Windows-752551821",
        title: "Breeze Hacked Cursor",
        type: "Graphic Design",
        image: "/cursor.png"
    },
    {
        link: "https://github.com/Thunderk3g/COVID-X-v2.0",
        title: "COVID-19 Tracker",
        type: "Web Development",
        image: "/covidx.png"
    },
    {
        link: "https://github.com/EnRyuuX7/shape-up",
        title: "Shape Up",
        type: "Web Development",
        image: "/shapeup.png"
    },
    {
        link: "https://www.deviantart.com/en-ryuu/art/Transparent-Notes-2-0-764915350",
        title: "Transparent Notes",
        type: "Graphic Design",
        image: "/notes.png"
    },
];
const FolioCard = ({ link, title, type, image, toggle }) => {

    return (
        <div className={`one-half column ${styles.folio__item}`}>
            <div className={styles.item__wrap}>
                <img src={image} alt={title} className="centered" />
                <a href={link} className={`${styles.overlay} ${toggle && styles.toggle__overlay}`}>
                    <div className={styles.folio__itemTable}>
                        <div id={styles.itemCell} className={`${styles.folio__itemCell} ${toggle && styles.toggleCell}`}>
                            <h3 className={styles.folio__title}>{title}</h3>
                            <span className={styles.folio__types}>
                                {type}
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};





const Portfolio = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <section id={styles.portfolio}>

            <div className="row section__intro">
                <div className="column">

                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>
                    <input type="checkbox" id={styles.toggle__checkbox} />
                    <label htmlFor={styles.toggle__checkbox} onClick={() => {
                        setToggle(prev => !prev)
                    }}></label>

                    {/* <p className="lead">These are some of the works i have been involved in.</p> */}

                </div>
            </div>
            <div className={styles.portfolio__content}>
                <div className="container">
                    <div id={styles.folio__wrapper}>
                        {items.map((item, index) => (
                            <FolioCard key={index} {...item} toggle={toggle} />
                        ))}



                        {/* <div id="modal-01" className="popup-modal slider mfp-hide">

                            <div className="media">
                                <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
                            </div>

                            <div className="description-box">
                                <h4>Liberty</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                <div className="categories">Web Development</div>
                            </div>

                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>

                        </div>

                        <div id="modal-02" className="popup-modal slider mfp-hide">

                            <div className="media">
                                <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
                            </div>

                            <div className="description-box">
                                <h4>Shutterbug</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                <div className="categories">Web Design</div>
                            </div>

                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>

                        </div>

                        <div id="modal-03" className="popup-modal slider mfp-hide">

                            <div className="media">
                                <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
                            </div>

                            <div className="description-box">
                                <h4>Clouds</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                <div className="categories">Web Design</div>
                            </div>

                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>

                        </div>

                        <div id="modal-04" className="popup-modal slider mfp-hide">

                            <div className="media">
                                <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
                            </div>

                            <div className="description-box">
                                <h4>Beetle</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                <div className="categories">Branding</div>
                            </div>

                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>

                        </div>

                        <div id="modal-05" className="popup-modal slider mfp-hide">

                            <div className="media">
                                <img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
                            </div>

                            <div className="description-box">
                                <h4>Lighthouse</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                <div className="categories">Web Development</div>
                            </div>

                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>

                        </div>

                        <div id="modal-06" className="popup-modal slider mfp-hide">

                            <div className="media">
                                <img src="images/portfolio/modals/m-salad.jpg" alt="" />
                            </div>

                            <div className="description-box">
                                <h4>Salad</h4>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                                <div className="categories">Branding</div>
                            </div>

                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>

                        </div> */}


                    </div>

                </div>
            </div>

        </section>
    )
};

export default Portfolio;