
import React, {Component} from "react"
function ChangeHead(props){
    return(
    <h1>{props.name}</h1>
    );
}

class test extends Component{
    render(){
        return(
            < ChangeHead name="Successfuly entered data !!" />
        );
    }
}export default test;