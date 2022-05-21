import styles from "../styles/Skills.module.scss";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-section single-section">
                <div className="section-heading">
                    <p className="section-description">I have done projects using the following.</p>
                    <h2 className="section-title">My Skills</h2>
                </div>
                <div className="container">
                    <div className={styles.skillTable}>
                        <div className={`${styles.skillElement}  ${styles.gra1}`} data-description="HTML">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Html</div>
                                <div className={styles.description}>HTML</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra2}`} data-description="CSS">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Css</div>
                                <div className={styles.description}>CSS</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra3}`} data-description="Scss">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Scss</div>
                                <div className={styles.description}>Sassy Css</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra4}`} data-description="Javascript">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Js</div>
                                <div className={styles.description}>JavaScript</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra5}`} data-description="Jquery">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Jq</div>
                                <div className={styles.description}>JQuery</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra6}`} data-description="p5.js">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>p5</div>
                                <div className={styles.description}>p5.js</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra7}`} data-description="Photoshop">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Ps</div>
                                <div className={styles.description}>Photoshop</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra8}`} data-description="Figma">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Fg</div>
                                <div className={styles.description}>Figma</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra9}`} data-description="React">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>React</div>
                                <div className={styles.description}>(Traininee)</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra10}`} data-description="RealWorldCursor">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Rc</div>
                                <div className={styles.description}>Real World Cursor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row button-section">
                <div className="container">
                    <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                </div>
            </div> */}
        </section >
    )
};

export default Skills;