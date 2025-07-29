import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import myprojectImage from '../../assets/images/myprojects_images.jpg';
import cacao from '../../assets/images/imagesprojects/Captura de pantalla 2025-07-29 005335.png'
import marketplace from '../../assets/images/imagesprojects/marketplace_project.jpg'
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
  return (
    <section className='projects-main-container'>
        <h1 className='projects-page-title'>MIS PROYECTOS</h1>
        <div className='projects-cards-container'>
      <ProjectCard 
      image={cacao}
      title={'Cacao-cocoa'}
      description={'Pagina personalizada de negocio de venta de chocolates, multiples secciones y apartados como Landing Page,Contactanos,Blog,Eventos, etc..'}/>
            <ProjectCard 
      image={marketplace}
      title={'Marketplace de servicios'}
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
