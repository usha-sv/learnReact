import React from 'react'
class Child extends React.Component {
  
ChangeColor=(e)=>
{
  this.props.call("GREEEN");
e.preventDefault();
}  
   
  render() { 
    console.log("this value in child:",this.props)
    return (
      <div><button onClick={this.ChangeColor}> CHANGE </button>
      
      </div> 
    );
  } 
}
export default Child;