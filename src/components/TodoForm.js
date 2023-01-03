import React, {useState} from "react";

export default function TodoForm(props){
    const [input, setInput] = useState('')
    
    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text:input
        })
        
        setInput(' ')
    }
    return (
        <form className='list' onSubmit={handleSubmit}>
        <label>
        <input type= 'text' 
        name = 'text'
        className='input' 
        placeholder= 'Enter your task here'
        value = {input} 
        onChange = {handleChange}/>
        <button className = 'button'> Enter </button> 
        </label>
        </form>
    );
    
  };
  