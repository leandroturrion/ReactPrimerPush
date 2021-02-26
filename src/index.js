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


ReactDOM.render(<Card
      title="Titulo 1 asdasdasasd"
      description="parrafo piloto lorasdadasemdigmosle"
      img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
      leftColor="#1b1a1b"
      rigthColor="#617BFB"
   />, container)