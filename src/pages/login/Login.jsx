import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Login() {
  const [matricule, setMatricule] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/student/login', {
        matricule
      });

      alert('Login successful');
      console.log(response.data.student);

      //store student info in localStorage
      localStorage.setItem('student', JSON.stringify(response.data.student));

      //navigate to dashboard
       navigate('/studentpanel');
    } catch (error) {
      alert('Invalid matricule');
      console.error(error);
    }
  };

  return (
    <div className='form'>
         <h1 style={{ textAlign: 'center', color: '#343a40' }}>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Matricule:</label><br />
            <input
              className="input"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
              type="text"
              required
            /><br />
            <input type="submit" name="submit" value="Login" className="button" /><br />
          </form>
    </div>
  )
}

export default Login