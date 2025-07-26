import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import myprojectImage from '../../assets/images/myprojects_images.jpg';
const Projects = () => {
  return (
    <section className='projects-main-container'>
        <h1 className='projects-page-title'>MIS PROYECTOS</h1>
        <div className='projects-cards-container'>
      <ProjectCard 
      image={myprojectImage}
      title={'Cacao-cocoa'}
      description={'"Explora mi portafolio de desarrollo web donde la innovación se encuentra con la funcionalidad. Cada proyecto representa soluciones técnicas creativas, código limpio y diseños centrados en el usuario. Desde aplicaciones responsivas hasta interfaces dinámicas, aquí podrás ver mi enfoque metódico y mi pasión por la excelencia técnica."'}/>
            <ProjectCard 
      image={myprojectImage}
      title={'Marketplace de servicios'}
      description={'"Explora mi portafolio de desarrollo web donde la innovación se encuentra con la funcionalidad. Cada proyecto representa soluciones técnicas creativas, código limpio y diseños centrados en el usuario. Desde aplicaciones responsivas hasta interfaces dinámicas, aquí podrás ver mi enfoque metódico y mi pasión por la excelencia técnica."'}/>
      <button className='projecs-button'>ver todos</button>
</div>

    </section>
  )
}

export default Projects
