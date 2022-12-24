import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div className="">
      <Home name='Raj' message='Good Morning' isValid={ true} />
    </div>
  )
}

export default App
