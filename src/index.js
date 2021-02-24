//const element = document.createElement("h1") //cree elemento 
//element.innerText = "Hola React !"   
//una vez q cree el elemento, donde lo muestro? creo una constante y creo un contenedor con...
//const container = document.getElementById("root")  //genere el contenedor, falta agregarle el elemento
//al contenedor le agrego un hijo y especifico CUAL hijo entre las ()
//container.appendChild(element)
//para crear cosas en react, tenes que  importarlo...


import React from "react"
import reactDom from "react-dom"

const user = {

    firstName: "Raul",
    lastName: "Turrionazo",
}



function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>Hola react, soy {getName(user)} !</h1>

    }
    return <h1>Hola react soy un usuario sin registro!</h1>
}


const name = "Leandro"


const element = <div>{getGreeting(user)}</div>

const container = document.getElementById("root")

//reactDom.render(__que__y__DONDE__) este metodo recibe 2 parametros, que y donde, que muestra y donde lo renderea

reactDom.render(element,container)


