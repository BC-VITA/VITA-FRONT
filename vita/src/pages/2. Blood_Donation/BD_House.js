import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function BD_House() {
  const selectList1 = ['전체', '인천', '서울', '경기도', '강원도'];
  const [firstListValue, setFirstListValue] = useState('');
  const [secondListOptions, setSecondListOptions] = useState([]);
  function handleFirstListChange(event) {
    const selectedValue = event.target.value;
    setFirstListValue(selectedValue);

    if (selectedValue === '전체') {
      setSecondListOptions(['']);
    } else if (selectedValue === '서울') {
      setSecondListOptions(['가', '나', '다']);
    } else if (selectedValue === '인천') {
      setSecondListOptions(['가가', '나나', '다다']);
    } else if (selectedValue === '경기도') {
      setSecondListOptions(['가가가', '나나나', '다다다']);
    } else {
      setSecondListOptions(['가가가가', '나나나나', '다다다다']);
    }
  }

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
    fetch('http://localhost:8004/blood/house/filter ', {
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
          <StyledSubDiv1>헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Main">
                <StyledSubDiv2_2g>헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/BD_House">
                <StyledSubDiv2_2>헌혈의 집 찾기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Bus">
                <StyledSubDiv2_2g>헌혈 버스 찾기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_ReservationFirst">
                <StyledSubDiv2_2g>헌혈 예약</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_History">
                <StyledSubDiv2_2g>헌혈내역조회</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈의 집 찾기</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>작성하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>

        <StyledTab>
          <Tabs>
            <Tab eventKey="profile" title="일반 사용자">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>지역선택</StyledFilterDiv1Two>
                    <select
                      onChange={handleFirstListChange}
                      value={firstListValue}
                      style={{ border: 'none' }}
                    >
                      {selectList1.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <select
                      value={secondListOptions}
                      onChange={setSecondListOptions}
                    >
                      {secondListOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1One>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>
                      &nbsp;기&nbsp;간&nbsp;
                    </StyledFilterDiv1Two>
                    <select
                      onChange={handleFirstListChange}
                      value={firstListValue}
                      style={{ border: 'none' }}
                    >
                      {selectList1.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <select
                      value={secondListOptions}
                      onChange={setSecondListOptions}
                    >
                      {secondListOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1One>
                </StyledFilter>

                <section>
                  <Styleddiv2>
                    <Accordion defaultActiveKey="0">
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>제목 / 내용</th>
                            <th>모집인원 및 현황</th>
                          </tr>
                        </thead>
                        <Styledtbody1>
                          {inputData.map((element, index) => {
                            return (
                              <Styledtr>
                                <Styledtd>
                                  <Accordion.Item eventKey={index}>
                                    <Accordion.Header>
                                      헌혈의집 아이디 : {element.id}
                                      <br />
                                      헌혈의집 지역 : {element.area}
                                      <br />
                                      헌혈의집 이름 : {element.centerName}
                                      <br />
                                      헌혈의집 주소 :{' '}
                                      {element.bloodHouseAddress}
                                      <br />
                                      헌혈의집 전화번호 :{' '}
                                      {element.bloodHousePhoneNumber}
                                      <br />
                                      헌혈의집 위도 : {element.latitude}
                                      <br />
                                      헌혈의집 경도 : {element.longitude}
                                      <br />
                                      헌혈의집 평일 마감시간 :{' '}
                                      {element.weekdayTime}
                                      <br />
                                      헌혈의집 토요일 마감시간 :{' '}
                                      {element.saturdayTime}
                                      <br />
                                      헌혈의집 일요일 마감시간:{' '}
                                      {element.sundayRestTime}
                                      <br />
                                      헌혈의집 공휴일 마감시간 :{' '}
                                      {element.restTime}
                                      <br />
                                      전혈 가능 여부 : {element.wholeBlood}
                                      <br />
                                      혈소판 가능 여부 : {element.plasma}
                                      <br />
                                      혈장 가능 여부 : {element.platelet}
                                    </Accordion.Header>
                                    <Accordion.Body colSpan={2}>
                                      지도가 나오게 하기
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Styledtd>
                                <Styledtd>
                                  <button type="button">지도보기</button>
                                </Styledtd>
                              </Styledtr>
                            );
                          })}
                        </Styledtbody1>
                      </Table>
                    </Accordion>
                  </Styleddiv2>
                </section>
              </Tab.Content>
            </Tab>
            <Tab eventKey="home" title="병원">
              <Tab.Content>skjfjsf</Tab.Content>
            </Tab>
          </Tabs>
        </StyledTab>
      </StyledSubcomment>
      <div className="home">{error && <div>{error}</div>}</div>
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

const StyledTab = styled.div`
  margin-top: 5px;
  width: 120vh;
`;

const StyledFilter = styled.div`
  width: 100%;
  height: 145px;
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv1One = styled.div`
  display: flex;
  margin-top: 20px;
`;
const StyledFilterDiv1Two = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 30px;
`;
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 270px;
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
  width: 120px;
  height: 35px;
  margin-left: 475px;

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
  margin-left: 25px;
  /* identical to box height, or 100% */

  color: #ffffff;
`;

const Styleddiv2 = styled.div`
  /* margin-right: 100px;
  margin-left: 100px; */
  text-align: center;
`;
const Styledtr = styled.tr`
  border: none;
`;
const Styledtd = styled.td`
  border: none;
`;
const Styledtbody1 = styled.tbody`
  border: none;
`;
const Styledimg = styled.img`
  width: 30px;
  height: 25px;
  object-fit: cover;
`;
export default BD_House;
