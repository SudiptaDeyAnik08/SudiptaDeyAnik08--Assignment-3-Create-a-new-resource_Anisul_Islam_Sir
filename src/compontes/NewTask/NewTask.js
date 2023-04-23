import React, { useState } from "react";

import "./NewTask.css"

const NewTask=(props)=>{

    const [name,setName]=useState();
    const [description,setDescription] = useState();
    // const task = [name,description];
   
   
   

    const handleName=(e)=>{
        e.preventDefault();
        setName(e.target.value)
        // console.log(name)
    }

    const handleDes=(e)=>{
       e.preventDefault();
       setDescription(e.target.value)
        // console.log(description)
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("name: "+name+" Desc: "+description)
        const task = {name,description};
        props.taskGather(task);
        setName("");
        setDescription("");
        
    }

   
    return(
        <div className="newTask">
           
            <form  onSubmit={handleSubmit}>
               
                <div className="titleDiv">
                    <div>
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div>
                        <input type="text" name="title" id="title" value={name} onChange={handleName} className="inputWidth" required/>
                    </div>
                </div>
                
                <div>
                    <div>
                        <label htmlFor="description">Description:</label>
                    </div>
                    <div>
                        <textarea name="description" id="description" value={description} onChange={handleDes} className="inputWidth" required  ></textarea>

                         
                    </div>
                </div>
                <div className="submitBtn">
                 <button id="submitButton" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default NewTask;