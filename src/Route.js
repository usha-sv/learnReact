
import React,{Component} from 'react';

class Route extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password:null,
            }
        }
    
login(){
    axios.post('http://localhost:8080/login', 
    { email:this.state.email, 
    password :this.state.password
}).then(response=>{
    console.log(response); 
    localstorage.setItem('login',)
    })
}
}