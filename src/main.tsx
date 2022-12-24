import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StyleProvider from './contexts/StyleProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider>
      <App />
      </StyleProvider>
  </React.StrictMode>,
)
