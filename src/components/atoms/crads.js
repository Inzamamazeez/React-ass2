import React from 'react';
import './cards.css';

export default function Cards(props){

    return(
        
            <div className='design1'>
                <img src={props.image} alt="Profile"/>
                <h3>{props.designation}</h3>
                <h2>{props.name}</h2>
                <p>{props.jobDescription}</p>  
                </div>  
    
    )
} 