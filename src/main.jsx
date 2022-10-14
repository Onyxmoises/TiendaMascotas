import React from 'react'
import ReactDOM from 'react-dom/client'
import {Perros} from './components/Perros'
import {Menu} from './components/Menu'
import {Busqueda} from './components/Busqueda'
import {Contacto} from './components/Contacto'
import './styles/index.module.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Busqueda/>
    <Perros />
    <Contacto/>
  </React.StrictMode>
)
