import { useState } from 'react'

function Ej1(){
    const [count, setCount] = useState(0)
    return (
        <>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count+1)}>Sumar</button>
            <button onClick={() => setCount(count-1)}>Restar</button>
        </>
    )
}
export default Ej1;