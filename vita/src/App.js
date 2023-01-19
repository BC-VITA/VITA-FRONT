import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BloodDonation from './pages/BloodDonation';
import Login from './pages/Login';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/BloodDonation" element={<BloodDonation />}></Route>        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
