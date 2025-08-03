/** @format */

import React, { useState } from "react";
import "./App.css"

export const Counter = ({ initialVal }) => {
  const [count, setCount] = useState(initialVal);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    if (count < 1) {
      alert("below 0");
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <div className="box">
        <h2>{count}</h2>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
    </>
  );
};
