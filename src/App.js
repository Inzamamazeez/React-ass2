
import './App.css';
import { Provider } from 'react-redux';
import store from './Components/Store';
import NewToDoList from './Components/ToDoList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <NewToDoList/>
    </div>
    </Provider>
  );
}

export default App;
