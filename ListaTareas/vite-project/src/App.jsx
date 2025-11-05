import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormList from './Components/FormList'
import TaskList from './Components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskList/>
      <FormList/>
    </>
  )
}

export default App
