import React from 'react';
import logo from '../images/logo.png';
import {FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
<div>
    <section className='footer' >
      <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-12'>
                 <h4>Naushad Salmanee</h4>
                 <ul>
                  <li><a href="https://www.linkedin.com/in/naushad-salmanee-81808a1bb/" target="_blank"> <FaLinkedin/></a></li>
                  <li><a href="https://github.com/naushad001" target="_blank"> <FaGithubSquare/></a></li>
                  <li><a href="">  <FaInstagramSquare/></a></li>
                 </ul>
              </div>
              <hr/>
              <h5>© 2023 Naushad Salmanee. All rights reserved.</h5>
          </div>
      </div>
    </section>
</div>
  )
}

export default Footer
