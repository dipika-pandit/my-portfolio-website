import React from 'react'
import './Component.css'

export default function Contact() {
  return (
    <div className='container mt-3'>
      <div className='heading text-center'>
        <h3>Contact</h3>
        <hr className='bg-dark'></hr>
     </div>
     <div className='row'>
       <div className='card-1'>
         <h1 className='header mt-3'>Hire Me</h1>
         <form className=' header-1 mt-5'>
  <div className="form-group">
    
    <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder=" Name"/>

  </div>
  <div className="form-group">
        <input type="Email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
  </div>
  <div className="form-group">
        <input type="Phone" className="form-control" id="exampleInputEmail" placeholder="Phone"/>
  </div>
  <div className="form-group">
        <input type="Message" className="form-control" id="exampleInputEmail" placeholder="Message"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
       </div>
       <div className='card-1'></div>

     </div>
     </div>
  )
}
