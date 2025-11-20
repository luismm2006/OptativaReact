import { useState } from "react";
export default function ContactItem({indice, title, priority,  deleteTask, update}){
    const [titulo, setTitulo] = useState("");
    const [prioridad, setPrioridad] = useState("");

    const handleDelete = () => {
        deleteTask(indice);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(titulo.trim() !== "" && prioridad.trim() !== ""){
            update(indice, titulo, prioridad);
            setTitulo("");
            setPrioridad("");
        }else{
            alert("Introduzca campos válidos para actualizar");
        }
    }

    return(
        <>
           Titulo: {title}
           <br />
           Prioridad: {priority}
           <br />
           <br />
           <button onClick={handleDelete}>Eliminar</button>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label>Titulo nuevo:</label>
                <br />
                <input type="text" value={titulo} name="titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>
                <br />
                <br />
                <label>Prioridad nueva:</label>
                <br />
                <input type="text" value={prioridad} name="prioridad" id="prioridad" onChange={(e) => setPrioridad(e.target.value)}/>
                <br />
                <br />
                <button type="submit">Actualizar</button>
            </form>
            ----------------------------------
            <br />
        </>
    );
}