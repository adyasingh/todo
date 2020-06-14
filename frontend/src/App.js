import React from 'react';
import {Link} 
from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         Welcome to Todo App
        </p>
        <Link to = "/login">
          <Button style={{color:"white"}}>LOGIN</Button>
        </Link>
        <Link to = "/signup">
          <Button style={{color:"white"}}>SIGNUP</Button>
        </Link>
      </header>
    </div>
  );
}


