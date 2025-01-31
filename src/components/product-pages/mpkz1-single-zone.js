import React from 'react';
import './mpkz1-single-zone.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';

const MPKZ1SingleZone = () => {
  const technicalData = {
    properties: [
      "EN12101-10 / EN54 certified power supply",
      "2 x 12v 7amp batteries",
      "72-hour standby",
      "Indicators for charger and battery status",
      "10-amp CE marked digital zone board",
      "Panel mounted key switch Auto / Open / Close",
      "Vent status indicators"
    ],
    functions: [
      "24vdc switch polarity output",
      "Clean contact outputs via fire and environmental auxiliary relays",
      "Easy to use time control switches allowing constant supply to motor outputs or timed period up to a max of 180 seconds"
    ],
    ledIndicators: [
      "Vent status open /closed",
      "Fire signal received",
      "Environmental operational",
      "Lock out in operation – When lit red the lock out is in operation due to a fire signal received when used as part of a collective",
      "Rain signal received"
    ]
  };

  const images = [
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Single-Zone-Control-Panel-ext-PKW1.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Single-zone-int-PKW.jpg"
  ];

  return (
    <>
      <Header />
      <div className="mpkz1-page">
        <div className="mpkz1-hero">
          <h1>MPKZ1 Single Zone</h1>
        </div>

        <div className="mpkz1-content">
          <div className="mpkz1-intro">
            <p>The MPKZ1 Single zone control panel is a fully tested EN12101-10 / EN54 5-amp charger-power supply unit. Each panel can operate independently for smoke and environmental ventilation or used as part of a group.</p>
          </div>

          <div className="mpkz1-image">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="technical-data">
            <h2>Technical Data</h2>
            
            <div className="data-section">
              <h3>Properties</h3>
              <ul>
                {technicalData.properties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="data-section">
              <h3>Functions</h3>
              <ul>
                {technicalData.functions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="data-section">
              <h3>On board LED's showing</h3>
              <ul>
                {technicalData.ledIndicators.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
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

export default MPKZ1SingleZone; 