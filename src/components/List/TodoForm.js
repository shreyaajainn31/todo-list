import React, {useState} from "react";

export default function List(props){
    const [input, setInput] = useState('')
    const handleChange = e=>{
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        // props.onSubmit({
        //     id:Math.floor(Math.random() * 1000),
        //     text:input
        // });
    }
    return (
        <form className="list">
        <label>
        <input type="Enter your task here" name="name" className="input" alt ="Enter your task here" 
        placeholder="Enter your task here" value = {input} onChange = {handleChange}/>
        <button class = "button"> Enter </button> 
        </label>
        </form>
    );
    
  };
  