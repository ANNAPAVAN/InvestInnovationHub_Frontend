import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';
import { useNavigate } from 'react-router-dom';

function InvestorInvests() {

  const navigate = useNavigate();

  const [projs, setProjs] = useState([]);

  const inv_Id = localStorage.getItem('user_Id');

  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getInvInvests?invId=${inv_Id}`);
        console.log("------------>",response);
        setProjs(response.data.invProjs);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    }

    fetchIdeas();
  }, [inv_Id]);
  return (
    <>
      {/* <EntrepreneurNav/> */}
      <div className="student-response-container">
        <h1 className="student-response-heading">My Projects</h1>
        <ul className="student-response-list">
          {projs.map((proj, index) => (
            <li key={index} className="student-response-item">
              {proj.image && (
                <div>
                  <img src={proj.image} alt="Idea Image" className="student-response-image" />
                </div>
              )}
              <strong className="student-response-label">Project ID:</strong> {proj.pid}<br />
              <strong className="student-response-label">Title:</strong> {proj.title}<br />
              
              <strong className="student-response-label">Description:</strong> {proj.desc}<br />
              <strong className="student-response-label">Idea</strong> {proj.idea}<br />
              <strong className="student-response-label">Amount</strong> {proj.amt}<br />
              {/* <strong className="student-response-label">Status:</strong> {proj.status}<br /> */}

              <hr className="student-response-divider" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default InvestorInvests;
