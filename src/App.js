import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Login /> {}
        <Signup /> {}

      </header>
      
    </div>
  );
}

export default App;
