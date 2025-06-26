import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/Layout'

function Courses() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [credit, setCredit] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [levelId, setLevelId] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [semesterId, setSemesterId] = useState('');

  const [departments, setDepartments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
  if (levelId) {
    axios.get(`http://localhost:5000/api/departments/by-level/${levelId}`)
      .then(res => {
        console.log("Fetched departments:", res.data); //for trouble shooting
        setDepartments(res.data);
      })
      .catch(err => {
        console.error("Error fetching departments:", err);
      });
  }
  }, [levelId]);
  
  useEffect(() => {
  axios.get('http://localhost:5000/api/levels')
    .then(res => {
     
        setLevels(res.data);
     
    })
    .catch(err => {
      console.error("Error fetching levels:", err);
      setLevels([]);
});
},[]);
    
useEffect(() => {
    axios.get('http://localhost:5000/api/sessions')
  .then(res => {
    
      setSessions(res.data);
    
  })
  .catch(err => {
    console.error("Error fetching sessions:", err);
    setSessions([]);
  });

},[]);

useEffect(() => {
    axios.get('http://localhost:5000/api/semesters')
  .then(res => {
      setSemesters(res.data);
   
  })
  .catch(err => {
    console.error("Error fetching semester:", err);
    setSemesters([]);
  });

},[]);

  useEffect(() => {
  axios.get('http://localhost:5000/api/courses')
    .then(res => {
      console.log("Courses response:", res.data); //Checking if this is an array
      if (Array.isArray(res.data)) {
        setCourses(res.data);
      } else {
        console.warn("Expected array but got:", res.data);
        setCourses([]);
      }
    })
    .catch(err => {
      console.error("Error fetching courses:", err);
      setCourses([]);
    });
}, []);

   const handleSubmit = async (e) => {
   e.preventDefault();

  const newCourse = {
    title,
    code,
    credit: parseInt(credit),
    department_id: parseInt(departmentId),
    level_id: parseInt(levelId),
    session_id: parseInt(sessionId),
    semester_id: parseInt(semesterId)
  };

  try {
    await axios.post('http://localhost:5000/api/courses', newCourse);
    // Refresh course list
    const response = await axios.get('/api/http://localhost:5000/api/courses');
    setCourses(response.data);
    // Reset form
    setTitle('');
    setCode('');
    setCredit('');
    setDepartmentId('');
    setLevelId('');
    setSessionId('');
    setSemesterId('');
  } catch (error) {
    console.error("Error adding course:", error);
  }
  };

  return (
    <Layout>
        <div className='form create'>
                <h2>Add a New course</h2>
                <form onSubmit={handleSubmit}>
                    
                    <label>Course Title:</label><br />
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" /><br />
                        
                    <div className="form-group">
                        <div>
                            <label>Code:</label><br />
                            <input className="input" value={code} onChange={(e) => setCode(e.target.value)} type="text" /><br />
                        </div>
                    
                        <div>
                            <label>Credit:</label><br />
                            <input className="input" value={credit} onChange={(e) => setCredit(e.target.value)} type="number" /><br />
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
                    
                    <input type="submit" value="Add" className="button" />
                </form>
              </div>
        
              <div className="session-table">
                <h2>Existing Courses</h2>
                <table className='session-table'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Title</th>
                            <th>Code</th>
                            <th>Department</th>
                            <th>Level</th>
                            <th>session</th>
                            <th>semester</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={course.id}>
                                <td>{index + 1}</td>
                                <td>{course.title}</td>
                                <td>{course.code}</td>
                                <td>{course.department_name}</td> {/* Assuming level name is included */}
                                <td>{course.level_name}</td> {/* Assuming level name is included */}
                                <td>{course.session_name}</td> {/* Assuming session name is included */}
                                <td>{course.semester_name}</td>
                                <td>{new Date(course.created_at).toLocaleString()}</td>
                                <td className='actions'>
                                    <button className='view-button'>View</button>
                                    <button className='delete-button'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
              </div>
    </Layout>
  )
}

export default Courses