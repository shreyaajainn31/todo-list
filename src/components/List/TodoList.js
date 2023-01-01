import {useState} from "react";
import List from './TodoForm';
export default function ListText(){
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if(!todo.text || /^s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id == id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updateTodos)
    }
    return (
       <div>
         <h1 className='Header'>Whats the plan for today? </h1>
         <List onSubmit = {addTodo}/>
       </div>
    );
 }
