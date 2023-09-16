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
                            <p className={styles.lead}>Born in Kathmandu, Nepal, I'm a ReactJS developer and UI/UX designer passionate about crafting web applications. I thrive on problem-solving and enjoy learning new technologies. 
                           <br />Currently, I'm a full-time ReactJS developer at Code Himalaya located in Lalitpur.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.about__cvWrapper}>
                    <a className={styles.about__cv} href="./abhishek-pandey-cv.pdf" target="_blank" title="Download CV">Download CV</a>
                </div>
            </div>
        </div>
    </section>


);

export default About;