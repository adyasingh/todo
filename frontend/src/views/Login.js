import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
// import './App.css';
import Button from '@material-ui/core/Button';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  };
  const handleSubmit = () => {
    
  };
  return (
  <div className="App">
    <header className="App-header">
      
      LOGIN
      <br></br> <br></br>
      <Link to='/'>
        <Button style={{color:"white", marginBottom:"2vw"}}> ToDo App</Button>
      </Link>

      <Card>
          <TextField 
          id="email" 
          label="Email ID" 
          variant="outlined" 
          onChange={handleEmail}
          />
          
          <br></br>
          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={handlePassword}
        />


      </Card>

      <br></br>
  
      <Link to='/list' >
        <Button onClick={handleSubmit} style={{color:"white", }}>SUBMIT</Button>
      </Link>

     

      
      </header>
  </div>
  );
}

