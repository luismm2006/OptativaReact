import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

export default function Content() {
    const { setUser } = useContext(UserContext); 
    
    const [inputValue, setInputValue] = useState("");

    const handleChange = () => {
        if (inputValue.trim() !== "") {
            setUser(inputValue); 
            setInputValue("");   
        }
    };

    return (
        <main style={{ padding: "10px" }}>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleChange}>Actualizar Usuario</button>
        </main>
    );
}
