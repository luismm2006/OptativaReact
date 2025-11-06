import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef(null);

  timeoutRef.current = setTimeout(() => {
      if (isRunning) {
        setTime(time + 1);
      }
    }, 1000);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearTimeout(timeoutRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <>
      <h1>Timer (con setTimeout)</h1>
      <h2>{time} s</h2>
      <div className="buttons">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
