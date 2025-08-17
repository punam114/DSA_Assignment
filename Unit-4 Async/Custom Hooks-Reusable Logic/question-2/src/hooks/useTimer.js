import { useState, useEffect, useRef } from "react";

function useTimer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  // Stop timer
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  // Reset timer
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  // Cleanup interval when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
}

export default useTimer;
