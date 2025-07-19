import React, { useState, useEffect } from 'react';
import "./Banner.css";
import reactlogo from "../../assets/images/icons8-react-native-50(1).png";
import angularlogo from "../../assets/images/icons8-angular-50.png";
import jslogo from "../../assets/images/icons8-javascript-50.png";
import pythonlogo from "../../assets/images/icons8-python-50.png";
import sqllogo from "../../assets/images/icons8-sql-50.png";
import bannerimagen from "../../assets/images/homeimages/bannerimage-removebg-preview.png";
import bannerfoto from "../../assets/images/homeimages/banner2image-removebg-preview.png";
const Banner = () => {


  return (
    <div className="banner-main-container">
      <div className="banner-text-container">
        <h1 className="banner-title">
            Jorge Emir Beltran
        </h1>
        <p className="banner-subtitle">
            Desarrollador Web Full Stack, programador y entusiasta de la tecnología,
            excelente en la resolución de problemas y apasionado por el aprendizaje continuo,
            buena comunicación y trabajo en equipo.
            b
            </p>
            <div className="banner-buttons">
            <button className="banner-button">Descargar CV</button>
            <button className="banner-button">Contactame</button>
            </div>
            <div className="banner-habilities">
            <img src={reactlogo} alt="React Logo" className="react-logo"/>
            <img src={angularlogo} alt="Angular Logo" className="angular-logo"/>
            <img src={jslogo} alt="JavaScript Logo" className="js-logo"/>
            <img src={pythonlogo} alt="Python Logo" className="python-logo"/>   
             <img src={sqllogo} alt="SQL Logo" className="sql-logo"/>  
                </div>
      </div>
        <div className="banner-image-container">
            <img src={bannerimagen} alt="Banner" />
            </div>
    </div>
  );
}

export default Banner;