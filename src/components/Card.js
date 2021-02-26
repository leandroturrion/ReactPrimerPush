import React from "react"
import imagenDefault from "../images/exercise.png"
import "./style/Card.css"


class Card extends React.Component{
        render(){
        return (
            
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">

                       <div className="col-6">
                      <img src={imagenDefault} className="float-rigth" />
                       </div>
                        <div className="col-6 Fitness-Card-Info">
                        <h1>Titulo 1</h1> 
                         <p>parrafo piloto loremdigmosle</p> 
                      </div>

                    </div>
             </div>

            </div>
        )
    }

}

export default Card