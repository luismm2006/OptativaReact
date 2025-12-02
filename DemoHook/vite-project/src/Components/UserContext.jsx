import React, { createContext, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const UserContext = createContext();

export const UserProvider = () => {
    const [user, setUser] = useState("Luis"); 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Content/>
            <Header/>
            <Footer/>
        </UserContext.Provider>
    );
};

export default UserContext;
