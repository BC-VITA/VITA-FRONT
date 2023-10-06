import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Tab, Tabs, Nav, Table } from 'react-bootstrap';
import {format, parseISO} from "date-fns";

function MyPage_BD() {
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const handleStartDateChange = (e) => {
    const { value } = e.target;
    setstartDate(value);
  };
  const handleEndDateChange = (e) => {
    const { value } = e.target;
    setendDate(value);
  };

  const userId = sessionStorage.getItem('userId');

  const [inputData, setInputData] = useState([]);
  // const [inputData2, setInputData2] = useState([]);
  const [inputData3, setInputData3] = useState([]);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  const type = "Blood";

  useEffect(() => {
    if (userId) {
      const url1 = `http://localhost:8004/user/mypage-blood-reservation-history?userId=${userId}`;
      fetch(url1)
          .then((res) => {
            if (!res.ok) {
              throw new Error('네트워크 응답이 정상이 아닙니다.');
            }
            return res.json();
          })
          .then((res) => {
            setInputData(res);
          })
          .catch((error) => {
            console.error('데이터를 가져오는 중 오류 발생:', error);
          });
      // const url2 = `http://localhost:8004/user/mypage-designated-write?userId=${userId}`;
      // fetch(url2)
      //     .then((res) => {
      //         if (!res.ok) {
      //             throw new Error('네트워크 응답이 정상이 아닙니다.');
      //         }
      //         return res.json();
      //     })
      //     .then((res) => {
      //         setInputData2(res);
      //     })
      //     .catch((error) => {
      //         console.error('데이터를 가져오는 중 오류 발생:', error);
      //     });
      const url3 = `http://localhost:8004/user/mypage-designated-review?userId=${userId}&reviewType=${type}`;
      fetch(url3)
          .then((res) => {
            if (!res.ok) {
              throw new Error('네트워크 응답이 정상이 아닙니다.');
            }
            return res.json();
          })
          .then((res) => {
            setInputData3(res);
          })
          .catch((error) => {
            console.error('데이터를 가져오는 중 오류 발생:', error);
          });
    }
  }, [userId]);

  const thStyle = {
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
    lineHeight: '30px',
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
          </StyledTop>
          <Styledcomment>
            <StyledTxt>헌혈 참여</StyledTxt>
            <FloatingLabel
                label={inputData.length + '번'}
                style={{ width: '300px', lineHeight: '15px' }}
            >
              <Form.Control
                  placeholder="name"
                  disabled
                  style={{
                    background: '#ffffff',
                    height: '50px',
                  }}
              />
            </FloatingLabel>
            <StyledTab1>
              <Tabs style={{ marginTop: '20px' }}>
                <Tab eventKey="history" title="예약 내역">
                  <Tab.Content>
                    <StyledBox1>
                      <StyledDiv>
                        <StyledTxt2>예약 내역</StyledTxt2>
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
                                  style={{ ...thStyle, width: '300px' }}
                              >
                                헌혈의 집
                              </th>
                              <th
                                  id="bloodHouseAddress-header"
                                  style={{ ...thStyle, width: '200px' }}
                              >
                                일 시
                              </th>
                              <th>&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody style={{ fontWeight: '500', fontSize: '20px' }}>
                            {inputData.map((reservation, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(index)}
                                >
                                  <td headers="area-header">{reservation.centerName}</td>
                                  <td headers="bloodHouseAddress-header">
                                  {format(parseISO(reservation.date), 'yyyy.MM.dd')} {reservation.time}
                                  </td>
                                  <td>
                                    <button
                                        style={{
                                          ...btStyle,
                                          // border: '1px solid #FF9C9C',
                                          color: 'white',
                                          paddingLeft: '15px',
                                          paddingRight: '15px',
                                          background: '#FF6565',
                                        }}
                                    >
                                      취소하기
                                    </button>
                                  </td>
                                </tr>
                            ))}
                            </tbody>
                          </StyledTable>
                        </Styleddiv2>
                      </section>
                    </StyledBox1>
                  </Tab.Content>
                </Tab>{' '}
                {/*<Tab eventKey="write" title="헌혈 내역">*/}
                {/*    <Tab.Content>*/}
                {/*        <StyledBox1>*/}
                {/*            <StyledDiv>*/}
                {/*                <StyledTxt2>헌혈 내역</StyledTxt2>*/}
                {/*                <StyledFilterDiv1 style={{ marginTop: '20px' }}>*/}
                {/*                    <StyledFilterDivTitle2>조회일자</StyledFilterDivTitle2>*/}
                {/*                    <input*/}
                {/*                        type="Date"*/}
                {/*                        value={startDate}*/}
                {/*                        style={{*/}
                {/*                            border: 'none',*/}
                {/*                            marginRight: '20px',*/}
                {/*                            height: '40px',*/}
                {/*                        }}*/}
                {/*                        onChange={handleStartDateChange}*/}
                {/*                    />*/}
                {/*                    <StyledFilterDivTitle3>-</StyledFilterDivTitle3>*/}
                {/*                    <input*/}
                {/*                        type="Date"*/}
                {/*                        value={endDate}*/}
                {/*                        style={{*/}
                {/*                            border: 'none',*/}
                {/*                            marginRight: '20px',*/}
                {/*                            height: '40px',*/}
                {/*                        }}*/}
                {/*                        onChange={handleEndDateChange}*/}
                {/*                    />*/}
                {/*                </StyledFilterDiv1>*/}
                {/*            </StyledDiv>*/}
                {/*            <section id="list">*/}
                {/*                <Styleddiv2>*/}
                {/*                    <StyledTable>*/}
                {/*                        <thead>*/}
                {/*                        <tr>*/}
                {/*                            <th*/}
                {/*                                id="area-header"*/}
                {/*                                style={{ ...thStyle, width: '250px' }}*/}
                {/*                            >*/}
                {/*분류*/}
                {/*                            </th>*/}
                {/*                            <th*/}
                {/*                                id="bloodHouseAddress-header"*/}
                {/*                                style={{ ...thStyle, width: '100px' }}*/}
                {/*                            >*/}
                {/*                                일 시*/}
                {/*                            </th>*/}
                {/*                            <th>&nbsp;</th>*/}
                {/*                            <th>&nbsp;</th>*/}
                {/*                        </tr>*/}
                {/*                        </thead>*/}
                {/*                        <tbody>*/}
                {/*                        {inputData2.map((review, index) => (*/}
                {/*                            <tr*/}
                {/*                                key={index}*/}
                {/*                                onClick={() => handleRowClick(index)}*/}
                {/*                            >*/}
                {/*                                <td headers="area-header">*/}
                {/*                                    {review.boardTitle}*/}
                {/*                                </td>*/}
                {/*                                <td headers="bloodHouseAddress-header">*/}
                {/*                                    {review.localDateTime}*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <button>수정하기</button>*/}
                {/*                                </td>*/}
                {/*                                <td>*/}
                {/*                                    <button>삭제하기</button>*/}
                {/*                                </td>*/}
                {/*                            </tr>*/}
                {/*                        ))}*/}
                {/*                        </tbody>*/}
                {/*                    </StyledTable>*/}
                {/*                </Styleddiv2>*/}
                {/*            </section>*/}
                {/*        </StyledBox1>*/}
                {/*    </Tab.Content>*/}
                {/*</Tab>{' '}*/}
                <Tab eventKey="review" title="내가 작성한 후기">
                  <Tab.Content>
                    <StyledBox1>
                      <StyledDiv>
                        <StyledTxt2>내가 작성한 후기</StyledTxt2>
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
                                  style={{ ...thStyle, width: '350px' }}
                              >
                                제목
                              </th>
                              <th
                                  id="bloodHouseAddress-header"
                                  style={{ ...thStyle, width: '300px' }}
                              >
                                일 시
                              </th>
                              <th>&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody style={{ fontWeight: '500', fontSize: '20px' }}>
                            {inputData3.map((review, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(index)}
                                >
                                  <td headers="area-header">
                                    {review.reviewTitle}
                                  </td>
                                  <td headers="bloodHouseAddress-header">
                                    {format(parseISO(review.localDateTime), 'yyyy.MM.dd HH:mm')}
                                  </td>
                                  <td>
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
                                      삭제하기
                                    </button>
                                  </td>
                                </tr>
                            ))}
                            </tbody>
                          </StyledTable>
                        </Styleddiv2>
                      </section>
                    </StyledBox1>
                  </Tab.Content>
                </Tab>{' '}
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
  width: 300px;
  text-align: center;
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
export default MyPage_BD;
