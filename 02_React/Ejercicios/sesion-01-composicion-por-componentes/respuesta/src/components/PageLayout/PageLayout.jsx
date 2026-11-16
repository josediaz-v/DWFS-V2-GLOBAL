import React from "react";
import "./PageLayout.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import MovieGrid from "../MovieGrid/MovieGrid.jsx";

export default function PageLayout() {
    return (
        <div className="page-layout">
            <Sidebar />
            <MovieGrid />
        </div>
    );
}