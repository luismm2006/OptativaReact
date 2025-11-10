import React, { useState } from "react";
import "./Components/styles.css";
import ProgressBar from "./Components/ProgressBar";
export default function App() {
  const [inputWidth, setInputWidth] = useState(0);
  const handlePercentage = (event) =>{
    setInputWidth(event.target.value);
  }
  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar inputWidth={inputWidth}/>
        <form>
          <label htmlFor="percentage">Input Percentage:</label>
          <input name="percentage" type="number" onChange={handlePercentage}/>
        </form>
      </div>
    </>
  );
}