import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './components/Nav';
import Foot from './components/Foot';

import Login from './pages/Login';
import SignUp from './pages/SignUp/SignUp';
import Group from './pages/SignUp/SignUpGroup';
import Hospital from './pages/SignUp/SignUpHospital';
import Individual from './pages/SignUp/SignUpIndividual';

import Home from './pages/Main';
import MyPage from './pages/MyPage';

import MyPagetest from './pages/MyPage_test';

import Learn from './pages/1. Learn/Learn';

import BDMain from './pages/2. Blood_Donation/BD_Main';
import BDHouse from './pages/2. Blood_Donation/BD_House';
import BDBus from './pages/2. Blood_Donation/BD_Bus';
import BDReservationFirst from './pages/2. Blood_Donation/BD_ReservationFirst';
import BDReservationSecond from './pages/2. Blood_Donation/BD_ReservationSecond';
import BDReservationThird from './pages/2. Blood_Donation/BD_ReservationThird';
import BDHistory from './pages/2. Blood_Donation/BD_History';

import DBDMain from './pages/3. Designated_Blood_Donation/DBD_Main';
import DBDGeneral from './pages/3. Designated_Blood_Donation/DBD_General';
import DBDPostGeneral from './pages/3. Designated_Blood_Donation/DBD_PostGeneral';
import DBDPostHospital from './pages/3. Designated_Blood_Donation/DBD_PostHospital';
import DBDNews from './pages/3. Designated_Blood_Donation/DBD_News';
import DBDWatchList from './pages/3. Designated_Blood_Donation/DBD_WatchList';

import BDStory from './pages/4. Community/BD_Story';
// import BDDetails from './pages/4. Community/BD_Details';
// import BDWrite from './pages/4. Community/BD_Write';
// import DBDStory from './pages/4. Community/DBD_Story';
// import DBDDetails from './pages/4. Community/DBD_Details';
// import DBDWrite from './pages/4. Community/DBD_Write';
// import BDStory from './pages/4. Community/BD_Story';
// import BDStory from './pages/4. Community/BD_Story';
// import BDStory from './pages/4. Community/BD_Story';

import SMain from './pages/5. Service/S_Main';
import SOther from './pages/5. Service/S_Other';
import SWatchList from './pages/5. Service/S_WatchList';

import DMain from './pages/6. Donate/D_Main';
// import DMain from './pages/6. Donate';

//관리자페이지 모음
import MBloodReservation from './pages/0. Master/M_Blood_Reservation';
import MHouseInfo from './pages/0. Master/M_HouseInfo';

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
          <Route path="/SignUpGroup" element={<Group />}></Route>
          <Route path="/SignUpHospital" element={<Hospital />}></Route>
          <Route path="/SignUpIndividual" element={<Individual />}></Route>

          <Route path="/Learn" element={<Learn />}></Route>{/* 알아보자 */}

          {/*헌혈하자*/}
          <Route path="/BD_Main" element={<BDMain />}></Route>
          <Route path="/BD_House" element={<BDHouse />}></Route>{/*헌혈의 집 목록*/}
          <Route path="/BD_Bus" element={<BDBus />}></Route>
          <Route path="/BD_ReservationFirst" element={<BDReservationFirst />}></Route>
          <Route path="/BD_ReservationSecond" element={<BDReservationSecond startDate={startDate} endDate={endDate} onReservation={onReservation} />}></Route>
          <Route path="/BD_ReservationThird" element={<BDReservationThird />}></Route>
          <Route path="/BD_History" element={<BDHistory />}></Route>

          {/*지정헌혈하자*/}
          <Route path="/DBD_Main" element={<DBDMain />}></Route>
          <Route path="/DBD_General" element={<DBDGeneral />}></Route>
          <Route path="/DBD_PostGeneral" element={<DBDPostGeneral />}></Route>
          <Route path="/DBD_PostHospital" element={<DBDPostHospital />}></Route>
          <Route path="/DBD_News" element={<DBDNews />}></Route>
          <Route path="/DBD_WatchList" element={<DBDWatchList />}></Route>

          <Route path="/BD_Story" element={<BDStory />}></Route>{/*이야기하자*/}

          <Route path="/S_Main" element={<SMain startDate={startDate} endDate={endDate} onReservation={onReservation} />}></Route>{/*봉사하자, 헌혈하자 캘린더실험용 사용중*/}
          <Route path="/S_Other" element={<SOther />}></Route>
          <Route path="/S_WatchList" element={<SWatchList />}></Route>

          <Route path="/D_Main" element={<DMain />}></Route>{/*기부하자, 지정헌혈 채팅api실험용으로 사용중*/}

          {/*관리자 페이지 모음*/}
          <Route path="/M_HouseInfo" element={<MHouseInfo />}></Route>{/*헌혈의 집 정보 Insert하는 페이지*/}
          <Route path="/M_Blood_Reservation" element={<MBloodReservation />}></Route>{/*날짜별 가능한 예약 목록을 저장하는 페이지*/}
          <Route path="/MyPagetest" element={<MyPagetest />}></Route>
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
