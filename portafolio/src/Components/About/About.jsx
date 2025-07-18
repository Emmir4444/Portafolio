import React from 'react'
import AboutCard from './AboutCard/AboutCard';
import './About.css';
const About = () => {
  return (
    <section className='about-section'>
          <AboutCard 
        title="Sobre Mi" 
        description="Hola, soy Jorge Emir, tengo 24 años, soy desarrollador web fullstack
        con diversos conocimientos en el area, me gusta mucho desarrollar y aprender nuevas
        tecnologias y crear un ambiente colaborativo." 
      />
             <AboutCard 
        title="Estudios" 
        description="Soy egresado del Instituto Tecnologico de Zacatepec,
        en la carrera de Ingenieria en Sistemas Computacionales y especalizado en
        desarrollo web empresarial." 
      />
      <AboutCard 
  title="Habilidades" 
  description="Frontend: React, Angular.
  Backend: JavaScript, Python, Java.
  Bases de datos: MySQL, MongoDB.
  Servicios en la nube: AWS, Azure.
  Metodologías: Scrum.
  Otros: Git, Docker, Linux."
/>
    </section>
     
   
  )
}

export default About
