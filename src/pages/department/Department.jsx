import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/layout/Layout'
import SearchBar from '../../components/SearchBar';


function Department() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDepartments, setFilteredDepartments] = useState([]);

    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [schoolId, setSchoolId] = useState('');
    const [levelId, setLevelId] = useState('');
    const [schools, setSchools] = useState([]);
    const [levels, setLevels] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
  if (!sessionId) return; // Prevent request if sessionId is empty

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
        // Fetch faculties and levels from the API
        const fetchSessions = async () => {
            const response = await axios.get('http://localhost:5000/api/sessions');
            setSessions(response.data);
        };
        const fetchSchools = async () => {
            const response = await axios.get('http://localhost:5000/api/schools'); 
            setSchools(response.data);
        };

        const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/departments');
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
        };

        fetchSessions();
        fetchSchools();
        fetchDepartments();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        };

        const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = departments.filter((dept) =>
            dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dept.dept_code.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDepartments(filtered);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/api/departments', {
                name,
                dept_code: code,
                school_id: parseInt(schoolId),
                level_id: parseInt(levelId),
                session_id: parseInt(sessionId),
            });
            
            console.log(' Server response:', response.data);
            alert(' Department created successfully!');

            // Clear form fields
            setName('');
            setCode('');
            setSchoolId('');
            setLevelId('');

            
            const res = await axios.get('http://localhost:5000/api/departments');
            setDepartments(res.data);
          } catch (error) {
             console.error('Error adding department:', error);
            }
    };
  return (
    <Layout>
        <div className='form create'>
                <h2>Add a New Department</h2><br /><br />          
                <form onSubmit={handleSubmit}>
                        <label for="" style={{marginRight:'7px'}}>Session:</label>
                        <select value={sessionId} onChange={(e) => setSessionId(e.target.value)} className='input' style={{marginRight:'10px'}}>
                            <option value="">-- Select Session --</option>
                            {sessions.map(session => (
                                <option key={session.id} value={session.id}>{session.name}</option>
                            ))}
                        </select>
                        
                        <div  className="form-group" >
                        <div>
                            <label for="" style={{marginRight:'7px'}}>Name:</label>
                            <input style={{marginRight:'10px'}} className="input" value={name} onChange={(e) => setName(e.target.value)} type="text" /><br />
                        </div>
                        
                        <div>
                            <label style={{marginRight:'7px'}} for="">Code:</label><br />
                            <input className="input" value={code} onChange={(e) => setCode(e.target.value)} type="text" /><br />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <div>
                            <label style={{marginRight:'7px'}} htmlFor="faculty">Faculty:</label><br />
                            <select value={schoolId} onChange={(e) => setSchoolId(e.target.value)} className='input' style={{marginRight:'10px'}}>
                                <option value="">-- Select Faculty --</option>
                                {schools.map(school => (
                                    <option key={school.id} value={school.id}>{school.name}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label style={{marginRight:'7px'}} htmlFor="level">Level:</label><br />
                            <select value={levelId} onChange={(e) => setLevelId(e.target.value)} className='input'>
                            <option value="">-- Select Level --</option>
                            {levels.map(level => (
                                <option key={level.level_id} value={level.level_id}>{level.name}</option> // ✅ value should be level.id
                            ))}
                            </select>
                        </div>
                    </div>
                    
                    <input type="submit" name="submit" value="Add" className="button" />
                </form>
              </div>
        
              <div className="session-table">
              <div className="header">
              <h2>Existing Departments</h2>
              <SearchBar
                value={searchTerm}
                onChange={handleSearchChange}
                onSubmit={handleSearchSubmit}
                placeholder="Search departments..."
            />
            </div>
                <table className='session-table'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Faculty</th>
                            <th>Level</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(searchTerm ? filteredDepartments : departments).map((department, index) => (
                        <tr key={department.id}>
                            <td>{index + 1}</td>
                            <td>{department.name}</td>
                            <td>{department.dept_code}</td>
                            <td>{department.faculty}</td>
                            <td>{department.level}</td>
                            <td>{new Date(department.created_at).toLocaleString()}</td>
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

export default Department