import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Main';
import BDMain from './pages/2. Blood_Donation/BD_Main';
import Login from './pages/Login';
import Nav from './components/Nav';
import Navbar from './components/navbar';
import SignUp from './pages/SignUp/SignUp';
import Group from './pages/SignUp/SignUpGroup';
import Hospital from './pages/SignUp/SignUpHospital';
import Individual from './pages/SignUp/SignUpIndividual';
import DBDPostGeneral from './pages/3. Designated_Blood_Donation/DBD_PostGeneral';
<<<<<<< HEAD
import DBDGeneral from './pages/3. Designated_Blood_Donation/DBD_General';
=======
import DBDposting from './pages/3. Designated_Blood_Donation/DBD_Posting';
>>>>>>> db8c042316132b825ba86c95fa2d49cc82f8aba8

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
<<<<<<< HEAD
        <Route path="/DBD_PostGeneral" element={<DBDPostGeneral />}></Route>
        <Route path="/DBD_General" element={<DBDGeneral />}></Route>
=======
        <Route path="/DBDPostGeneral" element={<DBDPostGeneral />}></Route>
        <Route path="/DBDposting" element={<DBDposting />}></Route>
>>>>>>> db8c042316132b825ba86c95fa2d49cc82f8aba8
      </Routes>
    </BrowserRouter>
  );
}

export default App;
