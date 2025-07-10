import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function LoginAdmin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password,
      });

      const admin = response.data.admin;

      if (!admin.is_active) {
        alert("Your account is not active. Please contact the Dean.");
        return;
      }

      localStorage.setItem('admin', JSON.stringify(admin));
      alert('Login successful!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Login error:", error);
      alert(
        error.response?.data?.error || "Failed to log in. Check your credentials."
      );
    }
  };

  return (
    <div className='form' >
      <h1 style={{textAlign:'center', color:'#343a40'}}> Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label><br />
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
        <label>Password:</label><br />
        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input type="submit" name="submit" value="Login" class="button"/><br />

      </form>
    </div>

  )
}

export default LoginAdmin