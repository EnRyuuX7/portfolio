import styles from "./Portfolio.module.scss";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import Popup from "reactjs-popup";

const overlayStyle = { background: "rgba(0, 0, 0, 0.404)" };

const items = [
    {
        link: "https://en-ryuu.github.io/",
        title: "Generative Art Using p5.js",
        type: "Graphic Design",
        image: "/design.jpg",
        description:
            "An interactive web-app made using HTML, CSS, JS (jQuery, p5.js, VanillaJS) where the user can create and learn about generative art. This website features a sketch named Weave.js made from scratch using 3 different concepts (Kaleidoscope, perlin noise and bezier curves) which generates unique and random symmetrical generative art with a huge range of customization option",
        categories: ["p5.js", "vanillaJS", "html", "css", "generativeArt"],
    },
    {
        link: "https://lostravens.com",
        title: "Lost Ravens",
        type: "Web Design",
        image: "/lost-ravens.png",
        description:
            "A resume for the record label ”Lost Ravens” that provides the essential information to showcase the artist’s releases, discography, press releases,etc. Including signing up for newsletters and releases.",
        categories: ["html", "css", "javaScript", "jQuery", "figma", "photoshop"],
    },
    {
        link: "https://github.com/EnRyuuX7/discord-clone",
        title: "Discord Clone",
        type: "Web Development",
        image: "/discord-c.jpg",
        description: "An attempt to clone the functionalities of discord using react, socket.io, node, mongodb and jwt authentication.",
        categories: ["reactJS", "socket.io", "scss", "mongoDb", "node", "jwt"],
    },
    {
        link: "https://www.deviantart.com/en-ryuu/art/Breeze-Hacked-Cursor-For-Windows-752551821",
        title: "Breeze Hacked Cursor",
        type: "Graphic Design",
        image: "/cursor.png",
        description: "This is a cursor port from linux to windows using photoshop, real world cursor editor and Inkscape. ",
        categories: ["photoshop", "inkscape", "realWorldCursor"],
    },
    {
        link: "https://github.com/Thunderk3g/COVID-X-v2.0",
        title: "COVID-19 Tracker",
        type: "Web Development",
        image: "/covidx.png",
        description: "A pandemic resource management system, that displays covid data throughout Nepal. I contributed on this project by handling all frontend UI/UX design and development",
        categories: ["angular", "semantic Ui", "css", "javaScript"],
    },
    {
        link: "https://github.com/EnRyuuX7/shape-up",
        title: "Shape Up",
        type: "Web Development",
        image: "/shapeup.png",
        description: "2D platformer game where user controls a square character and has to survive in the dynamic environment for as long as possible while being chased around by an enemy triangle.",
        categories: ["unity3D", "c#", "unityEditor", "unityEngine"],
    },
    {
        link: "https://www.deviantart.com/en-ryuu/art/Transparent-Notes-2-0-764915350",
        title: "Transparent Notes",
        type: "Graphic Design",
        image: "/notes.png",
        description: "This is a rainmeter .rmskin that was designed for Rainmeter. As it's name suggests, it is a transparent note for your Desktop",
        categories: ["rainmeter"],
    },
];
const FolioCard = ({ link, title, type, image, toggle, description, categories }) => {
    return (
        <div className={`one-half column ${styles.folio__item}`}>
            <div className={styles.item__wrap}>
                <img src={image} alt={title} className="centered" />
            </div>
            <Popup
                trigger={
                    <div className={`${styles.overlay} ${toggle && styles.toggle__overlay}`}>
                        <div className={styles.folio__itemTable}>
                            <div id={styles.itemCell} className={`${styles.folio__itemCell} ${toggle && styles.toggleCell}`}>
                                <h3 className={styles.folio__title}>{title}</h3>
                                <span className={styles.folio__types}>{type}</span>
                            </div>
                        </div>
                    </div>
                }
                modal
                lockScroll
                {...{ overlayStyle }}>
                {(close) => (
                    <div className={styles.popup__modal}>
                        <div className={styles.popup__media}>
                            <img src={image} alt={title} height="200px" width="200px" className="centered" />
                        </div>

                        <div className={styles.popup__descriptionBox}>
                            <h4>{title} </h4>
                            <p>{description}</p>

                            <div className={styles.popup__categories}>
                                {" "}
                                {categories.map((item, index) => {
                                    return (
                                        <span key={index} className={styles.popup__categoryChip}>
                                            {item}
                                        </span>
                                    );
                                })}{" "}
                            </div>
                        </div>

                        <div className={styles.popup__linkBox}>
                            <a href={link} target="blank">
                                Go To Link
                            </a>
                            <a onClick={close}>Close</a>
                        </div>
                    </div>
                )}
            </Popup>
            );
        </div>
    );
};

const Portfolio = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="row section__intro">
                <div className="column">
                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>
                    <input type="checkbox" id={styles.toggle__checkbox} />
                    <label
                        htmlFor={styles.toggle__checkbox}
                        onClick={() => {
                            setToggle((prev) => !prev);
                        }}></label>

                    {/* <p className="lead">These are some of the works i have been involved in.</p> */}
                </div>
            </div>
            <div className={styles.portfolio__content}>
                <div className="container">
                    {/* <div id={styles.folio__wrapper} data-tip="Details Coming Soon!"> */}
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
            <ReactTooltip place="right" type="light" effect="float" />
        </section>
    );
};

export default Portfolio;
