import React from 'react';


let todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});





class Button extends React.Component{
  
    Add=()=>{
        // console.log("alert")
        todoItems.value.push(text)
        }

  
    render(){
        return(
        <div>
        <p>{text}</p>
        <button onClick={this.Add}>Add</button>
        </div>
        )
    }
}
export default Button;