import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';

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

import MyNav from './components/MyNav';
import HomeNav from './components/HomeNav';
import StudentNav from './navPages/StudentNav';
import EntrepreneurNav from './navPages/EntrepreneurNav';
import InvestorNav from './navPages/InvestorNav';

import AllStudents from './users/AllStudents';
import AllEntrepreneurs from './users/AllEntrepreneurs';
import AllInvestors from './users/AllInvestors';

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<MyReg />} />
          <Route path="/allstudents" element={<AllStudents />} />
          <Route path="/allentrepreneurs" element={<AllEntrepreneurs />} />
          <Route path="/allinvestors" element={<AllInvestors />} />

          <Route path="/studentpage" element={<Protected><Student /></Protected>} />
          <Route path="/student" element={<Protected><StudentHome /></Protected>} />
          <Route path="/studentsend" element={<Protected><StudentSend /></Protected>} />
          <Route path="/studentresult" element={<Protected><Result /></Protected>} />

          <Route path="/entrepreneur" element={<Protected><EntrepreneurHome /></Protected>} />
          <Route path="/entrepreneurpost" element={<Protected><EntrepreneurPost /></Protected>} />
          <Route path="/entrepreneursend" element={<Protected><EntrepreneurSend /></Protected>} />
          <Route path="/entrepreneurstudentresponse" element={<Protected><StudentResponse /></Protected>} />
          <Route path="/entrepreneurresult" element={<Protected><Result /></Protected>} />

          <Route path="/investor" element={<Protected><InvestorHome /></Protected>} />
          <Route path="/investorpage" element={<Protected><Investor /></Protected>} />
          <Route path="/investorresult" element={<Protected><Result /></Protected>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Navbar() {
  const location = useLocation();
  let navbarComponent;

  // Determine which navbar to show based on the current route
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/allstudents'|| location.pathname === '/allentrepreneurs'|| location.pathname === '/allinvestors') {
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
