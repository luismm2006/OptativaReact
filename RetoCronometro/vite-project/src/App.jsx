import { useState, useRef } from "react";
import "./App.css";
import Start from "./Components/Start";
import Stop from "./Components/Stop";
import Reset from "./Components/Reset";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeoutRef = useRef(null);

  timeoutRef.current = setTimeout(() => {
      if (isRunning) {
        setTime(time + 1);
      }
    }, 1000);


  const handleStopTimer = (stopTimer) =>{
    return stopTimer;
  }
  return (
    <>
      <h1>Timer (con setTimeout)</h1>
      <h2>{time} s</h2>
      <div className="buttons">
        <Start isRunning={isRunning} setIsRunning={setIsRunning}/>
        <Stop setIsRunning={setIsRunning} timeoutRef={timeoutRef} stopTimer={handleStopTimer}/>
        <Reset setTime={setTime} stopTimer={handleStopTimer}/>
      </div>
    </>
  );
}

export default App;
