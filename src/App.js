import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />{}
        <Signup />{}
        <Dashboard />{}
      </header>
    </div>
    
    
  );
}

export default App;
