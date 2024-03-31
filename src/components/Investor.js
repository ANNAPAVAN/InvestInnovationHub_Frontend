

import React, { useEffect, useState } from 'react';
import InvestorNav from '../navPages/InvestorNav';
import ResultForm from './ResultForm';
import { useNavigate } from 'react-router-dom';

const Investor = () => {
  const navigate = useNavigate();
  const [investData, setInvestData] = useState({
    role: '',
    posts: [],
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getInvests`) 
      .then((res) => res.json())
      .then((jsonRes) => setInvestData(jsonRes));
  }, []);

  function handleButton(res){
    navigate("/investorresultform", { state: { res } });
  }
  const pendingProjects = investData.posts.filter(investment => investment.status === 'pending');
  return (
    <>
      <InvestorNav />
      <div className="investor-container">
        <h1 className="investor-heading">Projects</h1>

        {investData.role === 'investor' && (
          <div className="investments-container">
            <div className="investor-project-cards">
              {pendingProjects.map((investment, index) => (
                <div key={index} className="investor-project-card">
                  <h2 className='investor-p-title'>{investment.title}</h2>
                  {investment.image && (
                    <div>
                      <img src={investment.image} alt="Idea Image" className="investor-response-image" />
                    </div>
                  )}
                  <p><strong>Project Id:</strong> {investment.pid}</p>
                  <p><strong>Entrepreneur Id:</strong> {investment.eid}</p>
                  <p><strong>Student Id:</strong> {investment.sid}</p>
                  <p><strong>Project Title:</strong> {investment.title}</p>
                  <p><strong>Description:</strong> {investment.desc}</p>
                  <p><strong>Idea:</strong> {investment.idea}</p>
                  <p><strong>Requirements:</strong> {investment.req}</p>
                  <p><strong>Amount:</strong> {investment.amt}</p>
                  {/* <p><strong>Status:</strong> {investment.status}</p> */}
                  <button onClick={() => handleButton(investment)}>Submit</button>
                </div>
              ))}
            </div>
            {/* <ResultForm/> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Investor;
