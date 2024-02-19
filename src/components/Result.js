import React, { useEffect, useState } from 'react';
import MyNav from './MyNav';
const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2022/getResults")
      .then(response => response.json())
      .then(data => setResults(data.results))
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  return (
    <>
    <MyNav/>
    <div className="result-container">
      <h1 className="result-title">Project Build by Our Platform</h1>
      <table className="result-table">
        <thead>
          <tr>
            <th className="result-th">Student ID</th>
            <th className="result-th">Entrepreneur ID</th>
            <th className="result-th">Investor ID</th>
            <th className="result-th">Project ID</th>
            <th className="result-th">Project Title</th>
            <th className="result-th">Amount</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="result-tr">
              <td className="result-td">{result.std_id}</td>
              <td className="result-td">{result.ent_id}</td>
              <td className="result-td">{result.inv_id}</td>
              <td className="result-td">{result.proj_id}</td>
              <td className="result-td">{result.proj_title}</td>
              <td className="result-td">{result.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Result;
