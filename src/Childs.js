import React from 'react'
class Childs extends React.Component{
  
    handleSubmit = (event) => {
        this.props.call("green");
    
    }

    render(){
        return(
        <div>
            <form onSubmit = {this.handleSubmit}>
                <input type = "submit" value = "Change Color"/>
            </form>
        </div>
        )
    }
}
export default Childs;