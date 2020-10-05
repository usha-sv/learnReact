import React, {Component} from "react"

function CreateInput(props){
    return(
        <input type="text" placeholder={props.placeholder}/>
    );
}
 

class CallInput extends Component{
    constructor(props){
        super(props);
        this.state = {
              text:'Please Enter the data'
               }
        
          this.ChangeHead = this.ChangeHead.bind(this);
        }

        ChangeHead(e){
            this.setState({
                text: "Successfully Entered :)",
         });}
    render(){
        return(
            <div>
                <h1>Hello,{this.state.text}</h1>
            <CreateInput placeholder={"Enter your name"} required/><br/>
            <CreateInput placeholder={"Enter your age"} required/><br/>
            <CreateInput placeholder={"Enter your DOB"} required/><br/>
            <CreateInput placeholder={"Enter your Address"}required/><br/>
            <button onClick={this.ChangeHead}>SUBMIT</button>
            </div>
        );
    }
}
export default CallInput;
