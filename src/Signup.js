import React, { useState } from 'react';
import './Signup.css'; 
import { Link } from ' react-router-dom'; 

function Signup() {
  // State for input values
  const [fullName, setFullName] = useState('JohnDoe');
  const [email, setEmail] = useState('john@gmail.com');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Manufacturer');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform registration logic here
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
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Doctor">Doctor</option>
              <option value="Distributor">Distributor</option>
            </select>
          </div>

          <button className="register-button" type="submit">Register</button>
        </form>

        <p>
          Already have an Account? <Link to="/Login">Login</Link>
        </p> 
      </div>
    </div>
  );
}

export default Signup;
