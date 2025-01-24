import React from 'react';
import './ProductDetailPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import defaultProductImage from '../assets/images/default-product-image.jpg';

function ProductDetailPage() {
  const sections = [
    {
      title: "AOV Louvered Vents",
      image: defaultProductImage,
      description: `The LAM is the most cost-effective solution for both smoke and day-to-day ventilation. The LAM vent extracts large volumes of smoke, utilizing the buoyancy of hot gases in the rising plume. Natural day-to-day ventilation is driven by pressure differences to move fresh air through the building. Pressure differences are caused by wind or the buoyancy effect created by temperature differences commonly known as the "stack effect".

      The LAM is a very versatile ventilator that can be installed at any angle from horizontal through to vertical, making the product widely used in a variety of building types, typically distribution centres, industrial and commercial buildings.

      The LAM is available with various louvre types including insulated aluminium, clear and opaque polycarbonate. Operated either electrically or pneumatically with base options for fixing onto roof sheeting or upstand or vertically into brickwork, glazing or wall cladding.`,
      technicalData: `CE parameters acc. to EN 12101-2:
      • Re1000 or 300 – operational reliability during 1000/300 cycles
      • SL125÷1300 – operational certainty under snow load N/m2
      • WL1500÷4000– operational certainty under wind stress
      • B300 – resistance to high temperature of 300°C
      • T(-25) or T(00) – resistance to low temperature
      
      Dimensional range: 800 x 500 mm ÷ 3800 x 2500 mm`
    },
    {
      title: "AOV Smoke Hatches",
      image: defaultProductImage,
      description: `Prolight Hatches can be used on both flat and sloping roofs up to 15° in various types of facilities such as: production and storage halls, logistic centres, public buildings, retail and service buildings and residential buildings.

      Straight base of height 200mm made of galvanised sheet of 1.25 mm thickness. Circumferential strip in the upper part of base, made of galvanised steel sheet, used for fixing roof work.

      Leaf glazing: cellular polycarbonate opal 10mm panel`,
      technicalData: `CE parameters acc. to EN 12101-2:
      • Re300 or Re50 – operational reliability during 300/50 cycles
      • WL1500 or WL750 – operational certainty under wind stress
      • T(-25) or T(00) – resistance to low temperature
      • B300 or B600 – resistance to high temperature
      • SL 250÷950– operational certainty under snow load N/m2
      
      Dimensional range:
      • C type (square): 100 x 100 cm ÷ 200 x 200 cm
      • E type (rectangular): 100 x 120 cm ÷ 200 x 250 cm`
    },
    {
      title: "AOV Access Hatches",
      image: defaultProductImage,
      description: `The Prolight hatch can be used on both flat and sloping roofs up to 15° in various types of facilities such as: production and storage halls, logistic centres, public buildings, retail and service buildings and residential buildings.

      Straight base of height 200mm made of galvanised sheet of 1.25 mm thickness. Circumferential strip in the upper part of base, made of galvanised steel sheet, used for fixing roof work.

      Leaf glazing: cellular polycarbonate opal 10mm panel`,
      technicalData: `Declaration of constancy of performance (1396-CPR-0126):
      • Snow load class: SL 200 ÷ SL 950
      • Wind load class: WL 750 ÷ WL 1500
      • High temperature resistance class: B 300
      • Reliability: Re300, Re168 and 10,000 cycles
      • Maximum vent opening time: 60 [s]
      • Vent opening angle: ≥140º`
    },
    {
      title: "AOV Windows",
      image: defaultProductImage,
      description: `MCR OSO THERM 75 windows are made of specially designed profiles and accessories. The system is based on sections of 75 mm structure depth, which allows for obtaining a very good thermal insulation parameter. Our range of MCR OSO THERM 75 smoke exhaust windows is characterised with diversity of solutions, thanks to which they can be used in individual assembly as well as in façade systems available on the market.`,
      technicalData: `Certificate of constancy of performance 1396-CPR-0128:
      • Re1000 – operational reliability during 1000 cycles
      • WL1000 / WL1250 / WL1500 – operational certainty
      • T(00) – resistance to low temperature 0°C
      • B300 – resistance to high temperature 300°C
      • SL0 – operational certainty under snow load 0 N/m`
    }
  ];

  return (
    <div className="product-detail-page">
      <Header />
      <div className="page-header">
        <h1>AOV Smoke Vents</h1>
        <p className="subtitle">MPK Controls can supply Smoke hatches, Roof Access Hatches and Louvered Roof Vents of varying sizes to suit.</p>
      </div>
      {sections.map((section, index) => (
        <section key={index} className="product-section">
          <div className="main-content">
            <div className={`content-wrapper ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="section-image">
                <img src={section.image} alt={section.title} />
              </div>
              <div className="section-content">
                <h2>{section.title}</h2>
                <div className="description">
                  {section.description.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
                </div>
                <div className="technical-content">
                  <h3>Technical Data</h3>
                  <pre>{section.technicalData}</pre>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="datasheet-button">Download Data Sheet</button>
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}

export default ProductDetailPage; 