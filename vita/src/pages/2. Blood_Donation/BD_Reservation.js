import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import Form from 'react-bootstrap/Form';

function BD_Reservation() {
  const navigate = useNavigate();

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Main">
                <StyledSubDiv2_2g>헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_House">
                <StyledSubDiv2_2g>헌혈의 집 찾기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Bus">
                <StyledSubDiv2_2g>헌혈 버스 찾기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/BD_Reservation">
                <StyledSubDiv2_2>헌혈 예약</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            {/* <StyledSubDiv2_1>
              <Nav.Link href="/BD_History">
                <StyledSubDiv2_2g>헌혈내역조회</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1> */}
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈 예약</StyledTitle>
        </StyledTop>
        <StyledCurrent>
          <StyledBar />
          <StyledCircle>
            <StyledCircleTxt>유의사항</StyledCircleTxt>
          </StyledCircle>
          <StyledBarMg />
          <StyledCircleg>
            <StyledCircleTxtg>센터선택</StyledCircleTxtg>
          </StyledCircleg>

          <StyledBarMg />
          <StyledCircleg>
            <StyledCircleTxtg>예약하기</StyledCircleTxtg>
          </StyledCircleg>

          <StyledBarMg />
          <StyledCircleg>
            <StyledCircleTxtg>예약완료</StyledCircleTxtg>
          </StyledCircleg>
          <StyledBarg />
        </StyledCurrent>
        <StyledDiv1>01. 유의사항</StyledDiv1>
        <StyledBox>
          <StyledBoxTitle>헌혈예약이란</StyledBoxTitle>
          <StyledBoxComment>
            헌혈하기 전에 홈페이지(VITA) 또는 혈액원 직원을 통해 헌혈장소, 날짜,
            시간 및 헌혈종류를 미리 예약하고 헌혈에 참여하는 것을 말합니다.
          </StyledBoxComment>
        </StyledBox>
        <StyledBox2>
          <StyledBoxTitle>헌혈예약 장점</StyledBoxTitle>
          <StyledBoxComment>
            <ul>
              <li>원하는 장소, 날짜, 시간에 헌혈참여가 가능합니다.</li>
              <li>헌혈의집에서의 대기시간을 줄일 수 있습니다.</li>
            </ul>
          </StyledBoxComment>
        </StyledBox2>
        <StyledBox2>
          <StyledBoxTitle>유의사항</StyledBoxTitle>
          <StyledBoxTitle2>예약 및 취소 시</StyledBoxTitle2>
          <StyledBoxComment>
            <ul>
              <StyledBoxComment2>
                <li>
                  6개월 이내 헌혈의집으로 예약할 수 있으며, 당일 예약은
                  불가합니다.
                </li>
              </StyledBoxComment2>
              <li>
                최근 헌혈혈액검사결과에 따라 예약이 제한될 수 있습니다. (예약 후
                헌혈혈액검사결과 이상 판정 시 예약이 자동 취소되며 안내문자가
                발송됩니다.)
              </li>
              <li>
                문자메시지로 예약현황을 안내해 드립니다. (예약 직후, 예약일 3일
                전, 예약 당일)
              </li>
              <li>
                예약안내 문자를 받지 못하신 경우에는 예약현황을 확인해 주십시오.
              </li>
              <li>
                헌혈의집 사정으로 예약일정이 변경 또는 취소될 수 있으며, 예약일
                이전에 헌혈 참여 시 예약이력은 자동 취소됩니다.
              </li>
            </ul>
          </StyledBoxComment>
          <StyledBoxTitle2>예약 및 취소 시</StyledBoxTitle2>
          <StyledBoxComment>
            <ul>
              <StyledBoxComment2>
                <li>
                  예약시간 경과 시 예약이 취소되니 시간을 꼭 지켜주십시오.
                </li>

                <li>
                  헌혈장소 도착 시 예약헌혈자임을 직원에게 말씀해 주십시오.
                </li>
              </StyledBoxComment2>
              <li>당일 상황에 따라 헌혈 대기시간이 지연될 수 있습니다.</li>
              <li>
                긴급헌혈 또는 혈액재고 등에 따라 헌혈종류 변경을 요청드릴 경우
                양해와 협조 부탁드립니다.
              </li>
              <li>
                전자문진에 미리 참여 후 방문하시는 경우 헌혈시간이 단축될 수
                있습니다. (전자문진 참여 후 3일간 유효)
              </li>
              <StyledBoxComment2>
                <li>
                  부득이한 사정으로 방문하지 못하시는 경우 예약을 취소해
                  주시거나 CRM센터(1600-3705)로 연락주십시오.
                </li>
              </StyledBoxComment2>
            </ul>
          </StyledBoxComment>
          <StyledBox3>
            <StyledBoxComment>
              <ul>
                <li>헌혈 예약없이 현장 방문시 헌혈접수 마감시간</li>
                <ul>
                  <li>전혈 헌혈 : 운영 종료시간 30분전</li>
                  <li>혈장 성분헌혈 : 운영 종료시간 1시간 전</li>
                  <li>
                    혈소판성분헌혈, 혈소판혈장성분헌혈 : 운영 종료시간 1시간
                    30분전
                  </li>
                </ul>
              </ul>
              <StyledBold>
                * 단 당일 대기중인 헌혈자가 많은 경우 안내된 시간보다 조기에
                헌혈접수가 마감 될수 있습니다.
              </StyledBold>
            </StyledBoxComment>
          </StyledBox3>
        </StyledBox2>
        <StyledButton>
          <Nav.Link href="/BD_ReservationFirst">예약하기</Nav.Link>
        </StyledButton>
      </StyledSubcomment>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
const StyledSub = styled.div`
  width: 170px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 205px;
`;
const StyledSubDiv1 = styled.div`
  width: 190px;
  height: 50px;
  /* left: 370px;
  top: 123px; */

  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 55px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffffff;
`;

const StyledSubDiv2 = styled.div`
  width: 190px;
  height: 223px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #333333;
`;
const StyledSubDiv2_2g = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #969696;
`;

const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
`;

const StyledTop = styled.div`
  display: flex;
`;

const StyledCurrent = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StyledBar = styled.div`
  width: 115px;
  height: 0;
  border: 3.5px solid #ff6565;
  margin-top: 35px;
`;
const StyledBarg = styled.div`
  width: 115px;
  height: 0;
  border: 3.5px solid #828282;
  margin-top: 35px;
`;
// const StyledBarM = styled.div`
//   width: 190px;
//   height: 0;
//   border: 3.5px solid #ff6565;
//   margin-top: 35px;
// `;
const StyledBarMg = styled.div`
  width: 115px;
  height: 0;
  border: 3.5px solid #828282;
  margin-top: 35px;
`;

const StyledCircle = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;

  background: #ffffff;
  border: 5px solid #ff6565;
  border-radius: 50%;
`;
const StyledCircleg = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;

  background: #ffffff;
  border: 5px solid #828282;
  border-radius: 50%;
`;

const StyledCircleTxt = styled.div`
  width: 42.49px;
  height: 51px;
  margin-left: 13px;
  margin-top: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 19.5px;
  line-height: 25px;
  /* or 125% */

  letter-spacing: 0.1em;

  color: #333333;
`;
const StyledCircleTxtg = styled.div`
  width: 42.49px;
  height: 51px;
  margin-left: 13px;
  margin-top: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 19.5px;
  line-height: 25px;
  /* or 125% */

  letter-spacing: 0.1em;

  color: #828282;
`;

const StyledDiv1 = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  // padding-left : 20px;
  // padding-top : 15px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  color: #333333;
`;

const StyledBox = styled.div`
  width: 885px;

  background: #ffefef;
  border: 1px solid #ff6565;

  padding: 20px;
  margin-bottom: 50px;
`;

const StyledBox2 = styled.div`
  width: 885px;
  margin-bottom: 50px;
`;

const StyledBox3 = styled.div`
  width: 850px;

  background: #f4f4f4;
  border: 1px solid #a3a3a3;

  padding: 20px;
  margin-bottom: 50px;

  margin-left: 25px;
`;

const StyledBoxTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 100% */

  color: #000000;

  margin-bottom: 5px;
`;
const StyledBoxTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  /* identical to box height, or 100% */

  color: #000000;

  margin-bottom: 5px;
`;
const StyledBoxComment = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  color: #000000;
`;
const StyledBold = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  color: #000000;
`;
const StyledBoxComment2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  color: #c16d13;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  width: 140px;
  height: 40px;
  margin-left: 57ch;

  background: #ff9f9f;
  border-radius: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  // margin-left: 28px;
  /* identical to box height, or 100% */

  color: #ffffff;
  border: none;
`;
export default BD_Reservation;
