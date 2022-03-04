const Resume = () => (
    <section id="resume">
        <div className="container-wrapper" id="resume" data-simplebar>
            <div className="container">
                <div className="section-heading page-heading">
                    {/* <p className="section-description">Check out my Resume</p> */}
                    <h2 className="section-title">Resume</h2>
                    <div className="animated-bar"></div>
                </div>
            </div>
            <div className="resume-section single-section">
                <div className="row">
                    {/* <!-- Education part--> */}
                    <div className="one-half column">
                        <div className="col-block education">
                            <h3 className="col-title">Education</h3>
                            <div className="resume-item"><span className="item-arrow"></span>
                                <h5 className="item-title">B.Sc CSIT</h5><span className="item-details">Deerwalk Institute of Technology / 2017 - Current</span>
                                <p className="item-description">Final year 8th semester</p>
                            </div>
                            <div className="resume-item"><span className="item-arrow"></span>
                                <h5 className="item-title">+2</h5><span className="item-details">Trinity International College / 2015 -
                                    2017</span>
                                <p className="item-description"></p>
                            </div>
                            <div className="resume-item"><span className="item-arrow"></span>
                                <h5 className="item-title">School Leaving Certificate</h5><span className="item-details">Brihaspati Vidyasadan / 2015</span>
                                <p className="item-description"></p>
                            </div>
                        </div>
                    </div>
                    <div className="one-half column">
                        <div className="col-block experience">
                            <h3 className="col-title">Experience</h3>
                            <div className="resume-item"><span className="item-arrow"></span>
                                <h5 className="item-title">UI/UX Designer</h5><span className="item-details">Deerhold .Ltd / 2021 Mar -
                                    2022 Jan</span>
                                <p className="item-description">Fellowship Program</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >





);

export default Resume;