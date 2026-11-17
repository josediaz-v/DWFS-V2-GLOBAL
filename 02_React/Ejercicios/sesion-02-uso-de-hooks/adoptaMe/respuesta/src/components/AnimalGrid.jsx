import React, {useEffect, useState} from "react";
import "./AnimalGrid.css"
import AnimalCard from "./AnimalCard.jsx";
import useAnimals from "../hooks/useAnimals.js";

export default function AnimalGrid()  {
    const animals = useAnimals();
    const [mensaje, setMensaje] = useState("");
    const loading = false;

    useEffect(() => {
        if (!loading) {
            setMensaje(`${animals.length}` + `${animals.length === 1 ? " Animal disponible" : " Animales disponibles"}`)
        }
        else{
            setMensaje("cargando...")
        }
    }, [animals, loading]);

    return (
        <section>
            <h3 className="animal-grid__count">
                {mensaje}
            </h3>
            <div className="animal-grid">
                {animals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </section>
    )
}