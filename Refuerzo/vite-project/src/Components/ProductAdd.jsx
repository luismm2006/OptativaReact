import { useState } from "react";
export default function ProductAdd({addItem}){
    const [nombreProduct, setNombreProduct] = useState("");
    const handleChange = () => {
        addItem(nombreProduct);
        setNombreProduct("");
    }
    return(
        <>
            <input type="text" value={nombreProduct} onChange={(e) => setNombreProduct(e.target.value)}/>
            <br />
            <br />
            <button onClick={handleChange}>Añadir</button>
        </>
    );
}