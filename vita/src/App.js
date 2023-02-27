import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Main';
import Login from './pages/Login';
import Nav from './components/Nav';
import SignUp from './pages/SignUp/SignUp';
import Group from './pages/SignUp/SignUpGroup';
import Hospital from './pages/SignUp/SignUpHospital';
import Individual from './pages/SignUp/SignUpIndividual';
import DBDPostGeneral from './pages/3. Designated_Blood_Donation/DBD_PostGeneral';
import DBDGeneral from './pages/3. Designated_Blood_Donation/DBD_General';
import DBDNews from './pages/3. Designated_Blood_Donation/DBD_News';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Group" element={<Group />}></Route>
        <Route path="/Hospital" element={<Hospital />}></Route>
        <Route path="/Individual" element={<Individual />}></Route>
        <Route path="/DBD_PostGeneral" element={<DBDPostGeneral />}></Route>
        <Route path="/DBD_General" element={<DBDGeneral />}></Route>
        <Route path="/DBD_News" element={<DBDNews />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
