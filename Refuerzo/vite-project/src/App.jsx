import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductStatus from './Components/ProductStatus'
import LightSwitch from './Components/LightSwitch'
import Leaderboard from './Components/Leaderboard'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'
import ItemInput from './Components/ProductCounter'
import ProductCounter from './Components/ProductCounter'
import ProductAdd from './Components/ProductAdd'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'

function App() {
  const [task, setTask] = useState([ 
    { id: Date.now(), title: "Comprar", priority: "baja" }
]);
  const handleAdd = (titulo, prioridad) => {
    setTask([...task, {id: Date.now(), title: titulo, priority: prioridad }]);
  }

  const handleDelete = (indice) => {
    setTask(task.filter(t => t.id !== indice));
  }
  const handleUpdate = (indice, titulo, prioridad) => {
    const newTask = task.map(t => t.id === indice ? {...t , title: titulo, priority: prioridad} : t);
    setTask(newTask);
  }
  return (
    <>
      <ContactForm add={handleAdd}/>
      <ContactList task={task} deleteTask={handleDelete} update={handleUpdate}/>
    </>
  )
}

export default App
