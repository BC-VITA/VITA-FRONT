import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import icon from './heart.png';
function DBD_General() {
  const navigate = useNavigate();
  const selectList1 = ['전체', '인천', '서울', '경기도', '강원도'];
  const selectList2 = ['최신순', '마감순'];
  const [firstListValue, setFirstListValue] = useState('전체');
  const [firstList2Value, setFirstList2Value] = useState('최신순');
  const [secondListOptions, setSecondListOptions] = useState([
    '검색할 지역을 골라주세요',
  ]);
  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  function handleFirstListChange(event) {
    const selectedValue = event.target.value;
    setFirstListValue(selectedValue);
    if (selectedValue === '전체') {
      setSecondListOptions(['검색할 지역을 골라주세요']);
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
  function handleSecondListChange(event) {
    const selected2Value = event.target.value;
    setFirstList2Value(selected2Value);
  }
  const [inputData, setInputData] = useState([{}, {}]);
  useEffect(() => {
    fetch('http://localhost:8004/user/board/filter', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
      });
  }, []);
  const handleJoin = (hospitalName) => {
    navigate('/Chat_Details', { state: { hospitalName } });
  };

  const handleDetailClick = (hospitalName) => {
    navigate('/Chat_Details', { state: { hospitalName } });
  };
  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>지정헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_Main">
                <StyledSubDiv2_2g>지정헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBD_General">
                <StyledSubDiv2_2>지정헌혈하기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_WatchList">
                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_News">
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
            <Nav.Link href="/DBD_PostGeneral">
              <StyledButtonDiv>작성하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>
        <StyledTab1>
          <Tabs>
            <Tab eventKey="profile" title="일반 사용자">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>지역선택</StyledFilterDiv1Two>
                    <select
                      onChange={handleFirstListChange}
                      value={firstListValue}
                      style={{ border: 'none', marginTop: '20px' }}
                    >
                      {selectList1.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {/* <select
                      value={secondListOptions}
                      onChange={setSecondListOptions}
                    >
                      {secondListOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select> */}
                  </StyledFilterDiv1One>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>RH 여부</StyledFilterDiv1Two>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div
                          key={`default-${type}`}
                          className="mb-3"
                          style={{ marginTop: '20px', display: 'flex' }}
                        >
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label="RH-"
                            style={{ marginRight: '20px' }}
                          />
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label="RH+"
                          />
                        </div>
                      ))}
                    </Form>
                  </StyledFilterDiv1One>
                  {/* <StyledFilterDiv1One>
                    <select
                      onChange={handleSecondListChange}
                      value={firstList2Value}
                      style={{ border: 'none' }}
                    >
                      {selectList2.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1One> */}
                  {/* <StyledFilterDiv1One>
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
                  </StyledFilterDiv1One> */}
                </StyledFilter>

                <section id="list">
                  <Styleddiv2>
                    <StyledTable>
                      <thead>
                        <tr>
                          <th
                            id="area-header"
                            style={{
                              width: '350px',
                              fontWeight: '700',
                              fontSize: '22px',
                            }}
                          >
                            제목 / 내용
                          </th>
                          <th
                            style={{
                              width: '100px',
                            }}
                          >
                            &nbsp;
                          </th>
                          <th
                            id="centerName-header"
                            style={{
                              width: '200px',
                              fontWeight: '700',
                              fontSize: '22px',
                            }}
                          >
                            모집인원 및 현황
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {' '}
                        {inputData.map((element, index) => {
                          const markerPositions = [
                            [element.latitude, element.longitude],
                          ];
                          return (
                            <React.Fragment key={element.id}>
                              <tr onClick={() => handleRowClick(index)}>
                                <td
                                  headers="area-header"
                                  style={{
                                    width: '350px',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    textAlign: 'left',
                                  }}
                                >
                                  {element.title}
                                  <br />
                                  {element.startDate}
                                  <br />
                                  필요한 혈액형 : {element.patientBlood}
                                  <br />
                                  혈액 종류 : {element.bloodType}
                                  <br />
                                  장소 : {element.hospitalName}
                                </td>
                                <td></td>
                                <td
                                  headers="centerName-header"
                                  style={{
                                    width: '200px',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                  }}
                                >
                                  <br />
                                  모집중
                                  <br />
                                  <Styledimg
                                    src={icon}
                                    className="main-icon"
                                    alt="logo"
                                  />
                                  <br />
                                  <button
                                    // type="button"
                                    variant="primary"
                                    onClick={() => handleDetailClick()}
                                  >
                                    참여하기
                                  </button>
                                </td>
                              </tr>

                              {openIndex === index && (
                                <tr>
                                  <td colSpan={2}>
                                    {/* <Styledtd1 id="wrap">
                                      <KakaoMap
                                        markerPositions={markerPositions}
                                        size={mapSize}
                                      />
                                    </Styledtd1> */}
                                    <Styledtxt
                                      style={{
                                        width: '450px',
                                      }}
                                    >
                                      {element.content}
                                    </Styledtxt>
                                  </td>
                                  <td>
                                    <Styledtd2
                                      colSpan={1}
                                      style={{
                                        width: '100px',
                                      }}
                                    >
                                      {/* <Styledtxt>{element.content}</Styledtxt> */}
                                    </Styledtd2>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </StyledTable>
                  </Styleddiv2>
                </section>
              </Tab.Content>
            </Tab>

            <Tab eventKey="home" title="병원">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1>
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
                      {/* <select
                      value={secondListOptions}
                      onChange={setSecondListOptions}
                    >
                      {secondListOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select> */}
                    </StyledFilterDiv1One>
                    <StyledFilterDiv1One>
                      <StyledFilterDiv1Two>RH 여부</StyledFilterDiv1Two>
                      <Form>
                        {['checkbox'].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              label="RH-"
                            />
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              label="RH+"
                            />
                          </div>
                        ))}
                      </Form>
                    </StyledFilterDiv1One>
                    {/* <StyledFilterDiv1One>
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
                  </StyledFilterDiv1One> */}
                  </StyledFilterDiv1>
                </StyledFilter>
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
                                {/* <Nav.Link type="button" href="/DBD_PostGeneral">
                                  <StyledButtonDiv>참여하기</StyledButtonDiv>
                                </Nav.Link> */}
                                <button type="button">참여하기</button>
                              </Styledtd>
                            </Styledtr>
                          );
                        })}
                      </Styledtbody1>
                    </Table>
                  </Accordion>
                </Styleddiv2>
              </Tab.Content>
            </Tab>
          </Tabs>
        </StyledTab1>
      </StyledSubcomment>
    </StyledAll>
  );
}
// const Styledtd = styled.div`
//   display: block;
// `;
const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
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
  height: 242px;
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
  width: 230px;
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
  margin-left: 510px;
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
// 옛날
const StyledTable = styled(Table)`
  border-collapse: collapse;
  font-family: Gmarket Sans TTF;
  font-style: normal;
  text-align: center;
  color: #333333;
  border: 1px;
  th,
  tbody,
  td td {
    padding: 0;
  }
`;
const StyledFilter = styled.div`
  width: 865px;
  height: 145px;
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
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
  margin-top: 20px;
`;

// const Styleddiv2 = styled.div`
//   margin-right: 100px;
//   margin-left: 100px;
//   text-align: center;
// `;
const Styledtd2 = styled.div`
  /* display: block; */
  margin-top: 50px;
`;
export default DBD_General;
