import React, {Component} from "react"


class InputState extends Component{
    constructor(props){
      super(props);
      this.state = 
      { text :"Please enter the data!!",
        username: '' ,
        age : " ",
        dob : " ",
        address: ""
    };
    this.ChangeHead = this.ChangeHead.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange = e => {
      this.setState({   username: e.target.value.username ,
                        age : e.target.value.age,   
                        dob : e.target.value.dob,
                        address : e.target.value.address  
                    });
    }

    ChangeHead(e){
        e.preventDefault();
        this.setState({
            text: "Successfully Entered :)",
            username: '' ,
            age : " ",
            dob : " ",
            address: "" 

     });}
   
    render() {
      return (
          <form>
              <h1>Hello,{this.state.text}</h1>
           
            <input type="text" name="username" placeholder={"Enter your name"}value={this.state.username} onChange={this.handleChange}/><br/>
            <input type="number" name="age"placeholder={"Enter your age"} value={this.state.age} onChange={this.handleChange}/><br/>
            <input type="date" name="dob"placeholder={"Enter your DOB"} value={this.state.dob} onChange={this.handleChange}/><br/>
            <textarea name="address" placeholder={"Enter address"} value={this.state.address} onChange={this.handleChange}/><br/>
            <button onClick={this.ChangeHead}>SUBMIT</button>
          </form>
      )}
}
export default InputState;