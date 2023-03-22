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
  const selectList1 = ['', '인천', '서울', '경기도', '강원도'];
  const selectList2 = ['', '인기순', '최신순'];
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
                <StyledSubDiv2_2>지정헌혈이란</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBDGeneral">
                <StyledSubDiv2_2>지정헌혈하기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBDWatchList">
                <StyledSubDiv2_2>관심목록</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBDNews">
                <StyledSubDiv2_2>따뜻한 사례</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <section>
          <StyledTitle>지정헌혈하기</StyledTitle>

          {/* <Styleddiv1>일반사용자 | &nbsp;병원</Styleddiv1> */}
        </section>

        <StyledFilter>
          <StyledFilterDiv>
            <StyledFilterDiv1>
              <StyledFilterDiv1_1>지역선택</StyledFilterDiv1_1>
              <select onChange={handleSelect1} value={donationtype}>
                {selectList1.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
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
            <StyledFilterDiv1>
              <StyledFilterDiv1_2>
                <select onChange={handleSelect2} value={bloodproduct}>
                  {selectList2.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </StyledFilterDiv1_2>
            </StyledFilterDiv1>
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

          {/* <div></div>
            <div></div> */}
        </StyledFilter>

        <StyledTab>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            {/* <StyledTabTitle> */}
            <Tab eventKey="home" title="일반 사용자">
              <Tab.Content>
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
            {/* </StyledTabTitle> */}
            {/* <StyledTabTitle> */}
            <Tab eventKey="profile" title="병원">
              <Tab.Content>ㅁㄴㅇㅁㄴㅇ</Tab.Content>
            </Tab>
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
  margin-left: 260px;
`;
const StyledSubDiv1 = styled.div`
  width: 135px;
  height: 45px;
  /* left: 370px;
  top: 123px; */

  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 47px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffffff;
`;

const StyledSubDiv2 = styled.div`
  width: 135px;
  height: 182.5px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 45px;
  margin-left: 2.5px;
  margin-right: 2.5px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 45px;
  margin-left: 2.5px;
  margin-right: 2.5px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 26.5px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #333333;
`;

const StyledFilter = styled.div`
  width: 919px;
  height: 145px;
  background: #ffe9e9;
`;
const StyledFilterDiv = styled.div`
  display: flex;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  margin-top: 20px;
`;
const StyledFilterDiv1_1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 30px;
`;
const StyledFilterDiv1_2 = styled.div`
  margin-right: 20px;
  margin-left: 30px;
`;
const StyledFilterDiv2 = styled.label`
  margin-top: 20px;
  width: 700px;
  margin-left: 30px;
`;
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 48px;
  margin-top: 25px;
`;

const StyledTab = styled.div`
  margin-top: 20px;
`;

// const StyledTabTitle = styled.Tab`
//   font-family: 'Gmarket Sans TTF';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 23px;
//   line-height: 32px;

//   margin-top: 5px;
//   margin-left: 8px;

//   color: #333333;
// `;

// const Styleddiv1 = styled.div`
//   font-family: 'Gmarket Sans TTF';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 23px;
//   line-height: 32px;

//   margin-top: 5px;
//   margin-left: 8px;

//   color: #333333;
// `;

const StyledTitle = styled.div`
  /* position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 48px;
  font-weight: 700;
  margin-top: 3%;
  margin-left: 15%; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
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
