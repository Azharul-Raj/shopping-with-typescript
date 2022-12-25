import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Button } from './pages/Button'

function App() {

  return (
    <div className="">
      <Home />
      <Button variant='secondary'/>
    </div>
  )
}

export default App
