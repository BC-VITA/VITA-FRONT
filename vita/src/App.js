import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Main';
import BD_Main from './pages/2. Blood_Donation/BD_Main';
import Login from './pages/Login';
import Nav from './components/Nav';
import SignUp from './pages/SignUp/SignUp';
import Group from './pages/SignUp/SignUpGroup';
import Hospital from './pages/SignUp/SignUpHospital';
import Individual from './pages/SignUp/SignUpIndividual';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/BD_Main" element={<BD_Main />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Group" element={<Group />}></Route>
        <Route path="/Hospital" element={<Hospital />}></Route>
        <Route path="/Individual" element={<Individual />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
