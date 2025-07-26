import React from 'react'
import './ProjectItem.css'
import myprojectImage from '../../assets/images/myprojects_images.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const ProjectItem2 = () => {
  return (
     <div className='projectitem-main-container'>
            <div className='projectitem-container-right'>
                <div className='projectitem-container-image'>
                    <img src={myprojectImage} alt='projectitem image' className='projectitem-image'>
                    </img>
                </div>
                <div className='labels-container'>
                    <div className='projectitem-tecnologies'>
                        <h1>Tecnologias</h1>
                        <div className='icons-container'>
                        <a href="#" className="contactme-icon">
                                                 <FaFacebook size={25} />
                                               </a>
                                       <a href="#" className="contactme-icon">
                                                 <FaInstagram size={25} />
                                               </a>
                                       <a href="#" className="contactme-icon">
                                                 <FaLinkedin size={25} />
                                               </a>
                    </div></div>
                    <div className='project-item-label'>
                        <h1>Propio</h1>
                        <a href="#" className="contactme-icon">
                                                 <FaInstagram size={25} />
                                               </a>
    
                    </div>
                    </div>
            </div>
             <div className='projectitem-container-left'>
                <h1 className='projectitem-title'>NOMBRE DEL PROYECTO</h1>
                <p className='projectitem-description'>Descripcion del proyecto Explora mi portafolio de desarrollo web donde la innovación se encuentra con la funcionalidad. Cada proyecto representa soluciones técnicas creativas</p>
                <button className='projectitm-button'>Ir a Github</button>
    
            </div>
        </div>
  )
}

export default ProjectItem2
