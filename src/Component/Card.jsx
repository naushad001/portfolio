import React from 'react';
import Acard from './Acard';


function Card(props) {
  return (
    <div>

                {/* <div className='experience_project'>
                 <div class="experience_project-img">
                    <img src={props.imgsrc} class="card-img-top" alt="Mypic"></img>
                   <div class="experience_project-card">
                        <h5 class="title">{props.title}</h5>
                   </div>
                  </div>
                  <div class="experience_project-card-link">
                        <a href={props.gitlink} class="btn btn1">GitHub</a> 
                        <a href={props.livelink} class="btn btn2 textalign-left">Live Demo</a>
                  </div>
                </div>    */}

                <div className='pro_main'>
                  <div className='pro_card'>
                    <img src={props.imgsrc} class="card-img-top" alt="Mypic"></img>
                    <div className='pro_info'>
                       <h5 class="title">{props.title}</h5>
                       <div class="experience_project-card-link">
                          <a href={props.gitlink} class="btn btn1">GitHub</a> 
                          <a href={props.livelink} class="btn btn2 textalign-left">Live Demo</a>
                        </div>
                   </div>
                  </div>
                </div>
    </div>
  )
}

export default Card