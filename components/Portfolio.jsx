import { useState } from "react";

const Portfolio = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <section id="portfolio">

            <div className="row section-intro">
                <div className="column">

                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>
                    <input type="checkbox" id="toggle_checkbox" />
                    <label htmlFor="toggle_checkbox" onClick={() => {
                        setToggle(prev => !prev)
                    }}></label>

                    {/* <p className="lead">These are some of the works i have been involved in.</p> */}

                </div>
            </div>

            <div className="portfolio-content">

                <div className="container">


                    <div id="folio-wrapper">

                        <div className="one-half column folio-item">
                            <div className="item-wrap">
                                <img src="/design.jpg" alt="Generative Art USing p5.js" className="centered" />
                                <a href="https://enryuux7.github.io" className={`overlay ${toggle && 'toggle-overlay'}`}>
                                    <div className="folio-item-table">
                                        <div id="item-cell" className={`folio-item-cell ${toggle && 'toggle-cell'}`}>
                                            <h3 className="folio-title">Generative Art USing p5.js</h3>
                                            <span className="folio-types">
                                                Graphic Design
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="one-half column folio-item">
                            <div className="item-wrap">
                                <img src="/cursor.png" alt="Cursor Port" className="centered" />
                                <a href="https://www.deviantart.com/en-ryuu/art/Breeze-Hacked-Cursor-For-Windows-752551821" className={`overlay ${toggle && 'toggle-overlay'}`}>
                                    <div className="folio-item-table">
                                        <div className={`folio-item-cell ${toggle && 'toggle-cell'}`}>
                                            <h3 className="folio-title">Breeze Hacked Cursor imported from Linux</h3>
                                            <span className="folio-types">
                                                Cursor porting
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="one-half column folio-item nomargin">
                            <div className="item-wrap">
                                <img src="/lost-ravens.png" alt="lostravens" className="centered" />
                                <a href="#modal-04" className={`overlay ${toggle && 'toggle-overlay'}`}>
                                    <div className="folio-item-table">
                                        <div className={`folio-item-cell ${toggle && 'toggle-cell'}`}>
                                            <h3 className="folio-title">Lost Ravens EPK</h3>
                                            <span className="folio-types">
                                                Web-Design Music portfolio
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="one-half column folio-item">
                            <div className="item-wrap">
                                <img src="/covidx.png" alt="CovidX" className="centered" />
                                <a href="https://github.com/Thunderk3g/COVID-X-v2.0" className={`overlay ${toggle && 'toggle-overlay'}`}>
                                    <div className="folio-item-table">
                                        <div className={`folio-item-cell ${toggle && 'toggle-cell'}`}>
                                            <h3 className="folio-title">CovidX v2.0</h3>
                                            <span className="folio-types">
                                                Web Development
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="one-half column folio-item nomargin">
                            <div className="item-wrap">
                                <img src="/shapeup.png" alt="Shape-Up" className="centered" />
                                <a href="https://github.com/EnRyuuX7/shape-up" className={`overlay ${toggle && 'toggle-overlay'}`}>
                                    <div className="folio-item-table">
                                        <div className={`folio-item-cell ${toggle && 'toggle-cell'}`}>
                                            <h3 className="folio-title">Shape-Up - 2D platformer</h3>
                                            <span className="folio-types">
                                                Unity Game Development
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="one-half column folio-item">
                            <div className="item-wrap">
                                <img src="/notes.png" alt="Transparent notes" />
                                <a href="https://www.deviantart.com/en-ryuu/art/Transparent-Notes-2-0-764915350" className={`overlay ${toggle && 'toggle-overlay'}`}>
                                    <div className="folio-item-table">
                                        <div className={`folio-item-cell ${toggle && 'toggle-cell'}`}>
                                            <h3 className="folio-title">Transparent notes 2.0</h3>
                                            <span className="folio-types">
                                                Rainmeter Skin - Customization
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div id="modal-01" className="popup-modal slider mfp-hide">

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

                        </div>


                    </div>

                </div>
            </div>

        </section>
    )
};

export default Portfolio;