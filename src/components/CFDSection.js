import React from 'react';
import './CFDSection.css';
import defaultProductImage from '../assets/images/default-product-image.jpg';

function CFDSection() {
  return (
    <section className="cfd-section">
      <div className="cfd-content">
        <div className="cfd-text">
          <h2>CFD Modeling Service</h2>
          <p>
            Computational Fluid Dynamic (CFD) Modelling is highly recommended when installing 
            a MOAV system, to prove the functionality of the smoke ventilation design.
          </p>
          <p>
            MPK Controls can provide this as part of our contract via one of our 
            nominated independent CFD engineers.
          </p>
        </div>
        <div className="cfd-image">
          <img src={defaultProductImage} alt="CFD Modeling" />
        </div>
      </div>
    </section>
  );
}

export default CFDSection; 