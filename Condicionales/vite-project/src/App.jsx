import './App.css'
import Bienvenida from './components/Ej1/Bienvenida.jsx';
import EstadoDeCuenta from './components/Ej2/EstadoCuenta.jsx';
import AvisoError from './components/Ej3/AvisoError.jsx';
import Notificacion from './components/Ej4/Notificacion.jsx';
import Tarea from './components/Ej5/ListaDeTareas.jsx';
import EstadoConexion from './components/Ej6/EstadoConexion.jsx';
import Articulo from './components/Ej7/Articulo.jsx';
function App() {

  return (
    <>
        <Bienvenida isLoggedIn={true} />
        <Bienvenida isLoggedIn={false} />

        <EstadoDeCuenta isPositive={true} />
        <EstadoDeCuenta isPositive={false} />

        <AvisoError hasError={true} />
        <AvisoError hasError={false} />

        <Notificacion isCompleted={true} />
        <Notificacion isCompleted={false} />

        <ul>
          <Tarea nombre="Aprender React" isDone={true} />
          <Tarea nombre="Hacer ejercicios de JavaScript" isDone={false} />
          <Tarea nombre="Practicar CSS" isDone={false} />
        </ul>

        <EstadoConexion status="online" />
        <EstadoConexion status="offline" />
        <EstadoConexion status="away" />

        <Articulo isPublished={true} />
        <Articulo isPublished={false} />
    </>
  )
}

export default App
