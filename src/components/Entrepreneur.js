import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyNav from './MyNav';


const Entrepreneur = () => {
  const navigate = useNavigate();

  const [postFormData, setPostFormData] = useState({
    e_id: '',
    p_id: '',
    p_title: '',
    p_desc: '',
  });

  const [investFormData, setInvestFormData] = useState({
    eid: '',
    pid: '',
    title: '',
    desc: '',
    idea: '',
    req: '',
    amt: '',
    status: '',
  });

  const handlePostChange = (e) => {
    setPostFormData({ ...postFormData, [e.target.name]: e.target.value });
  };

  const handleInvestChange = (e) => {
    setInvestFormData({ ...investFormData, [e.target.name]: e.target.value });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2022/posts', postFormData);
      // Handle the response as needed
      console.log(response.data.status);
      alert('Successfully Posted')

      // After successful submission, you may navigate to another page
    //   navigate('/someOtherPage');
    } catch (error) {
      console.error('Error during post submission:', error);
    }
  };

  const handleInvestSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:2022/toInvestor', investFormData);
      // Handle the response as needed
      console.log(response.data.status);
      alert('Successfully Send to Investor')

      // After successful submission, you may navigate to another page
    //   navigate('/anotherPage');
    } catch (error) {
      console.error('Error during investor submission:', error);
    }
  };

  return (
    <div>
        <MyNav/>
      {/* Form for posting */}
      <h2>POST</h2>
      <form method="POST" onSubmit={handlePostSubmit} style={{ textAlign: 'center' }}>
        <table>
          <tbody>
            <tr>
              <td>Entrepreneur Id</td>
              <td><input type="text" name="e_id" onChange={handlePostChange} /></td>
            </tr>
            <tr>
              <td>Project Id</td>
              <td><input type="text" name="p_id" onChange={handlePostChange} /></td>
            </tr>
            <tr>
              <td>Project Title</td>
              <td><input type="text" name="p_title" onChange={handlePostChange} /></td>
            </tr>
            <tr>
              <td>Description</td>
              <td><textarea name="p_desc" rows="4" cols="30" onChange={handlePostChange}></textarea></td>
            </tr>
            <tr>
              <td><input type="submit" value="POST" /></td>
            </tr>
          </tbody>
        </table>
      </form>

      <br /><br />

      {/* Form for sending to investor */}
      <h2>Send</h2>
      <form method="POST" onSubmit={handleInvestSubmit} style={{ textAlign: 'center' }}>
        <table>
          <tbody>
            <tr>
              <td>Entrepreneur Id</td>
              <td><input type="text" name="eid" onChange={handleInvestChange} /></td>
            </tr>
            <tr>
              <td>Project Id</td>
              <td><input type="text" name="pid" onChange={handleInvestChange} /></td>
            </tr>
            <tr>
              <td>Project Title</td>
              <td><input type="text" name="title" onChange={handleInvestChange} /></td>
            </tr>
            <tr>
              <td>Description</td>
              <td><textarea name="desc" rows="5" cols="30" onChange={handleInvestChange}></textarea></td>
            </tr>
            <tr>
              <td>Idea</td>
              <td><textarea name="idea" rows="5" cols="30" onChange={handleInvestChange}></textarea></td>
            </tr>
            <tr>
              <td>Request</td>
              <td><textarea name="req" rows="3" cols="30" onChange={handleInvestChange}></textarea></td>
            </tr>
            <tr>
              <td>Amount</td>
              <td><input type="text" name="amt" onChange={handleInvestChange} /></td>
            </tr>
            <tr>
              <td>Status</td>
              <td><input type="text" name="status" onChange={handleInvestChange} /></td>
            </tr>
            <tr>
              <td><input type="submit" value="Send" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Entrepreneur;
