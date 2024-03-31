

import React, { useEffect, useState } from 'react';

const AllInvestors = () => {
  const [investors, setInvestors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getAllUsers?user=investor`)
      .then(response => response.json())
      .then(data => setInvestors(data.allusers))
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  const filteredInvestors = investors.filter(investor => {
    return (
      investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  filteredInvestors.sort((a,b)=> b.credits - a.credits);

  return (
    <div className="cards-top-container">
      <h1 className="result-title">Investors</h1>
      <div className="card-div1">
    <div>
        <p className="card-para">
        <br></br>
            <strong>Strategic Investment:</strong> Partner with bright minds to fund innovative projects.<br></br>
            <strong>Access to Talent:</strong> Discover promising ventures and collaborate with driven individuals.<br></br>
            <strong>High Potential Returns:</strong> Invest in the future and reap the rewards of successful ventures.<br></br>
            <strong>Networking Opportunities:</strong> Connect with fellow investors and industry experts for insights and partnerships.<br></br>
            <strong>Support Innovation:</strong> Foster groundbreaking ideas and technologies that can shape the future.<br></br>
            <strong>Global Impact:</strong> Contribute to positive change and make a difference on a global scale.<br></br>
        </p>
    </div>
    <div className='card-div2'>
        <img src="http://www.pngall.com/wp-content/uploads/2018/04/Businessman-PNG-Pic.png" alt="image1" id="pic1"/>
    </div>
</div>

     <input
        type="text"
        placeholder="Search by name, email, or ID"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="sample-users-search-bar"
      />

      <div className="card-container">
        {filteredInvestors.map((investor, index) => (
          <div key={index} className="sample-card">
            {/* <img src={investor.image} alt={`Image of ${investor.name}`} className="sample-image" /> */}
            {investor.image ? (
              <img src={investor.image} alt={`Image of ${investor.name}`} className="sample-image" />
            ) : (
              <img src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" alt={`Default Image`} className="sample-image" />
            )}
            <div className="sample-details">
              {/* <p><strong>Investor ID:</strong> {investor.id}</p> */}
              <p><strong>Name:</strong> {investor.name}</p>
              <p><strong>Email:</strong> {investor.email}</p>
              <p><strong>Coins:</strong> {investor.credits}<span role="img" aria-label="coin">&#128176;</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInvestors;
 