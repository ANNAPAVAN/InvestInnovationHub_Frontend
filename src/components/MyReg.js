import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeNav from './HomeNav';

const MyReg = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    pwd: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/register`, formData);
      // console.log(response.data.status);
      if (response.data.status === 'success') {
        alert('Registration successful');
        navigate('/');
      } else {
        alert('Registration Failure');
      }
    } catch (error) {
      // console.error('Error during registration:', error);
      alert('Registration Failure');
    }
  };

  return (
    <>
    {/* <HomeNav/> */}
    <div className="registration-container">
      <h1 className="registration-heading">REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <table className="registration-table">
          <tbody>
            <tr>
              <td>User Id</td>
              <td>
                <input type="text" name="id" onChange={handleChange} className="registration-input" />
              </td>
            </tr>
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
                <td>Role</td>
                <td>
                  <select name="role" onChange={handleChange} value={formData.role} className="registration-input">
                    <option value="student">Student</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                  </select>
                </td>
              </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Register" className="registration-submit-btn" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </>
  );
};

export default MyReg;
