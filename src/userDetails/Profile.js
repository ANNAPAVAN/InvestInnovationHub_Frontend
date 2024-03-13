import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import { useNavigate } from 'react-router-dom';


function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const user_Id = localStorage.getItem('user_Id');

  useEffect(() => {
    async function fetchIdeas() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/getUser?uid=${user_Id}`);
        setUser(response.data.profile);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    }

    fetchIdeas();
  }, [user_Id]);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
  };

  const handleDeleteProfile = async (e) => {

    const confirmation = window.prompt("Type 'Delete Permanently' to confirm deletion:");
    
    if (confirmation !== 'Delete Permanently') {
      alert('Deletion Cancelled');
      return;
    }
    
    try{
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/deleteUser?uid=${user_Id}`);
      if (response.data.status === 'success') {
        alert('Delete successful');
        navigate('/');
      } else {
        alert('Delete Failure');
      }
    }catch(error){
      console.error('Error during deletion', error);
      alert('Deletion Failure');
    }
  }

  return (
    <>
      <div className="student-response-container">
        <h1 className="student-response-heading">Profile</h1>
        <button onClick={handleDeleteProfile}>Delete Profile Permanently</button>
        <ul className="student-response-list">
          {user.map((ur, index) => (
            <li key={index} className="student-response-item">
              <img src={ur.image} alt="" /><br/>
              <strong className="student-response-label">ID : </strong> {ur.id}<br />
              <strong className="student-response-label">Name : </strong> {ur.name}<br />
              <strong className="student-response-label">Email : </strong> {ur.email}<br />
              <strong className="student-response-label">Role : </strong> {ur.role}<br />
              <hr className="student-response-divider" />
            </li>
          ))}
        </ul>
        <button onClick={handleUpdateProfileClick}>Update Profile <span role="img" aria-label="edit">✏️</span></button>
      </div>
      {showUpdateProfile && <UpdateProfile />}
    </>
  );
}

export default Profile;
