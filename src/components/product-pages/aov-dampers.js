import React, { useState } from 'react';
import './aov-dampers.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AOVDampers = () => {
  const mediaItems = [
    {
      type: 'video',
      url: "https://www.youtube.com/embed/pgDIko6I1To",
    },
    {
      type: 'video',
      url: "https://www.youtube.com/embed/pNxYuUo2C1A",
    },
    {
      type: 'image',
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-shaft-damper3.jpg",
      title: "Pre Grille",
      description: "As you can see the damper has been painted black to minimise the visibility when a grille has been fitted."
    },
    {
      type: 'image',
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-shaft-damper1.jpg",
      title: "Grille Fitted",
      description: "Grille fitted with a black damper behind rather than the standard factory silver."
    },
    {
      type: 'image',
      url: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/smoke-shaft-damper2.jpg",
      title: "Side View",
      description: "Once the damper has been fitted you can clearly see there is minimal protrusion from the wall."
    }
  ];

  return (
    <>
      <Header />
      <div className="dampers-page">
        <div className="dampers-hero">
          <h1>AOV Dampers</h1>
        </div>

        <div className="dampers-content">
          <div className="dampers-intro">
            <p>All dampers we supply can be used for code compliant and MAOV extract systems, these are tested to meet the EN1201 Part 8 regulation. The dampers can be ordered in various sizes & colours to meet site specifications.</p>
            
            <p>Below you will see an example of one damper on a five floor building working in conjunction with one of our air inlet louvers, the shaft is linked to two mechanical extract fans positioned within the smoke shaft.</p>
            
            <p>On this example the building required a 20 second delay before the fans started running.</p>

            <a href="#" className="data-sheet-link">Smoke Shaft Damper Data Sheet</a>
          </div>

          <div className="media-section">
            <div className="videos-row">
              {mediaItems.slice(0, 2).map((item, index) => (
                <div key={index} className="video-container">
                  <div className="video-wrapper">
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.url}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="media-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="images-row">
              {mediaItems.slice(2).map((item, index) => (
                <div key={index} className="image-container">
                  <img src={item.url} alt={item.title} />
                  <div className="media-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
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

export default AOVDampers; 