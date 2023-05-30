import React from "react";
import './FrontPage.css';
import { useNavigate } from "react-router-dom";

export default function CompanyAssignment (){

    const navigate=useNavigate()

    function handleAdmin(){
        navigate('/AdminActions')
    }

    function handleUser(){
        navigate('/UserActions')
    }
    return(
        <>
        <div className="Front">
            <h1>Function Up Online Examination:</h1>
            <div className="Actions">
                <button onClick={handleAdmin}>Admin Login</button>
                <button onClick={handleUser}>Student Login</button>
            </div>
            </div>
            </>

    )
}