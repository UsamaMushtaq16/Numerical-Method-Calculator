import { createContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";

const INITIAL_STATE = {
    darkMode : false,
};


export const DarkMode = createContext(INITIAL_STATE)

export const DarkModeProvider = ({children}) => {
    const[state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return(
        <DarkMode.Provider value={{darkMode:state.darkMode, dispatch}}>{children}</DarkMode.Provider>
    );
};