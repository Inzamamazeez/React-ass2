
import './App.css';
import React from 'react';
import Profilecard from './Profilecard.js/Profilecard';

const users = [
  {
    image: 'https://tse1.mm.bing.net/th?id=OIP.w4xdC_D4ZatjQpDeBBbaFQAAAA&pid=Api&P=0',
    designation: 'Developer',
    name: 'Raju Shrivastava',
    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://kccitallahassee.com/wp-content/uploads/sample-profile-300x300.jpg',
    designation: 'Designer',
    name: 'Mira Patel',
    jobDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    image: 'https://www.mtg-fl.com/wp-content/uploads/2019/09/sample-profile-pic1.png',
    designation: 'Project Manager',
    name: 'John Doe',
    jobDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },
];

function App() {
  return (
    <div className="App">
       {users.map((user) => (
        <Profilecard
          name={user.name}
          image={user.image}
          designation={user.designation}
          jobDescription={user.jobDescription}
        />
      ))}
    </div>
  );
}

export default App;
