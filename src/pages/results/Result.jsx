import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CourseItem from '../../components/CourseItem';
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
    if (!sessionId) return; 
  
    const fetchLevels = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/levels/${sessionId}`);
        setLevels(response.data);
      } catch (error) {
        console.error('Error fetching levels:', error);
      }
    };
  
    fetchLevels();
   }, [sessionId]); 

  useEffect(() => {
    
    const fetchSessions = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/sessions');
        setSessions(response.data);
    };
    const fetchSchools = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/schools'); 
        setSchools(response.data);
    };
    
   
    fetchSessions();
    fetchSchools();
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

    if (!departmentId || !levelId || !sessionId || !semesterId) {
      alert("Please select all fields");
      return;
    }

    localStorage.setItem('resultMeta', JSON.stringify({
    departmentId,
    levelId,
    sessionId,
    semesterId
    }));

    try {
      const response = await axios.get('http://localhost:5000/api/courses/by-dept-session-semester', {
        params: { departmentId, levelId, sessionId, semesterId }
      });
      setCourses(response.data);
    } catch (err) {
        console.error("Error fetching courses:", err);
    }
    };
    const navigate = useNavigate();

    const handleSelect = (courseId) => {
        const meta = localStorage.getItem("resultMeta");
    if (!meta) {
        alert("Please fill all fields and click 'Get Courses' first.");
        return;
    }
        localStorage.setItem("selectedCourseId", courseId);
        console.log("Course ID:", courseId);
        setTimeout(() => {
        navigate(`/resultEntry`);
        }, 100); // Delay ensures localStorage is ready
    };
    

    return (
        <Layout>
          <div className='form create'>
          <h2> Fill in the following to Computer Results</h2><br /><br />
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
                    
                    <input type="submit" value="Get Courses" className="button" />
                </form>
          </div>
              
           {courses.map(course => (
                <CourseItem  
                    key={course.id}
                    title={course.title} // Assuming department has a 'name' field
                    courseId={course.id}
                    onSelect={handleSelect} // Pass down the select handler
                />
            ))}       
        
        </Layout>
    )
}
export default Result