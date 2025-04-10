import React from 'react'
import Navbar from '../components/Navbar'
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

      <div className="table-container">
        <div className="table-wrapper">
          <div className="table-header">
            <h3>Task Overview</h3>
            <input type="text" placeholder="Search tasks..." className="table-filter-input" />
          </div>
          <table className="task-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Create wireframes</td>
                <td><span className="status completed">Completed</span></td>
                <td>John</td>
                <td>2025-04-15</td>
              </tr>
              <tr>
                <td>2</td>
                <td>API integration</td>
                <td><span className="status pending">Pending</span></td>
                <td>Emily</td>
                <td>2025-04-20</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Testing</td>
                <td><span className="status pending">Pending</span></td>
                <td>Chris</td>
                <td>2025-04-18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home