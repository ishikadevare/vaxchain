import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  // State for input values and error messages
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if required fields are not empty
    if (!fullName || !email || !password || !role) {
      setError('Please fill all fields.');
      return;
    }

    // You can perform additional validation here, e.g., email format, password strength, etc.

    // If validation passes, you can proceed with your registration logic here
    // For example, sending a request to your server to create a new account

    // Reset the error message
    setError('');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create a VAXCHAIN account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              placeholder="John Doe"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="*****"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Doctor">Doctor</option>
              <option value="Distributor">Distributor</option>
            </select>
          </div>

          <button className="register-button" type="submit">
            Register
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <p>
          Already have an Account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
