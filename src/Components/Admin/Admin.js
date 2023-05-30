import React, {useState} from "react";
import './AdminStyle.css';

const AdminActions = () => {

    const [name,setName]=useState('InzamamAzeez');
    const [pass,setPass]=useState('1234');

    function handleLog (){
        if(setName===name && setPass ===pass){
            alert('login succesfully!')
        }else{
            alert('Invalid Username & password!')
        }
    }

    return(
        <div className="Cover">
        <h1>Admin Login:</h1>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password" />
        <button className="button" onClick={handleLog}>login</button>
        </div>
    )
}


export default AdminActions;