import React from 'react'
import Login from '../pages/login'
import Home from '../pages/Home'
import ContactPage from '../pages/ContactPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../pages/About';

function Layoutroutes() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
       <Route path="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layoutroutes
