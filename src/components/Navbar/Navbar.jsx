//import React from 'react'
import'./Navbar.css'
import logo from'../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png';
import { useState,useEffect } from 'react'
import {Link} from 'react-scroll'
const Navbar = () => {
  const[sticky,setSticky]=useState(false);

 
 useEffect(()=>{
     window.addEventListener('scroll',()=>{
         if(window.scrollY>150){
             setSticky(true)
         }
         else{
             setSticky(false)
         }
     })
 },[]);
 const[menuOpen,setMenuOpen]=useState(false);
 const toggleMenu = ()=>{
      setMenuOpen(!menuOpen);
 };

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}onClick={toggleMenu}>
        <img src={logo} alt="" className='logo'/>
        <ul className={menuOpen?'':'hide-mobile-menu'} >
            <li ><Link to='hero' smooth={true} offset={0} duration={500} ><div onClick={toggleMenu}>Home</div></Link></li>
            <li ><Link to='agents' smooth={true} offset={-240} duration={500}><div onClick={toggleMenu}>Team</div></Link></li>
            <li ><Link to='about' smooth={true} offset={-150} duration={500}><div onClick={toggleMenu}>About</div></Link></li>
            <li ><Link to='listings' smooth={true} offset={-220} duration={500}><div onClick={toggleMenu}>Listing</div></Link></li>
            <li ><Link to='testimonials' smooth={true} offset={-260} duration={500}><div onClick={toggleMenu}>Testimonial</div></Link></li>
            
            
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'><div onClick={toggleMenu}>Contact Us</div></Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
