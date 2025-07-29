import React, { useState } from 'react'

export const Task = () => {

    let List=[
        {name:"task1",
        priority : "High"
        },
        {name:"task2",
        priority : "Low"
        },
    ]

    const [task,setTask] = useState("");
    const [priority,setPriority] = useState("High");
    const [taskList,setTaskList] = useState(List);

    function AddTask(){
        let newTask = {
        name : task,
        priority : priority
    };

    
   

     // Add to the task list
    setTaskList([...taskList, newTask]);

    // Clear input
    setTask("");
    setPriority("High");

    }

  return (
    <>
     <input placeholder='Add Task' onChange={(e)=>{setTask(e.target.value)}}/>
      <select onChange={(e)=>{setPriority(e.target.value)}}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>      
      <button onClick={AddTask}>Add Task</button>

   <ul>
    {taskList.map((item,index)=>(
        <li key={index}>{item.name}- <strong>{item.priority}</strong>
        <button>Completed</button>
        <button>Delete</button>
        </li>
    ))}
   </ul>

    </>
  )
}
