import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function Footer() {
    const { user } = useContext(UserContext);

    return (
        <footer>
            <p>Usuario actual: {user}</p>
        </footer>
    );
}
