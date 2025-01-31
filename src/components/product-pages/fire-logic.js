import React from 'react';
import './fire-logic.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FireLogic = () => {
  return (
    <>
      <Header />
      <div className="fire-logic-page">
        <div className="fire-logic-hero">
          <h1>Fire Logic</h1>
        </div>

        <div className="fire-logic-content">
          <div className="section-with-image">
            <div className="text-content">
              <h2>General Specification</h2>
              <p>
                "Firelogic Plus" is an addressable intelligent control system with the ability to integrate 
                fire safety systems into a single control unit. It provides the ultimate notification and 
                operation of essential life safety systems in both normal and fire conditions.
              </p>
              <h2>Product Summary</h2>
              <p>
                The BS 5839/EN54 compliant control panel system was designed in response to client 
                requirements for enhanced intelligent monitoring of all fire safety systems, that was 
                true open protocol with components and programming supplied by established third party companies.
              </p>
              <p>
                The system manages and monitors smoke detection, sounders, smoke ventilation systems, 
                corridor air change systems, AOV (automatic opening vents,) door mag locks, emergency 
                lift control, fireman's override switches, fire and smoke curtains, sprinkler systems, 
                damper control, roof and stair vent control and access door control in a single, open 
                protocol, life safety control system.
              </p>
            </div>
            <div className="image-container">
              <img 
                src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/fire-logic.jpg"
                alt="Fire Logic System"
                className="product-image"
              />
            </div>
          </div>

          <section className="building-wide">
            <h2>Building-Wide Fire Safety Management</h2>
            <p>
              The "Firelogic Plus" panel is true open protocol, using Advanced world renowned MxPro 5 
              is their highest performance, analogue addressable fire panel and is approved to EN54 
              Parts 2, 4 and 13. It is also certified by FM approvals to EN54 Parts 2 and 4.
            </p>
            <p>
              The system constantly monitors all system components and reports any faults. The panel 
              incorporates an LCD display with menu driven messages.
            </p>
            <p>
              TouchControl is Advanced's first fire touchscreen. We've taken a different approach to 
              ensure our users get the performance they expect. TouchControl features active maps and 
              zone plans that dynamically show zone status information and allow navigation.
            </p>
            <p>
              The panels can be surface or recessed mounted. Adspecials enclosures can be supplied 
              which can incorporate site or customer specific requirements.
            </p>
            <p>
              Fire Alarm devices are from Apollo Fire Detectors Ltd specialises in the design and 
              manufacture of high-quality fire detection solutions for commercial and industrial 
              applications. From their base in Havant, near Portsmouth on the UK's south coast, 
              they have, for over 40 years, designed and built products that save lives and protect 
              property from the risk of fire.
            </p>
            <div className="image-container centered-image">
              <img 
                src="https://mpkcontrols.co.uk/wp-content/uploads/2021/03/fire-logic-control-panel.jpg"
                alt="Fire Logic Control Panel"
                className="product-image"
              />
            </div>
          </section>

          <section className="components">
            <h2>Components</h2>
            <p>
              All the electronic components are tested and compliant to British Standard: BS 5839. 
              By designing to this industry standard and ensuring all components are open protocol, 
              it allows for 'off the shelf' availability from numerous sources, and ensures the 
              client has a system that can be maintained and modified by any qualified fire alarm 
              engineer and not the usual closed protocol smoke venting installation company which 
              traditionally needed to be tied in for the life of the system.
            </p>
          </section>

          <section className="features">
            <h2>Features</h2>
            <ul>
              <li>Designed to British Standard BS 5839-1:2008 Fire detection and fire alarm systems for buildings</li>
              <li>All components compliant with BS 5839/EN54</li>
              <li>Enables all fire safety and security systems to be integrated by a single control panel</li>
              <li>Intelligent system</li>
              <li>True open protocol</li>
              <li>Monitors and reports on all fire safety systems</li>
              <li>Facilitates the interface between other systems such as sprinkler monitoring and door entry systems</li>
              <li>Easy to install, program and operate</li>
              <li>One 2-core cable links all devices</li>
              <li>Detection system will only open floor of detection</li>
            </ul>
          </section>

          <div className="contact-section">
            <a href="/contact" className="contact-button">Contact us for more information</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FireLogic; 