import { useState } from 'react'

function MostrarOcultar(){
    const [visibility, setBoolean] = useState(true)

    return (
        <>
        <div>
            {visibility && <p>Informacion secreta</p>}
            <button onClick={() => setBoolean(visibility ? false : true)}>{visibility ? "Ocultar" : "Mostrar"}</button>
        </div>
        </>
    )
}
export default MostrarOcultar;