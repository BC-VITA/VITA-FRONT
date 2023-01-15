import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BloodDonation from './pages/BloodDonation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/BloodDonation" element={<BloodDonation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
