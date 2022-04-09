import logo from './logo.svg';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Skill from './Component/Skill';
import Navbar from './Component/Navbar';

import { Link } from 'react-router-dom';





function App() {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/skill' element ={<Skill/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
      </div> 
  
        
            
    
          )
    }
  
    
      
      
  
  


export default App;
