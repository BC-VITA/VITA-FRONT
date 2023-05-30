import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

function S_ReservationSecond() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: { selectedOptions, formattedDate, centerName } = {} } = useLocation();
  const [times, setTimes] = useState('');
  const [isBloodType, setIsBloodType] = useState('');

  useEffect(() => {
    const times = Object.keys(selectedOptions);

    const bloodTypeString = Object.values(selectedOptions)
      .map((times) => Object.values(times).join(''))
      .join('');
    setIsBloodType(bloodTypeString);
    const bloodTypesString = bloodTypeString.toString();
    setIsBloodType(bloodTypesString);

    const timeString = times.join(',');
    setTimes(timeString);
  }, [selectedOptions]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    fetch('http://localhost:8004/blood/reservation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        // isBloodType: isBloodType,
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
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>예약하기</StyledTitle>
        </StyledTop>
        <StyledCurrent>
          <StyledBar />
          <StyledCircle>
            <StyledCircleTxt>유의사항</StyledCircleTxt>
          </StyledCircle>
          <StyledBar />
          <StyledCircle>
            <StyledCircleTxt>센터선택</StyledCircleTxt>
          </StyledCircle>

          <StyledBar />
          <StyledCircle>
            <StyledCircleTxt>예약하기</StyledCircleTxt>
          </StyledCircle>

          <StyledBar />
          <StyledCircle>
            <StyledCircleTxt>예약완료</StyledCircleTxt>
          </StyledCircle>
          <StyledBar />
        </StyledCurrent>

        <StyledDiv>헌혈 예약이 완료되었습니다.</StyledDiv>
        <StyledBox>
          {Object.keys(selectedOptions).map((time) => (
            <div key={time}>
              <StyledDiv1>
                <StyledDiv2>일시</StyledDiv2>
                <StyledDiv3>{formattedDate}</StyledDiv3>
              </StyledDiv1>
              <StyledDiv1>
                <StyledDiv2>시간</StyledDiv2>
                <StyledDiv3>{time}</StyledDiv3>
              </StyledDiv1>
              <StyledDiv1>
                <StyledDiv2>헌혈의 집</StyledDiv2>
                <StyledDiv3>{centerName}</StyledDiv3>
              </StyledDiv1>
              <StyledDiv1>
                <StyledDiv2>헌혈 종류</StyledDiv2>
                <StyledDiv3>{selectedOptions[time]}</StyledDiv3>
              </StyledDiv1>
            </div>
          ))}
        </StyledBox>
        <Styledbutton type="button" onClick={handleSubmit}>
          예약완료하기
        </Styledbutton>
      </StyledSubcomment>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;

const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 230px;
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

const StyledCircle = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;

  background: #ffffff;
  border: 5px solid #ff6565;
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

const StyledBox = styled.div``;
const StyledDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
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
  line-height: 70px;
  text-align: center;

  color: #333333;

  width: 180px;
  height: 70px;
  background: #eff3ff;
  border: 2px solid #626b8b;
`;
const StyledDiv3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 70px;
  text-align: center;

  color: #101a79;

  width: 37ch;
  height: 70px;
  background: #ffffff;
  border: 2px solid #626b8b;
`;

const Styledbutton = styled.div`
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
  line-height: 40px;

  text-align: center;
  // margin-left: 28px;
  /* identical to box height, or 100% */

  color: #ffffff;
  border: none;
`;
export default S_ReservationSecond;
