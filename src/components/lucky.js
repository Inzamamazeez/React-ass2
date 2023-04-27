import {useState} from 'react';
import './lucky.css';


export default function Luckynumber(){
    const [luckyNumber]=useState(Math.floor(Math.random()*100)+1);
    const[guess, setGuess]=useState("");
    const[count, setCount]=useState(0);
    const[message, setMessage]=useState("");

    function inputChange(event){
        setGuess(event.target.value);
    }
    function buttonClick(){
        const num=parseInt(guess);
        if (num===luckyNumber){
            setMessage(`Congratulations! You guessed the right number in ${count + 1} attempts`);
        }else if (num < luckyNumber){
            setMessage(`You guessed a smaller number!..`);
        }else if (num > luckyNumber){
            setMessage(`You guessed a bigger number!..`);
        }
        setCount(count+1);
        setGuess("");
    }
    return(
        <div className='color'>
            <h1>Guess the Lucky Number!!!</h1>
            <input className='number'
            type="text"
            value={guess}
            onChange={inputChange}/>
            &nbsp;
            <button className='style' onClick={buttonClick}>Guess</button>
            <p>{message}</p>
        </div>
    )
}