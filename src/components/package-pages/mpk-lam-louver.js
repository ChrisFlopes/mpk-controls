import React from 'react';
import './mpk-lam-louver.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MPKLAMLouver = () => {
  const packageItems = [
    {
      title: "1x LAM 1m2 Roof & Facade Louvre",
      description: "The LAM is an automatic multi-bladed smoke exhaust louvre designed to disperse smoke, fumes, and heat from inside buildings to the outside. Standard sizes allow 1m2 of Geometric Free Area, but can also be customised to structural openings up to 9.5m2. It is fitted with a 24v actuator and is EN 12101-2 certified.",
      dataSheet: "MCR LAM Data Sheet",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    },
    {
      title: "1x MPKZ1 Single Zone Control Panel",
      description: "The MPKZ1 Single zone control panel is a fully tested EN12101-10 / EN54 5-amp charger-power supply unit. Each panel can operate independently for smoke and environmental ventilation or used as part of a group.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    },
    {
      title: "1x Battery Backup",
      description: "The control unit is supplied with two 12v 7amp batteries, that are kept charged when the mains power supply is available. When power is unavailable, they guarantee a 72-hour period in standby mode allowing the execution of a complete emergency opening command as prescribed by EN 12101-10.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    },
    {
      title: "1x Fire Override Switches",
      description: "Manual override control for smoke ventilation systems, allowing fire fighters to directly open and close smoke vents and louvres as required.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    },
    {
      title: "1x Break Glass Switch",
      description: "An orange push break glass unit marked smoke vent.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    },
    {
      title: "1x Optical Smoke Detector",
      description: "Detector incorporates a pulsing LED located within the housing of the detector. The external detector moulding has an indicator LED which is clear in quiescent state but produces a red light in alarm.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="louver-page">
        <div className="louver-hero">
          <h1>MPK LAM Louver Staircase Packages</h1>
        </div>

        <div className="louver-content">
          <p>The MPK LAM Louver Staircase Package is inclusive of the following:<br />
             The MPK LAM Louver Lobby Package is inclusive of the following:</p>

          <div className="louver-pricing">
            <p><strong>MPK LAM Louver Staircase Package – £1900 + VAT</strong></p>
            <p><strong>MPK LAM Louver Lobby Package – POA</strong></p>
          </div>

          <div className="louver-items">
            {packageItems.map((item, index) => (
              <div key={index} className="louver-item">
                <div className="louver-item-content">
                  <div className="louver-item-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.dataSheet && (
                      <a href="#" className="data-sheet-link">{item.dataSheet}</a>
                    )}
                  </div>
                  <div className="louver-item-image">
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

export default MPKLAMLouver; 