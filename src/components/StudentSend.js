import React, { useState,useEffect } from 'react';
import axios from 'axios';
import StudentNav from '../navPages/StudentNav';
import { useLocation } from 'react-router-dom';

function StudentSend() {

  const location = useLocation();
  const { post } = location.state;

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("IIH_email");

  const user_Id = localStorage.getItem('user_Id');

  useEffect(() => {
    if (post) {
      console.log(post); // Print the post data to the console
    }
  }, [post]);

  const [formData, setFormData] = useState({
    student_id: '',
    ent_id: '',
    p_id: '',
    p_title: '',
    p_desc:'',
    idea: '',
    image:''
  });

  // Populate form data with post data when available
  useEffect(() => {
    if (post) {
      setFormData({
        student_id: user_Id, 
        ent_id: post.e_id,
        p_id: post.p_id,
        p_title: post.p_title,
        p_desc: post.p_desc,
        idea: '',
        image: post.p_image 
      });
    }
  }, [post]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/studentsend`, formData, {
        headers: {
          Authorization: token, 
          email
        }
      });
      // console.log(response.data.status);
      alert('Data sent successfully');
    } catch (error) {
      console.error('Error while sending data:', error);
      alert('Failed to send data');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };
  };

  return (
    <>
      {/* <StudentNav/> */}
      <div className="std-send-container">
        <h2>Post Idea to Entrepreneur</h2>
        <form onSubmit={handleSubmit} className="std-send-form">
          {/* <div>
            <label htmlFor="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" value={formData.student_id} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="ent_id">Entrepreneur ID:</label>
            <input type="text" id="ent_id" name="ent_id" value={formData.ent_id} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="p_id">Project ID:</label>
            <input type="text" id="p_id" name="p_id" value={formData.p_id} onChange={handleChange} required className="std-send-input" />
          </div> */}
          <div>
            <label htmlFor="p_title">Project Title:</label>
            <input type="text" id="p_title" name="p_title" value={formData.p_title} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="p_title">Project Description:</label>
            <input type="text" id="p_desc" name="p_desc" value={formData.p_desc} onChange={handleChange} required className="std-send-input" />
          </div>
          <div>
            <label htmlFor="idea">Idea:</label>
            <textarea id="idea" name="idea" value={formData.idea} onChange={handleChange} required className="std-send-textarea" />
          </div>
          <div className="image-upload">
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="registration-input" />
            {formData.image && (
              <img src={formData.image} alt="" className="registration-preview-image" />
            )}
          </div>

          <button type="submit" className="ent-submit-button"
           disabled={formData.idea.length <= 100 || formData.idea.length >= 999 }
          >Send Data</button>
        </form>
      </div>
    </>
  );
}

export default StudentSend;
