import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    
        

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Dipika Panditpawar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active ">
        <a className="nav-link" href="#"><Link to="/">Home</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/about">About</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#"><Link to="/skill">Skill</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#"><Link to="/contact">Contact</Link></a>
      </li>
    </ul>
    
  </div>
</nav>


  
    </>
    
  )
}

export default Navbar