import React from 'react'
import { LuUser } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/login')
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <div className="icon-box">
            <LuUser className='icon' />
          </div>
          <h2>Create an account</h2>
          <p>Sign up to get started with Task Manager</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input type="email" id="email" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn">Create account</button>
          <p className='account-verify'>Already have an account? <span onClick={handleNavigation}>Sign in</span></p>
        </form>
      </div>
    </div>
  )
}

export default Register