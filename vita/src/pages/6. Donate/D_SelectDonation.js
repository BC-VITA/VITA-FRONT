import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

function D_SelectDonation() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  const board = location.state;
  const [point, setPoint] = useState(null);

  const [donationPoint, setDonationPoint] = useState('');
  const [remainingPoint, setRemainingPoint] = useState('');

  const handleDonationPointChange = (event) => {
    const inputPoint = event.target.value;
    const newRemainingPoint = point - inputPoint;
    setDonationPoint(inputPoint);
    setRemainingPoint(newRemainingPoint);
  };

  useEffect(() => {
    const url = `http://localhost:8004/donate/user-point?userId=${userId}`;
    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setPoint(res);
      })
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    fetch('http://localhost:8004/donate/donation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userId: userId,
        donateId: board.boardId,
        isAnonymous: false,
        usePoint: donationPoint,
        finalPoint: remainingPoint
      }),
    })
      .then((res) => {
        res.json();
        if (res.ok) {
          navigate('/');
        }
      })
  };

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv21>
              <Nav.Link href="/D_Main">
                <StyledSubDiv22g>기부란</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21p>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv22>기부하기</StyledSubDiv22>
              </Nav.Link>
            </StyledSubDiv21p>
            <StyledSubDiv21>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv22g>기부 영수증</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <div>
          <StyledTitle>기부란?</StyledTitle>
          <StyledTitle2>{board.title}</StyledTitle2>
        </div>
        <StyledDiv>
          <StyledDiv2>
            <StyledBoxTitle>나의 포인트</StyledBoxTitle>
            <FloatingLabel label={point} name="id">
              <Form.Control type="id" placeholder="label" disabled />
            </FloatingLabel>
            <StyledButton type="button" onClick={handleSubmit}>기부하기,asd</StyledButton>
          </StyledDiv2>
          <StyledDiv3>
            <StyledBoxTitle>기부할 포인트 </StyledBoxTitle>
            <FloatingLabel label="포인트를 입력해주세요" name="id">
              <Form.Control
                type="id"
                placeholder="label"
                value={donationPoint}
                onChange={handleDonationPointChange}
              />
            </FloatingLabel>
          </StyledDiv3>
          <StyledDiv3>
            <StyledBoxTitle>기부하고 남을 포인트</StyledBoxTitle>
            <FloatingLabel label="남은 포인트" name="id">
              <Form.Control
                type="id"
                placeholder="label"
                value={remainingPoint}
                disabled
              />
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
  margin-top: 25px;
  margin-left: 205px;
`;
const StyledSubDiv1 = styled.div`
  width: 190px;
  height: 50px;
  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 55px;
  text-align: center;
  color: #ffffff;
`;
const StyledSubDiv2 = styled.div`
  width: 190px;
  height: 167px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv21 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv21p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv22 = styled.div`
  border: solid white 3px;
  height: 24px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  text-align: center;
  color: #333333;
`;
const StyledSubDiv22g = styled.div`
  border: solid white 3px;
  height: 24px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
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
  color: #333333;
  margin-top: 10px;
  margin-right: 10px;
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
  color: #ffffff;
  text-align: center;
  margin-left: 300px;
`;
export default D_SelectDonation;