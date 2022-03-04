const Skills = () => (
    <section id="skills">

        {/* <!-- Skills section--> */}
        <div className="skills-section single-section">
            <div className="section-heading">
                <p className="section-description">My level of knowledge in some tools</p>
                <h2 className="section-title">My Skills</h2>
            </div>
            <div className="row">
                <div className="one-half column">
                    <div className="single-skill" data-percentage="85">
                        <div className="skill-info"><span className="skill-name">HTML/CSS</span><span
                            className="skill-percentage"></span></div>
                        <div className="progress skill-progress">
                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                    </div>
                    <div className="single-skill" data-percentage="80">
                        <div className="skill-info"><span className="skill-name">Web Design</span><span
                            className="skill-percentage"></span></div>
                        <div className="progress skill-progress">
                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="single-skill" data-percentage="70">
                        <div className="skill-info"><span className="skill-name">JavaScript/JQuery</span><span
                            className="skill-percentage"></span></div>
                        <div className="progress skill-progress">
                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="one-half column">
                    <div className="single-skill" data-percentage="88">
                        <div className="skill-info"><span className="skill-name">Photoshop</span><span
                            className="skill-percentage"></span></div>
                        <div className="progress skill-progress">
                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="single-skill" data-percentage="80">
                        <div className="skill-info"><span className="skill-name">Figma</span><span
                            className="skill-percentage"></span></div>
                        <div className="progress skill-progress">
                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="single-skill" data-percentage="50">
                        <div className="skill-info"><span className="skill-name">Next.js</span><span
                            className="skill-percentage"></span></div>
                        <div className="progress skill-progress">
                            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;