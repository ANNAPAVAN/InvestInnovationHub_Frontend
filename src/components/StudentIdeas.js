import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';
import { useNavigate } from 'react-router-dom';

function StudentIdeas() {

  const navigate = useNavigate();

  const [ideas, setIdeas] = useState([]);

  const user_Id = localStorage.getItem('user_Id');
  console.log("student Id ",user_Id);

  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getStudentIdeas?userId=${user_Id}`);
        console.log("------------>",response);
        setIdeas(response.data.StdIdeas);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    }

    fetchIdeas();
  }, [user_Id]);
  return (
    <>
      {/* <EntrepreneurNav/> */}
      <div className="student-response-container">
        <h1 className="student-response-heading">Student Ideas</h1>
        <ul className="student-response-list">
          {ideas.map((idea, index) => (
            <li key={index} className="student-response-item">
              {idea.image && (
                <div>
                  <img src={idea.image} alt="Idea Image" className="student-response-image" />
                </div>
              )}
              {/* <strong className="student-response-label">Student ID:</strong> {idea.student_id}<br /> */}
              <strong className="student-response-label">Entrepreneur ID:</strong> {idea.ent_id}<br />
              <strong className="student-response-label">Project ID:</strong> {idea.p_id}<br />
              <strong className="student-response-label">Project Title:</strong> {idea.p_title}<br />
              <strong className="student-response-label">Project Desc:</strong> {idea.p_desc}<br />
              <strong className="student-response-label">Idea:</strong> {idea.idea}<br />
              {/* <strong className="student-response-label-status">Status:</strong> {idea.status}<br /> */}
              <strong>Status:</strong><strong className={`student-response-label-status ${idea.status}`}> {idea.status}</strong>
              <hr className="student-response-divider" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudentIdeas;
