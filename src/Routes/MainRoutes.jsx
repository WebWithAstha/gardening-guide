import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Plans from '../components/Plans.jsx'
import Create from '../components/Create.jsx'
import Plan from '../components/Plan.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Error from '../components/Error.jsx'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/plan/:id" element={<Plan/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes