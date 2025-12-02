import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetList from './Components/ListCreatures'
import PostCreatures from './Components/AddCreatures'
function App() {
  return (
    <>
      <GetList/>
      <PostCreatures/>
    </>
  )
}

export default App
