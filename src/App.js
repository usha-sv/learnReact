import React,{Component} from 'react';

class App extends Component{
  constructor(props){
  super(props);
  this.state={
    items:[],
    currentItem:{
      text:""
       }
   }
  }

addItem(e){
  const newItem = this.state.currentItem;
  const items = [...this.state.items, newItem];
  this.setState({
    items: items,
    currentItem:{
      text:'',
      }
  })
  }


  render(){
    return (
      <div >
       <form id="todo-form" onSubmit={this.addItem}>
          <h1>To-Do App</h1><br>
          </br>
          
          <input type="text" placeholder="Enter your text"  
          value={this.state.currentItem.text} 
          onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
        </div>
    
    );
  }
}
export default App;

