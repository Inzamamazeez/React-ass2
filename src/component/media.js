import React from 'react';
import { useState } from 'react';
import './desktop.css';
import {BsFillMenuButtonWideFill} from 'react-icons/bs';

export default function Header() {
  const [input,setInput]=useState(false)

  function handleClick(){
    setInput(!input);
  }

  return (
    <>
    <header className="header">
      <div className="logo">My Website</div>
      <nav className="nav-bar">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Videos</li>
        <li>Contact</li>
        </ul>
      </nav>
      <button>Login</button>
      <BsFillMenuButtonWideFill className='hamberger'/>
    </header>
    <div className='hero'>
      <div className='hero1'>
        <h1>Hello There!</h1>
        <p>The more you Listen the more you learn</p>
        <button className='btn1'>Click this</button>
        </div>
        <div className='photo'>
          <img src="https://thumbs.dreamstime.com/b/colourful-pixel-background-24010476.jpg" alt=""/>
        </div>
        </div>

    </>
  );
}



