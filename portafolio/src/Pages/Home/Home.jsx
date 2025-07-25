import React from 'react'
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import './Home.css';


const Home = () => {
  return (
    <section className="home">
      <Banner />
      <About />
      <Projects />
  </section>
  )

}

export default Home
