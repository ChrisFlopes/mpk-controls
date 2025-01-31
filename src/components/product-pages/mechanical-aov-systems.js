import React from 'react';
import './mechanical-aov-systems.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MechanicalAOVSystems = () => {
  const images = [
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/maov-systems1.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/maov-systems2-1024x1024.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/maov-systems3-1024x1024.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/maov-systems4-1024x1024.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/maov-systems5-1024x1024.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Fan-panel-front-view.jpg",
    "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Fan-panel-1.jpg"
    // Add more images if available
  ];

  return (
    <>
      <Header />
      <div className="mechanical-page">
        <div className="mechanical-hero">
          <h1>Mechanical AOV Systems</h1>
        </div>

        <div className="mechanical-content">
          <div className="mechanical-section">
            <div className="mechanical-grid">
              <div className="mechanical-image">
                {images.length > 1 ? (
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                  >
                    {images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Mechanical AOV System - View ${index + 1}`} />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <img src={images[0]} alt="Mechanical AOV System" />
                )}
              </div>
              
              <div className="mechanical-info">
                <div className="mechanical-description">
                  <p>
                    Mechanical smoke extract systems are often required where a natural ventilation system is not suitable.
                  </p>
                  <p>
                    One of the main benefits of a mechanical extract system is the possibility of estimating accurately its performance, as it will extract a certain volume of air in a consistent manner, and comply precisely with any given fire strategy.
                  </p>
                  <p>
                    In addition, mechanical smoke shafts can often be utilised not only as a life safety system, but also as a dual function to allow common areas to be ventilated in day-to-day use.
                  </p>
                </div>

                <div className="contact-section">
                  <a href="/contact" className="contact-button">Contact us for more information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MechanicalAOVSystems;
