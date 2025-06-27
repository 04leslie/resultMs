import React, { useState } from 'react';
import Layout from '../../components/layout/Layout'
import axios from 'axios';

function AddStudent() {
  const [students, setStudents] = useState([
    { id: 1, matricule: '', name:'', email: '', contact: '' }
  ]);

  const [loading, setLoading] = useState(false);
  const handleChange = (index, field, value) => {
    const newStudents = [...students];
    newStudents[index][field] = value;
    setStudents(newStudents);
  };


  const handleKeyPress = (e, index) => {
    // When Enter is pressed in the last field of the last row
    if (e.key === 'Enter' && index === students.length - 1) {
      e.preventDefault();
      addNewRow();
    }
  };

  const addNewRow = () => {
    setStudents([
      ...students,
      { id: students.length + 1, matricule: '', name: '', email: '', contact: '' }
    ]);
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  const departmentId = parseInt(localStorage.getItem('departmentId'));
  const levelId = parseInt(localStorage.getItem('selectedLevel'));

  const formattedStudents = students.map(student => ({
    matricule: student.matricule,
    name: student.name,
    email: student.email,
    contact: student.contact,
    level_id: levelId,
    depart_id: departmentId
  }));

  try {
    console.log("Sending to backend:", formattedStudents);

    await axios.post('http://localhost:5000/api/students', formattedStudents);
    console.log("Students added:", formattedStudents);

    console.log("Students added:", formattedStudents);
    setStudents([
      {
        id: 1,
        matricule: '',
        name: '',
        email: '',
        contact: ''
      }
    ]);
    // Reset the form
    setStudents([{ id: 1, matricule: '', name: '', email: '', contact: '' }]);
  } catch (error) {
    console.error("Error submitting students:", error);
  }
};

  return (
    <Layout>
    <div>
      <h2>Fill with Students Info</h2>
      <form onSubmit={handleSubmit}>
        <table style={{placeSelf:'center'}}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Matricule</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td><input type="text" value={student.matricule} onChange={(e) => handleChange(index, 'matricule', e.target.value)} /></td>
                  <td><input type="text" value={student.name} onChange={(e) => handleChange(index, 'name', e.target.value)} /></td>
                  <td><input type="email" value={student.email} onChange={(e) => handleChange(index, 'email', e.target.value)} onKeyDown={(e) => handleKeyPress(e, index)} /></td>
                  <td><input type="text" value={student.contact} onChange={(e) => handleChange(index, 'contact', e.target.value)} onKeyDown={(e) => handleKeyPress(e, index)} /></td>
                </tr>
                ))}
              </tbody>
        </table>
        <p style={{textAlign:'center'}}><button style={{ marginTop:'10px'}} className='addstudent-button' type="submit">{loading ? "Submitting..." : "Submit Students"}</button></p> {/* Submit button to handle form submission */}
      </form>
    </div>
    
    </Layout> 
  )
}
export default AddStudent