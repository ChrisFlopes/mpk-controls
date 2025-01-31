import React from 'react';
import './penthouse-louvers.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PenthouseLouvers = () => {
  const images = [
    {
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers1.jpg",
    },
    {
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers2.jpg"
    },
    {
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers3.jpg"
    },
    {
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers4.jpg"
    },
    {
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers5.jpg"
    },
    {
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/penthouse-louvers6.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="louvers-page">
        <div className="louvers-hero">
          <h1>Penthouse Louvers</h1>
        </div>

        <div className="louvers-content">
          <div className="louvers-intro">
            <p>This design of louver is for when the system is to be used as a hybrid for environmental and smoke ventilation. When used as a part of an environmental system it allows for fresh air to be available 24/7 without the need to rely on rain sensors to close ventilators, this ensures the building integrity is maintained and replacement air is available at all times.</p>
            
            <p>When installed as part of a smoke vent system AOV is installed on the top opening when the fire mode is activated.</p>
            
            <p>These can be customized to specific sizes and powder coated to an RAL Colour on request.</p>
          </div>

          <div className="louvers-grid">
            {images.map((image, index) => (
              <div key={index} className="louver-image-container">
                <img src={image.url} />
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

export default PenthouseLouvers; 