import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ResultEntry() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const meta = JSON.parse(localStorage.getItem("resultMeta"));
  const courseId = localStorage.getItem("selectedCourseId");
  
  const levelId = meta?.levelId;
  const sessionId = meta?.sessionId;
  const departmentId = meta?.departmentId;
  const semesterId = meta?.semesterId;

  const navigate = useNavigate();
    
  useEffect(() => {
  const fetchStudents = async () => {
    try {
      const meta = JSON.parse(localStorage.getItem("resultMeta"));
      

      if (!meta || !courseId) {
        console.error("Missing meta or courseId");
        return;
      }

      const { departmentId, levelId, sessionId } = meta;

      const response = await axios.get('http://localhost:5000/api/students/by-course', {
        params: {
            departId: departmentId, // ✅ Change this
            levelId,
            sessionId
        }
    });

      const studentsWithMarks = response.data.map(student => ({
        ...student,
        ca_mark: '',
        exam_mark: '',
        total: 0,
        avg: 0,
        evaluation: '',
        grade: '',
        gradePoint: 0,
        observation: ''
      }));

      setStudents(studentsWithMarks);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  fetchStudents();
}, []);


  const handleChange = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = value;

    const ca = parseFloat(updated[index].ca_mark) || 0;
    const exam = parseFloat(updated[index].exam_mark) || 0;
    const total = ca + exam;

    updated[index].total = total;
    updated[index].avg = ((total / 100) * 20).toFixed(2);

    // Evaluation & Grading Logic
    if (total >= 80) {
      updated[index].evaluation = 'Excellent';
      updated[index].grade = 'A';
      updated[index].gradePoint = 4.0;
    } else if (total >= 70) {
      updated[index].evaluation = 'Very Good';
      updated[index].grade = 'B+';
      updated[index].gradePoint = 3.5;
    } else if (total >= 60) {
      updated[index].evaluation = 'Good';
      updated[index].grade = 'B';
      updated[index].gradePoint = 3.0;
    } else if (total >= 50) {
      updated[index].evaluation = 'Fair';
      updated[index].grade = 'C';
      updated[index].gradePoint = 2.5;
    } else if (total >= 40) {
      updated[index].evaluation = 'Below Average';
      updated[index].grade = 'D';
      updated[index].gradePoint = 2.0;
    } else {
      updated[index].evaluation = 'Poor';
      updated[index].grade = 'F';
      updated[index].gradePoint = 0.0;
    }

    updated[index].observation = updated[index].grade === 'F' ? 'Failed' : 'Validated';

    setStudents(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  setLoading(true);

  const resultsToSend = students.map(student => ({
    student_matricule: student.matricule,
    course_id: courseId,
    department_id: departmentId,
    level_id: levelId,
    session_id: sessionId,
    semester_id: semesterId,
    ca_mark: student.ca_mark,
    exam_mark: student.exam_mark,
    total: student.total,
    avg: student.avg,
    grade: student.grade,
    grade_point: student.gradePoint,
    evaluation: student.evaluation,
    observation: student.observation,
 
  }));

  try {
    console.log("Submitting results payload:", resultsToSend);

    await axios.post('http://localhost:5000/api/result', { students: resultsToSend });
    alert('Results submitted successfully!');
    navigate('/results');
  } catch (err) {
    console.error('Error submitting results:', err);
    alert('Failed to submit results.');
  }

  setLoading(false);
    };

  return (
    <div>
      <h2>Enter Students Scores</h2>
      <form onSubmit={handleSubmit}>
        <table style={{placeSelf:'center', width:'100%'}}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Student Matricule</th>
              <th>Student Name</th>
              <th>CA_Mar/30</th>
              <th>Exam_Mark/70</th>
              <th>Total Mark</th>
              <th>Avg</th>
              <th>Evaluation</th>
              <th>Grade</th>
              <th>Grade Point</th>
              <th>Observation</th>
            </tr>
          </thead>
          <tbody>
              {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.matricule}</td>
                <td>{student.name}</td>
                
                <td>
                    <input type="number" value={student.ca_mark} 
                    onChange={(e) => handleChange(index, 'ca_mark', e.target.value)} />
                </td>
                <td>
                    <input type="number" value={student.exam_mark} 
                    onChange={(e) => handleChange(index, 'exam_mark', e.target.value)} />
                </td>
                <td>{student.total}</td>
                <td>{student.avg}</td>
                <td>{student.evaluation}</td>
                <td>{student.grade}</td>
                <td>{student.gradePoint}</td>
                <td>{student.observation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <button className='addstudent-button' type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Results'}
          </button>
        </div>
        </form>
    </div>
  )
}

export default ResultEntry