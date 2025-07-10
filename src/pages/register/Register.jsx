import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout'
import axios from 'axios'; 


function Register() {

  // State variables for form inputs and messages
    const [name, setName] = useState(''); 
    const [role, setRole] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState(''); 
    const [error, setError] = useState(''); 

    const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/admin/register', {
        name,
        role,
        email,
        password
      });

      setMessage("Admin account created successfully.");
      alert("Account created successfully.");
      setName('');
      setRole('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during registration.");
      }
    }
  };

  return (
    <Layout>
        <div className='form create'>
             <h1 style={{textAlign:'center', color:'#343a40'}}> Add an Admin</h1>
            <p className='p'>Create another account to manage the system</p>
        
            <form onSubmit={handleSubmit}>
                <label for="">Name:</label><br/>
                <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
                <label for="">Role:</label><br/>
                <input type="text" className='input' value={role} onChange={(e) => setRole(e.target.value)} required/><br/>
                <label for="">Email:</label><br/>
                <input type="email" className='input' value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
                <label for="">Password:</label><br/>
                <input className="input" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
                <label for="">Confirm Password:</label><br/>
                <input className="input" name="password" type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
                <input type="submit" name="submit" value="Register" class="button"/>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    </Layout>
  )
}

export default Register