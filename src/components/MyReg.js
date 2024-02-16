import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const MyReg = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    pwd: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2022/register', formData);
      console.log(response.data.status);
      if(response.data.status == "success"){
        alert("Registration successfull");
        navigate("/")
      }else{
        alert("Registration Failure");
      }
      console.log("anna pavan");
    } catch (error) {
      console.error('Error during registration:', error);
      alert("Registration Failure");
    }
  };

  return (
    <div>
      <h1 style={{ color: 'red', textAlign: 'center' }}>REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <table>
          <tbody>
            <tr>
              <td>User Id</td>
              <td>
                <input type="text" name="id" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>UserName</td>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" name="pwd" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Role</td>
              <td>
                <input type="text" name="role" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Register" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MyReg;
