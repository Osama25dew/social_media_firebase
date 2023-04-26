import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from "../configuration/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from 'firebase/auth'

export const Menubar = () => {
  const [user]=useAuthState(auth) 
  const signUserOut=async()=>{
    await signOut(auth)
  }
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className='user'>
        {user && <>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL||""} width="40" height="40"></img>
          <button onClick={signUserOut}>Log Out</button>
        </>}
        
      </div>
    </div>
  )
}

export default Menubar
