import React from 'react'
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeComp from './allCompo/homePage.jsx'
import AboutPage from './allCompo/AboutPageComp.jsx'
import ServiceComp from './allCompo/ServiceComp.jsx'
import CareerHiring from './allCompo/CareerComp.jsx'
import ContactPage from './allCompo/ContactPageCom.jsx'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>

    <Routes> 
      <Route path='/' element={<HomeComp/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/services' element={<ServiceComp/>}/>
      <Route path='/career' element={<CareerHiring/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>

  
  </>
  
  )
}

export default App
