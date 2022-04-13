
import './Component.css'
import emailjs from "emailjs-com"
import React,{useRef} from 'react'




  export default function ContactUs ()  {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_p4xeluk', 'template_cvk0uy8', form.current, 'g6CxY4hnc3_67CYvr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      
     
      <div className='container mt-3'>
      <div className='heading text-center'>
        <h3>Contact</h3>
        <hr className='bg-dark'></hr>
     </div>
       
    <div className='row d-flex justify-content-around'>
       <div className='header'>
         <h3 className=' m-3 text-center text-white '>Hire Me</h3>
         <form className=' header-1 mt-5' ref={form} onSubmit={sendEmail}>
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
      
       
       <div className='header  text-white'>
       <h3 className=' mt-3 text-center'>Get in Touch</h3>
       <table className='m-3'>
         <tr>
           <td>Email</td>
           <td>dipikapanditpawar84@gmail.com</td>
         </tr>
         <tr>
           <td>Phone</td>
           <td>+91 9284733997</td>
         </tr>

         <tr>
           <td>Address</td>
           <td>Ward no.6 ,Near girls Highschool Bhiwapur</td>
         </tr>
         </table>
         <div className ="media">
           <li><a href ='https://m.facebook.com/100042756639488/' ><i className='fa fa-facebook fa-2x '></i></a></li>
           <li><a href ='http://github.com/dipika-pandit' ><i className='fa fa-github fa-2x '></i></a></li>
           <li><a href ='http://www.linkedin.com/in/dipika-panditpawar'><i className='fa fa-linkedin fa-2x '></i></a></li>
           
 

      </div>
       </div>
       </div>
       </div>
       
      
      

    )
  }  
     
  

