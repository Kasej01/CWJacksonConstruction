import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const serviceMap = process.env.PUBLIC_URL + '/service_map.png';

const services = [
  {
    title: 'Dump Truck Services',
    description: 'Gravel, topsoil, and fill dirt delivery.',
  },
  {
    title: 'Debris Removal',
    description: 'Removal of trees, buildings, and more.',
  },
  {
    title: 'All Size Projects',
    description: 'Driveways, carports, parking lots, and more.',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-banner-content">
          <h1>Welcome to CW Jackson Construction</h1>
          <p>
            A small, locally owned and operated business in Grundy County, TN, offering reliable dump truck services, debris removal, and more.
          </p>
          <button className="contact-cta-btn" onClick={handleContactClick}>
            Have a question or want a quote? Contact Us!
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card-title">{service.title}</div>
              <div className="service-card-desc">{service.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area Section */}
      <section className="service-areas">
        <h2>Our Service Area</h2>
        <img src={serviceMap} alt="Service Area Map" className="service-map-img" />
        <div className="county-list-title">We proudly serve:</div>
        <ul className="county-list">
          <li>Grundy County</li>
          <li>Franklin County</li>
          <li>Coffee County</li>
          <li>Parts of Marion County</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
