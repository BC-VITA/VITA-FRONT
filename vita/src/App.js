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
    <FooterContainer>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<Home />}></Route>
          {/* 마이페이지 */}
          <Route path="/MyPage" element={<MyPage />}></Route>
          {/*로그인*/}
          <Route path="/Login" element={<Login />}></Route>
          {/*회원가입*/}
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Group" element={<Group />}></Route>
          <Route path="/Hospital" element={<Hospital />}></Route>
          <Route path="/Individual" element={<Individual />}></Route>
          {/* 알아보자 */}
          <Route path="/Learn" element={<Learn />}></Route>
          {/* 헌혈하자 */}
          <Route path="/BDMain " element={<BDMain />}></Route>
          <Route path="/BDHouse " element={<BDHouse />}></Route>
          <Route path="/BDBus " element={<BDBus />}></Route>
          <Route
            path="/BDReservationFirst "
            element={<BDReservationFirst />}
          ></Route>
          <Route
            path="/BDReservationSecond "
            element={<BDReservationSecond />}
          ></Route>
          <Route
            path="/BDReservationThird "
            element={<BDReservationThird />}
          ></Route>
          <Route path="/BDHistory" element={<BDHistory />}></Route>
          {/*지정헌혈하자*/}
          <Route path="/DBDMain" element={<DBDMain />}></Route>
          <Route path="/DBDGeneral" element={<DBDGeneral />}></Route>
          <Route path="/DBDPostGeneral" element={<DBDPostGeneral />}></Route>
          <Route path="/DBDPostHospital" element={<DBDPostHospital />}></Route>
          <Route path="/DBDNews" element={<DBDNews />}></Route>
          <Route path="/DBDWatchList" element={<DBDWatchList />}></Route>
          {/*이야기하자*/}
          <Route path="/BDStory" element={<BDStory />}></Route>
          {/*봉사하자*/}
          <Route path="/SMain" element={<SMain />}></Route>
          {/*기부하자*/}
          <Route path="/DMain" element={<DMain />}></Route>
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
