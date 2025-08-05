import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import WeatherPage from './WeatherPage'

function App() {
 

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weather/:city' element={<WeatherPage/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
