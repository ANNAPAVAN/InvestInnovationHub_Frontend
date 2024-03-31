
import React, { useEffect, useState } from 'react';

const AllEntrepreneurs = () => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/getAllUsers?user=entrepreneur`)
      .then(response => response.json())
      .then(data => {
        if (data && data.allusers) {
          setEntrepreneurs(data.allusers);
        } else {
          throw new Error('Data format is incorrect');
        }
      })
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  const filteredEntrepreneurs = entrepreneurs.filter(ent => {
    return(
      ent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ent.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  filteredEntrepreneurs.sort((a,b)=> b.credits-a.credits)

  return (
    <div className="cards-top-container">
      <h1 className="result-title">Entrepreneurs</h1>
      <div className="card-div1">
    <div>
        <p className="card-para">
        <br></br>
            <strong>Access to Capital:</strong> Secure funding from investors to bring your vision to life.<br></br>
            <strong>Mentorship:</strong> Benefit from the guidance and expertise of seasoned entrepreneurs and investors.<br></br>
            <strong>Market Validation:</strong> Collaborate with investors to validate your ideas and business model.<br></br>
            <strong>Scale Your Venture:</strong> Accelerate growth with strategic investments and industry connections.<br></br>
            <strong>Strategic Partnerships:</strong> Forge valuable partnerships to expand your reach and offerings.<br></br>
            <strong>Entrepreneurial Community:</strong> Join a supportive community of like-minded individuals and innovators.<br></br>
        </p>
    </div>
    <div className='card-div2'>
        <img src="https://www.pngmart.com/files/9/Entrepreneur-PNG-Background-Image.png" alt="image1" id="pic1"/>
    </div>
</div>

      <input
        type="text"
        placeholder='search by name, email or id'
        value={searchTerm}
        onChange={e=> setSearchTerm(e.target.value)}
        className="sample-users-search-bar"
      />
      <div className="card-container">
        {filteredEntrepreneurs.map((entrepreneur, index) => (
          <div key={index} className="sample-card">
            {/* <img src={entrepreneur.image} alt={`Image of ${entrepreneur.name}`} className="sample-image" /> */}
            {entrepreneur.image ? (
              <img src={entrepreneur.image} alt={`Image of ${entrepreneur.name}`} className="sample-image" />
            ) : (
              <img src="https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" alt={`Default Image`} className="sample-image" />
            )}
            <div className="sample-details">
              {/* <p><strong>Entrepreneur ID:</strong> {entrepreneur.id}</p> */}
              <p><strong>Name:</strong> {entrepreneur.name}</p>
              <p><strong>Email:</strong> {entrepreneur.email}</p>
              <p><strong>Coins:</strong> {entrepreneur.credits}<span role="img" aria-label="coin">&#128176;</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEntrepreneurs;
