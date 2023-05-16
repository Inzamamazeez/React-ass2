import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './PagesComp/About/about';
import Contact from './PagesComp/Contact/contact';
import Home from './PagesComp/Home/home';
import Login from './PagesComp/Login/login';
import Project from './PagesComp/Project/project';
import Videos from './PagesComp/Videos/videos';

import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Project",
    element:<Project/>
  },
  {
    path:"/videos",
    element:<Videos/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
