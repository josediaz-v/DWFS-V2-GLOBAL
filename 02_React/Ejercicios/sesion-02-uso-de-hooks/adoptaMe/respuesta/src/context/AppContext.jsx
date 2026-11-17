import React, {createContext, useContext, useState} from "react";

export const ThemeContext = createContext(null);

export const UserContext = createContext(null);

// export const CounterContext = createContext(null);

export default function AppContext({children})  {
    const [theme, setTheme] = useState("light");
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.toggle("light", theme === "light");
    }

    const [userName, setUserName] = useState("");
    const [value, setValue] = useState("Login");
    function login() {
        if (!userName) {
            setValue("Logout");
            setUserName("Jose Diaz");
        }
        else{
            setValue("Login");
            setUserName("");
        }
    }
    // function
    // const [counter, setCounter] = useState(0);
    // function addCounter() {
    //     setCounter(counter + 1);
    // }
    // function removeCounter() {
    //     setCounter(counter - 1);
    // }
    // function resetCounter() {
    //     setCounter(0);
    // }

    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <UserContext.Provider value={{userName, login, value}}>
                {/*<CounterContext.Provider value={{counter, addCounter, removeCounter, resetCounter}}>*/}
                    {children}
                {/*</CounterContext.Provider>*/}
                </UserContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}