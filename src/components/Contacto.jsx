import React from 'react'
import style from '../styles/Contacto.module.scss'

export const Contacto = () => {
  return (
    <div className={style.formulario}>
        <h4>Contacto para adopcion</h4>
        <p>¡Ellos están desparasitados, vacunados y esterilizados!</p>
        <form>
            <input type="text" placeholder="Nombre" className={style.subject} />
            <input type="text" placeholder="Correo" className={style.subject} />
            <input type="text" placeholder="Numero" className={style.subject} />
            <input type="text" placeholder="Mascota de interes" className={style.subject} />
          <input className={style.formButton} type="button" value="Enviar"/>
        </form>
      </div>
  )
}
