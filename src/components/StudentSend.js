import React, { useState } from 'react';
import axios from 'axios';
import StudentNav from '../navPages/StudentNav';

function StudentSend() {
  const [formData, setFormData] = useState({
    student_id: '',
    ent_id: '',
    p_id: '',
    p_title: '',
    idea: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2022/studentsend', formData);
      console.log(response.data.status);
      alert('Data sent successfully');
    } catch (error) {
      console.error('Error while sending data:', error);
      alert('Failed to send data');
    }
  };

  return (
    <>
      <StudentNav/>
      <div className="std-send-container">
        <h2>Student Send</h2>
        <form onSubmit={handleSubmit} className="std-send-form">
          <div>
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" value={formData.student_id} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="ent_id">Entrepreneur ID:</label>
            <input type="text" id="ent_id" name="ent_id" value={formData.ent_id} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="p_id">Project ID:</label>
            <input type="text" id="p_id" name="p_id" value={formData.p_id} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="p_title">Project Title:</label>
            <input type="text" id="p_title" name="p_title" value={formData.p_title} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="idea">Idea:</label>
            <textarea id="idea" name="idea" value={formData.idea} onChange={handleChange} required className="std-send-textarea" />
          </div>
          <button type="submit" className="std-send-button">Send Data</button>
        </form>
      </div>
    </>
  );
}

export default StudentSend;
