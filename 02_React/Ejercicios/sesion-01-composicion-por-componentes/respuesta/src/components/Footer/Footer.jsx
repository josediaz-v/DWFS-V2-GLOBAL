import React from "react";
import "./Footer.css";

export default function Footer({year}) {
    return (
        <footer className="footer">
            <p>© {year} CineReact &bull; Todos los derechos reservados.</p>
        </footer>
    );
}

