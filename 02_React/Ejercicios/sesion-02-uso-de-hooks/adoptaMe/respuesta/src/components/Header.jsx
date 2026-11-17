import React, {useContext, useState} from "react";
import "./Header.css"
import {ThemeContext, UserContext} from "../context/AppContext.jsx";


export default function Header()  {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {userName, login, value} = useContext(UserContext);
    // const {counter, addCounter, removeCounter, resetCounter} = useContext(CounterContext);

    return (
        <header>
            <div>🐾 AdoptaMe</div>
            <div>
                Encuentra tu compañero ideal
            </div>
            <div>
                <button onClick={login}>{value}</button>
                <span>👤 {userName}</span>
                {/*<h1>{counter}</h1>*/}
                {/*<button className="button" onClick={addCounter}>+1</button>*/}
                {/*<button className="button" onClick={removeCounter}>-1</button>*/}
                {/*<button className="button" onClick={resetCounter}>0</button>*/}
                <button className="button" onClick={toggleTheme}>
                    {theme === "light" ? "☀️" : "🌙"}
                </button>
            </div>
        </header>
    )
}