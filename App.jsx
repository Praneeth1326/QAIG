import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="bg-grid"></div>
      <nav>
        <div className="logo-area">
          <img src="https://media.licdn.com/dms/image/v2/C560BAQG8CpJEvvdJiQ/company-logo_200_200/company-logo_200_200/0/1675601604144?e=2147483647&v=beta&t=b4xNz_qoN54ksuj2Jw6QW8rEvgJ2b7wUIlveJfmt9UA" alt="Quantam AI Global Logo" className="logo-img"/>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li className="dropdown">
            <a href="#">Company</a>
            <ul className="dropdown-menu">
              <li><a href="Aboutus.html">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Products</a>
            <ul className="dropdown-menu">
              <li><a href="#">Quantam-AI</a></li>
              <li><a href="#">Market Fit</a></li>
            </ul>
          </li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Our IP's</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>
      <main>
        <div className="welcome-block">
          <h1>
            <span className="welcome-to">Welcome To</span><br />
            <span className="brand-gradient">Quantam AI Global</span>
          </h1>
          <div className="subtitle">Leading the way in Quantum & AI Solutions</div>
          <a href="#" className="explore-btn">Explore more</a>
        </div>
        <section className="about-section">
          <h1 className="about-title">Explore Quantum Revolution at</h1>
          <h1 className="about-gradient">Quantam AI Global</h1>
          <p className="about-desc">
            Quantum AI Global is unique in its approach to Quantum Technology powered by Intelligence. We are the forefront of the quantum development in hardware and software. We started our work in late 2018 with the establishment of Qulabs, a dedicated Quantum lab under Quantum AI Global with a vision to build and commercialise technologies necessary for long-distance quantum-secure communication in India.<br />
            We thrive on our motto ‘collaboration and not competition’, a practical direction to unite intelligence towards building applications for quantum technologies.
          </p>
          <div className="features-row">
            <div className="feature-card animate-fadein">
              <h2 className="feature-title">Products</h2>
              <p>
                All our algorithms are designed with a vision of future in quantum space and are scalable, able to solve problems that are too big or too difficult for current technologies.
              </p>
              <a href="#" className="feature-btn">Learn more</a>
            </div>
            <div className="feature-card animate-fadein" style={{ animationDelay: "0.2s" }}>
              <h2 className="feature-title">Services</h2>
              <p>
                Our services are designed to help businesses leverage the power of quantum computing and AI. We offer consulting, development, and implementation services tailored to your needs.
              </p>
              <a href="#" className="feature-btn">Learn more</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-logo-block">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQG8CpJEvvdJiQ/company-logo_200_200/company-logo_200_200/0/1675601604144?e=2147483647&v=beta&t=b4xNz_qoN54ksuj2Jw6QW8rEvgJ2b7wUIlveJfmt9UA"
              alt="Quantam AI Global Logo"
              className="footer-logo-img"
            />
            <div className="footer-brand">
              <span className="footer-brand-main">QUANTUM AI</span>
              <span className="footer-brand-sub">GLOBAL</span>
            </div>
          </div>
          <div className="footer-links-block">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Quantum-AI</a></li>
              <li><a href="#">Market Fit</a></li>
              <li><a href="#">Our IP's</a></li>
            </ul>
          </div>
          <div className="footer-links-block">
            <h3>Company</h3>
            <ul>
              <li><a href="Aboutus.html">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div className="footer-contact-block">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <span className="footer-icon">&#9993;</span>
                <a href="mailto:info@thequantum.ai">info@thequantum.ai</a>
              </li>
              <li>
                <span className="footer-icon">&#128222;</span>
                <a href="tel:+17322274433">+1 (732) 227 4433</a>
              </li>
            </ul>
            <div className="footer-social">
              <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Quantam AI Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;