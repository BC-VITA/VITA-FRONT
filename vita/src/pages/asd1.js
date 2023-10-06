import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Nav,
  FloatingLabel,
  Form,
  Tab,
  Tabs,
  Button,
  Table, Modal,
} from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function Chat() {
  const [error, setError] = useState(null);
  const [userData6, setUserData6] = useState(null);

  const location = useLocation();
  const volunteerId = location.state?.volunteerId;

  useEffect(() => {
    const url6 = `http://localhost:8004/volunteer/reservation/${volunteerId}/list`;
    fetch(url6, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData6(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleComplete = (reservationId) => {
    // API 호출
    fetch(`http://localhost:8004/volunteer/reservation/list/${reservationId}?status=참여완료`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    const updatedData = userData6.filter((item) => item.reservationId !== reservationId);
    setUserData6(updatedData);
  };

  if (userData6 === null) {
    return <div>Loading...</div>;
  }

  const thStyle = {
    // width: '80px',
    fontFamily: 'Gmarket Sans TTF',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '22px',
    lineHeight: '35px',
    textAlign: 'center',
    color: '#333333',
  };
  const tdStyle = {
    ...thStyle,
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '40px',
  };

  return (
      <StyledAll>
        <StyledSub>
          <Nav defaultActiveKey="/" className="flex-column">
            <StyledSubDiv1>마이페이지</StyledSubDiv1>
            <StyledSubDiv2>
              <StyledSubDiv2_1>
                <Nav.Link href="/MyPage_DBD">
                  <StyledSubDiv2_2g>지정헌혈</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1>
                <Nav.Link href="/MyPage_chat">
                  <StyledSubDiv2_2g>지정헌혈 채팅</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1>
                <Nav.Link href="/MyPage_BD">
                  <StyledSubDiv2_2g>헌혈</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1p>
                <Nav.Link href="/MyPage_S">
                  <StyledSubDiv2_2>봉사</StyledSubDiv2_2>
                </Nav.Link>
              </StyledSubDiv2_1p>
              <StyledSubDiv2_1>
                <Nav.Link href="/MyPage_D">
                  <StyledSubDiv2_2g>기부</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1>
                <Nav.Link href="/MyPage">
                  <StyledSubDiv2_2g>개인정보</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
            </StyledSubDiv2>
          </Nav>
        </StyledSub>
        <StyledSubcomment>
          <StyledTop>
            <StyledTitle>봉사</StyledTitle>
          </StyledTop>
          <Styledcomment>
            <StyledTab1>
              {userData6.map((review, index) => (
                  <div key={index}>
                    <div>아이디 : {review.reservationId}</div>
                    <div>예약자 : {review.userName}</div>
                    <button onClick={() => handleComplete(review.reservationId)}>참여완료</button>
                    <div><br /></div>
                  </div>
              ))}
            </StyledTab1>
          </Styledcomment>
        </StyledSubcomment>
      </StyledAll>
  );
}

const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
const StyledSub = styled.div`
  width: 200px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 180px;
`;
const StyledSubDiv1 = styled.div`
  width: 220px;
  height: 60px;
  /* left: 370px;
  top: 123px; */
  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;
const StyledSubDiv2 = styled.div`
  width: 220px;
  height: 362px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 60px;
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

const Styledcomment = styled.div``;

const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
`;

export default Chat;
