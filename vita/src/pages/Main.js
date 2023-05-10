import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Post from '../img/포스터.png';
import Post1 from '../img/포스터-1.png';
import Post2 from '../img/포스터-2.png';
import Post3 from '../img/포스터-3.png';
import Donation from '../img/donationImg.png';
import Service from '../img/봉사.png';
import Reservation from '../img/헌혈.png';
import House from '../img/헌혈의_집.png';
import History from '../img/내역.png';
import img from '../img/Group 10.png';
import img2 from '../img/image 3.png';
import Nav from 'react-bootstrap/Nav';

function Main() {
  const [userInfo, setUserInfo] = useState(null);
  const asd = sessionStorage.getItem('userId');

  //useEffect(() => {
  //  fetch('http://localhost:8004/user/check')
  //    .then(response => response.json())
  //    .then(data => setUserInfo(data))
  //    .catch(error => console.error(error));
  //}, []);

  return (
    <div>
      <Carousel variant="dark" style={{ height: '400px' }}>
        <Carousel.Item style={{ height: '400px' }}>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            src={Post3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '400px' }}>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            src={Post}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '400px' }}>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            src={Post1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '400px' }}>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            src={Post2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <StyledDiv1>
        <StyledDiv11>
          <StyledTxt1>
            <div>한부모가정 급격증가</div>
          </StyledTxt1>
          <StyledTxt2>
            <div>성금 모집현황</div>
          </StyledTxt2>
          <StyledTxt3>
            <div>봉사시간 포인트로 기부하는 시스템</div>
          </StyledTxt3>
        </StyledDiv11>
        <StyledDiv12>
          {/* <Styledimg>
            <img src={Donation} alt="First slide" />
          </Styledimg> */}
          <Styledimg src={Donation} class name="groupPhoto" alt="groupPhoto" />
          <StyledDiv13>
            <StyledPrice>누적 포인트 : 32.400.100원</StyledPrice>
            <StyledDiv14>
              <StyledBtn>
                <Nav.Link href="/D_Main">
                  <StyledBtnTxt>자세히 보기</StyledBtnTxt>
                </Nav.Link>
              </StyledBtn>
              <StyledBtn>
                <Nav.Link href="/D_Select">
                  <StyledBtnTxt>기부하러 가기</StyledBtnTxt>
                </Nav.Link>
              </StyledBtn>
              <StyledBtn>
                <Nav.Link href="/S_GaneralTime">
                  <StyledBtnTxt>봉사하러 가기</StyledBtnTxt>
                </Nav.Link>
              </StyledBtn>
            </StyledDiv14>
          </StyledDiv13>
        </StyledDiv12>
      </StyledDiv1>
      <StyledDiv2>
        <Styledimg2 src={img2} class name="groupPhoto" alt="groupPhoto" />
      </StyledDiv2>
      <StyledDiv4>
        <StyledDiv41>
          <StyledDiv41T>
            <StyledBtn41>
              <Nav.Link href="/BD_House">
                <StyledBtnTxt4>헌혈의집 찾기</StyledBtnTxt4>
                <Styledimg4
                  src={House}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn41>
            <StyledBtn42>
              <Nav.Link href="/BD_History">
                <StyledBtnTxt4>헌혈내역조회</StyledBtnTxt4>
                <Styledimg4
                  src={History}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn42>
          </StyledDiv41T>
          <StyledDiv41B>
            <StyledBtn43>
              <Nav.Link href="/DBD_General">
                <StyledBtnTxt4>지정헌혈하기</StyledBtnTxt4>
                <Styledimg4
                  src={Reservation}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn43>
            <StyledBtn44>
              <Nav.Link href="/S_GaneralTime">
                <StyledBtnTxt4>봉사하기</StyledBtnTxt4>
                <Styledimg4
                  src={Service}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn44>
          </StyledDiv41B>
        </StyledDiv41>
        <StyledDiv42>
          {' '}
          <Styledimg5 src={img} class name="groupPhoto" alt="groupPhoto" />
        </StyledDiv42>
      </StyledDiv4>
    </div>
  );
}

const StyledDiv1 = styled.div`
  width: 1130px;
  height: 170px;
  margin-left: 200px;
  margin-top: 50px;
  margin-bottom: 50px;

  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  display: flex;
`;
const StyledDiv11 = styled.div`
  margin-left: 55px;
  margin-top: 35px;
`;
const StyledTxt1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 36px;
  /* or 100% */

  color: #ff0000;
`;
const StyledTxt2 = styled.div`
  margin-top: 5px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 36px;
  /* or 100% */

  color: #333333;
`;
const StyledTxt3 = styled.div`
  margin-top: 10px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;

  color: #7a7a7a;
`;
const StyledDiv12 = styled.div`
  margin-left: 165px;
  margin-top: 25px;
  display: flex;
`;
const Styledimg = styled.img`
  /* margin-left: 10px; */
  width: 125px;
  height: 125px;
`;
const StyledDiv13 = styled.div`
  margin-left: 20px;
`;
const StyledPrice = styled.div`
  margin-left: 12px;
  margin-top: 25px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  /* identical to box height, or 100% */

  color: #333333;
`;
const StyledDiv14 = styled.div`
  display: flex;
  margin-top: 10px;
`;
const StyledBtn = styled.div`
  width: 125px;
  height: 41.32px;
  margin-right: 15px;

  background: #ffe0e0;
  border-radius: 10px;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.1));
`;
const StyledBtnTxt = styled.div`
  width: 100px;
  text-align: center;
  margin-left: 13px;
  margin-top: 13px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  color: #333333;
`;

const StyledDiv4 = styled.div`
  margin-left: 180px;
  margin-bottom: 50px;

  /* background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 15px; */
  display: flex;
`;
const StyledDiv2 = styled.div`
  /* background-color: black; */
  width: 120ch;
  margin: auto;
`;
const Styledimg2 = styled.img`
  width: 120ch;
  /* height: 102.46px; */
  /* margin-top: 10px;
  margin-left: 115px; */
  margin-bottom: 50px;
`;
const StyledDiv41 = styled.div``;
const StyledDiv41T = styled.div`
  display: flex;
`;
const StyledBtn41 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;
  background: #ffffff;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledBtnTxt4 = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 28px;
  /* or 100% */

  color: #333333;
`;
const Styledimg4 = styled.img`
  width: 107.19px;
  height: 102.46px;
  margin-top: 10px;
  margin-left: 115px;
`;
const Styledimg5 = styled.img`
  margin-left: 25px;
  margin-top: 15px;
  width: 90%;
  /* height: 102.46px; */
  /* margin-top: 10px;
  margin-left: 115px; */
`;
const StyledBtn42 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ffc9c9;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledDiv41B = styled.div`
  display: flex;
`;
const StyledBtn43 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ffe9e9;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledBtn44 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ff9898;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;

const StyledDiv42 = styled.div`
  margin-left: 40px;

  width: 590px;
  height: 380px;

  background: #ffe9e9;
  border-radius: 15px;
`;

export default Main;
