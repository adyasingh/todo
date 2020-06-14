import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";

import App from './App';
import { Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import List from "./views/List";

import * as serviceWorker from './serviceWorker';
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
     
      <Route path="/login" component={Login} />
      <Route path="/list" component={List} />
      <Route path="/" component={App} />
    
    </Switch>
   
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
