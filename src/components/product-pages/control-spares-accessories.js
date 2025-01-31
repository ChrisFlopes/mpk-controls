import React from 'react';
import './control-spares-accessories.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ControlSparesAccessories = () => {
  const products = [
    {
      title: "Fireman's Override Key Switch",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Firemans-Key-Switch-.jpg"
    },
    {
      title: "Digital Board",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Digi-mini-board.jpg"
    },
    {
      title: "Analog Board",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Stairventmini-2.jpg"
    },
    {
      title: "Break Glass",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Break-Glass-Manual-Call-Point-Orange.jpg"
    },
    {
      title: "5amp Charger",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/5amp-charger.jpg"
    },
    {
      title: "Optical Smoke Detector",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Apollo-smoke-detector.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="spares-page">
        <div className="spares-hero">
          <h1>Control Spares & Accessories</h1>
        </div>

        <div className="spares-content">
          <div className="spares-grid">
            {products.map((product, index) => (
              <div key={index} className="spares-item">
                <div className="spares-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
              </div>
            ))}
          </div>

          <div className="contact-section">
            <a href="/contact" className="contact-button">Contact us for more information</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ControlSparesAccessories; 