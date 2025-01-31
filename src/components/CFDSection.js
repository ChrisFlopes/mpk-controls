import React from 'react';
import './CFDSection.css';

function CFDSection() {
  return (
    <section className="cfd-page">
      <div className="cfd-content">
        <div className="cfd-section">
          <div className="cfd-text">
            <h2>CFD Modeling Service</h2>
            <p>
              Computational Fluid Dynamic (CFD) Modelling is highly recommended when 
              installing a MOAV system, to prove the functionality of the smoke ventilation 
              design.
            </p>
            <p>
              MPK Controls can provide this as part of our contract via one of our 
              nominated independent CFD engineers.
            </p>
          </div>
          <div className="cfd-video-container">
            <video 
              className="cfd-video"
              controls
              muted
            >
              <source 
                src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/Stratford-Smoke-Extract-CFD-Report-Issue1.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CFDSection; 