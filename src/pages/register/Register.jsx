import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // to redirect to login
import { Link } from 'react-router-dom';
//for communication from laravel backend
import axios from 'axios'; // Import axios for making HTTP requests


function Register() {

  // State variables for form inputs and messages
    const [name, setName] = useState(''); // For user's name
    const [role, setRole] = useState(''); // For user's role
    const [email, setEmail] = useState(''); // For user's role
    const [password, setPassword] = useState(''); // For user's password
    const [passwordConfirmation, setPasswordConfirmation] = useState(''); // For password confirmation
    const [message, setMessage] = useState(''); // For success message
    const [error, setError] = useState(''); // For error message

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setMessage(''); // Clear any previous messages
        setError(''); // Clear any previous errors

        try {
            // Send POST request to the registration API
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                role,
                email,
                password,
                password_confirmation: passwordConfirmation, // Ensure this matches your API
            });
            setMessage(response.data.message); // Display success message
            navigate.push('/login');
        } catch (err) {
            // Handle errors returned from the API
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Registration failed'); // Display specific error message
            } else {
                setError('An error occurred'); // Generic error message
            }
        }
    };

  return (
    <div className='form'>
         <h1 style={{textAlign:'center', color:'rgb(160, 4, 4)'}}> Register</h1>
        <p className='p'>Create an account to manage the system</p>
    
        <form action="" method="post">

            <label for="">Name:</label><br/>
            <input className="input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required/><br/>
            <label for="">Role:</label><br/>
            <input type="text" className='input' value={role} onChange={(e) => setRole(e.target.value)} required/><br/>
            <label for="">Email:</label><br/>
            <input type="email" className='input' value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
            <label for="">Password:</label><br/>
            <input className="input" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
            <label for="">Confirm Password:</label><br/>
            <input className="input" name="password" type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>

            <input type="submit" name="submit" value="Register" class="button"/>
            <p style={{marginTop:'7px'}}>Admin already has an account? <Link to='/login' style={{color:'rgb(160, 4, 4)'}}>Click to Login!</Link></p>
        </form>

        {message && <p>{message}</p>} {/* Display success message if exists */}
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
    </div>
  )
}

export default Register