import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Pokemon = (props) => {
    const [nivel,setNivel] = useState(1)
    const [nombre,setNombre] = useState("")
    const [imagesFront,setImageFront] = useState()
    const [imagesBack,setImagesBack] = useState()
    const [displayImg,setDisplayImg] = useState("front")
    const [baseHP,setBaseHP] = useState()
    const [baseAttack,setBaseAttack] = useState()
    const [baseDefense,setBaseDefense] = useState()


    const params = useParams();
    
    useEffect(() => {
        
        axios.get("https://pokeapi.co/api/v2/pokemon/"+ ID).then(response => {
            setNombre(response.data.name);
            setImageFront(response.data.sprites.front_shiny);
            setImagesBack(response.data.sprites.back_shiny);
            setBaseHP(getStat("hp",response.data.stats))
            setBaseAttack(getStat("attack",response.data.stats))
            setBaseDefense(getStat("defense", response.data.stats))
        })
        
    },[])

    const ID = params.id;
    

    function getStat(nombreStat, arrayStats) {
            const filteredArray= arrayStats.filter(s => s.stat.name === nombreStat)
            if (filteredArray.legth === 0) {
                return -1
            }
            return filteredArray[0].base_stat;
        }
        
    // la sintaxis más modernilla es async-await
    
    const onSubirNivel = (event) => {
        setNivel(n => n + 1)
    }
    const onBajarNivel = (event) => {
        setNivel(n => n - 1)
    }
    const onCambiarImg = () => {
        setDisplayImg(prev => prev === "back" ? "front" : "back");
    }
   const calcularHP = () => {
    //TODO: Use real formula
        return  baseHP + (nivel *3);
   }
   const calcularAtack = () => {
        return baseAttack + (nivel *2)
   }
   const calcularDefensa = () => {
    return baseDefense+ (nivel *2)
}

   return <>
            <h1>{nombre}</h1>
            <img onClick={onCambiarImg}src={displayImg==="front"?imagesFront:imagesBack}></img>
            <p>Nivel: {nivel}</p>
            <button onClick={onSubirNivel}>Subir nivel</button>
            <button onClick={onBajarNivel}>Bajar nivel</button>
            <p>HP: {calcularHP()}</p>
            <p>Ataque: {calcularAtack()} </p>
            <p>Defensa: {calcularDefensa()}</p>
        </>
}

export default Pokemon;