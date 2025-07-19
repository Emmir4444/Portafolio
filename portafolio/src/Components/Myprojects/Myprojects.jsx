import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Myprojects.css';
import projectsimages from '../../assets/images/myprojects_images.jpg';
const Myprojects = () => {
  const navigate = useNavigate();
  return (
   <section className='myprojects-main'>
        <div className='myprojects-container'>
            
          <div className='myprojects-image'>
           <img src={projectsimages} alt="My Projects" />
            </div>   
            <div className='myprojects-text'>
                <h1 >Mis Proyectos</h1>
                <p>Echa un vistazo a mis proyectos desarrollados y en los que e colaborado, quizas puedas encontrar algo de tu interes.</p>
                <button className='myprojects-button' 
                 onClick={() => navigate("/projects")}  >Ver Proyectos</button>
                </div>   
            </div>
    </section>
  )
}

export default Myprojects
