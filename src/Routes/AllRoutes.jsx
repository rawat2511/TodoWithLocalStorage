import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Components/Login'
import Todo from '../Components/Todo'

export const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={ <Todo /> } />
          <Route path='/login' element={ <Login /> } />
      </Routes>
  )
}
