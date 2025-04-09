import React from 'react'
import './../styles/auth.css'
import { IoIosLock } from 'react-icons/io'

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <div className="icon">
            <IoIosLock />
          </div>
          <h2>Welcome back</h2>
          <p>Sign in to your account to continue</p>
        </div>
      </div>
    </div>
  )
}

export default Login