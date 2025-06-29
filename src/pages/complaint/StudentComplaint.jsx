import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentComplaint() {
  const [complaint, setComplaint] = useState(null);
  const [message, setMessage] = useState('');
  const student = JSON.parse(localStorage.getItem('student'));
  const sessionId = localStorage.getItem('studentSession');
  const semesterId = localStorage.getItem('studentSemester');

  // Fetch the latest complaint by this student (optional: or all complaints)
  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/complaints');
      const myComplaint = res.data.find(c => c.student_matricule === student.matricule && c.session_id == sessionId && c.semester_id == semesterId);
      setComplaint(myComplaint);
    } catch (err) {
      console.error("Error fetching complaint:", err);
    }
  };

  const sendComplaint = async () => {
    if (!message.trim()) return alert("Please enter your complaint");

    try {
      await axios.post("http://localhost:5000/api/complaints", {
        student_matricule: student.matricule,
        complaint_text: message,
        session_id: sessionId,
        semester_id: semesterId
      });

      alert("Complaint sent!");
      setMessage('');
      fetchComplaint();
    } catch (err) {
      console.error("Error sending complaint:", err);
      alert("Failed to send complaint.");
    }
  };

  return (

      <div className="student-complaint">
        <h3>Chat with Administrator</h3>

        {/* Display existing message */}
        {complaint ? (
          <div className="chat-box">
            <p className="chat-meta">
                Session: {complaint.session_name} | Semester: {complaint.semester_name} <br />
            </p>

            <p><strong>You said:</strong></p>
            <div className="bubble student">{complaint.complaint_text}</div>

            {complaint.reply && (
              <>
                <p><strong>Admin replied:</strong></p>
                <div className="bubble admin">{complaint.reply}</div>
              </>
            )}
          </div>
        ) : (
          <p>No complaint found. You can send one below.</p>
        )}

        {/* Message form */}
        {!complaint && (
          <div className="complaint-input">
            <textarea
              placeholder="Write your complaint here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="submit-btn" onClick={sendComplaint}>Send Complaint</button>
          </div>
        )}
      </div>
 
  );
}

export default StudentComplaint;
