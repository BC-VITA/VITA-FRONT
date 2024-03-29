import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './components/Nav';
import Foot from './components/Foot';

import Login from './pages/Login';
import Test from './pages/test';
import SignUp from './pages/SignUp/SignUp';
import Group from './pages/SignUp/SignUpGroup';
import Hospital from './pages/SignUp/SignUpHospital';
import Individual from './pages/SignUp/SignUpIndividual';

import Home from './pages/Main';

import MyPageDBD from './pages/mypage/MyPage_DBD';
import MyPageChat from './pages/mypage/MyPage_Chat';
import ChatDetails from './pages/mypage/Chat_Details';
import MyPageBD from './pages/mypage/MyPage_BD';
import MyPageD from './pages/mypage/MyPage_D';
import DDeed from './pages/mypage/D_Deed';
import MyPageS from './pages/mypage/MyPage_S';
import SDeed from './pages/mypage/S_Deed';
import SDeed1 from './pages/mypage/S_Deed1';
import MyPage from './pages/mypage/MyPage';
// import MyPageMaine from './pages/mypage/MyPageMaine';

import Learn from './pages/1. Learn/Learn';

import BDMain from './pages/2. Blood_Donation/BD_Main';
import BDHouse from './pages/2. Blood_Donation/BD_House';
import BDPostHouse from './pages/2. Blood_Donation/BD_PostHouse';
import BDBus from './pages/2. Blood_Donation/BD_Bus';
import BDReservation from './pages/2. Blood_Donation/BD_Reservation';
import BDReservationFirst from './pages/2. Blood_Donation/BD_ReservationFirst';
import BDReservationSecond from './pages/2. Blood_Donation/BD_ReservationSecond';
import BDReservationThird from './pages/2. Blood_Donation/BD_ReservationThird';

import DBDMain from './pages/3. Designated_Blood_Donation/DBD_Main';
import DBDGeneral from './pages/3. Designated_Blood_Donation/DBD_General';
import DBDPostGeneral from './pages/3. Designated_Blood_Donation/DBD_PostGeneral';
import DBDPostHospital from './pages/3. Designated_Blood_Donation/DBD_PostHospital';
import DBDNews from './pages/3. Designated_Blood_Donation/DBD_News';
import DBDWatchList from './pages/3. Designated_Blood_Donation/DBD_WatchList';

import BDStory from './pages/4. Community/BD_Story';
import BDDetails from './pages/4. Community/BD_Details';
import BDPost from './pages/4. Community/BD_Post';
import DBDStory from './pages/4. Community/DBD_Story';
import DBDDetails from './pages/4. Community/DBD_Details';
import DBDPost from './pages/4. Community/DBD_Post';

import SMain from './pages/5. Service/S_Main';
import SGaneral from './pages/5. Service/S_Ganeral';
import SPostGT from './pages/5. Service/S_PostGT';
import SPostGA from './pages/5. Service/S_PostGA';
import SGroup from './pages/5. Service/S_Group';
import SPostGroup from './pages/5. Service/S_PostGroup';
import SOther from './pages/5. Service/S_Other';
import SPostOther from './pages/5. Service/S_PostOther';
import SWatchList from './pages/5. Service/S_WatchList';
import SReservationFirst from './pages/5. Service/S_ReservationFirst';
import SReservationSecond from './pages/5. Service/S_ReservationSecond';

import DMain from './pages/6. Donate/D_Main';
import DDonation from './pages/6. Donate/D_Donation';
import DDonationDetails from './pages/6. Donate/D_DonationDetails';
import DSelectDonation from './pages/6. Donate/D_SelectDonation.js';
import DReceipt from './pages/6. Donate/D_Receipt';
import DReceiptDetails from './pages/6. Donate/D_ReceiptDetails';
import DSelectReceipt from './pages/6. Donate/D_SelectReceipt';

//관리자페이지 모음
import MBloodReservation from './pages/0. Master/M_Blood_Reservation';
import MHouseInfo from './pages/0. Master/M_HouseInfo';
import MPostDonation from './pages/0. Master/M_PostDonation';
import MPostNews from './pages/0. Master/M_PostNews';
import OBDManage from './pages/0. Master/O_BD_Manage';
import OStatisticsD from './pages/0. Master/O_StatisticsD';
import OStatisticsS from './pages/0. Master/O_StatisticsS';
import OStatisticsBD from './pages/0. Master/O_StatisticsBD';
import OHospitalAuthorizations from './pages/0. Master/O_Hospital_Authorizations';
import OReporting from './pages/0. Master/O_Reporting';
import ONewsList from './pages/0. Master/O_NewsList';
import S_Details from "./pages/mypage/S_Details";

