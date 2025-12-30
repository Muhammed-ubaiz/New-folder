import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
       <Login/>
       <Home/>
       <ContactPage/>
       </>
  )
}

export default App
