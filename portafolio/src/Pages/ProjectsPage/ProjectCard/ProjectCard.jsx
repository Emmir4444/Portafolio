import React from 'react'
import './ProjectCard.css'; 

const ProjectCard = ({title,description,image}) => {
  return (
    <div className='project-card'>
        <img src={image} alt='Project-image' className='project-image' />
        <div className='project-details'>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className='project-button'>View Project</button>
        </div>
    </div>
  )
}

export default ProjectCard
