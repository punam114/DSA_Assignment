import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { About } from './component/Pages/About'
import { Home } from './component/Pages/Home'
import { Contact } from './component/Pages/Contact'
import { UserDetail } from './component/Pages/UserDetail'
import { Navbar } from './component/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users/:id' element={<UserDetail/>}/>
      </Routes>
    </>
  )
}

export default App
