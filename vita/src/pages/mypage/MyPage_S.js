import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Nav, FloatingLabel, Form, Tab, Tabs, Button, Table
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Post3 from '../../img/image 70.png';
import { Block } from '@mui/icons-material';

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
  const [userData3, setUserData3] = useState(null);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  //봉사신청내역
  useEffect(() => {
    const url1 = `http://localhost:8004/user/mypage/volunteer-history?userId=${userId}`;
    const url2 = `http://localhost:8004/user/mypage-volunteer-active-history?userId=${userId}`;
    const url3 = `http://localhost:8004/user/mypage-wishList-volunteer?userId=${userId}`;

    const fetchData = async () => {
      try {
        const response1 = await fetch(url1);
        const data1 = await response1.json();
        setUserData1(data1);

        const response2 = await fetch(url2);
        const data2 = await response2.json();
        setUserData2(data2);

        const response3 = await fetch(url3);
        const data3 = await response3.json();
        setUserData3(data3);
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

  if (userData3 === null) {
    return <div>Loading...</div>;
  }

  //PDF하기
  const handleJoin = (review) => {
    navigate('/S_Deed1', { state: { review } });
  };
  const handlePDF = (id) => {
    fetch(`http://localhost:8004/volunteer/pdf?registerId=${id}`, {
      method: 'POST',
    })
      .then((res) => res.blob())
      .then((blob) => {
        alert('다운이 완료되었습니다.');
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
  const btStyle = {
    background: '#D9D9D9',
    borderRadius: '10px',
    border: 'none',
    fontFamily: 'Gmarket Sans TTF',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '37px',
    textAlign: 'center',
    color: '#333333',
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
          <StyledBox2>
            <StyledBox2_1>
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
            </StyledBox2_1>
            <StyledBox2_1 style={{ marginLeft: '60px' }}>
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
            </StyledBox2_1>
          </StyledBox2>
          <StyledBox3>
            <StyledBox3_1>
              <StyledBox3_1G>VITA</StyledBox3_1G>
              <StyledBox3_1W>{userData.timeTypeVolunteerHistoryNumber + ' 시간'}</StyledBox3_1W>

              <StyledBox3_1G>1365 자원봉사포털</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>

              <StyledBox3_1G>e청소년</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>
            </StyledBox3_1>
            <StyledBox3_1>
              <StyledBox3_1G1>
                사회복지 <br />
                자원봉사인증관리
              </StyledBox3_1G1>
              <StyledBox3_1W>20시간 5분</StyledBox3_1W>

              <StyledBox3_1G>걸스카우트</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>

              <StyledBox3_1G>청소년 적십자</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>
            </StyledBox3_1>

            <StyledBox3_1>
              <StyledBox3_1G1>
                법무부 소년보호교육
                <br />
                종합관리시스템
              </StyledBox3_1G1>
              <StyledBox3_1W>20시간 5분</StyledBox3_1W>

              <StyledBox3_1G>국립공원공단</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>

              <StyledBox3_1G>문화품앗e</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>
            </StyledBox3_1>

            <StyledBox3_1>
              <StyledBox3_1G>농촌재능나눔</StyledBox3_1G>
              <StyledBox3_1W>20시간 5분</StyledBox3_1W>

              <StyledBox3_1G>대한적십자사</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>

              <StyledBox3_1G>서울교통공사</StyledBox3_1G>
              <StyledBox3_1W></StyledBox3_1W>
            </StyledBox3_1>
            <StyledBox3_Txt>
              <ul>
                <li>
                  청소년 · 사회복지의 실적은 실적연계 동의시점 이후 실적부터
                  조회 가능하며, 이전의 실적은 각 기관의 시스템에서 확인하시기
                  바랍니다. (VMS는 VMS사이트에서도 연계 동의를 하여야만 실적이
                  연동 됩니다.)
                </li>
                <li>
                  유관기관의 봉사실적을 확인하기 위해서는 '실적연계 정보제공
                  동의'를 해야 합니다
                </li>
              </ul>
            </StyledBox3_Txt>
          </StyledBox3>
          <StyledTab1>
            <Tabs style={{ marginTop: '20px' }}>
              <Tab eventKey="history" title="봉사 신청 내역" style={{ minHeight: '100vh' }}>
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>봉사 신청 내역</StyledTxt2>
                      <StyledFilterDiv1 style={{ marginTop: '20px' }}>
                        <StyledFilterDivTitle2>조회일자</StyledFilterDivTitle2>
                        <input
                          type="Date"
                          value={startDate}
                          style={{
                            border: 'none',
                            marginRight: '20px',
                            height: '40px',
                          }}
                          onChange={handleStartDateChange}
                        />
                        <StyledFilterDivTitle3>-</StyledFilterDivTitle3>
                        <input
                          type="Date"
                          value={endDate}
                          style={{
                            border: 'none',
                            marginRight: '20px',
                            height: '40px',
                          }}
                          onChange={handleEndDateChange}
                        />
                      </StyledFilterDiv1>
                    </StyledDiv>
                    <section id="list">
                      <Styleddiv2>
                        <StyledTable>
                          <thead>
                            <tr>
                              <th
                                id="area-header"
                                style={{ ...thStyle, width: '250px' }}
                              >
                                제목
                              </th>
                              <th
                                id="centerName-header"
                                style={{ ...thStyle, width: '100px' }}
                              >
                                봉사유형
                              </th>
                              <th
                                id="bloodHouseAddress-header"
                                style={{ ...thStyle, width: '100px' }}
                              >
                                일 시
                              </th>
                              <th>&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody style={{ fontWeight: '500', fontSize: '20px' }}>
                            {userData.myPageVolunteerReservationList.map(
                              (review, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <tr onClick={() => handleRowClick(index)}>
                                      {/* <div key={index}> */}
                                      <td
                                        headers="area-header"
                                        style={{
                                          ...tdStyle,
                                          fontWeight: '500',
                                        }}
                                      >
                                        {review.volunteerTitle}
                                      </td>
                                      <td
                                        headers="centerName-header"
                                        style={{ ...tdStyle, width: '120px' }}
                                      >
                                        {review.volunteerType === 'time'
                                          ? '시간'
                                          : review.volunteerType}
                                      </td>
                                      <td
                                        headers="bloodHouseAddress-header"
                                        style={{
                                          ...tdStyle,
                                          width: '130px',

                                          fontSize: '18px',
                                        }}
                                      >
                                        {review.localDateTime
                                          ? review.localDateTime.split('T')[0]
                                          : ''}
                                      </td>
                                      <td
                                        style={{
                                          ...tdStyle,
                                          width: '130px',
                                          fontSize: '15px',
                                        }}
                                      >
                                        <button
                                          style={{
                                            ...btStyle,
                                            // border: '1px solid #FF9C9C',
                                            color: 'white',
                                            paddingLeft: '15px',
                                            paddingRight: '15px',
                                            background: '#F55757',
                                          }}
                                        >
                                          취소하기
                                        </button>
                                      </td>
                                      {/* </div> */}
                                    </tr>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </tbody>
                        </StyledTable>
                      </Styleddiv2>
                    </section>

                    {/* <div>
                      {userData.myPageVolunteerReservationList.map(
                        (review, index) => (
                          <div key={index}>
                            <div>신청자: {review.userName}</div>
                            <div>봉사시간: {review.volunteerTime}</div>
                            <div>제목: {review.volunteerTitle}</div>
                            <div>
                              봉사유형:{' '}
                              {review.volunteerType === 'time'
                                ? '시간'
                                : review.volunteerType}
                            </div>
                            <div>
                              예약시간:{' '}
                              {review.localDateTime
                                ? review.localDateTime.split('T')[0]
                                : ''}
                            </div>
                            <div>
                              <br />
                            </div>
                          </div>
                        )
                      )}
                    </div> */}
                  </StyledBox1>
                </Tab.Content>
              </Tab>

              <Tab eventKey="reservation" title="봉사참여 실적">
                <Tab.Content>
                  <StyledBox1>
                    <StyledDiv>
                      <StyledTxt2>봉사참여 실적</StyledTxt2>
                    </StyledDiv>
                    {/*  */}
                    <section id="list">
                      <Styleddiv2>
                        <StyledTable>
                          <thead>
                            <tr>
                              <th
                                id="area-header"
                                style={{ ...thStyle, width: '200px' }}
                              >
                                제목
                              </th>
                              <th
                                id="centerName-header"
                                style={{ ...thStyle, width: '100px' }}
                              >
                                일 시
                              </th>
                              <th style={{ ...thStyle, width: '100px' }}>
                                &nbsp;
                              </th>
                            </tr>
                          </thead>
                          <tbody style={{ fontWeight: '500', fontSize: '20px' }}>
                            {userData1.map((review, index) => {
                              return (
                                <React.Fragment key={index}>
                                  <tr onClick={() => handleRowClick(index)}>
                                    <td
                                      headers="area-header"
                                      style={{
                                        ...tdStyle,
                                        fontWeight: '500',
                                      }}
                                    >
                                      {review.title}
                                    </td>
                                    <td
                                      headers="centerName-header"
                                      style={{ ...tdStyle, width: '120px' }}
                                    >
                                      {review.boardCreateTime
                                        ? review.boardCreateTime.split('T')[0]
                                        : ''}
                                    </td>
                                    <td
                                      style={{
                                        ...tdStyle,
                                        width: '130px',
                                        fontSize: '15px',
                                      }}
                                    >
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handlePDF(review.reservationId)
                                        }
                                        style={{
                                          ...btStyle,
                                          background: '#8FAADC',
                                          color: 'white',
                                          paddingLeft: '15px',
                                          paddingRight: '15px',
                                        }}
                                      >
                                        봉사 확인서 출력
                                      </button>
                                    </td>
                                    {/* </div> */}
                                  </tr>
                                </React.Fragment>
                              );
                            })}
                          </tbody>
                        </StyledTable>
                      </Styleddiv2>
                    </section>

                    {/* <div>
                      {userData1.map((review, index) => (
                        <div key={index}>
                          <div>봉사ID: {review.reservationId}</div>
                          <div>봉사제목: {review.title}</div>
                          // <div>
                          //   시간:{' '}
                          //   {review.boardCreateTime
                          //     ? review.boardCreateTime.split('T')[0]
                          //     : ''}
                          // </div>
                          // <button
                          //   type="button"
                          //   onClick={() => handleJoin(review)}
                          // >
                          //   PDF하기
                          // </button>

                          // <div>
                          //   <br />
                          // </div>
                          <div>
                            시간:{' '}
                            {review.boardCreateTime
                              ? review.boardCreateTime.split('T')[0]
                              : ''}
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePDF(review.reservationId)}
                          >
                            PDF하기
                          </button>
                          <div>
                            <br />
                          </div>
                        </div>
                      // ))}
                    </div> */}
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
                          style={{
                            border: 'none',
                            marginRight: '20px',
                            height: '40px',
                          }}
                          onChange={handleStartDateChange}
                        />
                        <StyledFilterDivTitle3>-</StyledFilterDivTitle3>
                        <input
                          type="Date"
                          value={endDate}
                          style={{
                            border: 'none',
                            marginRight: '20px',
                            height: '40px',
                          }}
                          onChange={handleEndDateChange}
                        />
                      </StyledFilterDiv1>
                    </StyledDiv>
                    <section id="list">
                      <Styleddiv2>
                        <StyledTable>
                          <thead>
                            <tr>
                              <th
                                id="area-header"
                                style={{ ...thStyle, width: '250px' }}
                              >
                                제목 / 내용
                              </th>
                              <th
                                id="centerName-header"
                                style={{ ...thStyle, width: '100px' }}
                              >
                                모집인원 및 현황
                              </th>
                            </tr>
                          </thead>
                          <tbody style={{ fontWeight: '500', fontSize: '20px' }}>
                            {userData3.map((review, index) => (
                              <tr
                                key={index}
                                onClick={() => handleRowClick(index)}
                              >
                                <td headers="area-header" style={{ display: "block", textAlign: 'left', paddingLeft: '20px', }}>
                                  <div style={{ display: "flex", fontWeight: '600', }}>
                                    <div style={{ color: '#0057FF', marginRight: "10px" }}>
                                      {review.volunteerType}
                                    </div>
                                    {review.title}
                                  </div>
                                  <div style={{ display: "flex" }}>
                                    <div>봉사시간 :&nbsp;</div>
                                    {review.volunteerStartDate}-{review.volunteerEndDate}
                                  </div>
                                  <div style={{ display: "flex" }}>
                                    <div>주소 :&nbsp;</div>
                                    {review.volunteerAddress}
                                  </div>
                                </td>


                                <td>
                                  <button
                                    style={{
                                      ...btStyle,
                                      // border: '1px solid #FF9C9C',
                                      paddingLeft: '15px',
                                      paddingRight: '15px',
                                      background: '#AEAEAE',
                                      marginTop: '0px',
                                      marginBottom: '10px',
                                      color: '#ffffff'
                                    }}
                                  >
                                    상세보기
                                  </button>
                                  <br />
                                  <button
                                    style={{
                                      ...btStyle,
                                      // border: '1px solid #FF9C9C',
                                      color: '#ffffff',
                                      paddingLeft: '15px',
                                      paddingRight: '15px',
                                      background: '#FF9F9F',
                                    }}
                                  >
                                    참여하기
                                  </button>
                                </td>
                              </tr>
                            )
                            )}
                          </tbody>
                        </StyledTable>
                      </Styleddiv2>
                    </section>
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
const StyledBox2_1 = styled.div`
  display: block;
`;
const StyledBox3 = styled.div`
  display: block;
  margin-top: 20px;
`;
const StyledBox3_1 = styled.div`
  display: flex;

  margin-left: 5px;
`;
const StyledBox3_1G = styled.div`
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid #ccc;
  background: #eee;

  color: #000;
  text-align: center;
  font-family: Gmarket Sans TTF;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
`;
const StyledBox3_1G1 = styled.div`
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid #ccc;
  background: #eee;

  color: #000;
  text-align: center;
  font-family: Gmarket Sans TTF;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  padding-top: 5px;
  line-height: 20px;
`;
const StyledBox3_1W = styled.div`
  width: 115px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid #ccc;
  background: #fff;

  color: #747774;
  text-align: center;
  font-family: Gmarket Sans TTF;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
`;
const StyledBox3_Txt = styled.div`
  width: 850px;
  color: #000;
  font-family: Gmarket Sans TTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  margin-top: 15px;
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
// const StyledTable = styled(Table)`
//   margin-top: 30px;
//   /* margin: 10px; */
//   border-collapse: collapse;
//   border: 1px;
//   th,
//   tbody,
//   td td {
//     padding: 0;
//   }
//   font-family: 'Gmarket Sans TTF';
//   font-style: normal;

//   line-height: 50px;

//   color: #333333;

//   text-align: center;
// `;
const Styleddiv2 = styled.div`
  text-align: center;
`;
const StyledTable = styled(Table)`
  margin-top: 30px;
  border-collapse: collapse;
  border: 1px;
  th,
  tbody,
  td td {
    padding: 0;
  }
`;
const Styledtd1 = styled.div`
  width: 500px;
`;
const Styledtd2 = styled.div`
  /* display: block; */
  margin-top: 50px;
`;
const Styledtxt = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 30px;
  /* or 158% */
  letter-spacing: 0.05em;
  color: #333333;
`;
export default MyPage_S;
