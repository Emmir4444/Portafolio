import React from 'react'
import './ContactMe.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import imageLaptop from '../../assets/images/laptop-image.png';

const ContactMe = () => {
  return (
    <section className="contactme-main-container">
      <div className='contactme-container'>
        <div className='contactme-container-text'>
            <h1 className='contactme-text-title'>CONTACTAME  </h1>
            <p className='contactme-text-content' >¿Tienes un proyecto en mente? Ya sea colaboración, oferta laboral o asesoría técnica, estaré encantado de conversar.
                ¿Tienes un proyecto en mente? Ya sea colaboración, oferta laboral o asesoría técnica, estaré encantado de conversar.
                ¿Tienes un proyecto en mente? Ya sea colaboración, oferta laboral o asesoría técnica, estaré encantado de conversar.
            </p>
            <div className='contactme-icons'>
               <a href="#" className="contactme-icon">
                         <FaFacebook size={25} />
                       </a>
               <a href="#" className="contactme-icon">
                         <FaInstagram size={25} />
                       </a>
               <a href="#" className="contactme-icon">
                         <FaLinkedin size={25} />
                       </a>
            </div>

        </div>
        <div className='contactme-container-form'>
           <div className='image-form-container'>
            <img src={imageLaptop} alt='image laptop' className='image-laptop-form'>
            </img>
            <form className="contact-form">
                        <input type="text" placeholder="Nombre" className="form-input" />
                        <input type="email" placeholder="Correo" className="form-input" />
                        <textarea placeholder="Mensaje" className="form-textarea"></textarea>

                    </form>
           </div>
           
           <button className='btn-contactme'>Enviar</button>
            
        </div>
      </div>
    </section>
  )
}

export default ContactMe
