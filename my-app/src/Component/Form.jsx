import React, { useState } from 'react'
import {FaUser} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri" ;

const Form = () => {
 const [action , setaction]  = useState("Login"); 
  return (
    <div className='container'>
      <div className="header">
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
        <div className='icons1'> <FaUser /></div>  
        <input type="text" placeholder='Name' />  
        </div>}
      
        <div className='input'>
        <div className='icons'> <MdEmail/> </div>  
        <input type="email" placeholder='Email'/>  
        </div>

        <div className='input'>
        <div className='icons2'><RiLockPasswordFill/> </div>  
        <input type="password" placeholder='Password' />  
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgotten Password? <span> Click Here!</span></div>}
        
       <div className='submit-container'>
        <div className={action=== "Login"?"submit gray":"submit"} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up"? "submit gray":"submit"}  onClick={() => {setaction("Login")}}>Login</div>

       </div>
    </div>
  )
}

export default Form
