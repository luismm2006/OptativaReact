import './App.css'
import Bio from './ejercicioPracticas/Ej1'
import TodoList from './ejercicioPracticas/Ej2'
import TodoList2 from './ejercicioPracticas/Ej3'
import Greeting from './ejercicioProps/Ej1'
import UserCard from './ejercicioProps/Ej2'
import Header from './Header'
import Greeting2 from './ejercicioProps/Ej4'
import MovieCard from './ejercicioProps/Ej5'

function App() {

  return (
    <>
      <Header />
      <h1>Hola Mundo!</h1>
      <p>Cruel</p>
      <Bio />
      <TodoList />
      <TodoList2 />
      <Greeting name = "Luis"/>
      <Greeting name = "Pepe"/>
      <Greeting name = "Ivan"/>
      <UserCard name = "Luis" age = {19} city = "Sevilla"/>
      <UserCard name = "Pepe" age = {20} city = "Sevilla"/>
      <Greeting2/>
      <MovieCard title = "Pepe" director = "LuisDirector" year = {2000}/>
    </>
    
  )
}

export default App
