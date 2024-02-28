import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';

function StudentResponse() {
  const [ideas, setIdeas] = useState([]);

  const ent_Id = localStorage.getItem('ent_Id');

  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getIdeas?entId=${ent_Id}`);
        setIdeas(response.data.ideas);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    }

    fetchIdeas();
  }, [ent_Id]);

  return (
    <>
      {/* <EntrepreneurNav/> */}
      <div className="student-response-container">
        <h1 className="student-response-heading">Ideas from Students</h1>
        <ul className="student-response-list">
          {ideas.map((idea, index) => (
            <li key={index} className="student-response-item">
              <strong className="student-response-label">Student ID:</strong> {idea.student_id}<br />
              <strong className="student-response-label">Entrepreneur ID:</strong> {idea.ent_id}<br />
              <strong className="student-response-label">Project ID:</strong> {idea.p_id}<br />
              <strong className="student-response-label">Project Title:</strong> {idea.p_title}<br />
              <strong className="student-response-label">Idea:</strong> {idea.idea}<br />
              <hr className="student-response-divider" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudentResponse;
