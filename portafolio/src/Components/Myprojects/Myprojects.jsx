import React from 'react'
import './Myprojects.css';
import projectsimages from '../../assets/images/myprojects_images.jpg';
const Myprojects = () => {
  return (
   <section className='myprojects-main'>
        <div className='myprojects-container'>
            
          <div className='myprojects-image'>
           <img src={projectsimages} alt="My Projects" />
            </div>   
            <div className='myprojects-text'>
                <h1 >Mis Proyectos</h1>
                <p>Here you can find some of my projects that I have developed using various technologies. Each project showcases my skills and creativity in web development.</p>
                <button className='myprojects-button' >View Projects</button>
                </div>   
            </div>
    </section>
  )
}

export default Myprojects
