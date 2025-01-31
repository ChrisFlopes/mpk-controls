import React from 'react';
import './mechanical-aov-control.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MechanicalAOVControl = () => {
  const controlPanels = [
    {
      title: "Multizone Control Panel",
      description: "Use the latest digital technology allowing a cost effective smoke and environmental control system. The zone board can be connected to multiple accessories such as fireman's key switch, break glasses, fire alarm interfaces and rain sensor control. A fire alarm signal on any floor will override the environmental controls, and ensure that only the floor of activation remains open. Local thermostats can be linked to each zone allowing the ventilators to be used for cooling purposes, while insuring the primary smoke function isn't affected.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-panels-multizone-control-panel.jpg"
    },
    {
      title: "Interface Controls Panel",
      description: "Control system designed to operate both natural and mechanical smoke ventilation systems either by the use of remote zone panels or multi zone control units. Either of the above can be linked via CAN line communication to a remote HDMI panel which shows system and network statuses, flag up any faults, fire alarms and allow single zone, network or global control. Zone Boards are installed either locally or within larger centrally located master control panels and the choice is client or site specific. When used for smoke ventilation the motor run timers are set for maximum opening of the AOV, but when used for natural ventilation can be set for decreased opening periods.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-panels-inferface-control-panel.jpg"
    },
    {
      title: "MAOV Control Panels",
      description: "This group of control panels are used in conjunction with our CAN Line and Multizone systems. and can be operated via inverters for speed control or via DOL. These panels can be adapted to include various size inverters as required.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-panels-maov-control-panel.jpg"
    },
    {
      title: "Single Zone Control Panels",
      description: "Meets the EN12101-Pt 10, EN54 standards and contains our latest digital single zone board. Each panel can be used individually or collectively with the same function as our multi zone system.",
      image: "https://mpkcontrols.co.uk/wp-content/uploads/2021/03/control-panels-single-zone-control-panel.jpg"
    }
  ];

  return (
    <>
      <Header />
      <div className="control-page">
        <div className="control-hero">
          <h1>Mechanical AOV Control Panel</h1>
        </div>

        <div className="control-content">
          <div className="control-intro">
            <p>We have been making control panels for 32 Years, every panel is made in house at our workshop by our highly experienced team.</p>
            
            <p>Before every panel is sent out they are quality checked and tested for a minimum of 24 hours to ensure that they preform as there programming. We have four main types of control panels that can be amended and adapted to suit your projects needs.</p>
            
            <p>Our control panels are tested to comply with the EN12101 Part 10 regulation and EN54.</p>
          </div>

          <div className="control-types">
            {controlPanels.map((panel, index) => (
              <div key={index} className="control-type">
                <div className="control-type-content">
                  <div className="control-type-text">
                    <h3>{panel.title}</h3>
                    <p>{panel.description}</p>
                  </div>
                  <div className="control-type-image">
                    <img src={panel.image} alt={panel.title} />
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

export default MechanicalAOVControl 