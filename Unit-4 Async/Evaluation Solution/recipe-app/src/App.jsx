import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import RecipeDetail from './Components/Pages/RecipeDetail';
import { ThemeContext, ThemeCreate } from './Components/Context/ThemeContext';
import { useContext } from 'react';

// ⚠️ Create an inner component to use useContext safely
function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeCreate);

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <ThemeContext>
      <AppContent />
    </ThemeContext>
  );
}

export default App;
