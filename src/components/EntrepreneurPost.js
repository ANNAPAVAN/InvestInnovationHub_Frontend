import React, { useState } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';

function EntrepreneurPost() {

  const user_id = localStorage.getItem("user_Id");

  const [postFormData, setPostFormData] = useState({
    e_id: user_id,
    p_id: 'p',
    p_title: '',
    p_desc: '',
    p_image:'',
  }); 

  const handlePostChange = (e) => {
    setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/posts`, postFormData);
      console.log(response.data.status);
      alert('Successfully Posted')
    } catch (error) {
      console.error('Error during post submission:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPostFormData((prevData) => ({
        ...prevData,
        p_image: reader.result,
      }));
    };
  };

  return (
    <>
    {/* <EntrepreneurNav/>  */}
    <div className="ent-post-container">
      <h2 className="ent-post-heading">Post new project</h2>
      <form method="POST" onSubmit={handlePostSubmit} className="ent-post-form">
        <table className="ent-form-table">
          <tbody>
            {/* <tr>
              <td>Entrepreneur Id</td>
              <td><input type="text" value={user_id} name="e_id" onChange={handlePostChange} className="ent-input-field" /></td>
            </tr> */}
            {/* <tr>
              <td>Project Id</td>
              <td><input type="text" name="p_id" onChange={handlePostChange} className="ent-input-field" /></td>
            </tr> */}
            <tr>
              <td>Project Title</td>
              <td><input type="text" name="p_title" onChange={handlePostChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Description</td>
              <td><textarea name="p_desc" rows="4" cols="30" onChange={handlePostChange} className="ent-textarea-field"></textarea></td>
            </tr>
            <tr>
                 <td>Image</td>
                 <td>
                   <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="registration-input" />
                   <img src={postFormData.p_image} alt="" className="registration-preview-image" />
                 </td>
             </tr>
            <tr>
              <td>
                <button
                  type="submit"
                  className="ent-submit-button"
                  disabled={postFormData.p_desc.length <= 100 || postFormData.p_desc.length >= 999 }
                >
                  POST
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </>
  );
}

export default EntrepreneurPost;
