import React from "react";
import NewTask from "../NewTask/NewTask";

import './Home.css';

const Home = ()=>{
    return(
        <div className="back">
            <h2>Collect Data from a Form</h2>
            <NewTask></NewTask>
        </div>
    )
}

export default Home;