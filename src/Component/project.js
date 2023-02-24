import React from 'react';
import Acard from './Acard';
import Card from './Card'


const project = () => {
    return (

    
    <div data-aos='fade-up'>
        <>
        <div className='col-12 col-md-12 project' id='Project'>
              <h3>Portfolio</h3>
              <p>My Recent Work</p>
           </div>
         {Acard.map((val, index) =>{
             console.log(index);
             return(
               
                        <Card
                            imgsrc={val.imgsrc}
                            title={val.title}
                            gitlink={val.gitlink}
                            livelink={val.livelink}
                        />
                    
             );
         })}
     </>
    </div>
  )
}


export default project
