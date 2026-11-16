import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navBar">
            <ul className="navBar-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Estrenos</a></li>
                <li><a href="#">Géneros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
}