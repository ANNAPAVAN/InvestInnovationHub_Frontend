import React, { useEffect, useState } from 'react';
const AllInvestors = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getInvestors`)
      .then(response => response.json())
      .then(data => setInvestors(data.investors))
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  return (
    <>
    <div className="result-container">
      <h1 className="result-title">Investors</h1>
      <table className="result-table">
        <thead>
          <tr>
            <th className="result-th">Investor ID</th>
            <th className="result-th">Investor Name</th>
            <th className="result-th">Email</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor, index) => (
            <tr key={index} className="result-tr">
              <td className="result-td">{investor.id}</td>
              <td className="result-td">{investor.name}</td>
              <td className="result-td">{investor.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AllInvestors;
