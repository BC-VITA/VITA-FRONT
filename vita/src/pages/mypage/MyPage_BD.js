import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function MyPage_BD() {
  const userId = sessionStorage.getItem('userId');
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
          <StyledSubDiv1>마이페이지</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_DBD">
                <StyledSubDiv2_2g>지정헌혈</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_chat">
                <StyledSubDiv2_2g>채팅</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/MyPage_BD">
                <StyledSubDiv2_2>헌혈</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_S">
                <StyledSubDiv2_2g>봉사</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
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
          <StyledTitle>헌혈</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>
        <Styledcomment>
          <StyledTxt>김수임님의 헌혈 참여</StyledTxt>
          <FloatingLabel
            label={userId}
            //value={roomnumber}
            //onChange={handleReservation}
            style={{ width: '230px' }}
          >
            <Form.Control
              placeholder="name"
              disabled
              style={{ background: '#ffffff', height: '50px' }}
            />
          </FloatingLabel>
          <StyledTab1>
            <Tabs style={{ marginTop: '20px' }}>
              <Tab eventKey="history" title="헌혈 내역">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>헌혈 내역</StyledTxt2>
                    </StyledDiv>
                  </StyledBox1>
                </Tab.Content>
              </Tab>

              <Tab eventKey="reservation" title="예약 내역">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>예약 내역</StyledTxt2>
                    </StyledDiv>
                  </StyledBox1>
                </Tab.Content>
              </Tab>
              <Tab eventKey="watchlist" title="내가 작성한 후기">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>내가 작성한 후기</StyledTxt2>
                    </StyledDiv>
                  </StyledBox1>
                </Tab.Content>
              </Tab>
            </Tabs>
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
const StyledTxt = styled.div`
  margin-top: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  /* identical to box height */

  color: #000000;
`;

const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
`;
const StyledButton = styled.div`
  margin-top: 3px;
  width: 125px;
  height: 35px;
  margin-left: 540px;

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

const StyledBox1 = styled.div`
  margin-top: 20px;

  /* margin-bottom: 30px;

  padding-bottom: 10px; */

  /* width: 1100px; */
  height: 80px;

  background: #ffe9e9;
`;
const StyledDiv = styled.div`
  margin-left: 30px;
`;
const StyledTxt2 = styled.div`
  /* margin-top: 10px; */

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 80px;
  /* identical to box height */

  color: #000000;
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
export default MyPage_BD;
