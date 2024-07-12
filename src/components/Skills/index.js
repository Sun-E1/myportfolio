import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPython } from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { SiPowerbi } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";

import './index.css'
const Skills = () => (

    <div className="skills-container" id="skills">
     
            <div className='skills-start-tag-container'>
                <p className='skills-start-tag'>{`<skills>`}</p>
                </div>
    <div className="scroll-container">

   <div className='skill-one-container'>
 
    <FaHtml5 className="html-icon"/>
    <h1 className="skill-heading">HTML</h1>

   </div>

   
   <div className='skill-one-container'>
 
<FaCss3Alt className="html-icon"/>
<h1 className="skill-heading">CSS</h1>



   </div>

   
   <div className='skill-one-container'>
 
<IoLogoJavascript className="html-icon"/>
<h1 className="skill-heading">JavaScript</h1>



   </div>

   
   <div className='skill-one-container'>
 
<SiPython className="html-icon"/>
<h1 className="skill-heading">Python</h1>



   </div>

   
   <div className='skill-one-container'>
 
<DiSqllite className="html-icon"/>
<h1 className="skill-heading">SQL</h1>



   </div>
   
   <div className='skill-one-container'>
 
<SiPowerbi className="html-icon"/>
<h1 className="skill-heading">PowerBi</h1>



   </div>
   
   <div className='skill-one-container'>
 
<FaReact className="html-icon"/>
<h1 className="skill-heading">React.Js</h1>



   </div>
   <div className='skill-one-container'>
 
<FaBootstrap className="html-icon"/>
<h1 className="skill-heading">Bootstrap</h1> 



   </div>

        </div>
                    <div className='skills-start-tag-container-end'>
                <p className='skills-start-tag'>{`</skills>`}</p>
                </div>
    </div>

   
)

export default Skills 