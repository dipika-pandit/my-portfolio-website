import React from 'react'
import './Component.css'

export default function Skill() {
  return (
    
      <div className='container mt-3'>
      <div className='heading text-center'>
        <h3>Skills</h3>
        <hr className='bg-dark'></hr>
     </div >
     <div className='main'>
       
       <div className='row'>
         <div className='box1'>
           <h3>Frontend</h3>
           <p>HTML, CSS,  React.js ,Bootstrap</p>
         </div>
         <div className='box1'>
         <h3>Backend</h3>
           <p>Express.js ,Node.js</p>

         </div>
         

       
     </div>
       
      
     <div className='row'>
         <div className='box1'> 
         <h3>Programming Languages</h3>
           <p>Javascript</p>
           </div>
         <div className='box1'> 
         <h3>Database</h3>
           <p>MongoDB</p>
           </div>
         <div className='box1'> 
         <h3>Version Control System</h3>
           <p>Git</p>
           </div>

       </div>

     </div>
     </div>
     
  )
}
