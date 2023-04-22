import React, { useState } from "react";
import NewTask from "../NewTask/NewTask";

import './Home.css';
import Task from "../Task/Task";

const Home = ()=>{

    const [task,setTask] = useState([]);
    
    const newTask =(task2)=>{
        setTask([...task,task2]);
    }
  
    // console.log(task);

    return(
        <div className="back">
            <h2>Collect Data from a Form</h2>
            <div>
                <NewTask taskGather={newTask}></NewTask>
            </div>

            <div className="taskList">
                <Task todoTask={task}></Task>
            </div>

        </div>
    )
}

export default Home;