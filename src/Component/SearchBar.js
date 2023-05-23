import React, { useEffect } from 'react';
import './SearchBar.css';
import {FcSearch} from 'react-icons/fc';
import {BsMic} from 'react-icons/bs'
import { useState } from 'react';



export default function SearchBar(){
    const[input,setInput]=useState("");
    const[results,setResults]=useState([]);
    const[displayData,setDisplayData]=useState([]);
        

    const fetchData = () =>{
        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then((response) => response.json())
        .then(data=> setDisplayData (data.states))
        .catch((error)=>console.log(error))
    };

    useEffect(()=>{
        fetchData()
    },[]);

    const handleChange = (event) =>{
        const refreshed_data = (event.target.value);
        setInput(refreshed_data)

    const dataFilter = displayData.filter((filtername) =>
    filtername.state_name.includes(refreshed_data)
    )
    setResults(dataFilter);
    }


    const handleSelectData = (data) =>{
        setInput(data.state_name);
        setResults([]);
    }

    return(
        <>
        <div className="bar">
        <FcSearch className='search'/>
            <input type="text" placeholder='Search Google or type a URL'
            value={input} onChange={handleChange } ></input>
            <BsMic className='mice'/>
        </div>

        <div className='state-list'>
            {results.map((final, index)=> (
            <p key={index.state_id}
            onClick={()=>handleSelectData(final)}>
            {final.state_name}
            </p>
        ))
        } 
    </div>
    </>
    )
}