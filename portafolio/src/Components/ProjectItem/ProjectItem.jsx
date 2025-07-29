import React from 'react'
import './ProjectItem.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const ProjectItem = ({
  title = "NOMBRE DEL PROYECTO",
  description = "Descripcion del proyecto",
  githubLink = "#",
  technologies = [],
  collaboration = { icon: null },
  image
}) => {
  return (
    <div className='projectitem-main-container'>
        <div className='projectitem-container-left'>
            <h1 className='projectitem-title'>{title}</h1>
            <p className='projectitem-description'>{description}</p>
            <a href={githubLink} className='projectitm-button' target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} style={{ marginRight: '8px' }} />
              Ir a Github
            </a>
        </div>
        <div className='projectitem-container-right'>
            <div className='projectitem-container-image'>
                   <img src={image} alt={`Imagen de ${title}`} className='projectitem-image' />
            </div>
            <div className='labels-container'>
                <div className='projectitem-tecnologies'>
                    <h1>Tecnologias</h1>
                    <div className='icons-container'>
                      {technologies.map((tech, index) => (
                        <a key={index} href={tech.link} className="contactme-icon" target="_blank" rel="noopener noreferrer">
                          {tech.icon}
                        </a>
                      ))}
                    </div>
                </div>
                <div className='project-item-label'>
                    <h1>Desarrollo</h1>
                    <a href={collaboration.link} className="contactme-icon" target="_blank" rel="noopener noreferrer">
                      {collaboration.icon}
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem