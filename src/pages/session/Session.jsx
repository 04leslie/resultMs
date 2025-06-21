import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/Layout'

function Session() {
  const [sessions, setSessions] = useState([]);
  const [sessionName, setSessionName] = useState('');

  // Fetch existing sessions
  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const response = await axios.get('http://localhost:5000/api/sessions');
    setSessions(response.data);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Create the session
  const res = await axios.post('http://localhost:5000/api/sessions', { name: sessionName });

  const sessionId = res.data.id; // newly created session ID
  setSessionName('');
  fetchSessions();

  // 2. Create 2 semesters for this session
  await axios.post('http://localhost:5000/api/semesters', {
    name: 'Semester 1',
    session_id: sessionId,
  });

  await axios.post('http://localhost:5000/api/semesters', {
    name: 'Semester 2',
    session_id: sessionId,
  });

  alert('Session and Semesters created successfully!');
};
  return (
    <Layout>
      
          <div className='form create'>
           <h2> Create a New Sesssion</h2>
          <form onSubmit={handleSubmit}>
              <label for="">Name:</label><br/>
              <input class="input" value={sessionName} onChange={(e) => setSessionName(e.target.value)} type="text" placeholder=" e.g. 2022/2023"/><br/>
              <input type="submit" name="submit" value="Create" class="button"/>
          </form>
          </div>
      
          <div className="session-table">
            <h2>Existing Sessions</h2>
            <table className='session-table'>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    {/* <th>Status</th> */}
                    <th>Action</th>
                </tr>
                <tbody>
                  {sessions.map((session, index) => (
                  <tr key={session.id}>
                  <td>{index + 1}</td>
                  <td>{session.name}</td>
                  <td className='actions'>
                    <button type="submit" className='view-button'>view</button>
                    <button type="submit" className='delete-button'>Delete</button>
                  </td>
                  </tr>
                   ))}
                </tbody>
            </table>
          </div>
      
    </Layout>
  )
}

export default Session