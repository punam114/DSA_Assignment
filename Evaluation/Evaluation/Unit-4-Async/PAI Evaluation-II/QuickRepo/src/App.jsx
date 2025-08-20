import { useContext } from 'react'
import './App.css'
import { Theme } from './ThemeContext'
import { RepoCard } from './components/RepoCard'

function App() {

  const { theme, setTheme } = useContext(Theme)

  document.body.style.backgroundColor = theme ? "black" : "white" 
  return (
    <>
     <button onClick={()=>setTheme(!theme)}>{theme ? "Light" : "Dark"}</button>
     <RepoCard/>
    </>
  )
}

export default App
