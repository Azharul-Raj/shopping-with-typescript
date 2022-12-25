import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import List from './pages/List'

function App() {

  const handleClick = () => {
    console.log('clicked');
}
  return (
    <div className="">
      <Home />
      <List/>
    </div>
  )
}

export default App
