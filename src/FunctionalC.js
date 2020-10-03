import React,{Component} from "react";


const Greet =(props)=>{
return <h1>Good {props.type}</h1>
 }  

class FunctionalC extends Component{
    render(){
        return(
            <div>
                 <Greet type="Morning"/>
                 <Greet type="Afternoon" />
                 <Greet type="Evening"/>

            </div>
            
        );
    }
}

export default FunctionalC;