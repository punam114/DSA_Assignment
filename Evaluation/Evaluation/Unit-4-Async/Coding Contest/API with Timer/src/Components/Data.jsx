/** @format */

import React, { useState } from "react";
import { FetchAlert } from "./FetchAlert";

export const Data = () => {
  const [count, setCount] = useState(2);
  const [showAlert, setShowAlert] = useState(false);
  async function fetchData() {
    const interVal = setInterval(() => {
      setCount((count) => {
        if (count <= 0) {
          clearInterval(interVal);
          setShowAlert(true);
        }
        return count - 1;
      });
    }, 1000);
  }

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <div>{showAlert ? "" : count}</div>
      {showAlert && <FetchAlert/>}
    </>
  );
};
