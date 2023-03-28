import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './components/Nav';
import Foot from './components/Foot';

import Home from './pages/Main';

import Login from './pages/Login';

import SignUp from './pages/SignUp/SignUp';
import Group from './pages/SignUp/SignUpGroup';
import Hospital from './pages/SignUp/SignUpHospital';
import Individual from './pages/SignUp/SignUpIndividual';

import DBDPostGeneral from './pages/3. Designated_Blood_Donation/DBD_PostGeneral';
import DBDGeneral from './pages/3. Designated_Blood_Donation/DBD_General';
import DBDInsert from './pages/3. Designated_Blood_Donation/DBD_Insert';

import BDMain from './pages/2. Blood_Donation/BD_Main';

import Learn from './pages/1. Learn/Learn';

import BDStory from './pages/4. Community/BD_Story';

import SMain from './pages/5. Service/S_Main';
import SOther from './pages/5. Service/S_Other';

import DMain from './pages/6. Donate/D_Main';

const startDate = '2022-01-01';
const endDate = '2022-01-10';
const onReservation = () => {
  console.log();
};

function App() {
  return (
    <FooterContainer >
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>{/*로그인*/}
        <Route path="/SignUp" element={<SignUp />}></Route>{/*회원가입*/}
        <Route path="/Group" element={<Group />}></Route>
        <Route path="/Hospital" element={<Hospital />}></Route>
        <Route path="/Individual" element={<Individual />}></Route>
        <Route path="/DBD_PostGeneral" element={<DBDPostGeneral />}></Route>{/*헌혈하자*/}
        <Route path="/DBD_General" element={<DBDGeneral />}></Route>
          <Route path="/DBD_Insert" element={<DBDInsert />}></Route>
        <Route path="/Learn" element={<Learn />}></Route> {/*알아보자*/}
        <Route path="/BD_Story" element={<BDStory />}></Route>{/*이야기하자*/}
          <Route path="/S_Main" element={<SMain startDate={startDate} endDate={endDate} onReservation={onReservation} />}></Route> {/*봉사하자*/}
          <Route path="/S_Other" element={<SOther />}></Route>
        <Route path="/D_Main" element={<DMain />}></Route> {/*기부하자*/}

          <Route path="/BD_Main" element={<BDMain />}></Route>
      </Routes>
        <Foot />
    </BrowserRouter>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
export default App;
