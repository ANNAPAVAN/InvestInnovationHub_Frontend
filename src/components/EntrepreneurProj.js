import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';
import { useNavigate } from 'react-router-dom';

function EntrepreneurProj() {

  const navigate = useNavigate();

  const [projs, setProjs] = useState([]);

  const ent_Id = localStorage.getItem('user_Id');

  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getEntProjs?entId=${ent_Id}`);
        console.log("------------>",response);
        setProjs(response.data.entProjs);
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
        <h1 className="student-response-heading">My Projects</h1>
        <ul className="student-response-list">
          {projs.map((proj, index) => (
            <li key={index} className="student-response-item">
              {proj.p_image && (
                <div>
                  <img src={proj.p_image} alt="Idea Image" className="student-response-image" />
                </div>
              )}
              {/* <strong className="student-response-label">ID:</strong> {proj.e_id}<br /> */}
              <strong className="student-response-label">Project ID:</strong> {proj.p_id}<br />
              <strong className="student-response-label">Title:</strong> {proj.p_title}<br />
              <strong className="student-response-label">Description:</strong> {proj.p_desc}<br />
              {/* <strong className="student-response-label">Status:</strong> {proj.status}<br /> */}
              <strong>Status:</strong><strong className={`student-response-label-status ${proj.status}`}> {proj.status}</strong>


              <hr className="student-response-divider" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default EntrepreneurProj;
