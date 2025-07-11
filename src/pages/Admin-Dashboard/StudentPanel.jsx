import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentPanel() {
    const [sessionId, setSessionId] = useState('');
    const [semesterId, setSemesterId] = useState('');
    const navigate = useNavigate();

    const [sessions, setSessions] = useState([]);
    const [semesters, setSemesters] = useState([]);
    
     useEffect(() => {
        if (!sessionId) return; // Prevent request if sessionId is empty
      
        const fetchSemesters = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/semesters/${sessionId}`);
            setSemesters(response.data);
          } catch (error) {
            console.error('Error fetching levels:', error);
          }
      };
    
        fetchSemesters();
      }, [sessionId]);
    
    useEffect(() => {
        const fetchSessions = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/sessions');
        setSessions(response.data);
    };
            
        fetchSessions();
    }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sessionId || !semesterId) {
        alert('Please select both session and semester');
        return;
    }
        const selectedSession = sessions.find(s => s.id === parseInt(sessionId));
        const selectedSemester = semesters.find(s => s.id === parseInt(semesterId));

        localStorage.setItem('studentSession', sessionId);
        localStorage.setItem('studentSemester', semesterId);
        localStorage.setItem('studentSessionName', selectedSession?.name || '');
        localStorage.setItem('studentSemesterName', selectedSemester?.name || '');

    navigate('/card');
    }

  return (
    <div>
        
        <div className='form'>
                    <h2>Select Session and Semester</h2>
                    <form onSubmit={handleSubmit} >
                                <br /><label>Session:</label><br />
                                <select value={sessionId} onChange={(e) => setSessionId(e.target.value)} className='input'>
                                    <option value="">-- Select Session --</option>
                                    {sessions.map(session => (
                                        <option key={session.id} value={session.id}>{session.name}</option>
                                    ))}
                                </select><br /><br />
                                <label>Semester:</label><br />
                                <select value={semesterId} onChange={(e) => setSemesterId(e.target.value)} className='input'>
                                    <option value="">-- Select Semester --</option>
                                    {semesters.map(semester => (
                                        <option key={semester.id} value={semester.id}>{semester.name}</option>
                                    ))}
                                </select><br /><br />
        
                        <input type="submit" name="submit" value="Retrieve Results" className="button" />
                    </form>
                  </div>
    </div>
  )
}

export default StudentPanel