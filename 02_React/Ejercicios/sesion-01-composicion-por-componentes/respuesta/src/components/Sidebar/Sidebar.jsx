import React from "react";
import "./Sidebar.css"

export default function Sidebar(){
    return (
        <div className="sidebar">
            <header className="sidebar-header">FILTRAR POR</header>
            <ul className="sidebar-list">
                <li><a href="#">Acción</a></li>
                <li><a href="#">Comedia</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Terror</a></li>
                <li><a href="#">Sci-Fi</a></li>
            </ul>

            <header className="sidebar-header">DESTACADO</header>
        </div>
    )
}