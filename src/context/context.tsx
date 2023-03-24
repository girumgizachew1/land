import { createContext, useContext, useState } from "react";


const DarkModeContext = createContext({});

export const ModeContextProvider =( props: any )=>{
    const [darkMode, setDarkMode] = useState(false)

    return(
        <DarkModeContext.Provider 
            value={{darkMode, setDarkMode}}
        >
            {props.children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode =()=>{
    const context = useContext(DarkModeContext)
    return context;
}