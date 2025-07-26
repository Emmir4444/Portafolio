import React from 'react'
import './BannerAbout.css'
import AboutImage from '../../assets/images/homeimages/bannerimage-removebg-preview.png'

const BannerAbout = () => {
  return (
    <div className='banner-about-main'>
        <h1 className='banner-about-title'>SOBRE MI</h1>
        <img src={AboutImage} alt='image about' className='image-about-page'></img>
        <p className='banner-about-description'>Conoce un poco mas sobre mi historia obejetivos etcConoce un poco mas sobre mi historia obejetivos etc</p>
      
    </div>
  )
}

export default BannerAbout
