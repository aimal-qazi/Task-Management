import React from 'react'
import Navbar from '../components/layout/Navbar'
import { FiCheckCircle, FiClock, FiPlusCircle } from 'react-icons/fi'
import './../styles/home.css'

const Home = () => {
  const tasksCreated = 24;
  const tasksCompleted = 18;
  const tasksPending = 6;

  return (    
    <>
        <Navbar />
        <div className="home-container">
        <h2>Dashboard</h2>
        <div className="dashboard-cards">
          <div className="card created">
            <FiPlusCircle className="icon" />
            <div className="details">
              <h3>{tasksCreated}</h3>
              <p>Tasks Created</p>
            </div>
          </div>
          <div className="card completed">
            <FiCheckCircle className="icon" />
            <div className="details">
              <h3>{tasksCompleted}</h3>
              <p>Tasks Completed</p>
            </div>
          </div>
          <div className="card pending">
            <FiClock className="icon" />
            <div className="details">
              <h3>{tasksPending}</h3>
              <p>Tasks Pending</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home