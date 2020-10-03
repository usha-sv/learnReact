import {Component} from "react";

class Mount extends Component{

constructor(props) {
    super(props);
    this.state = { text: " " }
    console.log("Constructor")
   }

     static getDerivedSateFromProps(props,state)
    {
        console.log("getDerivedSateFromProps")
        return(null);
    }

    componentDidMount(){
        console.log("componentDidMount")
    }


   render(){
    console.log("Render")
    return("=====Mount lifecycle methods====");
       
   }
   

}
export default Mount;