import React from 'react'
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import ContactMe from '../../Components/ContactMe/ContactMe'
import './Home.css';


const Home = () => {
  return (
    <section className="home">
      <Banner />
      <About />
      <Projects />
      <ContactMe/>
  </section>
  )

}

export default Home
