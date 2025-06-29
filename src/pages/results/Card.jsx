import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Card() {
  const [results, setResults] = useState([]);
  const [studentInfo, setStudentInfo] = useState({});
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);
  const [GPA, setGPA] = useState(0);
  const [diplomaClass, setDiplomaClass] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      const student = JSON.parse(localStorage.getItem('student'));
      const sessionId = localStorage.getItem('studentSession');
      const semesterId = localStorage.getItem('studentSemester');
      const sessionName = localStorage.getItem('studentSessionName');
      const semesterName = localStorage.getItem('studentSemesterName');

      setStudentInfo({
      ...student,
      sessionName,
      semesterName
    });

      try {
        const response = await axios.get('http://localhost:5000/api/result/student-results', {
          params: {
            matricule: student.matricule,
            sessionId,
            semesterId,
          },
        });

        const resultData = response.data;
        setResults(resultData);
        setStudentInfo(student);

        // GPA Calculation
        let totalCred = 0;
        let totalGP = 0;

        resultData.forEach(r => {
          totalCred += r.credit;
          totalGP += r.grade_point * r.credit;
        });

        const calculatedGPA = (totalGP / totalCred).toFixed(2);
        setTotalCredits(totalCred);
        setTotalGradePoints(totalGP.toFixed(2));
        setGPA(calculatedGPA);

        // Class of diploma
        if (calculatedGPA >= 3.5) setDiplomaClass('Distinction');
        else if (calculatedGPA >= 3.0) setDiplomaClass('Upper Credit');
        else if (calculatedGPA >= 2.5) setDiplomaClass('Lower Credit');
        else if (calculatedGPA >= 2.0) setDiplomaClass('Pass');
        else setDiplomaClass('Fail');

      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, []); 

  //download
  const downloadPDF = () => {
  const input = document.getElementById('result-card');

  html2canvas(input, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/jpg');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Add letterhead (optional)
    const letterhead = new Image();
    letterhead.src = '/letterhead.jpg'; // Ensure it's in the /public folder

    letterhead.onload = () => {
      pdf.addImage(letterhead, 'JPG', 0, 0, pdfWidth, 30); // top header image
      pdf.addImage(imgData, 'JPG', 0, 35, pdfWidth, pdfHeight); // result content
      pdf.save('Result.pdf');
    };
  });
 }; 
  return (
    <div className='card'>
      
    <div id="result-card">
      <table>
      
        <thead>
          <tr>
            <th className='heading' colSpan={12}>First Semester Results</th>
          </tr>
          <tr>
            <td className='space'></td>
          </tr>
          <tr>
            <th colSpan={4}>Name: <span>{studentInfo.name}</span></th>
            <th colSpan={4}>Matricule: <span>{studentInfo.matricule}</span> <br /> Session: <span>{studentInfo.sessionName}</span></th>
            <th colSpan={4}>Speciality: <span>{studentInfo.department_name}</span></th>
          </tr>
          <tr>
            <th>S/N</th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Credit</th>
            <th>CA /30</th>
            <th>Exam /70</th>
            <th>Total</th>
            <th>AVG /20</th>
            <th>Evaluation</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th>Observation</th>
          </tr>
        </thead>
      
        <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.course_name}</td>
                <td>{r.course_code}</td>
                <td>{r.credit}</td>
                <td>{r.ca_mark}</td>
                <td>{r.exam_mark}</td>
                <td>{r.total}</td>
                <td>{r.avg}</td>
                <td>{r.evaluation}</td>
                <td>{r.grade}</td>
                <td>{r.grade_point}</td>
                <td>{r.observation}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td colSpan="2"></td>
              <td className='selected'>{totalCredits}</td>
              <td colSpan="5"></td>
              <td className='selected'>{totalGradePoints}</td>
              <td colSpan="2"></td>
            </tr>
            <tr>
              <th colSpan={3}>Total Credit</th>
              <th colSpan={6}>Total Grade Point</th>
              <th>GPA</th>
              <th colSpan={2}>Class of diploma</th>
            </tr>
            <tr>
              <td colSpan={3} className='selected'>{totalCredits}</td>
              <td colSpan={6} className='selected'>{totalGradePoints}</td>
              <td className='selected'>{GPA}</td>
              <td colSpan={2} className='selected'>{diplomaClass}</td>
            </tr>
          </tbody>
      </table>
    </div>

    <div className="click">
      <button onClick={() => navigate('/studentcomplaint')} className='button-results'>
        Contest Results
      </button>

      <button onClick={downloadPDF} className='download'>Download Results</button>
    </div>
  </div>
  )
}

export default Card