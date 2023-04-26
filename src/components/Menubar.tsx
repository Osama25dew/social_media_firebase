import React from 'react'
import { Link } from 'react-router-dom'

export const Menubar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Menubar
