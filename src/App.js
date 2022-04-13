import logo from './logo.svg';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Skill from './Component/Skill';
import Navbar from './Component/Navbar';
import { Element } from "react-scroll";








function App() {
  return (
    <div>


    
    

      <Navbar/>
      <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="skill" className="element">
          <Skill/>
        </Element>
        
        <Element name="contact" className="element">
          <Contact />
        </Element>
      
      
    
      
      

  </div>
        
            
    
          )
    }
  
    
      
      
  
  


export default App;
