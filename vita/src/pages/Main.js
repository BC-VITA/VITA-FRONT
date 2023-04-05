import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

// import GroupPhoTO from './img/개인.png';
// import groupPhoto from '../../img/개인.png';
import Post from '../img/포스터.png';
import Post1 from '../img/포스터-1.png';
import Post2 from '../img/포스터-2.png';
import Post3 from '../img/포스터-3.png';
import Donation from '../img/donationImg.png';
import Service from '../img/봉사.png';
import Reservation from '../img/헌혈.png';
import House from '../img/헌혈의_집.png';
import History from '../img/내역.png';
import Nav from 'react-bootstrap/Nav';

function Main() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Post3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Post} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Post1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Post2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <StyledDiv1>
        <StyledDiv1_1>
          <StyledTxt1>
            <div>한부모가정 급격증가</div>
          </StyledTxt1>
          <StyledTxt2>
            <div>성금 모집현황</div>
          </StyledTxt2>
          <StyledTxt3>
            <div>봉사시간 포인트로 기부하는 시스템</div>
          </StyledTxt3>
        </StyledDiv1_1>
        <StyledDiv1_2>
          {/* <Styledimg>
            <img src={Donation} alt="First slide" />
          </Styledimg> */}
          <Styledimg src={Donation} class name="groupPhoto" alt="groupPhoto" />
          <StyledDiv1_3>
            <StyledPrice>누적 포인트 : 32.400.100원</StyledPrice>
            <StyledDiv1_4>
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
            </StyledDiv1_4>
          </StyledDiv1_3>
        </StyledDiv1_2>
      </StyledDiv1>

      <StyledDiv4>
        <StyledDiv4_1>
          <StyledDiv4_1T>
            <StyledBtn4_1>
              <Nav.Link href="/BD_House">
                <StyledBtnTxt4>헌혈의집 찾기</StyledBtnTxt4>
                <Styledimg4
                  src={House}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn4_1>
            <StyledBtn4_2>
              <Nav.Link href="/BD_History">
                <StyledBtnTxt4>헌혈내역조회</StyledBtnTxt4>
                <Styledimg4
                  src={History}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn4_2>
          </StyledDiv4_1T>
          <StyledDiv4_1B>
            <StyledBtn4_3>
              <Nav.Link href="/DBD_General">
                <StyledBtnTxt4>지정헌혈하기</StyledBtnTxt4>
                <Styledimg4
                  src={Reservation}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn4_3>
            <StyledBtn4_4>
              <Nav.Link href="/S_GaneralTime">
                <StyledBtnTxt4>봉사하기</StyledBtnTxt4>
                <Styledimg4
                  src={Service}
                  class
                  name="groupPhoto"
                  alt="groupPhoto"
                />
              </Nav.Link>
            </StyledBtn4_4>
          </StyledDiv4_1B>
        </StyledDiv4_1>

        <StyledDiv4_2></StyledDiv4_2>
      </StyledDiv4>
    </div>
  );
}
const StyledDiv1 = styled.div`
  width: 1180px;
  height: 202px;
  margin-left: 180px;
  margin-top: 50px;
  margin-bottom: 50px;

  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  display: flex;
`;
const StyledDiv1_1 = styled.div`
  margin-left: 40px;
  margin-top: 48px;
`;
const StyledTxt1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  /* or 100% */

  color: #ff0000;
`;
const StyledTxt2 = styled.div`
  margin-top: 10px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
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
const StyledDiv1_2 = styled.div`
  margin-left: 140px;
  margin-top: 35px;
  display: flex;
`;
const Styledimg = styled.img`
  width: 131.68px;
  height: 131px;
`;
const StyledDiv1_3 = styled.div`
  margin-left: 50px;
`;
const StyledPrice = styled.div`
  margin-top: 30px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 32px;
  /* identical to box height, or 100% */

  color: #333333;
`;
const StyledDiv1_4 = styled.div`
  display: flex;
  margin-top: 20px;
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
const StyledDiv4_1 = styled.div``;
const StyledDiv4_1T = styled.div`
  display: flex;
`;
const StyledBtn4_1 = styled.div`
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
const StyledBtn4_2 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ffc9c9;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledDiv4_1B = styled.div`
  display: flex;
`;
const StyledBtn4_3 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ffe9e9;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledBtn4_4 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ff9898;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;

const StyledDiv4_2 = styled.div`
  margin-left: 40px;

  width: 590px;
  height: 380px;

  background: #ffe9e9;
  border-radius: 15px;
`;

export default Main;
