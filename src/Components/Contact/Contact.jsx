import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { CONTACT_NUMBER, EMAIL, ADDRESS, LOGO, SLOGAN, WHATSAPP_NUMBER } from '../../Constant';

// function getRandomIndex(max) {
//   return Math.floor(Math.random() * max);
// }

// export default function RandomSlogan() {
//   const [index, setIndex] = useState(() => getRandomIndex(SLOGAN.length));
// }

const Contact = () => {
  const form = useRef();
  const [darkMode, setDarkMode] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .sendForm('service_2yf3edc', 'template_z5xbzgm', form.current, 'XjfivkHptLlHUGcly')
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        () => {
          toast.error('Failed to send message. Please try again!');
        }
      );
  };

  return (
    <section className={`contact-section ${darkMode ? 'dark' : ''}`}>
      <div className="contact-wrapper">

        {/* Left Info Panel */}
        <div className="contact-info">
          <h2>{SLOGAN}</h2>

          <div className="info-item">
            <a>{CONTACT_NUMBER}</a>
          </div>

          <div className="info-item">
            {/* <a href="mailto:${EMAIL}">{EMAIL}</a> */}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div className="address-card">
            <img src={LOGO} alt="logo" />
            <div>
              <h4>K-Gurukul</h4>
              <p>{ADDRESS}
              </p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3>Contact Form</h3>
          <input name="name" type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="text" placeholder="+91 Mobile Number" required maxLength={10} />
          <textarea name="message" placeholder="What's on your mind?" rows="4" required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href={`https://api.whatsapp.com/send?phone=91${WHATSAPP_NUMBER}&text=Hi`} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp"></i>
        </a>

      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;