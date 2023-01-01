
import React from "react";
import {useState} from "react";
import List from './TodoForm';

export default function Todo(){
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    });

    return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key = {index} >
            <div key = {todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>

        </div>
    ))
 }

