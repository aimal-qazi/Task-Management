import React from 'react'
import './../styles/auth.css'
import { IoIosLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'

const Login = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/register');
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <div className="icon-box">
            <IoIosLock className='icon' />
          </div>
          <h2>Welcome back</h2>
          <p>Sign in to your account to continue</p>
        </div>
        <form className="auth-form">
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <button type="submit" className="btn">Login</button>
          <p className='account-verify'>Don't have an account? <span onClick={handleNavigation}>Create account</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login