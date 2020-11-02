import React,{Component} from 'react';
import  "./TodoFinal.css"
function ToDoList(props){
    const items = props.items;
    const listItems = items.map(item =>
    {
       return <div className="list" key={item.key} >
          <p>
          <span   className="list">

          {item.text + "                  "   }

          </span>
        <button class="delete" onClick={() => {
            props.deleteItem(item.key)
        }} >Del</button>
    <button class="update" onClick={() => {
            props.updateItem(item.key)
        }} >Edit</button>
     </p>
     
    </div>})
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
              text:'',
              key:'',
              editItem:false,
               }
        }
          this.addItem = this.addItem.bind(this);
          this.handleInput = this.handleInput.bind(this);
          this.deleteItem = this.deleteItem.bind(this);
          this.updateItem = this.updateItem.bind(this);
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
            key:''

          }
        })
        }
        //else{
        //    return(<p>Can't add empty items</p>)
        //}
      }
      deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
        this.setState({
          items: filteredItems
        })
      }
  
  updateItem(key){
    console.log("Key:",key)

    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
      const selectedItem=this.state.items.find(item=>item.key === key)
      console.log(selectedItem)

    this.setState({
      items: filteredItems,
      currentItem:{
        text: selectedItem.text,
        key:selectedItem.key,
        editItem :true,

      

      }
     
    });
    //console.log(this.state.text)

  }
      handleInput(entered){
        this.setState({
          currentItem:{
            text: entered.target.value,
            key: Date.now()

          }
        })
      }

   render(){
       //console.log("Inside Render")
       return(
           <div class="ToDo">
                <form id="todoForm" onSubmit={this.addItem}>
                    <h1>To-Do App</h1><br/>
                    <input type="text" placeholder="Enter your text" 
                    value={this.state.currentItem.text} 
                    onChange={this.handleInput} editItem={this.state.editItem}/>
                    <button  type="submit"> {this.editItem ?  'Edit' : 'Add'}</button>
                </form>
                <p>{this.state.items.text}</p>
                <ToDoList items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem} />

            </div>
       );
   } 
}
//<button onClick={(e)=>{this.addItem(e)} } type="submit">Add</button>

export default ToDo;

