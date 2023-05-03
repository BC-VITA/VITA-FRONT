import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';

function BD_House() {
  const navigate = useNavigate();

  const selectList1 = ['전체', '인천', '서울', '경기도', '강원도'];
  const [firstListValue, setFirstListValue] = useState('');
  const [secondListOptions, setSecondListOptions] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
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

  function handleReservation() {
    navigate('/s_main');
  }
  useEffect(() => {
    fetch('http://localhost:8004/blood/board/list ', {
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

  const filteredData = firstListValue === '전체' ? inputData : inputData.filter((item) => item.area === firstListValue);

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2One>
              <Nav.Link href="/BD_Main">
                <StyledSubDiv2Two>헌혈이란</StyledSubDiv2Two>
              </Nav.Link>
            </StyledSubDiv2One>
            <StyledSubDiv2Onep>
              <Nav.Link href="/BD_House">
                <StyledSubDiv2Two2>헌혈하기</StyledSubDiv2Two2>
              </Nav.Link>
            </StyledSubDiv2Onep>
            <StyledSubDiv2One>
              <Nav.Link href="/DBD_WatchList">
                <StyledSubDiv2Two>관심목록</StyledSubDiv2Two>
              </Nav.Link>
            </StyledSubDiv2One>
            <StyledSubDiv2One>
              <Nav.Link href="/DBD_News">
                <StyledSubDiv2Two>따뜻한 사례</StyledSubDiv2Two>
              </Nav.Link>
            </StyledSubDiv2One>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈하기</StyledTitle>
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
                    <select value={secondListOptions} onChange={setSecondListOptions}>
                      {secondListOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1One>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>&nbsp;기&nbsp;간&nbsp;</StyledFilterDiv1Two>
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
                    <select value={secondListOptions} onChange={setSecondListOptions}>
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
                    <StyledTable striped>
                      <thead>
                        <tr>
                          <th id="area-header">지역</th>
                          <th id="centerName-header">헌혈의 집</th>
                          <th id="bloodHouseAddress-header">주소</th>
                          <th id="bloodHousePhoneNumber-header">전화번호</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((element, index) => {
                          return (
                            <React.Fragment key={index}>
                              <tr onClick={() => handleRowClick(index)}>
                                <td headers="area-header">{element.area}</td>
                                <td headers="centerName-header">{element.centerName}</td>
                                <td headers="bloodHouseAddress-header">{element.bloodHouseAddress}</td>
                                <td headers="bloodHousePhoneNumber-header">{element.bloodHousePhoneNumber}</td>
                                <td><div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <button onClick={handleReservation}>예약하기</button>
                                  <button type='button' style={{ marginTop: '10px' }}>자세히보기</button>
                                </div></td>
                              </tr>
                              {openIndex === index && (
                                <tr>
                                  <td colSpan="5">지도 나오게 하기</td>
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
              <Tab.Content>skjfjsf</Tab.Content>
            </Tab>
          </Tabs>
        </StyledTab>
      </StyledSubcomment>
      <div className="home">{error && <div>{error}</div>}</div>
    </StyledAll >
  );
}
const StyledTable = styled(Table)`
  border-collapse: collapse;
  th,tbody,td
  td {
    padding: 0;
  }
`;
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
const StyledSubDiv2One = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 50px;
  margin-left: 2px;
  margin-right: 2px;
`;
const StyledSubDiv2Onep = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 50px;
  margin-left: 2px;
  margin-right: 2px;
`;
const StyledSubDiv2Two2 = styled.div`
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
const StyledSubDiv2Two = styled.div`
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

const StyledTab = styled.div`
  margin-top: 5px;
  padding-bottom: 500px;
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
export default BD_House;
