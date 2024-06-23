//import React from 'react'

import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Agents from "./components/Agents/Agents"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import ListingDic from "./components/Listings/ListingDic"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle=' ' title='Meet The Team'/>
       <Agents/>
       <About/>
       <Title subTitle='Listing' title='Featured Properties'/>
       <ListingDic/>
       <Title subTitle='Testimonials' title='What Our Client Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Book An Appointment'/>
       <Contact/>
       
      </div>
      <Footer/>
    </div>
  )
}

export default App
