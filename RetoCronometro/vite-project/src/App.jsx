import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Timer</h1>
      {setTimeout(() => {
        
      }, timeout)}
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </>
  )
}

export default App
