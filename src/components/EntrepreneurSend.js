import React, { useState } from 'react';
import axios from 'axios';
import EntrepreneurNav from '../navPages/EntrepreneurNav';

function EntrepreneurSend() {
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

  const handleInvestChange = (e) => {
    setInvestFormData({ ...investFormData, [e.target.name]: e.target.value });
  };

  const handleInvestSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/toInvestor`, investFormData);
      console.log(response.data.status);
      alert('Successfully Send to Investor')
    } catch (error) {
      console.error('Error during investor submission:', error);
    }
  };

  return (
    <>
    {/* <EntrepreneurNav/> */}
    <div className="ent-send-container">
      <h2 className="ent-send-heading">Send project details to Investor</h2>
      <form method="POST" onSubmit={handleInvestSubmit} className="ent-send-form">
        <table className="ent-form-table">
          <tbody>
            <tr>
              <td>Entrepreneur Id</td>
              <td><input type="text" name="eid" onChange={handleInvestChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Project Id</td>
              <td><input type="text" name="pid" onChange={handleInvestChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Project Title</td>
              <td><input type="text" name="title" onChange={handleInvestChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Description</td>
              <td><textarea name="desc" rows="5" cols="30" onChange={handleInvestChange} className="ent-textarea-field"></textarea></td>
            </tr>
            <tr>
              <td>Idea</td>
              <td><textarea name="idea" rows="5" cols="30" onChange={handleInvestChange} className="ent-textarea-field"></textarea></td>
            </tr>
            <tr>
              <td>Request</td>
              <td><textarea name="req" rows="3" cols="30" onChange={handleInvestChange} className="ent-textarea-field"></textarea></td>
            </tr>
            <tr>
              <td>Amount</td>
              <td><input type="text" name="amt" onChange={handleInvestChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td>Status</td>
              <td><input type="text" name="status" onChange={handleInvestChange} className="ent-input-field" /></td>
            </tr>
            <tr>
              <td><input type="submit" value="Send" className="ent-submit-button" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </>
  );
}

export default EntrepreneurSend;
