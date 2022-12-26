import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import List from './pages/List'
import { Todo, Todos } from './pages/Style';

function App() {
  const [value, setValue] = useState('');
  const [todos,setTodos]=useState<Array<Todo>>([])
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!value) {
      alert('Please Write something')
      return
    }
    setTodos([...todos, { id: Date.now(), todo: value, isComplete: false }])
    setValue('')
  }
  return (
    <div className="">
      <Home />
      <List value={ value} setValue={setValue} handleSubmit={handleSubmit} todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
