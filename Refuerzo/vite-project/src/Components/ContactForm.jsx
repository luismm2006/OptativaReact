import { useState } from "react";
export default function ContactForm({add}){
    const [titulo, setTitulo] = useState("");
    const [prioridad, setPrioridad] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(titulo.trim() !== "" && prioridad.trim() !== ""){
            add(titulo, prioridad);
            setTitulo("");
            setPrioridad("");
        }else{
            alert("Introduzca campos válidos para añadir");
        }
    }

    return(
        <>
           <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <br />
                <input type="text" value={titulo} name="titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>
                <br />
                <br />
                <label>Prioridad:</label>
                <br />
                <input type="text" value={prioridad} name="prioridad" id="prioridad" onChange={(e) => setPrioridad(e.target.value)}/>
                <br />
                <br />
                <button type="submit">Añadir</button>
            </form>
            <br />
        </>
    );
}