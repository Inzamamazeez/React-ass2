
import './App.css';
import Invitation from './Invitation/Invitation';

function App() {
  const subject="Birthday party Invitation "
  const To="jaGdish@gmail.com"
  const name="jaGdish"
  const lol="birthday party"
  const lol1="Ritu , Saurabh , Kartik"
  const lol2="Green field Avenue"
  const lol3=" JaGdish"
return (
    <div className="App">
    <Invitation subject={subject} To={To} name={name} lol={lol} lol1={lol1} lol2={lol2} lol3={lol3}/>
    </div>
  );
}

export default App;
