import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import DatePicker from 'react-datepicker';
function S_ReservationFirst() {
  const [error, setError] = useState(null);

  const [inputData, setInputData] = useState([
    {
      hospitalName: '',
      title: '',
      content: '',
      patientBlood: '',
      bloodType: '',
      startDate: '',
      DesignatedBloodWriteNumber: '',
      bloodNumber: '',
    },
    {},
  ]);

  useEffect(() => {
    fetch('http://localhost:8004/blood/house/filter', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputData(res);
        console.log(inputData);
      })
      .catch((err) => {
        setError(err.message);
      });
    console.log(inputData);
  }, []);
  return (
    <StyledAll>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>봉사 신청하기</StyledTitle>
        </StyledTop>
        <StyledDiv>헌혈 예약</StyledDiv>
        <StyledDiv2>
          <StyledLabel htmlFor="date">예약날짜 : </StyledLabel>
          {/* <DatePicker id="date" selected={date} onChange={handleDateChange} /> */}
        </StyledDiv2>
        <StyledDiv3>선택일자 : 2023년 05월 24일</StyledDiv3>
        <StyledDiv4>
          <StyledDiv4Title>신청자 정보</StyledDiv4Title>
          <StyledDiv4Content>
            연락처 번호변경은 오른쪽 연락처 수정 버튼을 클릭한 후 ‘마이페이지 >
            나의 정보’에서 수정하시기 바랍니다.
          </StyledDiv4Content>
          <StyledBox>
            <StyledBox2>휴대폰 번호 :</StyledBox2>
            <StyledBox2>e-Mail : </StyledBox2>
          </StyledBox>
          <StyledBox1>
            <StyledBox3>
              회원님이 등록하신 정보가 표시 됩니다. 등록된 정보가 정확한지
              확인해주세요.
            </StyledBox3>
            <StyledBox3_1>
              연락처가 미 등록된 경우 봉사활동 정보를 받으실 수 없습니다.
            </StyledBox3_1>
            <StyledBox3>
              휴대폰전화 및 이메일로 봉사활동 정보를 제공 받으시겠습니까?
            </StyledBox3>
          </StyledBox1>
        </StyledDiv4>
        <StyledButtonBox>
          <StyledButton>이전</StyledButton>
          <StyledButton>다음</StyledButton>
        </StyledButtonBox>
      </StyledSubcomment>
    </StyledAll>
  );
}

const StyledDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  padding-left: 20px;
  padding-top: 15px;

  width: 870px;
  height: 55px;

  background: #d6d6d6;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  color: #333333;
`;
const StyledDiv2 = styled.div`
  display: flex;
`;
const StyledDiv3 = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  width: 870px;

  text-align: center;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 80px;
  /* identical to box height, or 333% */

  text-align: center;

  color: #000000;
`;
const StyledDiv4 = styled.div`
  /* text-align: center; */
  /* font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 80px;

  color: #000000; */
`;
const StyledDiv4Title = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  color: #333333;

  margin-top: 30px;
`;
const StyledDiv4Content = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  /* Gray */

  color: #757575;

  margin-top: 10px;
`;

const StyledBox = styled.div`
  display: flex;
  width: 870px;
  background: #ffffff;

  border: 1px solid #a3a3a3;
  margin-top: 10px;
`;

const StyledBox2 = styled.div`
  display: flex;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 80px;
  /* identical to box height */

  /* Gray */
  margin-left: 20px;
  color: #757575;
`;

const StyledBox1 = styled.div`
  width: 870px;
  background: #ffffff;

  border: 1px solid #a3a3a3;
  padding: 20px;
  margin-top: 10px;
`;
const StyledBox3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height */

  margin-left: 20px;

  color: #757575;
`;
const StyledBox3_1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height */
  margin-left: 20px;
  color: #f36200;
`;

const StyledLabel = styled.div`
  margin-left: 15px;
  margin-bottom: 25px;

  width: 120px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #000000;
`;

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
  height: 278px;
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
  margin: auto;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 246px;
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
const StyledButton = styled.div`
  margin-top: 3px;
  width: 148px;
  height: 50px;

  background: #ffd7d7;
  border-radius: 5px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  /* identical to box height, or 125% */

  text-align: center;

  color: #333333;
`;

const StyledButtonBox = styled.div`
  width: 870px;
  display: flex;
  justify-content: space-between;
`;

const StyledButtonDiv = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  margin: auto;
  margin-left: 28px;
  /* identical to box height, or 100% */

  color: #ffffff;
`;

const StyledComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-right: 60px;
`;
export default S_ReservationFirst;
