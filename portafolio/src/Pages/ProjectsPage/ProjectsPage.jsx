import React, { useState } from 'react';
import './ProjectsPage.css';
import ProjectItem from '../../Components/ProjectItem/ProjectItem';
import { FaReact, FaNodeJs, FaPython,FaAws,FaUser,FaUsers,FaWhatsapp,FaAngular } from 'react-icons/fa';
import myprojectImage from '../../assets/images/myprojects_images.jpg';
import marketplaceImage from '../../assets/images/imagesprojects/marketplace_project.jpg'
import cacao from '../../assets/images/imagesprojects/Captura de pantalla 2025-07-29 005335.png'
import chatbot from '../../assets/images/imagesprojects/chatbot.jpg'
import list from '../../assets/images/imagesprojects/image.png'

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "ChatBot de Whatsapp",
      description: "Bot de respuesta automatica para la atencion automatizada de clientes, utilizando diversos formatos de mensajes como texto, imagenes y botones interactivos, el bot esta desarrollado en Node.js utilizando la libreria open-source Baileys para la conexion con la API de Whatsapp Web.",
      githubLink: "https://github.com/Emmir4444/whatsapp-bot",
      buttontext: "Ir a Github",
      image:chatbot,
            technologies:[
        {icon:<FaNodeJs size={25}/> },
        {icon:<FaWhatsapp size={25}/> },
        
      ],
      collaboration: { icon: <FaUser size={25} />, },
      
    },
   
    {
      id: 2,
      title: "API REST con Node.js",
      description: "Backend para aplicación de gestión de multiples tareas con autenticación JWT y base de datos MongoDB, el software realiza registros, autenticaciones y verificaciones de usuarios, asi como manejo de perfiles, se requirio el uso de los servicios de AWS para las diversas tareas como SES para la verificación de cuentas y S3 para el almacenamiento de imagenes .",
      githubLink: "https://github.com/Emmir4444/Upwork",
      image:marketplaceImage,
      technologies:[
        {icon:<FaNodeJs size={25}/> },
        {icon:<FaAws size={25}/> }
      ],
      collaboration: { icon: <FaUser size={25} />, }
    },

     {
      id: 3,
      title: "Pagina personalizda con React",
      description: "Plataforma personalizada para negocio en linea en la cual se busco atrapar el interes por el producto, la pagina cuenta con diversos componentes para la difusión del producto y estilo de vida del dueño, en esta pagina se utilizo react.js para el frontend y node.js para el backend.",
      githubLink: "https://thecacaococoa.com/",
      image:cacao,
      technologies: [
        { icon: <FaReact size={25} />},
        { icon: <FaNodeJs size={25} />, }
      ],
      collaboration: { icon: <FaUsers size={25} />, },
      buttontext: "¡Visitar!"

      
    },
    {
      id: 4,
      title: "To do list",
      description: "Administrador de tareas utilizando Angular para el frontend y Flask para el backend, permitiendo a los usuarios crear, editar y eliminar tareas de manera eficiente.",
      githubLink: "https://github.com/tu-usuario/ecommerce-react",
      image:list,
      technologies: [
        { icon: <FaAngular size={25} />},
        { icon: <FaPython size={25} />, }
      ],
      collaboration: { icon: <FaUsers size={25} />, }
      
    },
    
  ]);

  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    
    const sortedProjects = [...projects].sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else if (order === 'desc') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
    
    setProjects(sortedProjects);
  };

  return (
    <section className='projects-page-main'>
      <header className='projects-page-header'>
        <h1 className='projects-page-title'>PROYECTOS</h1>
        <div className='filters-container'>
          <p>Ordenar</p>
          <div className='selects-container'>
            <select
              className='select-project'
              name="sortOrder"
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="" disabled>Nombre</option>
              <option value="asc">A--Z</option>
              <option value="desc">Z--A</option>
            </select>
          </div>
        </div>
      </header>
      
      <div className='projectitems-container'>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            image={project.image}
            technologies={project.technologies}
            collaboration={project.collaboration}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;