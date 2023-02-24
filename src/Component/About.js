import React from 'react';
import A from "../images/1.png";

const About = () => {
    return (
        <>
        <div class="container about-main" id='About' data-aos='fade-up'>
            <div class="row my-5">
              <div className='col-12 col-md-6 col-lg-6'>
                <div className='experience_about'>
                    <div className='experience_about-card'>
                    <div className='experience_sub-card'>
                        <img src={A} alt="mypic"/>
                    </div> 
                   </div>
                </div>
             </div>
                <div class="col-12 col-md-6 col-lg-6">
                 <div className='about-title'>
                     <h1>About</h1>
                     <p>I'm web designer & front-end developer with SIX month of experience.I'm interested in all kinds of web development, but my major focus is on 
                        full stack developer. I also have skills in other fields like branding, icon 
                         design or photo and video editing. As a web developer,
                         I enjoy using my obsessive attention to detail, my unequivocal love for 
                         making things, and my mission-driven work ethic to literally change the 
                         world. That's why I’m excited to make a big impact at a high growth company.
                     </p>
                     </div>
                     <div className='about-title'>
                     <a href='https://drive.google.com/file/d/1rLZXkOvWcUDxHVRGY4HZwF82_Bh4MlMf/view?usp=share_link' >GET RESUME</a>
                 </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About