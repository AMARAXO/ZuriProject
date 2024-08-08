"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUsFooter = () => {
  return (
    <footer className="contact-us-footer">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@barbshowstore.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Shoe Street, Fashion City, FC 12345</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <span>Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <span>Twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
