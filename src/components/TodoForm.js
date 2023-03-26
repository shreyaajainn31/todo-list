import React, {useState, useEffect} from "react";

export default function TodoForm(props){
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [complete, setComplete] = useState(false);

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    
        if (!input) {
          return;
        }
    
        if (editing) {
          setTodos(
            todos.map(todo => {
              if (todo.id === editID) {
                return {...todo, text: input}
              }
              return todo;
            })
          );
          setInput('');
          setEditing(false);
          setEditID(null);
        } else {
          const newTodo = {
            id: Math.floor(Math.random() * 10000),
            text: input
          }
      
          setTodos([...todos, newTodo]);
          setInput('');
        }
    }

    const handleComplete = id => {
        setTodos(
            todos.map((todo) => {
              if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
              } else {
                return todo;
              }
            })
          );
    }

    const handleDelete = id => {
        const confirmDelete = window.confirm("Are you sure you want to delete?");
        if (confirmDelete) {
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        }
    }
    
    const handleEdit = id => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setEditing(true);
        setEditID(id);
        setInput(todoToEdit.text);
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <form className='list'>
        <label>
        <input type= 'text' 
        name = 'text'
        className='input' 
        placeholder= 'Enter your task here'
        value = {input} 
        onChange = {handleChange}/>
        <button className = 'button' onClick={handleSubmit}>{editing ? "Edit" : "Enter"}</button> 
        
       <br></br>
        <br/>

        <div className="tasks">
                {todos.map(todo => (
                    <div className = 'forms' key={todo.id}>
                   <p className={complete ? 'complete':'not-complete'} > {todo.text} </p>   
                    <button className = 'icons' onClick={() => handleDelete(todo.id)}> 
                        <i className='material-icons'>delete</i> 
                    </button> 
                    <button className = 'icons' onClick={() => handleEdit(todo.id)}>  
                        <i className='material-icons'>edit</i> 
                    </button> 
                    <button className = 'icons'>
                        <i className='material-icons small-icon' onClick={handleComplete}>done</i>
                    </button>
                   <p>-------------------------------------------------------</p>
                   </div>
                ))}

        </div>
     
        </label>
        </form>
    );
}
