import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/Layout'
import SearchBar from '../../components/SearchBar';


function Session() {
  const [sessions, setSessions] = useState([]);
  const [sessionName, setSessionName] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSessions, setFilteredSessions] = useState([]);
  
  useEffect(() => {
    fetchSessions();
  }, []);

  const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filtered = sessions.filter((session) =>
      session.name.includes(searchTerm) ||
      String(session.id).includes(searchTerm)
    );
    setFilteredSessions(filtered); 
  }; 

  const fetchSessions = async () => {
    const response = await axios.get('http://localhost:5000/api/sessions');
    setSessions(response.data);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    
    const res = await axios.post('http://localhost:5000/api/sessions', { name: sessionName });
    const sessionId = res.data.id; // newly created session ID
    setSessionName('');
    fetchSessions();

    
    await axios.post('http://localhost:5000/api/semesters', {
      name: 'Semester 1',
      session_id: sessionId,
    });

    await axios.post('http://localhost:5000/api/semesters', {
      name: 'Semester 2',
      session_id: sessionId,
    });

    
    const levels = ['100', '200', '300', '400', '500'];
    for (const levelName of levels) {
      await axios.post('http://localhost:5000/api/levels', {
        name: levelName,
        session_id: sessionId
      });
    }

    alert('Session, Semesters, and Levels created successfully!');
  } catch (err) {
    console.error('Error creating session:', err);
    alert('Something went wrong. Check your backend.');
  }

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
            <div className="header">
              <h2>Existing Sessions</h2>
              <SearchBar
                value={searchTerm}
                onChange={handleSearchChange}
                onSubmit={handleSearchSubmit}
                placeholder="Search sessions..."
            />
            </div>
            <table className='session-table'>
                <thead>
                  <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      {/* <th>Status</th> */}
                      <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(searchTerm ? filteredSessions : sessions).map((session, index) => (
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