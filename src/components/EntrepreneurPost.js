import React, { useState } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';

function EntrepreneurPost() {
  const [postFormData, setPostFormData] = useState({
    e_id: '',
    p_id: '',
    p_title: '',
    p_desc: '',
  });

  const handlePostChange = (e) => {
    setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2022/posts', postFormData);
      console.log(response.data.status);
      alert('Successfully Posted')
    } catch (error) {
      console.error('Error during post submission:', error);
    }
  };

  return (
    <>
    <EntrepreneurNav/> 
    <div className="ent-post-container">
      <h2 className="ent-post-heading">POST</h2>
      <form method="POST" onSubmit={handlePostSubmit} className="ent-post-form">
        <table className="ent-form-table">
          <tbody>
            <tr>
              <td>Entrepreneur Id</td>
              <td><input type="text" name="e_id" onChange={handlePostChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Project Id</td>
              <td><input type="text" name="p_id" onChange={handlePostChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Project Title</td>
              <td><input type="text" name="p_title" onChange={handlePostChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Description</td>
              <td><textarea name="p_desc" rows="4" cols="30" onChange={handlePostChange} className="ent-textarea-field"></textarea></td>
            </tr>
            <tr>
              <td><input type="submit" value="POST" className="ent-submit-button" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </>
  );
}

export default EntrepreneurPost;
