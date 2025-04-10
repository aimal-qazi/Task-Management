import React from 'react'
import './../../styles/navbar.css'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Task Management</h1>

      <div className="user">
        <FaUserCircle className='icon'/>
        <div className='user-info'>
          <h4>John Doe</h4>
          <p>john@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar