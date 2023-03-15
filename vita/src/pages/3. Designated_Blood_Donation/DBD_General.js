import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import icon from './heart.png';

import Nav from 'react-bootstrap/Nav';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Sonnet from '../../components/Sonnet';

function DBD_General() {
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
    fetch('http://localhost:8004/user/board/list', {
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
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="일반사용자">
              <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="병원">
              <Sonnet />
            </Tab>
          </Tabs>

          <Styleddiv1>일반사용자 | &nbsp;병원</Styleddiv1>
        </section>
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
      </StyledSubcomment>
      <div className="home">{error && <div>{error}</div>}</div>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
`;
const StyledSub = styled.div`
  width: 208px;
  height: 350px;
  margin-top: 28.2px;
  margin-left: 370px;
`;
const StyledSubDiv1 = styled.div`
  /* width: 208px; */
  height: 66px;
  /* left: 370px;
  top: 123px; */

  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 75px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffffff;
`;

const StyledSubDiv2 = styled.div`
  width: 208px;
  height: 284px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 70px;
  margin-left: 5px;
  margin-right: 5px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 70px;
  margin-left: 5px;
  margin-right: 5px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 53px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #333333;
`;
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 48px;
  margin-top: 40px;
`;

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
  font-size: 48px;
  line-height: 48px;

  color: #333333;
`;
const Styleddiv1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  margin-top: 25px;
  margin-left: 10px;

  color: #333333;
`;
const Styleddiv2 = styled.div`
  margin-right: 15%;
  margin-left: 15%;
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
