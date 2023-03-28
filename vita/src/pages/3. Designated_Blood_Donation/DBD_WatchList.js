import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function DBD_WatchList() {
  const [hostipalcall, sethostipalcall] = useState('');
  const [bloodtype, setbloodtype] = useState('');
  const [rhtype, setbrhtype] = useState('');
  const [donationtype, setdonationtype] = useState('');
  const [bloodproduct, setbloodproduct] = useState('');

  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleSelect1 = (e) => {
    setdonationtype(e.target.value);
  };
  const handleSelect2 = (e) => {
    setbloodproduct(e.target.value);
  };
  // const handleSelect1 = (e) => {
  //   setdonationtype(e.target.value);
  // };
  // const handleSelect2 = (e) => {
  //   setbloodtype(e.target.value);
  // };

  const handleRHMChange = () => {
    setbrhtype('RH-');
  };
  const handleRHPChange = () => {
    setbrhtype('RH+');
  };
  const selectList1 = ['전체', '인천', '서울', '경기도', '강원도'];
  const selectList2 = ['최신순', '마감순'];
  const handleChangehostipalcall = ({ target: { value } }) =>
    sethostipalcall(value);
  const RadioButton = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

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
    fetch('http://localhost:8004/user/board/filter', {
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
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>지정헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_Main">
                <StyledSubDiv2_2g>지정헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_General">
                <StyledSubDiv2_2g>지정헌혈하기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBD_WatchList">
                <StyledSubDiv2_2>관심목록</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_News">
                <StyledSubDiv2_2g>따뜻한 사례</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>관심목록</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>
      </StyledSubcomment>
      z<div className="home">{error && <div>{error}</div>}</div>
    </StyledAll>
  );
}

const StyledAll = styled.div`
  display: flex;
`;
const StyledSub = styled.div`
  width: 120px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 205px;
`;
const StyledSubDiv1 = styled.div`
  width: 150px;
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
  width: 150px;
  height: 202.5px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 50px;
  margin-left: 2px;
  margin-right: 2px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 50px;
  margin-left: 2px;
  margin-right: 2px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26.5px;
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
  font-size: 18px;
  line-height: 26.5px;
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

const StyledButton = styled.div`
  margin-top: 10px;
  width: 125px;
  height: 35px;
  margin-left: 580px;

  background: #ff9f9f;
  border-radius: 9px;
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

export default DBD_WatchList;
