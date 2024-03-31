import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ResultForm() {

  const location = useLocation();
  const { res } = location.state;
  const user_Id = localStorage.getItem('user_Id');


  useEffect(() => {
    if (res) {
      console.log(res); 
    }
  }, [res]);

  const [formData, setFormData] = useState({
    std_id: '',
    ent_id: '',
    inv_id: '',
    proj_id: '',
    proj_title: '',
    amount: '',
  });

  useEffect(() => {
    if (res) {
      setFormData({
        std_id: res.sid,
        ent_id: res.eid,
        inv_id: user_Id,
        proj_id: res.pid,
        proj_title: res.title,
        amount: res.amt,
      });
    }
  }, [res]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/postresult`, formData);
      console.log(response.data.status);
      alert('Data submitted successfully');
    } catch (error) {
      console.error('Error while submitting data:', error);
      alert('Failed to submit data');
    }
  }; 

  return (
    <div className="res-form-container">
      <h2>Submit Result</h2>
      <form onSubmit={handleSubmit} className="res-form">
        {/* <div>
          <label htmlFor="std_id">Student ID:</label>
          <input type="text" id="std_id" name="std_id" value={formData.std_id} onChange={handleChange} required className="res-input" />
        </div>
        <div>
          <label htmlFor="ent_id">Entrepreneur ID:</label>
          <input type="text" id="ent_id" name="ent_id" value={formData.ent_id} onChange={handleChange} required className="res-input" />
        </div>
        <div>
          <label htmlFor="inv_id">Investor ID:</label>
          <input type="text" id="inv_id" name="inv_id" value={formData.inv_id} onChange={handleChange} required className="res-input" />
        </div>
        <div>
          <label htmlFor="proj_id">Project ID:</label>
          <input type="text" id="proj_id" name="proj_id" value={formData.proj_id} onChange={handleChange} required className="res-input" />
        </div> */}
        <div>
          <label htmlFor="proj_title">Project Title:</label>
          <input type="text" id="proj_title" name="proj_title" value={formData.proj_title} onChange={handleChange} required className="res-input" />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} required className="res-input" />
        </div>
        <button type="submit" className="res-submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ResultForm;
