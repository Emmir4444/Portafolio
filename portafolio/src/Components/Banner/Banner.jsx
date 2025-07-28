import React, { useState, useEffect, useRef } from 'react'; // Asegúrate de importar useRef
import { gsap } from 'gsap';
import "./Banner.css";
// Importaciones de imágenes (asegúrate de que las rutas son correctas y los nombres de archivo no tienen caracteres especiales)
import reactlogo from "../../assets/images/icons8-react-native-50(1).png";
import angularlogo from "../../assets/images/icons8-angular-50.png";
import jslogo from "../../assets/images/icons8-javascript-50.png";
import pythonlogo from "../../assets/images/icons8-python-50.png";
import sqllogo from "../../assets/images/icons8-sql-50.png";
import bannerimagen from "../../assets/images/homeimages/fotoimage-removebg-preview.png";

const Banner = () => {
  // 1. Crea refs para cada elemento/contenedor que quieras animar
  const bannerImgRef = useRef(null);
  const bannerTitleRef = useRef(null);   // Ref para el h1
  const bannerSubtitleRef = useRef(null); // Ref para el p
  const bannerIconsRef = useRef(null);    // Ref para el div de iconos
  const bannerButtonsRef = useRef(null);  // Ref para el div de botones

  useEffect(() => {
    console.log('--- useEffect se ha ejecutado ---');
    console.log('bannerImgRef.current:', bannerImgRef.current);
    console.log('bannerTitleRef.current:', bannerTitleRef.current);
    console.log('bannerSubtitleRef.current:', bannerSubtitleRef.current);
    console.log('bannerIconsRef.current:', bannerIconsRef.current);
    console.log('bannerButtonsRef.current:', bannerButtonsRef.current);


    // 2. Comprueba que TODOS los elementos existan antes de iniciar la animación
    if (bannerImgRef.current && bannerTitleRef.current && bannerSubtitleRef.current && bannerIconsRef.current && bannerButtonsRef.current) {
      console.log('Todos los elementos encontrados. Iniciando Masterline...');
      const Masterline = gsap.timeline({
        defaults: { duration: 2, ease: "power2.out" } 
      });
      Masterline
       
        .fromTo(bannerTitleRef.current, 
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1 }, 0.2)

        .fromTo(bannerSubtitleRef.current, 
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1 }, "<0.2")

       
        .fromTo(bannerIconsRef.current, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 }, "<0.3")

  
        .fromTo(bannerButtonsRef.current, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 }, "<0.3")


        .fromTo(bannerImgRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power2.inOut" }, 0); 
    } else {
    }
  }, []); 

  return (
    <div className="banner-main-container">
      <div className="banner-container">
        <div className="banner-text">
          <h1 className="banner-title" ref={bannerTitleRef}>BIENVENIDO A MI PORTAFOLIO</h1>
          <p className="banner-subtitle" ref={bannerSubtitleRef}>Soy un Desarrollador Web Full Stack entusiasta. Te invito a explorar mi portafolio para conocer más sobre mi trabajo y habilidades </p>

          <div className="banner-icons" ref={bannerIconsRef}>
            <img src={reactlogo} alt="React Logo" className="banner-icon" />
            <img src={angularlogo} alt="Angular Logo" className="banner-icon" />
            <img src={jslogo} alt="JavaScript Logo" className="banner-icon" />
            <img src={pythonlogo} alt="Python Logo" className="banner-icon" />
            <img src={sqllogo} alt="SQL Logo" className="banner-icon" />
          </div>

          <div className="banner-buttons" ref={bannerButtonsRef}>
            <button className="banner-button">Descargar CV</button>
            <button className="banner-button">Contactar</button>
          </div>
        </div>

        <div className="banner-image">
          <img src={bannerimagen} alt="Banner" className="banner-img" ref={bannerImgRef} />
        </div>
      </div>
    </div>
  );
}

export default Banner;