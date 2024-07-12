import React, {Component} from "react"
// import React from 'react'
import Header from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from "./components/Experience"
import Contact from './components/Contact'
import {BrowserRouter} from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.disableRightClick = this.disableRightClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this.disableRightClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.disableRightClick);
  }

  disableRightClick(event) {
    event.preventDefault();
  }

  render() {
    return (
       <BrowserRouter>
    <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;



// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//         <Header/>
//         <Home/>
//         <About/>
//         <Skills/>
//         <Projects/>
//         <Experience/>
//         <Contact/>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
