import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> YouTube
          </a>
        </div>
        
        <div className="company-info">
          <p className="address">
            Head Office: MPK Controls Ltd, Unit C6 Oyo Business Park, 187 Park Lane, Castle Vale, B35 6AN
          </p>
          <p className="registration">
            Company Registration Number: 02306555 | VAT Number: 487189391
          </p>
          <p className="copyright">
            Copyright © {new Date().getFullYear()} MPK Controls Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 