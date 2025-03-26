import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);
      localStorage.setItem('access_token', response.data.access);
      navigate('/profile');
    } catch (error) {
      const errorMessage = error.response ? error.response.data : 'Network error';
      console.error('Login failed:', errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="container"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">Error: {JSON.stringify(error)}</p>}
    </div>
  );
}

export default Login;