import React, {Component} from "react";

class Update extends Component{
    constructor(props) {
        super(props);
        this.state={ text: "Hello " }
        //console.log("Constructor")
        
       }
       static getDerivedStateFromProps(props, state)
        {
        console.log("getDerivedStateFromProps");
        return(null); 
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate")
       }

    componentWillUnmount()
    {
        console.log("componentWillUnmount")

    }
    stateChange=()=>{
        this.setState({
            text : "Good Morning"
        })
    }
    render(){
        console.log("Render")
        return(
            <div>
                <h1>====Update lifecycle methods====</h1>
                <button onClick={this.stateChange}>Update</button>
            </div>
            
            );
           
       }
}

export default Update;