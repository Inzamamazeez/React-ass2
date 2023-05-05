import {useEffect,useState} from 'react';
import axios from "axios";
import './img.css';

export default function Image(){
    const [image,setImage]=useState('');

    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response=>setImage(response.data.message))
        .catch(error=>console.log(error));
    },[]);
    return(
        <div className='design'>
            <h1>dog images preview:</h1>
            <img src={image} alt='Dog' width="350" height="550"/>
        </div>
    )
}