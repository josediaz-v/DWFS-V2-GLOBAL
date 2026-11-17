import React, {useEffect, useState, useRef} from "react";
import './App.css'
import RenderCounter from "./RenderCounter.jsx";
import Header from "./Header.jsx";
import AppContext from "../context/AppContext.jsx";
import AnimalGrid from "./AnimalGrid.jsx";

function App() {
    const contador = useRef(0);
    contador.current += 1;

  return (
      <AppContext>
        <div className="app">
            <Header />
            <AnimalGrid />
            <RenderCounter contador={contador.current}/>
        </div>
      </AppContext>
  )
}

// export default function App() {
//     return(
//         <AppContext>
//             <AppContent />
//         </AppContext>
//     )
// }

export default App
