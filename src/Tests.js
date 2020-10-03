import React, { Component } from "react"


class Tests extends Component{
    constructor(props){
        super(props);
            this.Greet = this.Greet.bind(this);
     }
    Greet(){
       alert("Congratulations!!") ;
        }

   
    render(){
        return(
            <form id="data" onSubmit={console.log("Data Submitted")}>
                <h1>Hello, {this.props.name}</h1>
                <h2>Please enter the details</h2>
                <input type="text" placeholder="Enter Name" required/>
                <input type="number" placeholder="Enter Age" required/>
                <input type="text" placeholder="Enter Address" required/>
                <input type="text" placeholder="Enter District" required/>
                <input type="text" placeholder="Enter State" required/>
                <input type="text" placeholder="Enter address" required/>
                <br/><br/>
                <button>SUBMIT</button>
                <button onClick={this.Greet}>CHECK</button>
               
            </form>

        );
    }

}
export default Tests;

