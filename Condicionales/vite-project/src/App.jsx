import './App.css'
import Bienvenida from './components/Ej1/Bienvenida.jsx';
import EstadoDeCuenta from './components/Ej2/EstadoCuenta.jsx';
import AvisoError from './components/Ej3/AvisoError.jsx';
function App() {

  return (
    <>
        <Bienvenida isLoggedIn={true} />
        <Bienvenida isLoggedIn={false} />

        <EstadoDeCuenta isPositive={true} />
        <EstadoDeCuenta isPositive={false} />

        <AvisoError hasError={true} />
        <AvisoError hasError={false} />
    </>
  )
}

export default App
