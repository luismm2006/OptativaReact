import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function Header() {
    const { user } = useContext(UserContext); 

    return (
        <header>
            <h1>Hola, {user}</h1>
        </header>
    );
}
