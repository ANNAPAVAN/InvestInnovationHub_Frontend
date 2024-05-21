import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Protected from './components/Protected';
import EntProtected from './components/EntProtected';
import InvProtected from './components/InvProtected';

import Login from './components/MyLogin';
import MyReg from './components/MyReg';

import Student from './components/Student';
import Investor from './components/Investor';


import EntrepreneurHome from './homePages/EntrepreneurHome';
import InvestorHome from './homePages/InvestorHome';
import StudentHome from './homePages/StudentHome';

import EntrepreneurPost from './components/EntrepreneurPost';
import EntrepreneurSend from './components/EntrepreneurSend';
import EntrepreneurProj from './components/EntrepreneurProj';

import StudentSend from './components/StudentSend';
import StudentResponse from './components/StudentResponse';
import StudentIdeas from './components/StudentIdeas';

import Result from './components/Result';
import Home from './components/Home';

import MyNav from './components/MyNav';
import HomeNav from './components/HomeNav';
import StudentNav from './navPages/StudentNav';
import EntrepreneurNav from './navPages/EntrepreneurNav';
import InvestorNav from './navPages/InvestorNav';

import AllStudents from './users/AllStudents';
import AllEntrepreneurs from './users/AllEntrepreneurs';
import AllInvestors from './users/AllInvestors';


import Profile from './userDetails/Profile';
import UpdateProfile from './userDetails/UpdateProfile';
import ResultForm from './components/ResultForm';

import InvestorInvests from './components/InvestorInvests';

import AskAi from './components/AskAi';


function App() {
  return (
    <div className="App">
      <AppContent />
    </div>
  );
}

function AppContent() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<MyReg />} />
          <Route path="/allstudents" element={<AllStudents />} />
          <Route path="/allentrepreneurs" element={<AllEntrepreneurs />} />
          <Route path="/allinvestors" element={<AllInvestors />} />
          <Route path="/askai" element={<AskAi/>}/>

          <Route path="/studentpage" element={<Student />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/studentsend" element={<Protected><StudentSend /></Protected>} />
          <Route path="/studentideas" element={<StudentIdeas />} />
          <Route path="/studentresult" element={<Protected><Result /></Protected>} />
          <Route path="/studentprofile" element={<Protected><Profile /></Protected>} />

          <Route path="/entrepreneur" element={<EntProtected><EntrepreneurHome /></EntProtected>} />
          <Route path="/entrepreneurprojects" element={<EntProtected><EntrepreneurProj /></EntProtected>} />
          <Route path="/entrepreneurpost" element={<EntProtected><EntrepreneurPost /></EntProtected>} />
          <Route path="/entrepreneursend" element={<EntProtected><EntrepreneurSend /></EntProtected>} />
          <Route path="/entrepreneurstudentresponse/:id" element={<EntProtected><StudentResponse /></EntProtected>} />
          <Route path="/entrepreneurresult" element={<EntProtected><Result /></EntProtected>} />
          <Route path="/entrepreneurprofile" element={<EntProtected><Profile /></EntProtected>} />

          <Route path="/investor" element={<InvProtected><InvestorHome /></InvProtected>} />
          <Route path="/investorpage" element={<InvProtected><Investor /></InvProtected>} />
          <Route path="/investorresult" element={<InvProtected><Result /></InvProtected>} />
          <Route path="/investorprofile" element={<InvProtected><Profile /></InvProtected>} />
          <Route path="/investorresultform" element={<InvProtected><ResultForm /></InvProtected>} />
          <Route path="/investorinvests" element={<InvProtected><InvestorInvests /></InvProtected>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

function Navbar() {
  const location = useLocation();
  let navbarComponent;

  // Determine which navbar to show based on the current route
  if (location.pathname === '/' ||location.pathname === '/askai' || location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/allstudents'|| location.pathname === '/allentrepreneurs'|| location.pathname === '/allinvestors') {
    navbarComponent = <HomeNav />;
  } else if (location.pathname.startsWith('/student')) {
    navbarComponent = <StudentNav />;
  } else if (location.pathname.startsWith('/entrepreneur')) {
    navbarComponent = <EntrepreneurNav />;
  } else if (location.pathname.startsWith('/investor')) {
    navbarComponent = <InvestorNav />;
  } else {
    navbarComponent = <MyNav />;
  }

  return navbarComponent;
}

export default App;
