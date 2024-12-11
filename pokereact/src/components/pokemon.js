import { useState } from "react";

const Pokemon = (props) => {
    const [nivel,setNivel] = useState(1)
    
    const onSubirNivel = (event) => {
        setNivel(n => n + 1)
    }
    const onBajarNivel = (event) => {
        setNivel(n => n - 1)
    }
   const calcularHP = () => {
    //TODO: Use real formula
        return  78 + (nivel *3);
   }
   const calcularAtack = () => {
        return 107 + (nivel *2)
   }
   const calcularDefensa = () => {
    return 75 + (nivel *2)
}

   return <div>
            <h1>Decidueye</h1>
            <p>Nivel: {nivel}</p>
            <button onClick={onSubirNivel}>Subir nivel</button>
            <button onClick={onBajarNivel}>Bajar nivel</button>
            <p>HP: {calcularHP()}</p>
            <p>Ataque: {calcularAtack()} </p>
            <p>Defensa: {calcularDefensa()}</p>
        </div>
}

export default Pokemon;