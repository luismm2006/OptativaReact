import { useState } from 'react'
function ContadorClics(){
    const [count, setCount] = useState(0)
    return (
        <>
            {count}
            <div>
                <button onClick={() => setCount(count+1)}>Incrementar</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}
export default ContadorClics;