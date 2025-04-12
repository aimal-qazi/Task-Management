import React from 'react'
import './../styles/navbar.css'
import { FaUserCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login')
    toast('Logged out successfully', {type: 'success'});
  }

  if (!user) {
    return <div>You need to log in first!</div>;
  }
  
  return (
    <div className="navbar-container">
      <h1>Task Management</h1>

      <div className="navbar-right">
        <div className="user">
          <FaUserCircle className='icon' />
          <div className='user-info'>
            <h4>{user?.username}</h4>
            <p>{user?.email}</p>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar