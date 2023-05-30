import React from "react";
import './UserStyle.css';

const UserActions = () =>{
    return(
        <div className="cover-page">
        <h1>Student Login:</h1>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button className="button1">login</button>
        </div>
    )
}

export default UserActions;