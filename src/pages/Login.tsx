import React from 'react'
import {auth, provider} from "../configuration/firebase"
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


export const Login = () => {
    const navigate=useNavigate();
    const signInWithGoogle=async()=>{
        const result = await signInWithPopup(auth, provider)
        navigate("/")

    }
  return (
    <div>
      <h1>Login Page</h1>
      <p>Login with google Account</p>
      <button onClick={signInWithGoogle}>Google Login</button>
    </div>
  )
}

export default Login
