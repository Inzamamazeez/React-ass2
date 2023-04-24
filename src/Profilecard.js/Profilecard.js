import React from 'react';

export default function ProfileCard(props) {
    const onClick = () => {
      alert(props.name);
    };
  
    return (
      <div className="card">
        <img src={props.image} alt="Profile" />
        <h3>{props.designation}</h3>
        <h2>{props.name}</h2>
        <p>{props.jobDescription}</p>
        <button onClick={onClick}>See More</button>
      </div>
    );
  };
  
  
  