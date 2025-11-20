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
import ProductForm from './Components/ProductForm'
import ProductList from './Components/ProductList'

function App() {
  const [product, setProduct] = useState([ 
    {
      id: Date.now(),
      name: "Laptop",
      category: "Tecnología",
      favorite: false
    }
]);
  const handleAdd = (nombre, categoria) => {
    setProduct([...product, {id: Date.now(), name: nombre, category: categoria, favorite: false}]);
  }
  const handleFav = (id) => {
    const productChange = product.map((p) => {
      return p.id === id ? {...p, favorite: !p.favorite} : p;
    });
    setProduct(productChange);
  }
  const handleDelete = (id) => {
    const productosValidos = product.filter(p => p.id !== id);
    setProduct(productosValidos);
  }
  return (
    <>
      <ProductForm addProduct={handleAdd}/>
      <ProductList product={product} toggleFavorite={handleFav} deleteProduct={handleDelete}/>
    </>
  )
}

export default App
