import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import HomeNav from './HomeNav';

const MyLogin = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    id: '',
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
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/login`, formData);

      console.log("myjwt---> ", response.data);
      const token  = response.data.token;

      // const response2 = await axios.get(`${process.env.REACT_APP_BACKEND}/getTokenDetails?token=${token}` );
      // console.log("myjwt Details(from token) id and role---> ", response2.data);

      if(response.data.status==="notexisted")
      {
        alert("Please Regitser first !!!.......");
        return;
      }

      if(response.data.status === 'success') {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('user_Id', response.data.id);
        // alert('Login successful');
        if(response.data.myrole == 'student'){
          navigate('/student');
        }else if(response.data.myrole == 'entrepreneur'){
          navigate('/entrepreneur')
        }else{
          navigate('/investor');
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <>
    <div className='logreg-background'>
    {/* <HomeNav/> */}
    <div className="login-container">
      <h1 className="login-heading">LOGIN FORM</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <table className="login-table">
          <tbody>
            {/* <tr>
              <td>Id</td>
              <td>
                <input type="text" name="id" onChange={handleChange} className="login-input" />
              </td>
            </tr> */}
            <tr>
              <td>Email</td>
              <td>
                <input type="text" name="email" onChange={handleChange} className="login-input" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="pwd" onChange={handleChange} className="login-input" />
              </td>
            </tr>
            {/* <tr>
                <td>Role</td>
                <td>
                  <select name="role" onChange={handleChange} value={formData.role} className="login-input">
                    <option value="student">Student</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                  </select>
                </td>
              </tr> */}
            <tr>
              <td colSpan="2">
              {/* <button type="submit" class="login-submit-btn">Login</button> */}
              <button type="submit" className="login-submit-btn" disabled={!formData.email || !formData.pwd}>
                {!formData.email || !formData.pwd ? "All fields are required" : "Login"}
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </>
  );
};

export default MyLogin;
