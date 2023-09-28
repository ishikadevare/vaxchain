import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from ' react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Switch>
          <Route path="/Login">
            <Login /> {}
          </Route>
          <Route path="/Signup">
            <Signup /> {}
          </Route>
        </Switch>
      </header>
      </Router> 
    </div>
  );
}

export default App;
