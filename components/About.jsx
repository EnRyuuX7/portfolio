import Image from 'next/image'

const Main = () => (

    <section id="about">

        <div className='container'>
            <div className='section-intro'>
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
            </div>
            <div className='container'>
                <div className="intro-info">
                    <div className='row aligned'>
                        <div className='one-third profile-image-container'>
                            <Image className='profile-image' src="/x.jpg" alt="Profile Picture" height={720} width={720} objectFit='cover' />
                        </div>

                        <div className='two-thirds column'>
                            <p className='lead'>Born in Kathmandu Nepal, I am a UI/UX designer as well as a frontend Developer with a passion for designing and developing different web-based applications.
                                I have a trait for many things such as problem-solving, app-development and learning new and upcoming technologies.
                                Besides working I love to play the piano, play games, draw, read manga, watch anime and listen to music. Currently, I am in my final year in BSc.CSIT at Deerwalk Institute of Technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*         
        <div className="row button-section">
			<div className="col-twelve">
				<a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
				<a href="#" title="Download CV" className="button button-primary">Download CV</a>
			</div>
		</div> */}



    </section>


);

export default Main;