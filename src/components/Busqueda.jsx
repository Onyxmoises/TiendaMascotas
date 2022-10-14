import React from 'react'
import style from '../styles/Busqueda.module.scss'

export const Busqueda = () => {
    return (
      <div className={style.formulario}>
        <h4>ADOPTA A TU PERRO O GATO</h4>
        <p>¡Ellos están desparasitados, vacunados y esterilizados!</p>
        <form>
          <select className={style.subject} placeholder='Tipo de animal'>
            <option>Perro</option>
            <option>Gato</option>
          </select>
          <select className={style.subject} placeholder='Talla'>
            <option>Chica</option>
            <option>Mediana</option>
            <option>Grande</option>
          </select>
          <select className={style.subject} placeholder='Edad'>
            <option>Hasta 1 año</option>
            <option>Mas de 1 añoa hasta 8 años</option>
            <option>Mas de 8 años</option>
          </select>
          <select className={style.subject}>
            <option>Hembra</option>
            <option>Macho</option>
            <option>Hembra y Macho</option>
          </select>
          <input className={style.formButton} type="button" value="Buscar"/>
        </form>
      </div>
    )
}
