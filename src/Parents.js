import React from 'react';
import Childs from './Childs'
class Parents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "red"
        }
    }

    handleCallback = (dataFromChild) =>{
        this.setState({color: dataFromChild})
    }

    render(){
        
        return(
            <div>
                
                <Childs call = {this.handleCallbac}/>
                <p>Color: {this.state.color }</p>
        
            </div>
        )
    }
}



export default Parents;