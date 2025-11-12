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
            <h3 className="footer__subtitle">Para Clientes</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Mis proyectos</a></li>

            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__subtitle"> Contactame</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Redes Sociales</a></li>

              <li className="footer__item"><a href="#" className="footer__link">Contactos</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__subtitle">Mis trabajos</h3>
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Blog</a></li>
             <li className="footer__item"><a href="https://github.com/Emmir4444" target="_blank" rel="noopener noreferrer" className="footer__link">Repositorio</a></li>
            </ul>
          </div>

         
        </div>
      </div>

<div className="footer__social">
    {/* Facebook */}
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer__icon">
        <FaFacebook size={24} />
    </a>
    {/* X (Twitter) */}
    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="footer__icon">
        <FaTwitter size={24} />
    </a>
    {/* Instagram */}
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer__icon">
        <FaInstagram size={24} /> 
    </a>
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer__icon">
        <FaLinkedin size={24} />
    </a>
    {/* GitHub (Ya corregido) */}
    <a href="https://github.com/Emmir4444" target="_blank" rel="noopener noreferrer" className="footer__icon" style={{ marginTop: '-5px' }}>
        <DiGithubBadge size={34} />
    </a>
</div>

      <div className="footer__bottom">
        <ul className="footer__policies">
          <li className="footer__policy"><a href="#" className="footer__link"></a></li>
          <li className="footer__policy"><a href="#" className="footer__link"></a></li>
          <li className="footer__policy"><a href="#" className="footer__link"></a></li>
          <li className="footer__policy"><a href="#" className="footer__link"></a></li>
          <li className="footer__policy"><a href="#" className="footer__link"></a></li>
        </ul>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
