import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import myprojectImage from '../../assets/images/myprojects_images.jpg';
import cacao from '../../assets/images/imagesprojects/Captura de pantalla 2025-07-29 005335.png'
import marketplace from '../../assets/images/imagesprojects/marketplace_project.jpg'
import chatbot from '../../assets/images/imagesprojects/chatbot.jpg'
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className='projects-main-container'>
        <h1 className='projects-page-title'>MIS PROYECTOS</h1>
        <div className='projects-cards-container'>
      <ProjectCard 
      image={chatbot}
      title={'ChatBot de Whatsapp'}
      description={'Bot de respuesta automatica para la atencion automatizada de clientes'}/>
            <ProjectCard 
      image={marketplace}
      title={'API de REST para Marketplace de servicios'}
      description={'Backend para marketplace de servicios, API de REST con multiples funciones como login y registro,verificacion e implementacion de Midlewares '}/>
      <button 
      className='projects-button' 
      onClick={() => navigate('/projects')}
    >
      Ver todos
    </button>
</div>

    </section>
  )
}

export default Projects
