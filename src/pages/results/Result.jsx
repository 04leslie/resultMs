import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout'

function Result() {
  const [departments, setDepartments] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [semesterId, setSemesterId] = useState([]);
  const [departmentId, setDepartmentId] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [sessionId, setSessionId] = useState([]);
  const [schoolId, setSchoolId] = useState('');
  const [levelId, setLevelId] = useState('');
  const [schools, setSchools] = useState([]);
  const [levels, setLevels] = useState([]);

  // Fetch existing sessions
  useEffect(() => {
    const fetchSemester = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/semester');
        setSemesters(response.data);
  };
    const fetchSessions = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/sessions');
        setSessions(response.data);
  };
    const fetchSchools = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/schools'); // Adjust API endpoint
        setSchools(response.data);
    };
    
    const fetchLevels = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/levels'); // Adjust API endpoint
        setLevels(response.data);
    };
    const fetchDepartments = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/departments?facultyId=${facultyId}&levelId=${levelId}`);
        setDepartments(response.data);
    };
    fetchDepartments();
    fetchSemester();
    fetchSchools();
    fetchLevels();
    fetchSessions();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };
    return (
        <Layout>
          <div className='form create'>
          <h2> Fill in the following to Computer Results</h2>
          <form onSubmit={handleSubmit}>
                    <label>Session:</label><br />
                    <select value={sessionId} onChange={(e) => setSessionId(e.target.value)} className='input'>
                        <option value="">-- Select Session --</option>
                        {sessions.map(session => (
                            <option key={session.id} value={session.id}>{session.name}</option>
                        ))}
                    </select>
                    
                    <label>Semester:</label><br />
                    <select value={semesterId} onChange={(e) => setSemesterId(e.target.value)} className='input'>
                        <option value="">-- Select Semester --</option>
                        {semesters.map(semester => (
                            <option key={semester.id} value={semester.id}>{semester.name}</option>
                        ))}
                    </select>
                    
                    <label>Faculty:</label><br />
                    <select value={schoolId} onChange={(e) => setSchoolId(e.target.value)} className='input'>
                        <option value="">-- Select Faculty --</option>
                        {schools.map(school => (
                            <option key={school.id} value={school.id}>{school.name}</option>
                        ))}
                    </select>
                    
                    <label>Level:</label><br />
                    <select value={levelId} onChange={(e) => setLevelId(e.target.value)} className='input'>
                        <option value="">-- Select Level --</option>
                        {levels.map(level => (
                            <option key={level.id} value={level.id}>{level.name}</option>
                        ))}
                    </select>
                    <label>Department:</label><br />
                    <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} className='input'>
                        <option value="">-- Select Department --</option>
                        {departments.map(department => (
                            <option key={department.id} value={department.id}>{department.name}</option>
                        ))}
                    </select>
                    
                    <input type="submit" value="Add" className="button" />
                </form>
          </div>
              
                  
        
        </Layout>
    )
}
export default Result