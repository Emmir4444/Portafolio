import React from 'react'
import './ProjectCard.css';
import myprojectImage from '../../../assets/images/myprojects_images.jpg';

const ProjectCard = ({image,title,description}) => {
  return (
    <div className='project-card-container'>
        <div className='project-card-image-container'>
        <img src={image} alt="Project Thumbnail" className="project-thumbnail" />
        </div>
        <h1 className='project-card-title'>{title}</h1>
        <p className='project-card-description'>{description}</p>
        <button className='project-card-button'>Ver Proyecto</button>
    </div>
  )
}

export default ProjectCard
