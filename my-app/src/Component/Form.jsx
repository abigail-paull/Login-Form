import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

function Form() {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (action === "Sign Up" ) {
      if (formData.name && formData.email && formData.password) {
        navigate('/message', { state: { message: `Successfully Signed Up as ${formData.name}` } });
      } else {
        alert('Please fill in all fields to sign up.');
      }
    } else {
      if (formData.email && formData.password) {
        navigate('/message', { state: { message: `Successfully Logged In with email: ${formData.email}` } });
      } else {
        alert('Please fill in email and password to log in.');
      }
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      
      <div className='inputs'>
        {action === "Login" ? null : (
          <div className='input'>
            <div className='icons1'><FaUser /></div>  
            <input 
              type="text" 
              placeholder='Name' 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />  
          
          </div>
        )}
        
        <div className='input'>
          <div className='icons'><MdEmail /></div>  
          <input 
            type="email" 
            placeholder='Email' 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />  
        </div>

        <div className='input'>
          <div className='icons2'><RiLockPasswordFill /></div>  
          <input 
            type="password" 
            placeholder='Password' 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />  
        </div>
      </div>

      <div className='submit-container' >
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => { setAction("Sign Up"); }}
        >
          Sign Up
        </div>
        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={() => { setAction("Login"); }}
        >
          Login
        </div>
      </div>

      <div className='submit-button'>
        <button className='Login'      onClick={handleSubmit}>
          {action === "Login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default Form;













// import React, { useState } from 'react'
// import {FaUser} from "react-icons/fa";
// import {MdEmail} from "react-icons/md";
// import {RiLockPasswordFill} from "react-icons/ri" ;

// const Form = () => {

//  const [action , setaction]  = useState("Sign Up"); 
//  /* state to handle user input for name, email,and password */
 
//   return (
//     <>
//     <div className='container'>
//       <div className="header">
//         <div className='text'>{action}</div>
//         <div className='underline'></div>
//       </div>
//       <div className='inputs'>
//         {action==="Login"?<div></div>:<div className='input'>
//         <div className='icons1'> <FaUser /></div>  
//         <input type="text" placeholder='Name' />  
//         </div>}
      
//         <div className='input'>
//         <div className='icons'> <MdEmail/> </div>  
//         <input type="email" placeholder='Email'/>  
//         </div>

//         <div className='input'>
//         <div className='icons2'><RiLockPasswordFill/> </div>  
//         <input type="password" placeholder='Password' />  
//         </div>
//       </div>
//       {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgotten Password? <span> Click Here!</span></div>}
        
//        <div className='submit-container'>
//         <div className={action=== "Login"?"submit gray":"submit"} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
//         <div className={action === "Sign Up"? "submit gray":"submit"}  onClick={() => {setaction("Login")}}>Login</div>

//        </div>
//     </div>
    
    
    
    
//    </>
//   )
// }

// export default Form
