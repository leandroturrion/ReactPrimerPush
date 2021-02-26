//const element = document.createElement("h1") //cree elemento 
//element.innerText = "Hola React !"   
//una vez q cree el elemento, donde lo muestro? creo una constante y creo un contenedor con...
//const container = document.getElementById("root")  //genere el contenedor, falta agregarle el elemento
//al contenedor le agrego un hijo y especifico CUAL hijo entre las ()
//container.appendChild(element)
//para crear cosas en react, tenes que  importarlo...

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import "bootstrap/dist/css/bootstrap.css"

const container = document.getElementById("root")


ReactDOM.render(<Card/>, container)