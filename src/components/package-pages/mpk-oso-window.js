import React from 'react';
import './mpk-oso-window.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MPKOSOWindow = () => {
  const packageItems = [
    {
      title: "1x OSO AOV Window",
      description: "mcr OSO THERM 75 windows are made of specially designed profiles and accessories. The system is based on sections of 75 mm structure depth, which allows for obtaining a very good thermal insulation parameter. Our range of mcr OSO THERM 75 smoke exhaust windows is characterised with diversity of solutions, thanks to which they can be used in individual assembly as well as in façade systems available on the market.",
      dataSheet: "MCR OSO Window Data Sheet",
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
      <div className="window-page">
        <div className="window-hero">
          <h1>MPK OSO Window Packages</h1>
        </div>

        <div className="window-content">
          <p>The MPK OSO Staircase Window Package is inclusive of the following:<br />
             The MPK OSO Lobby Window Package is inclusive of the following:</p>

          <div className="window-pricing">
            <p><strong>MPK OSO Staircase Window Package – POA</strong></p>
            <p><strong>MPK OSO Lobby Window Package – POA</strong></p>
          </div>

          <div className="window-items">
            {packageItems.map((item, index) => (
              <div key={index} className="window-item">
                <div className="window-item-content">
                  <div className="window-item-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.dataSheet && (
                      <a href="#" className="data-sheet-link">{item.dataSheet}</a>
                    )}
                  </div>
                  <div className="window-item-image">
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

export default MPKOSOWindow; 