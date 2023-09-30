import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 
import { auth } from './firebase';

function Login() {
  // State for input values and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: Check if email and password are not empty
    if (!email || !password) {
      setError('Please fill all fields.');
      return;
    }

    // Validate email format using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      await auth.signInWithEmailAndPassword(email,password);
      navigate('/dashboard');

    } catch (error) {
      setError('Invalid email or password!');
      console.error('Login error:', error);
    }
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
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
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
