import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

function BD_ReservationThird() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { selectedOptions, formattedDate, centerName } = {} } =
    useLocation();
  const [times, setTimes] = useState('');
  const [asd, setAsd] = useState('F');
  const [zxc, setZxc] = useState('F');
  const [qwe, setQwe] = useState('F');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    fetch('http://localhost:8004/blood/reservation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        wholeBlood: zxc,
        plasma: asd,
        platelet: qwe,
        bloodHouseName: centerName,
        date: formattedDate,
        time: times,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then(() => navigate('/'));
  };

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
              <Nav.Link href="/BD_ReservationFirst">
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
          <StyledTitle>예약하기</StyledTitle>
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

        <StyledDiv>헌혈 예약이 완료되었습니다.</StyledDiv>
        <StyledBox>
          {Object.keys(selectedOptions).map((time) => (
            <div key={time}>
              <StyledDiv1>
                <StyledDiv2>시간</StyledDiv2>
                <StyledDiv3>{time}</StyledDiv3>
              </StyledDiv1>
              <StyledDiv1>
                <StyledDiv2>헌혈종류</StyledDiv2>
                <StyledDiv3>
                  {selectedOptions[time] === 'plasma'
                    ? '혈장'
                    : selectedOptions[time] === 'wholeBlood'
                    ? '전혈'
                    : selectedOptions[time] === 'platelet'
                    ? '혈소판'
                    : selectedOptions[time]}
                </StyledDiv3>
              </StyledDiv1>
              <StyledDiv1>
                <StyledDiv2>일시</StyledDiv2>
                <StyledDiv3>{formattedDate}</StyledDiv3>
              </StyledDiv1>
              <StyledDiv1>
                <StyledDiv2>위치</StyledDiv2>
                <StyledDiv3>{centerName}</StyledDiv3>
              </StyledDiv1>
            </div>
          ))}
        </StyledBox>
        {/* <button type="button" onClick={handleSubmit}>
          예약완료하기
        </button> */}
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

const StyledBox = styled.div``;
const StyledDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 55px;

  color: #2d3c89;
`;
const StyledDiv1 = styled.div`
  display: flex;
`;
const StyledDiv2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 50px;
  text-align: center;

  color: #333333;

  width: 130px;
  height: 60px;
  background: #eff3ff;
  border: 2px solid #626b8b;
`;
const StyledDiv3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 50px;
  text-align: center;

  color: #101a79;

  width: 49ch;
  height: 60px;
  background: #ffffff;
  border: 2px solid #626b8b;
`;
export default BD_ReservationThird;
