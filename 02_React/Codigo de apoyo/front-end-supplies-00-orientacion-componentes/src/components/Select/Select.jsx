import React, { useState } from "react";
import "./Select.css";

export default function Select() {
    const [style, setStyle] = useState("style1");

    // const handleChange = (event) => {setStyle(event.target.value)};
    const resetStyle = () => {setStyle("style1");};

    function handleChange(event){
        const value = event.target.value;
        setStyle(value);
    }

    return (
        <>
            <div className="select">
                <select value={style} onChange={handleChange}>
                    <option value="style1">Estilo 1</option>
                    <option value="style2">Estilo 2</option>
                    <option value="style3">Estilo 3</option>
                </select>
                <button onClick={resetStyle}>Reset</button>
            </div>

            <div className={`select ${style}`}>
                <p>Este es un div de prueba de style select.</p>
            </div>
        </>
    );
}