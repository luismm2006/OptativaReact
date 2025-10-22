function Tarea({ nombre, isDone }) {
    return (
        isDone ? null : <li>{nombre}</li>
    );
}
export default Tarea;