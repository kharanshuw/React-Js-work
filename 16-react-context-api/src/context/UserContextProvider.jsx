import React from 'react'
import userContext from "./UserContext.js";
import { useState } from 'react';

export function UserContextProvider({children}) {
    let [user, setUser] = useState('');
    return (

        <userContext.Provider value={{ setUser, user }}>
            {children}
        </userContext.Provider>
    )
}

