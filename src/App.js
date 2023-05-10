import Cards from "./components/atoms/crads";
import React from 'react';


const users=[{
  image: 'https://tse1.mm.bing.net/th?id=OIP.w4xdC_D4ZatjQpDeBBbaFQAAAA&pid=Api&P=0',
  designation: 'Developer',
  name: 'Raju Patel',
  jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
},
{
  image: 'https://kccitallahassee.com/wp-content/uploads/sample-profile-300x300.jpg',
  designation: 'Designer',
  name: 'Mira Patel',
  jobDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
},
{
  image: 'https://tse4.mm.bing.net/th?id=OIP.9Fo6Vp_FZG_34PnTJHlBJQHaHa&pid=Api&P=0',
  designation: 'Project Manager',
  name: 'John Doe',
  jobDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
},
{
  image: 'http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080',
  designation: 'Project Engineer',
  name: 'Mike Hussy',
  jobDescription: 'Opt-in the number of your desired paragraphs in the box on the left',
},
{
  image: 'https://tse1.mm.bing.net/th?id=OIP.ZtXytYcNtt2nHnV6VnlbVgAAAA&pid=Api&P=0',
  designation: 'Chemical Engineer',
  name: 'Buttler Gyle',
  jobDescription: 'Read the job description carefully. Make sure you do not miss any critical details.',
},

]

function App() {
  return (
    <div className="App">
      {users.map((user)=>(<Cards name={user.name}
          image={user.image}
          designation={user.designation}
          jobDescription={user.jobDescription}/>))}
          
    </div>
  );
}

export default App;
