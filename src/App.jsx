import { useState } from 'react'
import Home from './Pages/Home'
import './App.css'
import { Outlet } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
function App() {
  

  return (
    <div className='w-full min-h-screen bg-blue-50'>
      <Outlet/>
    </div>
  )
}

export default App
