import React from 'react';
//import './ListItems.css';


function ToDoList(props){
    const items = props.items;
    const listItems = items.map(item =>
    {
       return <div className="list" key={item.key} >
          <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       <button class="delete" onClick={() => {
            props.deleteItem(item.key)
        }} >Del</button>
       <button class="edit" onClick={() => {
            props.setUpdate(item.value,item.key)
        }} >Edit</button>
        </span>
     </p>
     
    </div>})
    return (
        <div>{listItems}</div>
    )
  }
export default ToDoList;