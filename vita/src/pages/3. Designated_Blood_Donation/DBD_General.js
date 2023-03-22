// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import icon from './heart.png';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Nav from 'react-bootstrap/Nav';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function DBD_General() {
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
  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    //back으로 정보 post함
    fetch('http://localhost:8004/user/board/1', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        hospitalPhoneNumber: hostipalcall,
        patientBlood: bloodtype,
        patientIsRH: rhtype,
        bloodType: donationtype,
      }),
    })
      //보낸거를 문자열 받아 다시 json(객체)으로 변환하여 비교
      .then((res) => {
        res.json();
        if (res.ok) {
          navigate('/DBD_General');
        }
      })
      //회원가입 실패시 실행
      .catch((err) => {
        setError(err.message);
        //에러시 Loading메세지 사라지고
        //에러메세지만 보이도록 설정
      });
    setDisabled(false);
    console.log(
      'data: ' +
        JSON.stringify({
          hospitalPhoneNumber: hostipalcall,
          patientBlood: bloodtype,
          patientIsRH: rhtype,
          bloodType: donationtype,
        })
    );
  };
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

  // useEffect(() => {
  //   fetch('http://localhost:8004/user/board/list', {
  //     method: 'get',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setInputData(res);
  //       console.log(inputData);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  //   console.log(inputData);
  // }, []);

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>지정헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBDMain">
                <StyledSubDiv2_2g>지정헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBDGeneral">
                <StyledSubDiv2_2>지정헌혈하기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBDWatchList">
                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBDNews">
                <StyledSubDiv2_2g>따뜻한 사례</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>지정헌혈하기</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>작성하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
          {/* <Styleddiv1>일반사용자 | &nbsp;병원</Styleddiv1> */}
        </StyledTop>

        <StyledTab>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 fw-bold fs-5"
          >
            <Tab eventKey="profile" title="일반 사용자">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv>
                    <StyledFilterDiv1>
                      <StyledFilterDiv1_1>지역선택</StyledFilterDiv1_1>
                      {/* <StyledFilterDiv1_2> */}
                      <select
                        onChange={handleSelect1}
                        value={donationtype}
                        style={{ border: 'none' }}
                      >
                        {selectList1.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      {/* </StyledFilterDiv1_2> */}
                    </StyledFilterDiv1>
                    <StyledFilterDiv1>
                      <StyledFilterDiv1_1>RH여부</StyledFilterDiv1_1>
                      <RadioButton
                        label="&nbsp;RH-&nbsp;"
                        value={rhtype === 'RH-'}
                        onChange={handleRHMChange}
                      />
                      <RadioButton
                        label="&nbsp;RH+&nbsp;"
                        value={rhtype === 'RH+'}
                        onChange={handleRHPChange}
                      />
                    </StyledFilterDiv1>
                    <StyledFilterButton>
                      <Nav.Link href="/DBDPostGeneral">
                        <StyledButtonDiv>검색하기</StyledButtonDiv>
                      </Nav.Link>
                    </StyledFilterButton>
                  </StyledFilterDiv>
                  <StyledFilterDiv2>
                    <FloatingLabel
                      label="헌혈의 집 명 또는 헌혈의 집 주소를 입력해주세요."
                      value={hostipalcall}
                      onChange={handleChangehostipalcall}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledFilterDiv2>
                </StyledFilter>
                <div>마감순</div>
                <div>최신순</div>
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
                                      {element.title}
                                      <br />
                                      {element.startDate}
                                      <br />
                                      필요한 혈액형 : {element.patientBlood}
                                      <br />
                                      혈액 종류 : {element.bloodType}
                                      <br />
                                      장소 : {element.hospitalName}
                                    </Accordion.Header>
                                    <Accordion.Body colSpan={2}>
                                      {element.content}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Styledtd>
                                <Styledtd>
                                  {element.bloodNumber}
                                  {/* 텍스트 컬러랑 현재 모집인원 /로 표현하기 */}
                                  <br />
                                  <Styledimg
                                    src={icon}
                                    class
                                    name="main-icon"
                                    alt="logo"
                                  />
                                  {/* 빈 하트 이미지 추가 후 좋아요 여부로 이미지 다르게 보이기 */}
                                  <br />
                                  <button type="button">상세보기</button>
                                  <br />
                                  <button type="button">참여하기</button>
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
            {/* <StyledTabTitle> */}

            <Tab eventKey="home" title="병원">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv>
                    <StyledFilterDiv1>
                      <StyledFilterDiv1_1>지역선택</StyledFilterDiv1_1>
                      {/* <StyledFilterDiv1_2> */}
                      <select
                        onChange={handleSelect1}
                        value={donationtype}
                        style={{ border: 'none' }}
                      >
                        {selectList1.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      {/* </StyledFilterDiv1_2> */}
                    </StyledFilterDiv1>
                    <StyledFilterDiv1>
                      <StyledFilterDiv1_1>RH여부</StyledFilterDiv1_1>
                      <RadioButton
                        label="&nbsp;RH-&nbsp;"
                        value={rhtype === 'RH-'}
                        onChange={handleRHMChange}
                      />
                      <RadioButton
                        label="&nbsp;RH+&nbsp;"
                        value={rhtype === 'RH+'}
                        onChange={handleRHPChange}
                      />
                    </StyledFilterDiv1>
                    <StyledFilterButton>
                      <Nav.Link href="/DBDPostGeneral">
                        <StyledButtonDiv>검색하기</StyledButtonDiv>
                      </Nav.Link>
                    </StyledFilterButton>
                  </StyledFilterDiv>
                  <StyledFilterDiv2>
                    <FloatingLabel
                      label="헌혈의 집 명 또는 헌혈의 집 주소를 입력해주세요."
                      value={hostipalcall}
                      onChange={handleChangehostipalcall}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledFilterDiv2>
                </StyledFilter>
              </Tab.Content>
            </Tab>
            {/* </StyledTabTitle> */}
            {/* <StyledTabTitle> */}

            {/* </StyledTabTitle> */}
          </Tabs>
        </StyledTab>
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

const StyledFilter = styled.div`
  width: 100%;
  height: 145px;
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv = styled.div`
  display: flex;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  margin-top: 20px;
`;
const StyledFilterButton = styled.div`
  margin-top: 15px;
  width: 125px;
  height: 35px;
  margin-left: 350px;

  background: #ff9f9f;
  border-radius: 9px;
`;
const StyledFilterDiv1_1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 30px;
`;
// const StyledFilterDiv1_2 = styled`
//   margin-right: 20px;
//   margin-left: 0px;
//   width: 80px;
//   border: none;
// `;
const StyledFilterDiv2 = styled.label`
  margin-top: 20px;
  width: 860px;
  margin-left: 30px;
`;
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;

const StyledTab = styled.div`
  margin-top: 5px;
  padding-bottom: 500px;
`;

const StyledTitle = styled.div`
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
export default DBD_General;
