import React, {useRef} from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b0s7aqm', 'template_fxb2agj', form.current, '0UxcjjHZLqVBU83qf');
        e.target.reset();
    };
    return (
        <section id='contact'>
          

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4> 
                        <h5>ponceangelo08@gmail.com</h5>
                        <a href="https://mail.google.com/mail/u/0/#inbox">Email me!</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4> 
                        <h5>Angelo Ponce</h5>
                        <a href='https://www.linkedin.com/in/angelo-ponce-507a2b32b/' target='_blank'>Message me on LinkedIn!</a>
                    </article>
                </div>
             
            </div>
        </section>
    );
}

export default Contact;