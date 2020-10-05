import React,{Component} from 'react';
import  "./ToDo.css"

function ToDoList(props){
    const items = props.items;
    const listItems = items.map(item =>
    {
       return <div className="list" >
           <p>{item.text}</p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
  }

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            currentItem:{
              text:''
               }
        }
          this.addItem = this.addItem.bind(this);
          this.handleInput = this.handleInput.bind(this);
          
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
          const items = [...this.state.items, newItem];//destructuring asssignment
        this.setState({
          items: items,
          currentItem:{
            text:'',
          }
        })
        }
        //else{
        //    return(<p>Can't add empty items</p>)
        //}
      }
      handleInput(entered){
        this.setState({
          currentItem:{
            text: entered.target.value,
            
          }
        })
      }

   render(){
       console.log("Inside Render")
       return(
           <div class="ToDo">
                <form id="todoForm" >
                    <h1>To-Do App</h1><br/>
                    <input type="text" placeholder="Enter your text" 
                    value={this.state.currentItem.text} 
                    onChange={this.handleInput}/>
                    <button onClick={this.addItem} type="submit">Add</button>
                </form>
                <p>{this.state.items.text}</p>
                <ToDoList items={this.state.items} />

            </div>
       );
   } 
}
//<button onClick={(e)=>{this.addItem(e)} } type="submit">Add</button>

export default ToDo;

