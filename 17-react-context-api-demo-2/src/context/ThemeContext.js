import React from "react";
import { createContext } from "react";
import { useContext } from "react";


export const ThemeContext = createContext(

    {
        themeMode:"light",
        darktheme:() => {},
        lighttheme:() => {}
    }
);


export const ThemeProvider = ThemeContext.Provider


export default function useTheme()
{
    return useContext(ThemeContext) 
}


