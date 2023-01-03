import React, {useState} from "react";
import TodoForm from './TodoForm';
import Todo from "./Todo";

export default function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updateTodos)
        
    }
    return (
       <div>
         <h1 className='Header'>Whats the plan for today? </h1>

         <p className="Header"> Legend: </p>
         <p className="Header"> Green => Complete, Orange => Incomplete </p>
         <TodoForm onSubmit = {addTodo}/>
         <Todo className = "todo-tasks"
         todos = {todos}
         completeTodo={completeTodo}
         />
       </div>
    );
 }
