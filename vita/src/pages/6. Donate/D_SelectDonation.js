import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import serviceimg from '../../img/serviceimg.png';

function D_SelectDonation() {
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
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Main">
                <StyledSubDiv2_2g>기부란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv2_2>기부하기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv2_2g>기부 영수증</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>기부란?</StyledTitle>
          <StyledTitle2>한부모 가정 기부하기</StyledTitle2>
        </StyledTop>
        <StyledDiv>
          <StyledDiv2>
            {/* <StyledDiv2_1>
          </StyledDiv2_1> */}
            <StyledBoxTitle>나의 포인트</StyledBoxTitle>
            <FloatingLabel
              label="ID"
              name="id"
              // value={id}
              // onChange={handleChangeId}
            >
              <Form.Control type="id" placeholder="label" />
            </FloatingLabel>
            <StyledButton>기부하기</StyledButton>
          </StyledDiv2>
          <StyledDiv3>
            <StyledBoxTitle>기부할 포인트 </StyledBoxTitle>
            <FloatingLabel
              label="ID"
              name="id"
              // value={id}
              // onChange={handleChangeId}
            >
              <Form.Control type="id" placeholder="label" />
            </FloatingLabel>
          </StyledDiv3>
          <StyledDiv3>
            <StyledBoxTitle>기부하고 남을 포인트</StyledBoxTitle>
            <FloatingLabel
              label="ID"
              name="id"
              // value={id}
              // onChange={handleChangeId}
            >
              <Form.Control type="id" placeholder="label" disabled />
            </FloatingLabel>
          </StyledDiv3>
        </StyledDiv>
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
  height: 167px;
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

const StyledTop = styled.div``;
const StyledTitle = styled.div`
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
`;
const StyledTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  margin-top: 15px;
  margin-left: 5px;
  color: #333333;
`;

const StyledDiv = styled.div`
  width: 880px;
  height: 300px;
  margin-top: 15px;
  padding-left: 30px;
  padding-top: 30px;

  background: #ffe9e9;
`;
const StyledDiv2 = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledBoxTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  /* line-height: 30px; */
  /* identical to box height, or 100% */

  color: #333333;
  margin-top: 10px;
  margin-right: 10px;
  /* margin-bottom: 10px; */
`;
const StyledButton = styled.div`
  width: 155px;
  height: 42px;

  background: #ff9f9f;
  border-radius: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 42px;
  /* identical to box height, or 100% */

  color: #ffffff;
  text-align: center;

  margin-left: 300px;
`;

export default D_SelectDonation;
