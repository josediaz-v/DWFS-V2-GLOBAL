import React, {useState} from "react";
import "./AnimalCard.css"



export default function AnimalCard({animal})  {

    return (
        <div className="animal-card">
            <span>{animal.emoji}</span>
            <span>{animal.name}</span>
            <span>{animal.breed}</span>
            <span>{animal.age} {animal.age === 1 ? "año" : "años"}</span>
        </div>
    )
}