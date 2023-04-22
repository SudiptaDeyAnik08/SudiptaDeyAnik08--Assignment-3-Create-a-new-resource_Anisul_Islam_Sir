import React from "react";

import './SingleTask.css';

const SingleTask = (props)=>{

    return(
        <div className="singleTask"> 
            <h3>{props.task.name}</h3>
            <p>{props.task.description}</p>
        </div>
    )
}

export default SingleTask;