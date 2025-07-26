import React from 'react';
import './ProjectsPage.css';
import ProjectItem from '../../Components/ProjectItem/ProjectItem';
import ProjectItem2 from '../../Components/ProjectItem/ProjectItem2';

const ProjectsPage = () => {
  return (
    <section className='projects-page-main'>
        <header className='projects-page-header'>
            <h1 className='projects-page-title'>PROYECTOS</h1>
            <div className='filters-container'>
                <p>Filtar Por</p>
            
            <div className='selects-container'>
                   <select
        className='select-project'
        name="sortOrder" /* Add a name for form submission */
        id="sortOrder" /* Add an ID for accessibility (e.g., with a <label>) */
        defaultValue="" /* Set a default value to work with the placeholder option */
    >
        <option value="" disabled>Nombre</option> {/* Placeholder option */}
        <option value="asc">A--Z</option>
        <option value="desc">Z--A</option>
    </select>

    <select
        className='select-project'
        name="technologyFilter" /* Add a name for form submission */
        id="technologyFilter" /* Add an ID for accessibility */
        defaultValue="" /* Set a default value to work with the placeholder option */
    >
        <option value="" disabled>Tecnología</option> {/* Placeholder option */}
        <option value="nodejs">Node.js</option>
        <option value="python">Python</option>
        {/* Add more technology options as needed */}
        <option value="react">React</option>
        <option value="htmlcss">HTML/CSS</option>
    </select>
            </div>
            </div>
            </header>
        
        <div className='projectitems-container'>
        <ProjectItem/>
        <ProjectItem2/>
       
        </div>
        
      
    </section>
  )
}

export default ProjectsPage
