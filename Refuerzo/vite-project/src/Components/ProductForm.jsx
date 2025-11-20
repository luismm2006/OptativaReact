import { useState } from "react";
export default function ProductForm({addProduct}){
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const handleSubmit = (e) => {    
        e.preventDefault();
        if(nombre.trim()!=="" && categoria.trim()!==""){
            addProduct(nombre, categoria);
            setNombre("");
            setCategoria("");
        }else{
            alert("Introduce campos válidos");
        }

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" value={nombre} name="nombre" id="nombre" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label>Categoría: </label>
                    <input type="text" value={categoria} name="categoria" id="categoria" onChange={(e) => setCategoria(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Añadir</button>
                </div>
            </form>
        </>
    );

}