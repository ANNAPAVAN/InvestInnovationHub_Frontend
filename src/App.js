import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';

import Login from './components/MyLogin';
import MyReg from './components/MyReg';

import Student from './components/Student';
import Entrepreneur from './components/Entrepreneur';
import Investor from './components/Investor';

import Protected from './components/Protected';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/myreg" element={<MyReg/>} />
          <Route path="/studentpage" element={<Protected><Student/></Protected>} />
          <Route path="/entrepreneurpage" element={<Protected><Entrepreneur/></Protected>} />
          <Route path="/investorpage" element={<Protected><Investor/></Protected>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
