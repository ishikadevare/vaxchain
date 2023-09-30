import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db} from './firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

function Signup() {
  // State for input values and error messages
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: Check if required fields are not empty
    if (!fullName || !email || !password || !role) {
      setError('Please fill all fields.');
      return;
    }

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

    const userExists = await checkIfUserExists(email);

    if (userExists) {
      setError('Email is already registered. Please login.');
      return;
    }

    try {
      // Create the user in Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);

      // Store user data in Firestore
      const userData = {
        fullName,
        email,
        role,
      };

      await addUserToFirestore(userCredential.user.uid, userData);

      console.log('User registered:', userCredential.user);

      // Reset the error message and navigate to another page
      setError('');
      navigate('/Login'); // Navigate to the dashboard page upon successful registration
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    }
  };

  // Function to check if a user with the same email is already registered
  const checkIfUserExists = async (emailToCheck) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', emailToCheck));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  // Function to add user data to Firestore
  const addUserToFirestore = async (uid, userData) => {
    console.log('Adding user data to Firestore:', userData);
    const usersRef = collection(db, 'users');
    await addDoc(usersRef, {
      uid,
      ...userData,
    });
    
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
              autoComplete="off"
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
              autoComplete="off"
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