//실험
import Asd from './pages/asd'
import Asd1 from './pages/asd1'
import Asd2 from './pages/mypage/asd123'
import { ImportExportOutlined } from '@mui/icons-material';

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
            <Route path="/MyPage_DBD" element={<MyPageDBD />}></Route>
            <Route path="/MyPage_Chat" element={<MyPageChat />}></Route>
            <Route path="/Chat_Details" element={<ChatDetails />}></Route>
            <Route path="/MyPage_BD" element={<MyPageBD />}></Route>
            <Route path="/MyPage_D" element={<MyPageD />}></Route>
            <Route path="/D_Deed" element={<DDeed />}></Route>
            <Route path="/MyPage_S" element={<MyPageS />}></Route>
            <Route path="/S_Deed" element={<SDeed />}></Route>
            <Route path="/S_Deed1" element={<SDeed1 />}></Route>
            <Route path="/MyPage" element={<MyPage />}></Route>
            <Route path="/S_Details" element={<S_Details />}></Route>

            {/*로그인*/}
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Test" element={<Test />}></Route>

            {/*회원가입*/}
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/SignUpGroup" element={<Group />}></Route>
            <Route path="/SignUpHospital" element={<Hospital />}></Route>
            <Route path="/SignUpIndividual" element={<Individual />}></Route>

            {/* 알아보자 */}
            <Route path="/Learn" element={<Learn />}></Route>

            {/*헌혈하자*/}
            <Route path="/BD_Main" element={<BDMain />}></Route>
            <Route path="/BD_House" element={<BDHouse />}></Route>
            <Route path="/BD_PostHouse" element={<BDPostHouse />}></Route>
            <Route path="/BD_Bus" element={<BDBus />}></Route>
            <Route path="/BD_Reservation" element={<BDReservation />}></Route>
            <Route
                path="/BD_ReservationFirst"
                element={<BDReservationFirst />}
            ></Route>
            <Route
                path="/BD_ReservationSecond"
                element={
                  <BDReservationSecond
                      startDate={startDate}
                      endDate={endDate}
                      onReservation={onReservation}
                  />
                }
            ></Route>
            <Route
                path="/BD_ReservationThird"
                element={<BDReservationThird />}
            ></Route>

            {/*지정헌혈하자*/}
            <Route path="/DBD_Main" element={<DBDMain />}></Route>
            <Route path="/DBD_General" element={<DBDGeneral />}></Route>
            <Route path="/DBD_PostGeneral" element={<DBDPostGeneral />}></Route>
            <Route path="/DBD_PostHospital" element={<DBDPostHospital />}></Route>
            <Route path="/DBD_News" element={<DBDNews />}></Route>
            <Route path="/DBD_WatchList" element={<DBDWatchList />}></Route>

            {/*이야기하자*/}
            <Route path="/BD_Story" element={<BDStory />}></Route>
            <Route path="/BD_Details" element={<BDDetails />}></Route>
            <Route path="/BD_Post" element={<BDPost />}></Route>
            <Route path="/DBD_Story" element={<DBDStory />}></Route>
            <Route path="/DBD_Details" element={<DBDDetails />}></Route>
            <Route path="/DBD_Post" element={<DBDPost />}></Route>

            {/*봉사하자*/}
            <Route
                path="/S_Main"
                element={
                  <SMain
                      startDate={startDate}
                      endDate={endDate}
                      onReservation={onReservation}
                  />
                }
            ></Route>
            <Route path="/S_Ganeral" element={<SGaneral />}></Route>
            <Route path="/S_PostGT" element={<SPostGT />}></Route>
            <Route path="/S_PostGA" element={<SPostGA />}></Route>
            <Route path="/S_Group" element={<SGroup />}></Route>
            <Route path="/S_PostGroup" element={<SPostGroup />}></Route>
            <Route path="/S_Other" element={<SOther />}></Route>
            <Route path="/S_PostOther" element={<SPostOther />}></Route>
            <Route path="/S_WatchList" element={<SWatchList />}></Route>
            <Route
                path="/S_ReservationFirst"
                element={<SReservationFirst />}
            ></Route>
            <Route
                path="/S_ReservationSecond"
                element={<SReservationSecond />}
            ></Route>

            {/*기부하자*/}
            <Route path="/D_Main" element={<DMain />}></Route>
            <Route path="/D_Donation" element={<DDonation />}></Route>
            <Route
                path="/D_DonationDetails"
                element={<DDonationDetails />}
            ></Route>
            <Route path="/D_SelectDonation" element={<DSelectDonation />}></Route>
            <Route path="/D_Receipt" element={<DReceipt />}></Route>
            <Route path="/D_ReceiptDetails" element={<DReceiptDetails />}></Route>
            <Route path="/D_SelectReceipt" element={<DSelectReceipt />}></Route>
            <Route path="/test" element={<test />}></Route>

            {/*관리자 페이지 모음*/}
            <Route path="/M_HouseInfo" element={<MHouseInfo />}></Route>

            {/*헌혈의 집 정보 Insert하는 페이지*/}
            <Route path="/M_Blood_Reservation" element={<MBloodReservation />}></Route>
            <Route path="/M_PostDonation" element={<MPostDonation />}></Route>
            <Route path="/M_PostNews" element={<MPostNews />}></Route>
            <Route path="/asd" element={<Asd />}></Route>
            <Route path="/asd1" element={<Asd1 />}></Route>
            <Route path="/Asd2" element={<Asd2 />}></Route>

            <Route path="/O_BD_Manage" element={<OBDManage />}></Route>
            <Route path="/O_StatisticsD" element={<OStatisticsD />}></Route>
            <Route path="/O_StatisticsBD" element={<OStatisticsBD />}></Route>
            <Route path="/O_StatisticsS" element={<OStatisticsS />}></Route>
            <Route path="/O_Hospital_Authorizations" element={<OHospitalAuthorizations />}></Route>
            <Route path="/O_Reporting" element={<OReporting />}></Route>
            <Route path="/O_NewsList" element={<ONewsList />}></Route>

          </Routes>
          <Foot />
        </BrowserRouter>
      </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  //min-height: 700vh;
  flex-direction: column;
`;
export default App;
