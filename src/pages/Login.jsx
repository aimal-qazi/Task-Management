import React from 'react'
import './../styles/auth.css'
import { IoIosLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Users } from '../data/users.config'
import { useUser } from '../context/UserContext'

const Login = () => {
  const navigate = useNavigate();
  const {setUser: SetUserContext} = useUser();
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleNavigation = () => {
    navigate('/register');
  }

  const handleFormSubmittion = (e) => {
    e.preventDefault();
    const { username, password } = user;
    
    if (username === '' || password === '') {
      toast('Please fill in all fields', {type: 'error'})
      return
    }

    if (password.length < 6) {
      toast('Password must be at least 6 characters', {type: 'error'})
      return
    }

    const userExist = Users.find(u => u.username === username && u.password === password);
    
    if (userExist) {
      toast('Login successful', {type: 'success'});
      localStorage.setItem('user', JSON.stringify(userExist));
      SetUserContext(userExist);
      navigate('/');
    } else {
      toast('Invalid username or password', {type: 'error'});
    }

    setUser({username: '', password: ''});
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
        <form onSubmit={handleFormSubmittion} className="auth-form">
          <TextField type='search' label="Username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} variant="outlined" />
          <TextField type='password' label="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} variant="outlined" />
          <button type="submit" className="btn">Login</button>
          <p className='account-verify'>Don't have an account? <span onClick={handleNavigation}>Create account</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login