import { useState } from "react";

function LimiteContador(){
    const [count, setCount] = useState(0)
    return (
        <>
            {count >= 5 ? 5 : count} 
            <div>
                <button onClick={() => setCount(count+1)}>Incrementar</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}
export default LimiteContador;