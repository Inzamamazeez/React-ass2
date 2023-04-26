import {useState} from 'react';
import './Name.css';

export default function Name(){
    const [name, setName] = useState('');
    const [displayText, setDisplayText] = useState('****');
    function handleSubmit(event) {
        event.preventDefault();
        setDisplayText(name);
        setName('');
    }
    return(
        <div className='Card'>
            <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder='Add your name...'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        &nbsp;
        <button type="submit">Submit</button>
        <h3>Hi My Name is :{displayText}</h3>
      </form>       
       </div>
    )
}