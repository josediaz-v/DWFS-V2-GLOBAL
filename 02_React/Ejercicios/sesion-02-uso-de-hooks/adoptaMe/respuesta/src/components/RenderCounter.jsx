import React from "react";
import "./RenderCounter.css"

export default function RenderCounter({contador})  {
    return (
        <footer className="footer">
            <span>🔄 Renders del componente raíz: {contador}</span>
            <span>Este contador aumenta con cada interacción (useEffect sin [])</span>
        </footer>
    )
}