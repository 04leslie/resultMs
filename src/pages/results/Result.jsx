import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/Item';
import Layout from '../../components/layout/Layout'

function Result() {
   const [departmentId, setDepartmentId] = useState('');
   const [levelId, setLevelId] = useState('');
   const [sessionId, setSessionId] = useState('');
   const [semesterId, setSemesterId] = useState('');
   const [courses, setCourses] = useState([]);
   const [results, setResults] = useState([]);

  
  const [departments, setDepartments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [semesters, setSemesters] = useState([]);
  

  // Fetch existing sessions
  useEffect(() => {
    const fetchSemester = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/semesters');
        setSemesters(response.data);
  };
    const fetchSessions = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/sessions');
        setSessions(response.data);
  };
    const fetchSchools = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/schools'); 
        setSchools(response.data);
    };
    
    const fetchLevels = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/levels'); 
        setLevels(response.data);
    };
   
    fetchSemester();
    fetchSchools();
    fetchLevels();
    fetchSessions();
  }, []);

   useEffect(() => {
      if (levelId) {
        axios.get(`http://localhost:5000/api/departments/by-level/${levelId}`)
          .then(res => {setDepartments(res.data);
          })
          .catch(err => {
            console.error("Error fetching departments:", err);
          });
      }
      }, [levelId]);
 const fetchCourses = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/courses/by-faculty-level?facultyId=${schoolId}&levelId=${levelId}`
    );
    setCourses(response.data);
    setLoading(false);
  } catch (err) {
    setError('Failed to load courses');
    setLoading(false);
  }
};

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.get(`http://localhost:5000/api/courses/by-dept-session-semester`, {
      params: {
        departmentId,
        levelId,
        sessionId,
        semesterId
      }
    });

    setCourses(response.data);

  } catch (err) {
    console.error("Error fetching courses for result entry:", err);
  }
};

  };
    return (
        <Layout>
          <div className='form create'>
          <h2> Fill in the following to Computer Results</h2>
          <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div>
                            <label>Session:</label><br />
                            <select value={sessionId} onChange={(e) => setSessionId(e.target.value)} className='input'>
                                <option value="">-- Select Session --</option>
                                {sessions.map(session => (
                                    <option key={session.id} value={session.id}>{session.name}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label>Semester:</label><br />
                            <select value={semesterId} onChange={(e) => setSemesterId(e.target.value)} className='input'>
                                <option value="">-- Select Semester --</option>
                                {semesters.map(semester => (
                                    <option key={semester.id} value={semester.id}>{semester.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-group">

                        <div>
                           <label>Level:</label><br />
                            <select value={levelId} onChange={(e) => setLevelId(e.target.value)} className='input'>
                                <option value="">-- Select Level --</option>
                                {levels.map(level => (
                                <option key={level.level_id} value={level.level_id}>{level.name}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label>Department:</label><br />
                            <select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} className="input">
                            <option value="">-- Select Department --</option>
                            {departments.map(dept => (
                                <option key={dept.id} value={dept.id}>{dept.name}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    
                    <input type="submit" value="Add" className="button" />
                </form>
          </div>
              
           {departments.map(department => (
                <Item
                    key={department.id}
                    text={department.name} // Assuming department has a 'name' field
                    departmentId={department.id}
                    onSelect={handleSelect} // Pass down the select handler
                />
            ))}       
        
        </Layout>
    )
}
export default Result