import React from 'react';
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer-text'>
        © {currentYear} KGurukul's , All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
