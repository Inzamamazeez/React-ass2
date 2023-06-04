import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Favourites from './Components/Pages/Favorite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/myfavourites' element={<Favourites />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div> 
  );
}

export default App;
