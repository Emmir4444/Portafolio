import React,{useState} from 'react'
import './ContactMe.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import imageLaptop from '../../assets/images/laptop-image.png';

const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('Enviando...');

        try {
            const response = await fetch('https://portafolio-backend-6n70.onrender.com/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus(data.msg); 
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(data.msg || 'Error al enviar el mensaje.'); 
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setStatus('Error de conexión con el servidor. Intenta más tarde.');
        }
    };

    return (
        <section className="contactme-main-container">
            
            <div className='contactme-container'>
                      <div className='contactme-container-text'>
            <h1 className='contactme-text-title'>CONTACTAME  </h1>
            <p className='contactme-text-content' >"¿Tienes un proyecto interesante en desarrollo? Estoy disponible para colaboraciones, oportunidades laborales o cualquier iniciativa donde pueda aportar mi experiencia. No dudes en contactarme - estaré encantado de explorar cómo podemos trabajar juntos."
         
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
                    <img src={imageLaptop} alt='image laptop' className='image-laptop-form' />
                    
                    <form className="contact-form" onSubmit={handleSubmit}> 
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            className="form-input"
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Correo" 
                            className="form-input"
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                        />
                        <textarea 
                            placeholder="Mensaje" 
                            className="form-textarea"
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange}
                            required
                        ></textarea>
                        
                       
                        <button className='btn-contactme' type="submit" disabled={status === 'Enviando...'}>
                            {status === 'Enviando...' ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
                
                {status && <p style={{ textAlign: 'center', marginTop: '10px' }}>{status}</p>}
            </div>
            </div>

            
        </section>
    );
}

export default ContactMe;