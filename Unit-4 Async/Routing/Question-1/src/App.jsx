import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { DetailPage } from './components/DetailPage'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/detail/:id" element = {<DetailPage/>}/>
    </Routes>
    </>
  )
}

export default App
