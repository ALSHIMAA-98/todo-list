import React from 'react';
import { useState } from 'react';
import './todo.modules.css'
function Todo() {

    const [tasks, setTasks] = useState([]);  //state variable to store tasks
    const [newTask, setNewTask] = useState("");   //state variable for new task input field

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        if(newTask !== "") {
        setTasks(prevTasks => [...prevTasks, newTask])     //adds the new task to the
        setNewTask("");
    }
    }
    function deleteTask(index) {
        
        const updatedTasks = tasks.filter((_, i) => index !== i); 
        setTasks(updatedTasks);
    }
    function moveUp(index) {
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]= [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)

        }

    }
    function moveDown(index) {
        if(index<tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]= [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks)

        }
    }
    return (
        <div className='todo'>

            <h1>To-do list App</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter task'
                    value={newTask}
                    onChange={handleInputChange}

                />
                <button
                    className='add-btn'
                    onClick={addTask}
                >Add</button>

                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            
                        <span className='text'>{task}</span>
                        <button className='delete-btn'
                        onClick={()=>deleteTask(index)}>Delete</button>
                        
                        <button className='move-btn'
                        onClick={()=>moveUp(index)}>Up</button>
                         <button className='move-btn'
                        onClick={()=>moveDown(index)}>Down</button>
                        </li>
                        

                    ))}
                </ol>

            </div>

        </div>
    );
}

export default Todo;
