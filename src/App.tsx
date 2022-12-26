import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import List from './pages/List'
import { Todos } from './pages/Style';

function App() {
  const [value, setValue] = useState('');
  const [todos,setTodos]=useState<Todos[]>([])
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setTodos([...todos,{id:Date.now(),todo:value,isComplete:false}])
  }
console.log(todos);
  return (
    <div className="">
      <Home />
      <List value={ value} setValue={setValue} handleSubmit={handleSubmit} todos={todos} />
    </div>
  )
}

export default App
