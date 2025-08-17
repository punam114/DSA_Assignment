import React from "react";
import useToggleItems from "./hooks/useToggleItems.js";

function App() {
  // Passing ["A", "B", "C"] and initial position = 1 (so start from "B")
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useToggleItems Hook Demo</h1>
      <h2>Current Item: {state}</h2>
      <button onClick={toggleState}>Next</button>
    </div>
  );
}

export default App;
