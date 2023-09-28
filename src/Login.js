import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Login.css'; // Import the CSS for styling

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to VAXCHAIN</h2>
        <form>
          <div className="input-field">
            <label>Email ID</label>
            <input type="email" defaultValue="john@gmail.com" />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" />
          </div>
          <button className="login-button">Login</button>
        </form>
        <p>
          New User? <Link to="/signup">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
