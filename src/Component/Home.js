import React from 'react'
import './Component.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <div className='container mt-5'>
        
      <div className="box1">
	  <h2>Hi I am</h2>
	  <h1>Dipika Panditpawar</h1>
	<h4>I am Mern stack Developer</h4>
    
	  <a className="btn btn-warning btn-lg mt-2 " role="button"><Link to="/contact">Hire Me</Link></a>
	</div>
  
      </div>
    </section>
  )
}
