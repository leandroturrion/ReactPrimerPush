import React from "react"
import imagenDefault from "../images/exercise.png"
import "./style/Card.css"
import circlesImg from "../images/circles.png"


class Card extends React.Component{

       constructor(props){
           super(props)
           this.state = {
                       
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
          
        }
       }
          
       componentDidMount(){
           setTimeout(() => {
          this.setState({
              image:''
          })
           }, 5000 )
       }


        render(){
            const {title, description, img, rigthColor, leftColor} = this.props
        return (
            
            <div className="card mx-auto Fitness-Card"
                
           style={{
               backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${rigthColor}, ${leftColor})`
           }}>

                <div className="card-body">
                    <div className="row center">

                       <div className="col-6">
                      <img src={this.state.image} className="float-rigth" />
                       </div>
                        <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1> 
                         <p>{description}</p> 
                      </div>

                    </div>
             </div>

            </div>
        )
    }

}

export default Card