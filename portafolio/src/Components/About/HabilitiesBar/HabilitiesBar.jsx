import React from 'react';
import './HabilitiesBar.css';

import { FaReact, FaAngular, FaJs, FaJava, FaPython, FaDatabase,
   FaClipboardList, FaDocker, FaGitAlt, FaCloud,FaAws,FaLinux,
  FaHtml5,FaCss3 } from 'react-icons/fa';

const HabilitiesBar = () => {
  return (
    <div className='habilities-bar-container'>
      <h1 className='habilities-bar-title'>HABILIDADES TÉCNICAS</h1>
      <div className='habilities-icons-container'>

        <div className='habilities-icon-wrapper'>
          <FaReact className="habilities-icon" />
          <p className='icon-title'>React</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaAngular className="habilities-icon" />
          <p className='icon-title'>Angular</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaJs className="habilities-icon" />
          <p className='icon-title'>JavaScript</p>
        </div>

        {/* Nuevo Icono de Java añadido aquí */}
        <div className='habilities-icon-wrapper'>
          <FaJava className="habilities-icon" />
          <p className='icon-title'>Java</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaPython className="habilities-icon" />
          <p className='icon-title'>Python</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaHtml5 className="habilities-icon" />
          <p className='icon-title'>HTML</p>

        </div>
                <div className='habilities-icon-wrapper'>
          <FaCss3 className="habilities-icon" />
          <p className='icon-title'>CSS</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaDatabase className="habilities-icon" />
          <p className='icon-title'>SQL</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaClipboardList className="habilities-icon" />
          <p className='icon-title'>SCRUM</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaGitAlt className="habilities-icon" />
          <p className='icon-title'>Git</p>
        </div>

        <div className='habilities-icon-wrapper'>
          <FaAws className="habilities-icon" />
          <p className='icon-title'>AWS</p>
        </div>
        <div className='habilities-icon-wrapper'>
          <FaLinux className="habilities-icon" />
          <p className='icon-title'>Linux</p>
        </div>

      </div>
    </div>
  );
};

export default HabilitiesBar;