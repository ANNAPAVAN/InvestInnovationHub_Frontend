import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';
import { useNavigate,useParams } from 'react-router-dom';

function StudentResponse() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [ideas, setIdeas] = useState([]);

  const ent_Id = localStorage.getItem('user_Id');

  useEffect(() => {
    async function fetchIdeas() {
      try {
        // const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getIdeas?entId=${ent_Id}`);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getIdeas?entId=${ent_Id}&projId=${id}`);
        const filteredIdeas = response.data.ideas.filter(idea => idea.status === 'pending');
        setIdeas(filteredIdeas);
        // setIdeas(response.data.ideas);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    }

    fetchIdeas();
  }, [ent_Id]);

  function handleButton(inv_post){
    navigate("/entrepreneursend", { state: { inv_post } });
  }


  return (
    <>
      {/* <EntrepreneurNav/> */}
      <div className="student-response-container">
        <h1 className="student-response-heading">Ideas from Students</h1>
        {/* <h1>{id}</h1> */}
        <ul className="student-response-list">
          {ideas.map((idea, index) => (
            <li key={index} className="student-response-item">
              {idea.image && (
                <div>
                  <img src={idea.image} alt="Idea Image" className="student-response-image" />
                </div>
              )}
              <strong className="student-response-label">Student ID:</strong> {idea.student_id}<br />
              <strong className="student-response-label">Entrepreneur ID:</strong> {idea.ent_id}<br />
              <strong className="student-response-label">Project ID:</strong> {idea.p_id}<br />
              <strong className="student-response-label">Project Title:</strong> {idea.p_title}<br />
              <strong className="student-response-label">Project Desc:</strong> {idea.p_desc}<br />
              <strong className="student-response-label">Idea:</strong> {idea.idea}<br />
              <button className='student-response-btn' onClick={() => handleButton(idea)}>Submit</button>
              <hr className="student-response-divider" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudentResponse;
 