import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/MPK_Controls_Logo-1.png';

function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link" onClick={scrollToTop}>
        <img src={logo} alt="MPK Controls Logo" className="logo" />
      </Link>
      <div className="right-section">
        <nav className="nav-links">
          <Link to="/products" onClick={scrollToTop}>Products</Link>
          <Link to="/services" onClick={scrollToTop}>Services</Link>
          <Link to="/packages" onClick={scrollToTop}>Packages</Link>
        </nav>
        <button className="contact-button">CONTACT US</button>
      </div>
    </header>
  );
}

export default Header; 