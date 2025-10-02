import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile url= "https://cloud10.todocoleccion.online/figuras-goma-pvc/tc/2018/08/01/13/129597131.jpg" name ="Luis" bio="Lorem ipsum dolor sit amet consectetur adipiscing elit, taciti ultricies vitae in fusce per mus, facilisi imperdiet porta nostra dapibus varius. A penatibus dapibus urna varius netus vestibulum, mollis mus cubilia litora cras nec, libero rhoncus elementum pretium sagittis. Tincidunt at dictumst ut dui integer parturient morbi velit libero litora molestie, curabitur bibendum pretium cras facilisi felis rhoncus suspendisse penatibus mus metus, tellus cubilia id vulputate diam posuere etiam nibh leo mi." email="luismulamarquez@gmail.com" skills={["JavaScript", "React", "CSS", "NodeJs"]}/>
    </>
  )
}

export default App
