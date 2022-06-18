import styles from "./Resume.module.scss";

const Experience = [
    {
        title: "UI/UX Designer",
        company: "Deerhold .Ltd",
        duration: "2021 Mar - 2022 Jan",
        description: "Fellowship Program"
    },
    {
        title: "React/Frontend Trainee",
        company: "Code Himalaya",
        duration: "2022 Mar - May",
        description: "Trainee"
    },
    {
        title: "Junior React Developer",
        company: "Code Himalaya",
        duration: "2022 May - Current",
        description: "Full Time"
    }
]

const Education = [
    {
        achievement: "B.Sc CSIT",
        institute: "Deerwalk Institute of Technology",
        duration: "2017 - Current",
        description: "Final year 8th semester"
    },
    {
        achievement: "+2",
        institute: "Trinity International College",
        duration: "2015 - 2017",
        description: ""
    },
    {
        achievement: "School Leaving Certificate",
        institute: "Brihaspati Vidyasadan",
        duration: "2007 - 2014",
        description: ""
    }
]

const Resume = () => (
    <section >
        <div className={styles.resume} id="resume" data-simplebar>
            <div className="container">
                <div className="section__heading page__heading">
                    {/* <p className="section__description">Check out my Resume</p> */}
                    <h2 className="section__title">Resume</h2>
                    <div className="animated__bar"></div>
                </div>
            </div>
            <div className={styles.resume__section}>
                <div className="row">
                    {/* <!-- Education part--> */}
                    <div className="one-half column">
                        <div className={styles.resume__education}>
                            <h3 className={styles.resume__title}>Education</h3>
                            {Education.map((edu, index) => (
                                <div className={styles.resume__item} key={index}>

                                    <h5 className={styles.item__title}>{edu.achievement}</h5><span className={styles.item__details}>{edu.institute} / {edu.duration}</span>
                                    <p className={styles.item__description}>{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="one-half column">
                        <div className={styles.resume__experience}>
                            <h3 className={styles.resume__title}>Experience</h3>
                            {Experience.map((exp, index) => (
                                <div className={styles.resume__item} key={index}>
                                    <h5 className={styles.item__title}>{exp.title}</h5><span className={styles.item__details}>{exp.company} / {exp.duration}</span>
                                    <p className={styles.item__description}>{exp.description}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >





);

export default Resume;