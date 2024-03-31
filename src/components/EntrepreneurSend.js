
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';
import { useLocation } from 'react-router-dom';

function EntrepreneurSend() {
  const location = useLocation();
  const { inv_post } = location.state;

  useEffect(() => {
    if (inv_post) {
      console.log(inv_post); // Print the post data to the console
    }
  }, [inv_post]);

  const [investFormData, setInvestFormData] = useState({
    eid: '',
    sid:'',
    pid: '',
    title: '',
    desc: '',
    idea: '',
    req: '',
    amt: '',
    status: 'pending',
    image: '',
  });

  useEffect(() => {
    if (inv_post) {
      setInvestFormData({
        eid: inv_post.ent_id, 
        sid: inv_post.student_id,
        pid: inv_post.p_id,
        title: inv_post.p_title,
        desc: inv_post.p_desc,
        idea: inv_post.idea,
        req: '',
        amt: '',
        status: '',
        image: inv_post.image,
      });
    }
  }, [inv_post]);

  const handleInvestChange = (e) => {
    setInvestFormData({ ...investFormData, [e.target.name]: e.target.value });
  };

  const handleInvestSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/toInvestor`, investFormData);
      console.log(response.data.status);
      alert('Successfully Sent to Investor');
    } catch (error) {
      console.error('Error during investor submission:', error);
      alert('Failed to send data');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setInvestFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
  };

  return (
    <>
      {/* <EntrepreneurNav/> */}
      <div className="ent-send-container">
        <h2 className="ent-send-heading">Send Project Details to Investor</h2>
        <form onSubmit={handleInvestSubmit} className="ent-send-form">
          {/* <div>
            <label htmlFor="eid">Entrepreneur ID:</label>
            <input type="text" name="eid" value={investFormData.eid} onChange={handleInvestChange} className="ent-input-field" />
          </div>
          <div>
            <label htmlFor="eid">Student ID:</label>
            <input type="text" name="sid" value={investFormData.sid} onChange={handleInvestChange} className="ent-input-field" />
          </div>
          <div>
            <label htmlFor="pid">Project ID:</label>
            <input type="text" name="pid" value={investFormData.pid} onChange={handleInvestChange} className="ent-input-field" />
          </div> */}
          <div>
            <label htmlFor="title">Project Title:</label>
            <input type="text" name="title" value={investFormData.title} onChange={handleInvestChange} className="ent-input-field" />
          </div>
          <div>
            <label htmlFor="desc">Description:</label>
            <textarea name="desc" value={investFormData.desc} onChange={handleInvestChange} className="ent-textarea-field" />
          </div>
          <div>
            <label htmlFor="idea">Idea:</label>
            <textarea name="idea" value={investFormData.idea} onChange={handleInvestChange} className="ent-textarea-field" />
          </div>
          <div>
            <label htmlFor="req">Request:</label>
            <textarea name="req" value={investFormData.req} onChange={handleInvestChange} className="ent-textarea-field" />
          </div>
          <div>
            <label htmlFor="amt">Amount:</label>
            <input type="text" name="amt" value={investFormData.amt} onChange={handleInvestChange} className="ent-input-field" />
          </div>
          {/* <div>
            <label htmlFor="status">Status:</label>
            <input type="text" name="status" value={investFormData.status} onChange={handleInvestChange} className="ent-input-field" />
          </div> */}
          <div className="image-upload">
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="registration-input" />
            {investFormData.image && <img src={investFormData.image} alt="" className="registration-preview-image" />}
          </div>
          <button type="submit" className="ent-submit-button">Send</button>
        </form>
      </div>
    </>
  );
}

export default EntrepreneurSend;
