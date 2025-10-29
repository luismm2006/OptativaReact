import { useState } from 'react'

function CambiadorTexto(){
    const textoOriginal = "Texto Original";
    const textoModificado = "Texto Modificado";
    const [text, setText] = useState(textoOriginal)
    return(
        <>
            <p>Cambiar texto: {text}</p>
            <button onClick={() =>  setText(textoModificado)}>Cambiar</button>
            <button onClick={() =>  setText(textoOriginal)}>Restaurar</button>
        </>
    )
}
export default CambiadorTexto;
