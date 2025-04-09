import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../utils/ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default AppRoutes