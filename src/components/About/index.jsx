import Image from 'next/image'
import Link from 'next/link';
import styles from './About.module.scss';

const About = () => (

    <section id="about" className={styles.about}>

        <div className='container'>
            <div className="section__intro">
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
            </div>
            <div className='container'>
                <div className={styles.about__info}>
                    <div className='row aligned'>
                        <div className={`one-third ${styles.profile__imageContainer}`}>
                            <Image className={styles.profile__image} src="/profile.jpg" alt="Profile Picture" height={720} width={720} objectFit='cover' />

                        </div>

                        <div className='two-thirds column'>
                            <p className={styles.lead}>Born in Kathmandu Nepal, I am a UI/UX designer as well as a frontend Developer with a passion for designing and developing different web-based applications.
                                <br></br><br></br>I have a trait for many things such as problem-solving, app-development and learning new and upcoming technologies.
                                <br></br><br></br>Besides working I love to play the piano, play games, draw, read manga, watch anime and listen to music. <br></br><br></br>Currently, I am in my final year in BSc.CSIT at Deerwalk Institute of Technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.about__cvWrapper}>
                    <a className={styles.about__cv} href="./abhishek-pandey-cv.pdf" target="_blank" title="Download CV" >Download CV</a>
                </div>
            </div>
        </div>





    </section>


);

export default About;