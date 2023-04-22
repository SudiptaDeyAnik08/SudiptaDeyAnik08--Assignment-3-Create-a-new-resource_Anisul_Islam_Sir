import React from "react";
import SingleTask from "../SingleTask/SingleTask";


import './Task.css'

const Task =(props)=>{
    console.log(props.todoTask);

    return(
        <div className="dis">
            {
                props.todoTask.map((res,index) => <SingleTask key={index} task={res}></SingleTask>)
            }
        </div>
    )
}


export default Task;