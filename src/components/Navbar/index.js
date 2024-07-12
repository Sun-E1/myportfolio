import {HashLink as Link } from "react-router-hash-link";
import "./index.css"

import { TbHexagonLetterS } from "react-icons/tb";
import { TbHexagonLetterT } from "react-icons/tb";

const Navbar = () => (

  <div className="navbar-container">
    <div className="logo-container">
      <TbHexagonLetterS className="logo-s"/>
      <TbHexagonLetterT className="logo-t"/>
    </div>
    <div className="home-about-container">
      <Link  
      activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={1000} 
      delay ={1000}
      activeClassName="selected" 
      to="/#about" className="description">About</Link>
       <Link  
      activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={1000} 
      delay ={1000}
      activeClassName="selected" 
      to="/#skills" className="description">Skills</Link>
          <Link  
      activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={1000} 
      delay ={1000}
      activeClassName="selected" 
      to="/#projects" className="description">Projects</Link>
            <Link  
      activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={1000} 
      delay ={1000}
      activeClassName="selected" 
      to="/#contact" className="description">Contact</Link>
    </div>
  </div>

)

export default Navbar