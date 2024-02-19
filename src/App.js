import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';

import Login from './components/MyLogin';
import MyReg from './components/MyReg';

import Student from './components/Student';
import Investor from './components/Investor';
import Protected from './components/Protected';

import EntrepreneurHome from './homePages/EntrepreneurHome';
import InvestorHome from './homePages/InvestorHome';
import StudentHome from './homePages/StudentHome';

import EntrepreneurPost from './components/EntrepreneurPost';
import EntrepreneurSend from './components/EntrepreneurSend';

import StudentSend from './components/StudentSend';
import StudentResponse from './components/StudentResponse';

import Result from './components/Result';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<MyReg/>} />
          <Route path="/studentpage" element={<Protected><Student/></Protected>} />
          <Route path="/investorpage" element={<Protected><Investor/></Protected>} />

          <Route path="/student" element={<Protected><StudentHome/></Protected>} />
          <Route path="/entrepreneur" element={<Protected><EntrepreneurHome/></Protected>} />
          <Route path="/investor" element={<Protected><InvestorHome/></Protected>} />

          <Route path="/entrepreneurpost" element={<Protected><EntrepreneurPost/></Protected>} />
          <Route path="/entrepreneursend" element={<Protected><EntrepreneurSend/></Protected>} />

          <Route path="/studentsend" element={<Protected><StudentSend/></Protected>} />
          <Route path="/studentresponse" element={<Protected><StudentResponse/></Protected>} />

          <Route path="/result" element={<Protected><Result/></Protected>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
