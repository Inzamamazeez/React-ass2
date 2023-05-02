import{useState} from 'react';
import './card.css';

export default function Card(){
    const[users,setUsers]=useState([]);
    const getusers=()=>{
        fetch("https://reqres.in/api/users/")
        .then(response=>response.json())
        .then(data=>setUsers(data.data))
        .catch(error=>console.log(error));
    }
    return(
        <div className="design1">
            <h1>User Card Details:</h1>
            <button onClick={getusers}>Get users.</button>
            <div className="design2">
                {users.map(user=>(
                    <div key={user.id} className="design3">
                        <img src={user.avatar} alt="User"/>
                        <h3>{`${user.first_name} ${user.last_name}`}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}