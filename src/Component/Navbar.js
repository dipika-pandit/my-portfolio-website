import React from 'react'
import { Link } from 'react-scroll'


function Navbar() {
  return (
    <>
    
        

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a className="navbar-brand" href="#">Dipika Panditpawar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active ">
         {/* <a className ='nav-link' ><Link to ="/">Home</Link></a>  */}
         <Link to="home" className ="nav-link"spy ={true} smooth ={true} offset ={100} duration ={500}>Home</Link>
      </li>
      <li className="nav-item">
        {/* <a className ='nav-link'><Link to ="/about">About</Link></a> */}
        <Link to="about"    activeClass="active"className ="nav-link" spy ={true} smooth ={true} offset ={100} duration ={500}>About</Link>
      </li>
      <li className="nav-item">
        {/* <a className ='nav-link'><Link to ="/skill">Skills</Link></a> */}
        <Link to="skill"className ="nav-link"activeClass="active"spy ={true} smooth ={true} offset ={100} duration ={500}>Skills</Link>
      </li>
     <li className="nav-item">
        {/* <a className ='nav-link' ><Link to ="/contact">Contact</Link></a> */}
        <Link to="contact"className ="nav-link" activeClass="active" spy ={true} smooth ={true} offset ={100} duration ={500}>Contact</Link>
      </li>
    </ul>
    
  </div>
</nav>


  
    </>
    
  )
}

export default Navbar
