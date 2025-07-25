import React from 'react'
import {gsap} from 'gsap';
import { useRef,useEffect,useState } from 'react';
import AboutCard from './AboutCard/AboutCard';  
import HabilitiesBar from './HabilitiesBar/HabilitiesBar';
import reactlogo from "../../assets/images/icons8-react-native-50(1).png";

import './About.css';

const About = () => {
  const CardRef1 = useRef(null);
  const CardRef2 = useRef(null);
  const CardRef3 = useRef(null);
  const sectionRef = useRef(null);
  const HabilitieBar= useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered) {
          console.log("Sección 'About' visible. Disparando animaciones de tarjetas.");
          setAnimationTriggered(true); // Marca que ya se disparó la animación
          
          // Asegúrate de que las refs de las tarjetas estén conectadas aquí
          if (CardRef1.current && CardRef2.current && CardRef3.current && HabilitieBar.current) {
            const Masterline = gsap.timeline({
              defaults: { duration: 3, ease: "power2.out" } // Duración ajustada para mejor efecto
            });
            Masterline
              .fromTo(CardRef1.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0)
              .fromTo(CardRef2.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "<0.2")
              .fromTo(CardRef3.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "<0.2")
              .fromTo(HabilitieBar.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, "<0.5");
          } else {
            console.log("Error: Una o más refs de tarjeta son null al intentar animar.");
          }

          observer.disconnect(); // Detiene la observación después de disparar la animación
        }
      },
      {
        root: null, // Observar con respecto al viewport
        rootMargin: '0px',
        threshold: 0.2 // Disparar cuando el 20% de la sección sea visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Función de limpieza para cuando el componente se desmonte
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, [animationTriggered]); // Dependencia para que el efecto se re-ejecute si animationTriggered cambia
  return (
    <section className="about-main-container" ref={sectionRef}>
      <div className='about-cards-container'>
        <AboutCard 
        ref={CardRef1}
        title={'SOBRE MI'}
        content={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'}/>
        <AboutCard
        ref={CardRef2} 
        title={'ESTUDIOS'}
        content={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'}/>
        <AboutCard 
        ref={CardRef3}
        title={'HABILIDADES'}
        content={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...'}/>
        </div>
        <div className='habilitie-container' ref={HabilitieBar}>
        <HabilitiesBar />
        </div>
        </section>
  )
}

export default About
