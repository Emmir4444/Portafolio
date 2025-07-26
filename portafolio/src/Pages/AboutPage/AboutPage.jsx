import React from 'react'
import './AboutPage.css'
import BannerAbout from '../../Components/BannerAbout/BannerAbout'
import AbouSlice from '../../Components/AboutSlice/AbouSlice'

const AboutPage = () => {
  return (
    <section className='about-page-main'>
      <BannerAbout/>
      <div className='about-page-content'>
        <AbouSlice/>
        <AbouSlice/>
        <AbouSlice/>
        <AbouSlice/>
        </div>
    </section>
  )
}

export default AboutPage
