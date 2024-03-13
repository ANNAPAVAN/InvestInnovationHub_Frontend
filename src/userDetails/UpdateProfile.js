
import React, { useState } from 'react';
import axios from 'axios';

function UpdateProfile() {
  const [formData, setFormData] = useState({
    id: localStorage.getItem('user_Id'),
    name: '',
    email: '',
    pwd: '',
    role: '',
    image: '',
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/updateProfile`, formData);
      if (response.data.status === 'success') {
        alert('Update successful');
        // Redirect or perform other actions upon successful registration
      } else {
        alert('Update Failure');
      }
    } catch (error) {
      console.error('Error during updation:', error);
      alert('Update Failure');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {/* <HomeNav/> */}
      <div className="registration-container">
        <h1 className="registration-heading">Profile FORM</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <table className="registration-table">
            <tbody>
              <tr>
                <td>UserName</td>
                <td>
                  <input type="text" name="name" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="text" name="email" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input type="password" name="pwd" onChange={handleChange} className="registration-input" />
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input type="file" name="image" onChange={handleImageChange} accept="image/*" className="registration-input" />
                  <img src={formData.image} alt="" className="registration-preview-image" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input type="submit" value="Update" className="registration-submit-btn" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;

