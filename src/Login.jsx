import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css'; 

function Login() {
  // State for input values and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if email and password are not empty
    if (!email || !password) {
      setError('Please fill all fields.');
      return;
    }

    // If validation passes, you can proceed with your login logic here
    // For example, sending a request to your server for authentication

    // Reset the error message
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Login to VAXCHAIN</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          New User? <Link to="/Signup">Register here</Link>
        </p> 
      </div>
    </div>
  );
}

export default Login;
