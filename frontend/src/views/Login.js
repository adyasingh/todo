import React from 'react';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import './App.css';
import Button from '@material-ui/core/Button';


export default function Login() {
  return (
  <div className="App">
    <header className="App-header">
      LOGIN
      <br></br> <br></br>

      <Card>
          <TextField 
          id="email" 
          label="Email ID" 
          variant="outlined" 
          />
          
          <br></br>
          <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />


      </Card>

      <br></br>
      <Link to='/list'>
        <Button style={{color:"white"}}>SUBMIT</Button>
      </Link>

      
      </header>
  </div>
  );
}

