import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = ({setScrollYProgress}) => {
    const contactRef = useRef(null)  
    const formRef = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l09zrec', 'template_p2oivtm', formRef.current, 'ajkaKXEzkSN7y__03')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const { scrollYProgress } = useScroll({
        target: contactRef,
      });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollYProgress(latest)
        console.log('contact',latest)
    })
  return (
    <section id='contact' ref={contactRef}>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDescription'>Please fill out the form below to discuss any work opportunities!</span>
      <form ref={formRef} onSubmit={sendEmail} className='contactForm'>
        <input type='text' className='name' placeholder='Your Name' name="user_name"/>
        <input type='email' className='email' placeholder='Your Email' name="user_email" />
        <textarea name='message' className='msg' rows='5' placeholder='Your Message' />
        <button className='submitBtn' type='submit' value='Send'>Submit</button>
        <div className='links'>
          {/* <a href='https://www.linkedin.com/in/janneke-van-hulten-b7a4a7190/' target="_blank" rel="noreferrer"> */}
            <img className='link' src={linkedin} alt='linkedin' />
          {/* </a> */}
          <img className='link' src={github} alt='github' />
        </div>
      </form>
    </section>
  )
}

export default Contact