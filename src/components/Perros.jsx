import React,{useEffect, useState} from 'react'
import style from '../styles/Tarjetas.module.scss'


export const Perros = () => {

    const [dogs, setdogs] = useState([])

    const api = 'https://dog.ceo/api/breeds/image/random/21';

    const fetchPerros = (link) => {
        fetch(link).then(response => response.json()).then(data => setdogs(data.message));
    };

    useEffect(() => {
        fetchPerros(api);
    }, [])

    return (
        <>
        <div className={style.title}>Perros</div>
        <div className={style.container}>
        {dogs.map((item, index)=>(
            <div key={index} className={style.card}>
                <img src={item}/>
                <h4>"NOMBRE"</h4>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <a href="/componente-recetas/Receta">Leer más</a>
            </div>
        ))}
        </div>
        </>
    )
}
