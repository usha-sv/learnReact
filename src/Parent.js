import Child from "./Child"
import React from 'react'
    class Parent extends React.Component {
      constructor(props) 
       { super(props); 
        //this.recieveDataAndChangeColor = this.recieveDataAndChangeColor.bind(this);

         this.state = {color: 'RED'}; 
       }
     recieveDataAndChangeColor(val){
        this.setState({
           color : val
         } );
      }
     render() { 
      console.log("this value in parent:",Parent.prototype)
        return (
          <div> <Child call = {this.recieveDataAndChangeColor.bind(this)} /> 
        <p>COLOR : {this.state.color}</p></div>
        );
          } 
  }

export default Parent;
