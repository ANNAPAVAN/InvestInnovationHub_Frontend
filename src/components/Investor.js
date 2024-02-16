import React, { useEffect, useState } from 'react';
import MyNav from './MyNav';

const Investor = () => {
  const [investData, setInvestData] = useState({
    role: '',
    posts: [],
  });

  useEffect(() => {
    fetch("http://localhost:2022/getInvests")
      .then((res) => res.json())
      .then((jsonRes) => setInvestData(jsonRes));
  }, []);

  return (
    <div>
      <MyNav />
      <h1>INVESTOR PAGE</h1>

      {investData.role === 'investor' && (
        <div>
          <h2>Investments:</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Title</th>
                <th>Project Id</th>
                <th>Entrepreneur Id</th>
                <th>Description</th>
                <th>Idea</th>
                <th>Requirements</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {investData.posts.map((investment, index) => (
                <tr key={index}>
                  <td>{investment.title}</td>
                  <td>{investment.pid}</td>
                  <td>{investment.eid}</td>
                  <td>{investment.desc}</td>
                  <td>{investment.idea}</td>
                  <td>{investment.req}</td>
                  <td>{investment.amt}</td>
                  <td>{investment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investor;
