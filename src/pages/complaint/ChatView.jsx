import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/layout/Layout';

function ChatView() {
    // Get complaint ID from the URL
  const { id } = useParams();

  // Store the complaint data and the reply text
  const [complaint, setComplaint] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Load the complaint when the component mounts
  useEffect(() => {
    fetchComplaint();
  }, []);

  // Fetch complaint data by ID
  const fetchComplaint = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      // Find the complaint that matches the ID
      const found = res.data.find((c) => c.id === parseInt(id));
      setComplaint(found); // Set it in state
    } catch (err) {
      console.error("Error loading complaint", err);
    }
  };

  // Function to send reply to a complaint
  const sendReply = async () => {
    try {
      // Send the reply to the backend
      await axios.post(`http://localhost:5000/api/complaints/${id}/reply`, {
        reply: replyText,
      });
      alert("Reply sent!");
      // Reload the complaint to show the reply
      fetchComplaint();
      // Clear the textarea
      setReplyText('');
    } catch (err) {
      alert("Failed to send reply.");
    }
  };

  // Show loading if complaint is not yet fetched
  if (!complaint) return <p>Loading message...</p>;

  return (
    <Layout>
        <div className="chat-view">
        {/* Header */}
        <h3>Conversation with {complaint.student_matricule}</h3>

        {/* Display messages */}
        <div className="message-box">
          <p><strong>Complaint:</strong></p>
          <div className="bubble student">{complaint.complaint_text}</div>

          {/* If there's a reply, display it */}
          {complaint.reply && (
            <>
              <p><strong>Reply:</strong></p>
              <div className="bubble admin">{complaint.reply}</div>
            </>
          )}
        </div>

        {/* Reply form: only show if not already replied */}
        {!complaint.reply && (
          <div className="reply-form">
            <textarea
              placeholder="Type your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={sendReply}>Send Reply</button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ChatView