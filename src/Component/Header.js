import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import bg from "../images/bg-1.jpg";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";




const Header = () => {
 

  const [text] = useTypewriter({
    words: ['FULL STACK DEVELOPER','MERN STACK DEVELOPER', 'FRONT END DEVELOPER', 'BACK END DEVELOPER', 'WEB DESIGNING', 'WEB DEVELOPER'],
    loop: 0
  })
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//     await console.log(container);
// }, []);

  return (

    <div>
        
         <section className='Header' style={{ backgroundImage: `url(${bg})` }}>
         {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    Width: {
                        value: "100%",
                    },
                    height: {
                        value:"50vh",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 10,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 120,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}
             <div className='col-12 col-md-12 Header-title'>
                 <h3>Hello, I'M' Naushad Salmanee </h3>
                 <h1 >{text} </h1>
                 <p>Knack of building applications with front and back end operations.</p>
                 </div>
                 <div className='col-12 col-md-12 Header-link mt-3'>
                      <a href='#Contact'>CONTACT ME</a>
                      <a href='https://drive.google.com/file/d/1rLZXkOvWcUDxHVRGY4HZwF82_Bh4MlMf/view?usp=share_link' >GET RESUME</a>
                </div>
            
         </section>
    </div>
  )
}

export default Header
