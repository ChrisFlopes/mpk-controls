import React from 'react';
import './aov-smoke-vents.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AOVSmokeVents = () => {
  const products = [
    {
      id: "aov-louvered-vents",
      title: "AOV Louvered Vents",
      description: "The LAM is the most cost-effective solution for both smoke and day-to-day ventilation.",
      images: [
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Mcr-LAM-Louver-Open-768x576.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-LAM-louver-closed-768x576.jpg"
      ],
      technicalData: {
        ceParameters: [
          "Re1000 or 300 – operational reliability during 1000/300 cycles",
          "SL125÷1300 – operational certainty under snow load N/m²",
          "WL1500÷4000 – operational certainty under wind stress",
          "B300 – resistance to high temperature of 300°C",
          "T(-25) or T(00) – resistance to low temperature"
        ],
        dimensions: "800 x 500 mm ÷ 3800 x 2500 mm"
      }
    },
    {
      id: "aov-smoke-hatches",
      title: "AOV Smoke Hatches",
      description: "Can be used on both flat and sloping roofs up to 15° in various types of facilities.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-Prolight-Hatch.png",
      technicalData: {
        ceParameters: [
          "Re300 or Re50 – operational reliability",
          "WL1500 or WL750 – operational certainty under wind stress",
          "T(-25) or T(00) – resistance to low temperature",
          "B300 or B600 – resistance to high temperature",
          "SL 250÷950 – operational certainty under snow load"
        ],
        dimensions: "Square: 100x100cm ÷ 200x200cm, Rectangular: 100x120cm ÷ 200x250cm"
      }
    },
    {
      id: "aov-access-hatches",
      title: "AOV Access Hatches",
      description: "Suitable for flat and sloping roofs up to 15° with straight base of height 200mm.",
      images: [
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-Hatch-1-768x576.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-2-open-front-view-768x576.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/Prolight-Acsess-3-open-side-view-768x576.jpg"
      ],
      technicalData: {
        ceParameters: [
          "Snow load class: SL 200 ÷ SL 950",
          "Wind load class: WL 750 ÷ WL 1500",
          "High temperature resistance class: B 300",
          "Reliability: Re300, Re168",
          "Maximum opening time: 60s"
        ],
        dimensions: "Square: 1000x1000 ÷ 1150x1150mm, Rectangular: 800x1200 ÷ 2000x25000mm"
      }
    },
    {
      id: "aov-windows",
      title: "AOV Windows",
      description: "Made of specially designed profiles with 75mm structure depth for excellent thermal insulation.",
      images: [
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-Widnow.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-Window-2.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-window-3.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-window-4.jpg",
        "https://mpkcontrols.co.uk/wp-content/uploads/2021/04/MCR-OSO-window-5.jpg"
      ],
      technicalData: {
        ceParameters: [
          "Re1000 – operational reliability",
          "WL1000/WL1250/WL1500 – wind stress resistance",
          "T(00) – low temperature resistance 0°C",
          "B300 – high temperature resistance 300°C",
          "SL0 – snow load operational certainty"
        ]
      }
    }
  ];

  return (
    <>
      <Header />
      <div className="aov-page">
        <div className="aov-hero">
          <h1>AOV Smoke Vents</h1>
          <p>MPK Controls can supply Smoke hatches, Roof Access Hatches and Louvered Roof Vents of varying sizes to suit.</p>
        </div>

        <div className="aov-products">
          {products.map((product) => (
            <section key={product.id} className="aov-product-section" id={product.id}>
              <div className="aov-product-content">
                <div className="aov-product-image">
                  {product.images ? (
                    <Carousel
                      showArrows={true}
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop={true}
                    >
                      {product.images.map((image, index) => (
                        <div key={index}>
                          <img src={image} alt={`${product.title} - View ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <img src={product.image} alt={product.title} />
                  )}
                </div>
                <div className="aov-product-info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  
                  <div className="aov-technical-data">
                    <h3>Technical Data</h3>
                    <h4>CE parameters acc. to EN 12101-2:</h4>
                    <ul>
                      {product.technicalData.ceParameters.map((param, index) => (
                        <li key={index}>{param}</li>
                      ))}
                    </ul>
                    {product.technicalData.dimensions && (
                      <>
                        <h4>Dimensional range:</h4>
                        <p>{product.technicalData.dimensions}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AOVSmokeVents;
