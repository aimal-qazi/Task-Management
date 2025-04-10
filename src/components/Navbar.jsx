import React from 'react'
import './../styles/navbar.css'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Task Management</h1>

      <div className="user">
        <FaUserCircle className='icon'/>
        <div className='user-info'>
          <h4>Qazi</h4>
          <p>Dummy@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar