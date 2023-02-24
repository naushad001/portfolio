
import {FaEnvelope, FaMobileAlt} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z82zqp5', 'template_6wcns2g', form.current, 'LOd6rEsAsJYJQjgYU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div>
        <div className='container'>
            <div className='row' id='Contact'>
            <div className='col-12 col-md-12 skill' data-aos='fade-up'  >
              <h3>Contact Me</h3>
              <p>Get In Touch</p>
           </div>
                <div className='col-12 col-md-6 Contact-main' data-aos='fade-right'>
                  <div className='Contact-card'>
                       <FaEnvelope className='icon-1'/>
                      <h5>Email</h5>
                      <h6><a href='mailto:naushadsalmanee001@gmail.com' target="_blank">naushadsalami0786@gmail.com</a></h6>
                      <a href='mailto:naushadsalmanee001@gmail.com' target="_blank">Send a message</a>
                  </div>
                  <div className='Contact-card'>
                       <FaMobileAlt  className='icon-1'/>
                      <h5>Phone</h5>
                      <h6><a href='Tel:+917669135433' target="_blank">+91 7669135433</a></h6>
                      <a href='Tel:+917669135433' target="_blank">Contact Me</a>
                  </div>
                  <div className='Contact-card'>
                      <FaWhatsapp  className='icon-1'/>
                      <h5>WhatsApp</h5>
                      <h6><a href='https://wa.me/917669135433' target="_blank">7669135433</a></h6>
                      <a href='https://wa.me/917669135433' target="_blank">Send a message</a>
                  </div>
                </div>
              <div className='col-12 col-md-6 ' data-aos='fade-left'>
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputText" placeholder='Name'
                    name="user_name" autocomplete="off" required />
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'
                       name="user_email" autocomplete="off" required
                    />
                  </div>
                  <div class="mb-3">
                    <input type="tel" class="form-control" id="exampleInputTel" placeholder='Phone '
                       name="user_no" autocomplete="off"
                    />
                  </div>
                  <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Messages'
                     name="message" autocomplete="off" required></textarea>
                  </div>
                  <input type="submit" value="Send" class="btn btn-contact" />
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
