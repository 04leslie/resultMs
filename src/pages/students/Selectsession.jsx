import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios';

function Selectsession() {
    const [sessions, setSessions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/sessions');
        setSessions(response.data);
      } catch (err) {
        console.error('Error fetching sessions:', err);
      }
    };
     fetchSessions();
    }, []);

    const handleSessionSelect = (sessionId) => {
        // Store the selected level in local storage
        localStorage.setItem('selectedSession', sessionId); 
        console.log('selectedSession:', sessionId);
        navigate('/students'); 
        
    };
  return (
    <Layout>
            <p style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select Session to View or Add Students</em>
            </p>
            <div className="admin">
            {sessions.map(session => (
            <Link
                to="#"
                key={session.id}
                className="box"
                onClick={() => handleSessionSelect(session.id)}
            >
                <FontAwesomeIcon icon={faCalendar} size="3x" className='icon'/>
                <p>{session.name}</p>
            </Link>
        ))}
      </div>
        </Layout>
  )
}

export default Selectsession