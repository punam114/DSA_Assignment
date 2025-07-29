import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    if (count === 10) {
      alert("Goal Reached!");
      return;
    }
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      alert("Below 0!");
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <div className="card">
      <p>{count}</p>
        <button onClick={increase}>INCREASE</button>
        <button onClick={decrease}>DECREASE</button>
      </div>
    </>
  )
}

export default App
