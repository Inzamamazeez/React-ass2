import React from 'react';
// import { useState } from 'react';
import './desktop.css';
import {BsFillMenuButtonWideFill} from 'react-icons/bs';
import { useNavigate} from 'react-router-dom';

function Header() {
  // const [input,setInput]=useState(false)

  const navigate=useNavigate()

  function handleAbout(){
    navigate('/about')
  }

  function handleContact(){
    navigate('/contact')
  }

  function handleHome(){
    navigate('/home')
  }

  function handleLogin(){
    navigate('/login');
  }

  function handleProject(){
    navigate('/project')
  }

  function handleVideos(){
    navigate('/videos')
  }

  return (
    <>
    <header className="header">
      <div className="logo">My Website</div>
      <nav className="nav-bar">
        <ul>
        <li onClick={handleHome}>Home</li>
        <li onClick={handleAbout}>About</li>
        <li onClick={handleProject}>Projects</li>
        <li onClick={handleVideos}>Videos</li>
        <li onClick={handleContact}>Contact</li>
        </ul>
      </nav>
      <button onClick={handleLogin}>Login</button>
      <BsFillMenuButtonWideFill className='hamberger'/>
    </header>
    <div className='hero'>
      <div className='hero1'>
        <h1>Hello There!</h1>
        <p>The more you Listen the more you learn</p>
        <button className='btn2'>Click this</button>
        </div>
        <div className='photo'>
          <img src="https://thumbs.dreamstime.com/b/colourful-pixel-background-24010476.jpg" alt=""/>
        </div>
        </div>

    </>
  );
}
export default Header;


