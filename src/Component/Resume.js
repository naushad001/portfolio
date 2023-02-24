import React from 'react';
import { BsPatchCheckFill  } from "react-icons/bs";
import '../App.css';


 const Resume = () => {
  return (
    <div>
         <div className='container' id='Resume'>
           <div className='row'>
           <div className='col-12 col-md-12 skill' data-aos='fade-up'>
              <h3>Skills</h3>
              <p>provides my skills</p>
           </div>
            <div className='col-12 col-md-6' data-aos='fade-right'>
             <div className='experience_conatainer'>
             <div className='experience_frontend'>
                <h3>Frontend Developer</h3>
                <div className='experience_contact'>
                  <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>HTML</h4>
                      <small className=''>Experince</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                        <h4>CSS</h4>
                        <small className=''>Experince</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>JavaScript</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>Bootstrap</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>React</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>Jquery</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                </div>
                </div>
                </div>
            </div>
            <div className='col-12 col-md-6' data-aos='fade-left'>
             <div className='experience_conatainer'>
             <div className='experience_frontend'>
                <h3>Backend Developer</h3>
                <div className='experience_contact'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>Node JS</h4>
                      <small className=''>Experince</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                        <h4>Express JS</h4>
                        <small className=''>Experince</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>PHP</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>MySQL</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                  <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>MongoDB</h4>
                      <small className=''>Intermediate</small>
                      </div>
                  </article>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}
export default Resume