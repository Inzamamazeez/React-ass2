import {useRef} from 'react';

export default function Product(){
    const fileInput=useRef(null);
    const buttonClick=()=>{
        fileInput.current.focus();
    }
        return(
        <div>
            <h1>React useRef Hooks Functions:</h1>
            <button onClick={buttonClick}>pick the file</button>
            &nbsp;
            <input type="file" ref={fileInput}/> 
        </div>
    )
}