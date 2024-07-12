import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

import "./index.css"


const Contact = () =>(


    <div className="contact-bg-container" id="contact">

                      <div className='contact-start-tag-container'>
            <p className='contact-start-tag'>{`<contact>`}</p>
        </div>

        <div className="contact-inside-container">
            <h1 className="contact-me-heading">Contact Me</h1>
        <div className="contact-me">

            <div className="logo-container">
              <BiLogoGmail className="contact-logo"/>
              <p className="mail">sunnytitus1@gmail.com</p>
            </div>
         
                     <div className="logo-container">
              <FaLinkedin className="contact-logo"/>
              <a  href="https://www.linkedin.com/in/sunnytitus/" className="linked-in" target="_black">LinkedIn</a>
            </div>



        </div>
        </div>

                              <div className='contact-start-tag-container'>
            <p className='contact-start-tag'>{`</contact>`}</p>
        </div>
    </div>
)


export default Contact 