import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/layout/Layout'

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();
  const matricule = localStorage.getItem("matricule"); // if student is logged in

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.error("Failed to load complaints", err);
    }
  };

  const goToChat = (complaintId) => {
    navigate(`/complaints/${complaintId}`);
  };

  return (
    <Layout>
      <div className="complaints-container">
        <h2 className="header">Complaints</h2>
        <div className="complaints-list">
          {complaints.length === 0 ? (
            <p>No complaints found.</p>
          ) : (
            complaints.map((c) => (
              <div className="complaint-item" key={c.id} onClick={() => goToChat(c.id)}>
                <strong>{c.student_matricule}</strong>
                <p>{c.complaint_text.slice(0, 50)}...</p>
                <span className={`status ${c.status}`}>{c.status}</span>
              </div>
            ))
          )}
        </div>
      </div>

    </Layout>
  )
}

export default Complaints