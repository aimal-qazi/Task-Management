import React from 'react'
import './../styles/not-found.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  }

  return (
    <div class="not-found-container">
      <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <button onClick={handleNavigation} class="btn-home">Go Back Home</button>
      </div>
    </div>
  )
}

export default NotFound