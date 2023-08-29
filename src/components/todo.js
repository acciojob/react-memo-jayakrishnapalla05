import React,{useState} from"react";


const todo=()=>{
  const [todos,setTodos]=useState(['New Todo']);


  return (
    <div>
        <h2>My Todos</h2>
        {
            todos && todos.map((todo,index)=>{
                <p id={'todo-${index}'}>{todo}</p>
            })
        }
        <button id="add-todo-btn" onClick={()=>setTodos([...todos, 'New Todo'])}>Add Todo</button>

        <br/>
        <br/>
        <hr/>
    </div>
  )



}
export default todo;