//import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'
import video_city from '../../assets/city.mp4'
import {Link} from 'react-scroll'
const Hero = () => {
  return (
    <div className='hero '>
      <div className="overlay"></div>
      <video src={video_city} autoPlay muted loop  ></video>
      <div className='hero-text'>
        <h1>Turning Your Realty Dreams into Reality</h1>
        <p>We pride ourselves on turning your real estate dreams into reality with unparalleled dedication and expertise. With a deep understanding of the market and a commitment to personalized service, we are here to guide you through every step of your property journey.</p>
      <button className='btn'><Link to='listings' smooth={true} offset={-220} duration={500}>Explore More</Link><img src={dark_arrow}/></button>
      </div>
      
      
    </div>
  )
}

export default Hero
