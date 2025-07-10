import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios';

function Students() {
    const navigate = useNavigate();
    const [levels, setLevels] = useState([]);
    const sessionId = localStorage.getItem('selectedSession');

    useEffect(() => {
        const fetchLevels = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/levels/${sessionId}`);
                setLevels(response.data);
            } catch (error) {
                console.error("Error fetching levels:", error);
            }
        };

        if (sessionId) {
            fetchLevels();
        } else {
            alert("No session selected!");
            navigate('/selectsession'); 
        }
    }, [sessionId, navigate]);

    const handleLevelSelect = (levelId) => {
        localStorage.setItem('selectedLevel', levelId);
        console.log("Stored level ID:", levelId);
        navigate('/selectschool');
    };

    return (
        <Layout>
            <p style={{ color: 'hsl(240, 1.80%, 44.70%)', borderBottom: '1px solid hsl(240, 1.80%, 44.70%)' }}>
                <em>Select Level to View or Add Students</em>
            </p>
            <div className="admin">
                {levels.length > 0 ? (
                    levels.map(level => (
                        <div
                            key={level.level_id}
                            className="box"
                            onClick={() => handleLevelSelect(level.level_id)}
                        >
                            <FontAwesomeIcon icon={faFolderOpen} size="3x" className='icon'/>
                            <p>Level {level.name}</p>
                        </div>
                    ))
                ) : (
                    <p>No levels found for this session.</p>
                )}
            </div>
        </Layout>
    );
}

export default Students;