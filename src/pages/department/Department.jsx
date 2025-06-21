import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/Layout'

function Department() {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [schoolId, setSchoolId] = useState('');
    const [levelId, setLevelId] = useState('');
    const [schools, setSchools] = useState([]);
    const [levels, setLevels] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        // Fetch faculties and levels from the API
        const fetchSchools = async () => {
            const response = await axios.get('http://localhost:5000/api/schools'); // Adjust API endpoint
            setSchools(response.data);
        };

        const fetchLevels = async () => {
            const response = await axios.get('http://localhost:5000/api/levels'); // Adjust API endpoint
            setLevels(response.data);
        };
        const fetchDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/departments');
            setDepartments(response.data);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
        };

        fetchSchools();
        fetchLevels();
        fetchDepartments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await axios.post('http://localhost:5000/api/departments', {
                name,
                dept_code: code,
                school_id: parseInt(schoolId),
                level_id: parseInt(levelId),
            });
            

            // Clear form fields
            setName('');
            setCode('');
            setSchoolId('');
            setLevelId('');

            // ✅ Fetch updated department list
            const res = await axios.get('http://localhost:5000/api/departments');
            setDepartments(res.data);
            } catch (error) {
             console.error('Error adding department:', error);
            }
    };
  return (
    <Layout>
        <div className='form create'>
                <h2>Add a New Department</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <label for="" style={{marginRight:'7px'}}>Name:</label>
                        <input style={{marginRight:'10px'}} className="input" value={name} onChange={(e) => setName(e.target.value)} type="text" /><br />
                        
                        <label style={{marginRight:'7px'}} for="">Code:</label><br />
                        <input className="input" value={code} onChange={(e) => setCode(e.target.value)} type="text" placeholder='e.g SWE' /><br />
                        
                    </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <label style={{marginRight:'7px'}} htmlFor="faculty">Faculty:</label><br />
                        <select value={schoolId} onChange={(e) => setSchoolId(e.target.value)} className='input' style={{marginRight:'10px'}}>
                            <option value="">-- Select Faculty --</option>
                            {schools.map(school => (
                                <option key={school.id} value={school.id}>{school.name}</option>
                            ))}
                        </select>
                        
                        <label style={{marginRight:'7px'}} htmlFor="level">Level:</label><br />
                        <select value={levelId} onChange={(e) => setLevelId(e.target.value)} className='input'>
                        <option value="">-- Select Level --</option>
                        {levels.map(level => (
                            <option key={level.level_id} value={level.level_id}>{level.name}</option> // ✅ value should be level.id
                        ))}
                        </select>

                    </div>
                    
                    <input type="submit" name="submit" value="Add" className="button" />
                </form>
              </div>
        
              <div className="session-table">
                <h2>Existing Departments</h2>
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
                        {departments.map((department, index) => (
                            <tr key={department.id}>
                                <td>{index + 1}</td>
                                <td>{department.name}</td>
                                <td>{department.dept_code}</td>
                                <td>{department.faculty}</td> {/* Assuming faculty name is included */}
                                <td>{department.level}</td> {/* Assuming level name is included */}
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