import React from 'react'
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import ContactMe from '../../Components/ContactMe/ContactMe'
import DevelopmentModal from '../../Components/DevelopmentModal/DevelopmentModal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Home.css';


const Home = () => {
  return (
    <section className="home">
      <DevelopmentModal />
      <Banner />
      <About />
      <Projects />
      <ContactMe/>  
  </section>
  )

}

export default Home
