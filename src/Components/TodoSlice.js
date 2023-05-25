import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "TodoList",
    initialState:[],
    reducers:{
        addTodo:(state,action) =>{
                state.push(action.payload);
        },
        toggleUpdate:(state,action) =>{
            const todo= state.find((todo)=>todo.id === action.payload);
            if(todo){
                todo.status = todo.status === 'pending' ? 'Completed' : 'pending';
            }
        }
    }

})

export const {addTodo,toggleUpdate}=todoSlice.actions;
export const TodoReducer = todoSlice.reducer;