import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

function Courses() {
  return (
    <Layout>
        <div className='form create'>
                <h2>Add a New course</h2>
                <form onSubmit={handleSubmit}>
                    <label>Course Title:</label><br />
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" /><br />
                    
                    <label>Course Code:</label><br />
                    <input className="input" value={code} onChange={(e) => setCode(e.target.value)} type="text" /><br />
                    
                    <label>Credit Value:</label><br />
                    <input className="input" value={credit} onChange={(e) => setCredit(e.target.value)} type="number" /><br />
                    
                    
                    <label>Faculty:</label><br />
                    <select value={facultyId} onChange={(e) => setFacultyId(e.target.value)} className='input'>
                        <option value="">-- Select Faculty --</option>
                        {faculties.map(faculty => (
                            <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                        ))}
                    </select>
                    
                    <label>Level:</label><br />
                    <select value={levelId} onChange={(e) => setLevelId(e.target.value)} className='input'>
                        <option value="">-- Select Level --</option>
                        {levels.map(level => (
                            <option key={level.id} value={level.id}>{level.name}</option>
                        ))}
                    </select>
                    <label>Session:</label><br />
                    <select value={sessionId} onChange={(e) => setSessionId(e.target.value)} className='input'>
                        <option value="">-- Select Session --</option>
                        {levels.map(session => (
                            <option key={level.id} value={session.id}>{session.name}</option>
                        ))}
                    </select>
                    <label>Semester:</label><br />
                    <select value={semesterId} onChange={(e) => setSemesterId(e.target.value)} className='input'>
                        <option value="">-- Select Semester --</option>
                        {levels.map(semester => (
                            <option key={semester.id} value={semester.id}>{semester.name}</option>
                        ))}
                    </select>
                    
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
                            <th>Level</th>
                            <th>session</th>
                            <th>semester</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((course, index) => (
                            <tr key={course.id}>
                                <td>{index + 1}</td>
                                <td>{course.title}</td>
                                <td>{course.code}</td>
                                <td>{course.level.name}</td> {/* Assuming level name is included */}
                                <td>{course.session.name}</td> {/* Assuming session name is included */}
                                <td>{course.semester.name}</td>
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

export default Courses