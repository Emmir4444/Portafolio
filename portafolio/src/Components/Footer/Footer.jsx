import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { DiGithubBadge } from 'react-icons/di';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__section">
            <h3 className="footer__subtitle">For Clients</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Categories</a></li>
              <li className="footer__item"><a href="#" className="footer__link">How it works</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Success stories</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Reviews</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__subtitle">For Talent</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">How it works</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Find work</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Success stories</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Reviews</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__subtitle">Resources</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="/FAQ" className="footer__link">FAQs</a></li> 
              <li className="footer__item"><a href="#" className="footer__link">Help Center</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Blog</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Community</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Events</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__subtitle">Company</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Press</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__social">
        <a href="#" className="footer__icon">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="footer__icon">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="footer__icon">
          <FaInstagram size={24} /> 
        </a>
        <a href="#" className="footer__icon">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="footer__icon" style={{ marginTop: '-5px' }}>
          <DiGithubBadge size={34} />
        </a>
      </div>

      <div className="footer__bottom">
        <ul className="footer__policies">
          <li className="footer__policy"><a href="#" className="footer__link">Terms of Service</a></li>
          <li className="footer__policy"><a href="#" className="footer__link">Privacy Policy</a></li>
          <li className="footer__policy"><a href="#" className="footer__link">CA Notice at Collection</a></li>
          <li className="footer__policy"><a href="#" className="footer__link">Cookie Settings</a></li>
          <li className="footer__policy"><a href="#" className="footer__link">Accessibility</a></li>
        </ul>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Conectta! Global Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
