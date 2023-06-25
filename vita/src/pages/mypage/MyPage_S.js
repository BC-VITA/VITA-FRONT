import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav, FloatingLabel, Form, Tab, Tabs, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Post3 from '../../img/image 70.png';

function MyPage_S() {
  const userId = sessionStorage.getItem('userId');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const handleStartDateChange = ({ target: { value } }) => setstartDate(value);
  const handleEndDateChange = ({ target: { value } }) => setendDate(value);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [userData, setUserData1] = useState(null);
  const [userData1, setUserData2] = useState(null);

  //봉사신청내역
  useEffect(() => {
    const url1 = `http://localhost:8004/user/mypage/volunteer-history?userId=${userId}`;
    const url2 = `http://localhost:8004/user/mypage-volunteer-active-history?userId=${userId}`;

    const fetchData = async () => {
      try {
        const response1 = await fetch(url1);
        const data1 = await response1.json();
        setUserData1(data1);

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        setUserData2(data2);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (userData === null) {
    return <div>Loading...</div>;
  }

  if (userData1 === null) {
    return <div>Loading...</div>;
  }

  //PDF하기
  const handlePDF = (id) => {
    fetch(`http://localhost:8004/volunteer/pdf?registerId=${id}`, {
      method: 'POST',
    })
      .then((res) => res.blob())
      .then((blob) => {
        alert('다운이 완료되었습니다.')
      })
      .catch((err) => {
        console.error(err);
      });
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
                <StyledSubDiv2_2g>채팅</StyledSubDiv2_2g>
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
          <StyledBox2>
            <StyledBox3>
              <StyledTxt>시간인증형 봉사시간</StyledTxt>
              <FloatingLabel
                label={userData.timeTypeVolunteerHistoryNumber + ' 시간'}
                //value={roomnumber}
                //onChange={handleReservation}
                style={{ width: '300px', lineHeight: '15px' }}
              >
                <Form.Control
                  placeholder="name"
                  disabled
                  style={{ background: '#ffffff', height: '50px' }}
                />
              </FloatingLabel>
            </StyledBox3>
            <StyledBox3 style={{ marginLeft: '60px' }}>
              <StyledTxt>시간인증형 자원봉사 참여</StyledTxt>
              <FloatingLabel
                label={userData.myPageVolunteerReservationList.length + '번'}

                //value={roomnumber}
                //onChange={handleReservation}
                style={{ width: '300px', lineHeight: '15px' }}
              >
                <Form.Control
                  placeholder="name"
                  disabled
                  style={{ background: '#ffffff', height: '50px' }}
                />
              </FloatingLabel>
            </StyledBox3>
          </StyledBox2>
          <img
            style={{ marginTop: '10px', width: '870px', height: '300px' }}
            src={Post3}
            alt="Third slide"
          />
          <StyledTab1>
            <Tabs style={{ marginTop: '20px' }}>
              <Tab eventKey="history" title="봉사 신청 내역">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>봉사 신청 내역</StyledTxt2>
                      <StyledFilterDiv1 style={{ marginTop: '20px' }}>
                        <StyledFilterDivTitle2>조회일자</StyledFilterDivTitle2>
                        <input
                          type="Date"
                          value={startDate}
                          style={{ border: 'none', marginRight: '20px', height: '40px' }}
                          onChange={handleStartDateChange}
                        />
                        <StyledFilterDivTitle3>-</StyledFilterDivTitle3>
                        <input
                          type="Date"
                          value={endDate}
                          style={{ border: 'none', marginRight: '20px', height: '40px' }}
                          onChange={handleEndDateChange}
                        />
                      </StyledFilterDiv1>
                    </StyledDiv>
                    <div>
                      {userData.myPageVolunteerReservationList.map((review, index) => (
                        <div key={index}>
                          <div>신청자: {review.userName}</div>
                          <div>봉사시간: {review.volunteerTime}</div>
                          <div>제목: {review.volunteerTitle}</div>
                          <div>
                            봉사유형: {review.volunteerType === 'time' ? '시간' : review.volunteerType}
                          </div>
                          <div>예약시간: {review.localDateTime ? review.localDateTime.split('T')[0] : ''}</div>
                          <div><br /></div>
                        </div>
                      ))}
                    </div>
                  </StyledBox1>
                </Tab.Content>
              </Tab>

              <Tab eventKey="reservation" title="봉사참여 실적">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>봉사참여 실적</StyledTxt2>
                    </StyledDiv>
                    <div>
                      {userData1.map((review, index) => (
                        <div key={index}>
                          <div>봉사ID: {review.reservationId}</div>
                          <div>봉사제목: {review.title}</div>
                          <div>시간: {review.boardCreateTime ? review.boardCreateTime.split('T')[0] : ''}</div>
                          <button type="button" onClick={() => handlePDF(review.reservationId)}>
                            PDF하기
                          </button>
                          <div><br /></div>
                        </div>
                      ))}
                    </div>
                  </StyledBox1>
                </Tab.Content>
              </Tab>
              <Tab eventKey="watchlist" title="관심있는 게시물">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>관심있는 게시물</StyledTxt2>
                      <StyledFilterDiv1 style={{ marginTop: '20px' }}>
                        <StyledFilterDivTitle2>조회일자</StyledFilterDivTitle2>
                        <input
                          type="Date"
                          value={startDate}
                          style={{ border: 'none', marginRight: '20px', height: '40px' }}
                          onChange={handleStartDateChange}
                        />
                        <StyledFilterDivTitle3>-</StyledFilterDivTitle3>
                        <input
                          type="Date"
                          value={endDate}
                          style={{ border: 'none', marginRight: '20px', height: '40px' }}
                          onChange={handleEndDateChange}
                        />
                      </StyledFilterDiv1>
                    </StyledDiv>
                  </StyledBox1>
                </Tab.Content>
              </Tab>
            </Tabs>
          </StyledTab1>
          <StyledTable>
            <thead style={{ fontWeight: '700', fontSize: '24px' }}>
              <tr>
                <th style={{ width: '400px' }}>
                  제목
                </th>
                <th style={{ width: '200px' }}>
                  일시
                </th>
                <th style={{ width: '100px' }}>

                </th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: '500', fontSize: '20px' }}>
              <tr>
                <td>A형의 혈액형이 급하게 필요합니다. 도와...</td>
                <td>2023.06.07</td>
                <td>
                  <Button style={{ background: '#8FAADC' }}>
                    <Nav.Link href="/Chat_Details">채팅방이동</Nav.Link>
                  </Button>
                </td>
              </tr>
            </tbody>
          </StyledTable>
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
const Styledcomment = styled.div``;
const StyledTxt = styled.div`
  margin-top: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  /* identical to box height */
  text-align: center;

  color: #000000;
`;

const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
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
  display: flex;
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
const StyledBox2 = styled.div`
  display: flex;
`;
const StyledBox3 = styled.div`
  display: block;
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
const StyledFilterDiv1 = styled.div`
  display: flex;
  margin-left: 20px;
`;

const StyledFilterDivTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 10px;
  line-height: 40px;
`;
const StyledFilterDivTitle3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  /* margin-left: 10px; */
  line-height: 40px;
`;
const StyledTable = styled(Table)`
  margin-top: 30px;
  /* margin: 10px; */
  border-collapse: collapse;
  border: 1px;
  th,
  tbody,
  td td {
    padding: 0;
  }
  font-family: 'Gmarket Sans TTF';
  font-style: normal;

  line-height: 50px;

  color: #333333;

  text-align: center;
`;
export default MyPage_S;
