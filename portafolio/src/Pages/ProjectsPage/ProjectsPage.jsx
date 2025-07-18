import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import ProjectCard from './ProjectCard/ProjectCard';
import myprojectsImage from '../../assets/images/myprojects_images.jpg';
import cacaoproject from '../../assets/images/imagesprojects/a.png';
import marketplace from '../../assets/images/imagesprojects/team.webp';
import todolist from '../../assets/images/imagesprojects/todolist.jpg';
import agendador from '../../assets/images/imagesprojects/agendacitas.jpg';
const projectData = [
  { title: "Cacao.Cocoa", description: "Pagina web personalizada para la empresa Cacao-Cocoa", image: cacaoproject },
  { title: "Backend para marketplace de Servicios", description: "Api rest para marketplace de servicios", image: marketplace },
  { title: "To-do list", description: "Administrador de tareas", image: todolist },
  { title: "Agendador de citas", description: "Agendador de citas para hospitales", image: agendador},
  { title: "Administrador de dinero", description: "Sitio para administrar ingresos y egresos", image: myprojectsImage },
  { title: "Sistema experto detector de plagas", description: "Sistema experto para la deteccion de plagas", image: myprojectsImage },
];

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setCardsPerView(1);
      } else if (width <= 900) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView < projectData.length ? prev + cardsPerView : prev
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - cardsPerView >= 0 ? prev - cardsPerView : 0));
  };

  return (
    <section className="projects-page">
      <h1 className="projects-title">Mis Proyectos</h1>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>‹</button>
        <div className="carousel-track">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${(100 / projectData.length) * currentIndex}%)`,
              width: `${(100 / cardsPerView) * projectData.length}%`,
            }}
          >
            {projectData.map((project, index) => (
              <div
                className="carousel-card"
                key={index}
                style={{ flex: `0 0 ${100 / projectData.length}%` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
};

export default ProjectsPage;
