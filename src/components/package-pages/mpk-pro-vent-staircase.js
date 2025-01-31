import React from 'react';
import './mpk-pro-vent-staircase.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MPKProVentStaircase = () => {
  const packageItems = [
    {
      title: "1x MPK Pro Hatch 1m2 Roof Vent",
      description: "Can be used on both flat and sloping roofs up to 15° in various types of facilities such as: production and storage halls, logistic centres, public buildings, retail and service buildings and residential buildings.",
      dataSheet: "MCR Prolight Hatch Data Sheet",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    },
    {
      title: "1x MPKZ1 Single Zone Control Panel",
      description: "The MPKZ1 Single zone control panel is a fully tested EN12101-10 / EN54 5-amp charger-power supply unit. Each panel can operate independently for smoke and environmental ventilation or used as part of a group.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Single-Zone-Control-Panel-ext-PKW1.jpg"
    },
    {
      title: "1x Battery Backup",
      description: "The control unit is supplied with two 12v 7amp batteries, that are kept charged when the mains power supply is available. When power is unavailable, they guarantee a 72-hour period in standby mode allowing the execution of a complete emergency opening command as prescribed by EN 12101-10.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Single-zone-int-PKW.jpg"
    },
    {
      title: "1x Fire Override Switches",
      description: "Manual override control for smoke ventilation systems, allowing fire fighters to directly open and close smoke vents and louvres as required.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Firemans-Key-Switch-.jpg"
    },
    {
      title: "1x Break Glass Switch",
      description: "An orange push break glass unit marked smoke vent.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Break-Glass-Manual-Call-Point-Orange.jpg"
    },
    {
      title: "1x Optical Smoke Detector",
      description: "Detector incorporates a pulsing LED located within the housing of the detector. The external detector moulding has an indicator LED which is clear in quiescent state but produces a red light in alarm.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Apollo-smoke-detector.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="staircase-page">
        <div className="staircase-hero">
          <h1>MPK PRO Vent Staircase Packages</h1>
        </div>

        <div className="staircase-content">
          <p>The PRO Access Hatch staircase package is inclusive of the following:<br />
             The PRO Hatch staircase package is inclusive of the following:</p>

          <div className="staircase-pricing">
            <p><strong>MPK PRO Access Hatch Staircase Package – £1900 + VAT</strong></p>
            <p><strong>MPK PRO Hatch Staircase Package – £1850 + VAT</strong></p>
          </div>

          <div className="staircase-items">
            {packageItems.map((item, index) => (
              <div key={index} className="staircase-item">
                <div className="staircase-item-content">
                  <div className="staircase-item-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.dataSheet && (
                      <a href="#" className="data-sheet-link">{item.dataSheet}</a>
                    )}
                  </div>
                  <div className="staircase-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
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

export default MPKProVentStaircase; 