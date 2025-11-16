import { useState } from "react";
export default function LightSwitch(){
    const [isLightOn, setLinterna] = useState(false);
    return(
        <>
            <div>{isLightOn ? "💡Encendida" : "⚫Apagada"}</div>
            <button onClick={() => {setLinterna(!isLightOn)}}></button>
        </>
    );
}