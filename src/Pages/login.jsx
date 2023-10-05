import { useState } from 'react'
import add from "../image/png.png"

function Login() {

  return (
    <>
   <div className="form-container">
    <div className="form-wrapper">
        <span className='logo'>Lama Chat</span>
        <span className='title chat'>Register</span>
        <form>
            <input type='text' placeholder='display name'/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
           
           
           
            <button>Sign In</button>
        </form>
        <p>You don't  have an account? Register</p>
    </div>
   </div>
    </>
  )
}

export default Login;
