import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2w90i95', 'service_2w90i95', form.current, 'qo0iCxO7gePhgA3jW')
    e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option_icon'/>
            <h4>Email</h4>
            <h5>hilaryogochukwuhilary@gmail.com</h5>
            <a href="mailto:hilaryogochukwuhilary@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option_icon'/>
            <h4>Messenger</h4>
            <h5>HilaryOHilary</h5>
            <a href="https://m.me/hilaryohilary" target='__blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+2349055746346</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349055746346" target='__blank'>Send a message</a>
          </article>
          </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
    </section >
  )
}

export default Contact