import React from 'react';
import { Link } from ' react-router-dom'; 
import './Login.css'; 


function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Login to VAXCHAIN</h3>
        <form>
          <div className="input-field">
            <label>Email ID</label>
            <input type="email" placeholder ="john@gmail.com" />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="login-button">Login</button>
        </form>
        <p>
          New User? <Link to="/Signup">Register here</Link>
        </p> 
        
      </div>
    </div>
  );
}

export default Login;
