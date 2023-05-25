import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo,toggleUpdate } from "./TodoSlice";
import { useState } from "react";

const NewToDoList = () => {
    const [Name,setName]=useState("");
    const dispatch = useDispatch();
    const todos=useSelector((state)=>state.List);
    
 
    function handleClick(){
        
        if(Name.trim()){
            const todo={
                name:Name,
                id:new Date().getTime().toString(),
                status:'pending',
            }
            dispatch (addTodo (todo))
             setName("");
        }
        console.log(todos);
        // console.log("kkkkkkk");
    }

    function handleToggle(id){
        dispatch (toggleUpdate(id));
       
    }


    return(
        <>
        <h2>To Do List..!</h2>
        <input type="text" placeholder="Enter task" value={Name} onChange={e=>setName(e.target.value)} />
        <button onClick={handleClick}>Add</button>
        <ul>
            { todos.map((todo) =>(
                <li key={todo.id} >
                    <span>{todo.name}</span>
                    <button onClick={()=>handleToggle(todo.id)}>
                        {todo.status=== 'pending' ? 'pending' : 'Completed'}
                    </button>
                </li> 
            ))}
            </ul>
            </>
    )
}
export default NewToDoList;