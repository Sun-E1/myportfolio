

import React from 'react';
import { VscCode } from "react-icons/vsc";
import { Typewriter } from 'react-simple-typewriter'
import './index.css';

const Home = () => (
  <div className="home-container">

    <div className='home-inside-container'>
        <VscCode className='code-logo' />
        <div className="text-overlay">
            <h1 className='intro-text hello'> Hello Folks,</h1>
             <h1 className='intro-text'> this is Sunny Titus.</h1>
        
            <h1 className="i-am">
        I am a {' '}
        <span style={{ color: '#18FF6D', fontFamily:"Roboto"}}>
          <Typewriter
            words={["Full Stack Developer.", "Programmer.", "Data Analyst.", "Typist."]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>
      </h1> 
      </div>
    </div>

  </div>
);

export default Home;
