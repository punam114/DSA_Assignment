import { useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(true)

  function toggleBtn(){
    setToggle(!toggle)
  }

  return (
    <>
      <div className={toggle ? "ON" : "OFF"}></div>
      <button className={toggle ? "ONbtn" : "OFFbtn"} onClick={toggleBtn}>{toggle ? "ON" : "OFF"}</button>
    </>
  )
}

export default App
