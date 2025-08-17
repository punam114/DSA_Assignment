import React from "react";
import useTimer from "./hooks/useTimer";

function App() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱ useTimer Custom Hook</h1>
      <h2>Timer: {timer} sec</h2>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>

      <button onClick={startTimer} style={{ margin: "5px" }}>Start</button>
      <button onClick={stopTimer} style={{ margin: "5px" }}>Stop</button>
      <button onClick={resetTimer} style={{ margin: "5px" }}>Reset</button>
    </div>
  );
}

export default App;
