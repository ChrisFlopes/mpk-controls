import React from 'react';
import './mpkzm-multizone.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MPKZMMultizone = () => {
  const technicalData = {
    properties: [
      "EN12101-10 / certified power supply",
      "Batteries supplied to suit load and application",
      "72-hour standby",
      "Indicators for charger and battery status",
      "10-amp CE marked digital zone boards",
      "4mm DIN rail mounted cable connections"
    ],
    functions: [
      "24vdc switch polarity outputs",
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

  return (
    <>
      <Header />
      <div className="multizone-page">
        <div className="multizone-hero">
          <h1>MPKZM Multizone</h1>
        </div>

        <div className="multizone-content">
          <div className="multizone-intro">
            <p>MPKZM Multi zone control panels EN12101-10 compliant.</p>
            
            <p>These control panels made to customer specifications can operate as many zones required for smoke/environmental ventilation and can be supplied with power supplies ranging from 5 to 30 amps.</p>
            
            <p>Each board linked to others allows for the fire lock outs to function ensuring that all floors not active in fire cannot be opened as per current regulations.</p>
            
            <p>Each zone board can either be individually controlled or linked collectively to thermostats/BMS inputs for environmental cooling and if connected to a rain sensor will close.</p>
            
            <p>If in environmental mode a fire signal to any zone will remove all controls and shut down all but the fire floor maintaining the building compartmentation.</p>
          </div>

          <div className="multizone-image">
            <img 
              src="https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Multi-zone-768x576.jpg" 
              alt="MPKZM Multizone Control Panel" 
            />
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

export default MPKZMMultizone; 