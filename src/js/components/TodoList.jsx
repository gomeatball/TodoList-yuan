import React from 'react'
import { useEffect, useState } from 'react'


export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("")
    
   useEffect(() => {
    const getAllTodos = async() => {
        try {
            const response = await fetch('https://playground.4geeks.com/todo/users/YuanMa');
            if (response.ok) {
                const data = await response.json();
                setTodos(data.todos);
                console.log(todos);
                
            }else{
                throw new Error("there is an error");
                
            }
            
        } catch (error) {
            console.log("something is wrong fetching data")
        }
    }
    getAllTodos();
   }, [])

 
   const addTask = () => {
    if (todo.trim() === "") {
        return;
    }
    const newTodo = {
        label: todo,
        isDone: false
    }
    setTodos([...todos, newTodo]);
    setTodo("");
   }

   const deleteTask = (index) => {
   const updatedTodos = todos.filter((e, id) => id !== index);
   setTodos(updatedTodos);
   }
return (
    
    <div className='fluit-container'>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 text-center'>
                <h1>Daily Tasks</h1>

                <input type="text" placeholder='please type the task'
                value={todo}
                onChange={e => setTodo(e.target.value)}/>

                <button className='addTask ms-4' onClick={addTask}>ADD</button>
                <ul>
                {todos.map((todo, index) => (
                    <li key={index}> {todo.label} 
                        <button  className="ms-4" onClick={() => {deleteTask(index)}}>delete</button>
                    </li> 
                ))}
                </ul>
            </div>
            <div className='col-2'></div>
        </div>
    </div>


)

}