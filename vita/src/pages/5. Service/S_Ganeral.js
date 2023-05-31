import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Accordion from 'react-bootstrap/Accordion';
import icon from './heart.png';

function S_Ganeral() {
  const [id, setId] = useState('');
  const handleChangeId = ({ target: { value } }) => setId(value);

  const navigate = useNavigate();

  const [mapSize, setMapSize] = useState([300, 300]);

  //지역선택
  const selectArea1 = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
  const [volunteerArea1, setvolunteerArea] = useState('전체'); //지역선택에서 사용하는 값
  function handleAreaChange(event) {
    const selectedValue = event.target.value;
    setvolunteerArea(selectedValue);
  }

  //봉사분야
  const selectType = ['전체', '생활편의시설', '주거환경', '교육', '보건의료', '환경보호'];
  const [volunteerBigType1, setvolunteerBigType] = useState('전체'); // 실제로 사용하는 분야의 첫번째 값
  const [volunteerSmallType, setvolunteerSmallType] = useState([
    '검색할 봉사분야를 골라주세요',
  ]);
  const [volunteerSmallType11, setvolunteerSmallType1] = useState(''); //실제로 사용하는 분야의 두번째 값

  function handleTypeChange(event) {
    const selectedValue1 = event.target.value;
    setvolunteerBigType(selectedValue1);

    if (selectedValue1 === '전체') {
      setvolunteerSmallType(['검색할 봉사분야를 골라주세요']);
      setvolunteerSmallType1(['검색할 봉사분야를 골라주세요']);
    } else if (selectedValue1 === '생활편의시설') {
      setvolunteerSmallType(['전체', '활동보조', '아동보조', '청결지도', '급식지원', '식사반찬지원', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '주거환경') {
      setvolunteerSmallType(['전체', '주거개선', '마을공동체활동', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '안전예방') {
      setvolunteerSmallType(['전체', '지역안전', '교통안전', '어린이 안전', '청소년 안전', '취약계층 안전', '안신고활동', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '교육') {
      setvolunteerSmallType(['전체', '방과후 교육', '학습지도 교육', '특수교육', '평생교육', '전문교육', '진로체험교육', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '보건의료') {
      setvolunteerSmallType(['전체', '간호간병', '의료지원', '헌혈', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '문화행사') {
      setvolunteerSmallType(['전체', '행사보조', '공연활동', '켐페인', '관광안내', '사진촬영', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '환경보호') {
      setvolunteerSmallType(['전체', '환경정화', '환경감시', '기타']);
      setvolunteerSmallType1('전체');
    }
  }
  function handleTypeChange1(event) {
    const selectedValue = event.target.value;
    setvolunteerSmallType1(selectedValue);
  }

  //활동구분
  const selectField3 = ['전체', '온라인', '오프라인'];
  const [activitySection1, setactivitySection] = useState('전체'); //활동구분에서 실제 사용하는 값
  const handleSelectActivitySection = (e) => {
    setactivitySection(e.target.value);
  };

  //봉사대상
  const selectVolunteerTarget = ['전체', '아동.청소년', '장애인', '노인', '쪽방촌', '다문화가정', '여성', '환경', '사회적기업', '고향봉사', '기타'];
  const [volunteerTarget1, setvolunteerTarget] = useState('전체'); //봉사대상에서 실제 사용하는 값
  const handleSelectVolunteerTarget = (e) => {
    setvolunteerTarget(e.target.value);
  };

  //모집상태
  const selectField5 = ['전체', '모집중', '모집완료'];
  const [volunteerState, setvolunteerState] = useState('전체'); //모집상태에서 실제 사용하는 값
  const handleSelectVolunteerState = (e) => {
    setvolunteerState(e.target.value);
  };

  //봉사자 유형
  const selectField6 = ['전체', '성인', '청소년'];
  const [volunteerCategory, setvolunteerCategory] = useState('전체'); //봉사자유형에서 실제 사용하는 값
  const handleSelectVolunteerCategory = (e) => {
    setvolunteerCategory(e.target.value);
  };

  //봉사기간
  // const selectField7 = ['봉사기간'];
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const handleStartDateChange = ({ target: { value } }) => setstartDate(value);
  const handleEndDateChange = ({ target: { value } }) => setendDate(value);

  //봉사명
  const [volunteer, setVolunteer] = useState('');
  const handleChangeVolunteer = ({ target: { value } }) => setVolunteer(value);

  //수요처명
  const [demand, setDemand] = useState('');
  const handleChangeDemand = ({ target: { value } }) => setDemand(value);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const [inputData, setInputData] = useState([{}, {},]);
  const userId = 'time';
  useEffect(() => {
    const url = `http://localhost:8004/volunteer/board/list?volunteerType=${userId}`;

    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
      });
  }, []);

  const handleReservation = (volunteerArea1, volunteerBigType1, volunteerSmallType11, activitySection1, volunteerTarget1, volunteerCategory) => {
    navigate('/S_PostGT', { state: { volunteerArea1, volunteerBigType1, volunteerSmallType11, activitySection1, volunteerTarget1, volunteerCategory } });
  };

  // const filteredData =           //전체 api 완성하면 필터 완성하겟음
  //   firstAreaValue === '전체'
  //     ? inputData
  //     : inputData.filter((item) => item.area === firstAreaValue);

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>봉사하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_Main">
                <StyledSubDiv2_2g>자원봉사란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/S_Ganeral">
                <StyledSubDiv2_2>개인봉사</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_Group">
                <StyledSubDiv2_2g>기업 단체 봉사</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_Other">
                <StyledSubDiv2_2g>타기관 봉사정보</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_WatchList">
                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>개인봉사</StyledTitle>
          <StyledButton onClick={() => handleReservation(volunteerArea1, volunteerBigType1, volunteerSmallType11, activitySection1, volunteerTarget1, volunteerCategory)}>
            작성하기
          </StyledButton>
        </StyledTop>
        <StyledTab1>
          <Tabs>
            <Tab eventKey="Time" title="시간인증">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1 style={{ marginTop: '10px' }}>
                    <StyledFilterDivTitle
                      style={{ width: '100px' }}>
                      지역선택
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '260px' }}>
                      봉사분야
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '110px' }}>
                      활동 구분
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '120px' }}>
                      봉사 대상
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '110px' }}>
                      모집상태
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '110px' }} >
                      봉사자 유형
                    </StyledFilterDivTitle>
                  </StyledFilterDiv1>
                  <StyledFilterDiv1>
                    <select
                      onChange={handleAreaChange}
                      value={volunteerArea1}
                      style={{ border: 'none', width: '100px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                      multiple
                    >
                      {selectArea1.map((item) => (
                        <option value={item} key={item}
                          style={{
                            backgroundColor: volunteerArea1.includes(item) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: volunteerArea1.includes(item) ? 'white' : 'black'
                          }}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleTypeChange}
                      value={volunteerBigType1}
                      style={{ border: 'none', width: '130px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                      multiple
                    >
                      {selectType.map((item) => (
                        <option value={item} key={item}
                          style={{
                            backgroundColor: volunteerBigType1.includes(item) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: volunteerBigType1.includes(item) ? 'white' : 'black'
                          }}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleTypeChange1}
                      value={volunteerSmallType11}
                      style={{ border: 'none', width: '130px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                      multiple
                    >
                      {volunteerSmallType.map((option) => (
                        <option key={option} value={option}
                          style={{
                            backgroundColor: volunteerSmallType11.includes(option) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: volunteerSmallType11.includes(option) ? 'white' : 'black'
                          }}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectActivitySection}
                      value={activitySection1}
                      style={{ border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '110px' }}
                      multiple
                    >
                      {selectField3.map((item) => (
                        <option value={item} key={item}
                          style={{
                            backgroundColor: activitySection1.includes(item) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: activitySection1.includes(item) ? 'white' : 'black'
                          }}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerTarget}
                      value={volunteerTarget1}
                      style={{ border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '120px' }}
                      multiple
                    >
                      {selectVolunteerTarget.map((item) => (
                        <option value={item} key={item}
                          style={{
                            backgroundColor: volunteerTarget1.includes(item) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: volunteerTarget1.includes(item) ? 'white' : 'black'
                          }}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerState}
                      value={volunteerState}
                      style={{ border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', width: '110px' }}
                      multiple
                    >
                      {selectField5.map((item) => (
                        <option value={item} key={item}
                          style={{
                            backgroundColor: volunteerState.includes(item) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: volunteerState.includes(item) ? 'white' : 'black'
                          }}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerCategory}
                      value={volunteerCategory}
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '110px',
                      }}
                      multiple
                    >
                      {selectField6.map((item) => (
                        <option value={item} key={item}
                          style={{
                            backgroundColor: volunteerCategory.includes(item) ? 'rgb(30, 144, 255)' : 'inherit',
                            color: volunteerCategory.includes(item) ? 'white' : 'black'
                          }}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1>
                  <StyledFilterDiv1
                    style={{
                      marginTop: '15px',
                    }}
                  >
                    <StyledFilterDivTitle2>봉사기간</StyledFilterDivTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                      onChange={handleStartDateChange}
                    />
                    <StyledFilterDivTitle2>&nbsp;-&nbsp;</StyledFilterDivTitle2>
                    <input
                      type="Date"
                      value={endDate}
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                      onChange={handleEndDateChange}
                    />
                  </StyledFilterDiv1>
                  <StyledFilterDiv2>
                    <FloatingLabel
                      label="봉사명"
                      name="volunteer"
                      value={volunteer}
                      onChange={handleChangeVolunteer}
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        width: '400px',
                        height: '50px',
                      }}
                    >
                      <Form.Control type="volunteer" />
                    </FloatingLabel>
                    <FloatingLabel
                      label="수요처명"
                      name="demand"
                      value={demand}
                      onChange={handleChangeDemand}
                      style={{
                        marginTop: '10px',
                        marginLeft: '25px',
                        width: '400px',
                        height: '50px',
                      }}
                    >
                      <Form.Control type="demand" />
                    </FloatingLabel>
                  </StyledFilterDiv2>
                </StyledFilter>
                <section>
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
                          const markerPositions = [
                            [element.latitude, element.longitude],
                          ];
                          return (
                            <Styledtr>
                              <Styledtd>
                                <Accordion.Item eventKey={index}>
                                  <Accordion.Header>
                                    {element.title}
                                    <br />
                                    글을 올린 날짜 : {element.startDate}
                                    <br />
                                    모집기간 : {element.volunteerSeekStartDate}-
                                    {element.volunteerSeekEndDate}
                                    <br />
                                    활동날짜 : {element.volunteerStartTime}-
                                    {element.volunteerEndTime}
                                    <br />
                                    활동요일 : {element.volunteerActivityWeek}
                                    <br />
                                    봉사시간 : {element.volunteerStartTime}-
                                    {element.volunteerEndTime}
                                    <br />
                                    봉사장소 : {element.volunteerPlace}
                                  </Accordion.Header>
                                  <Accordion.Body colSpan={2}>
                                    모집인원 : {element.needVolunteerNumber}
                                    <br />
                                    신청인원 : {element.bloodType}
                                    <br />
                                    봉사자 유형 : {element.volunteerPersonType}
                                    <br />
                                    주소 : {element.volunteerAddress}
                                    <br />
                                    <KakaoMap
                                      markerPositions={markerPositions}
                                      size={mapSize}
                                    />
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Styledtd>
                              <Styledtd>
                                모집중
                                <br />
                                <Styledimg
                                  src={icon}
                                  class
                                  name="main-icon"
                                  alt="logo"
                                />
                                <br />
                                <button type="button">참여하기</button>
                              </Styledtd>
                            </Styledtr>
                          );
                        })}
                      </Styledtbody1>
                    </Table>
                  </Accordion>
                </section>
              </Tab.Content>
            </Tab>
            <Tab eventKey="Activity" title="활동인증">
              <Tab.Content></Tab.Content>
            </Tab>
          </Tabs>
        </StyledTab1>
      </StyledSubcomment>
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
const StyledButton = styled.button`
  width: 125px;
  height: 35px;   
  margin-top: 3px;
  margin-left: 32em;
  border-radius: 9px;
  background: #ff9f9f;
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  border: none;
`;

// 옛날
const StyledTable = styled(Table)`
  border-collapse: collapse;
  th,
  tbody,
  td td {
    padding: 0;
  }
`;

const StyledFilter = styled.div`
  /* width: 865px; */
  /* height: 250px; */
  background: #ffe9e9;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 5px;
  padding-bottom: 25px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  margin-left: 20px;
`;
const StyledFilterDivTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  /* margin-right: 10px;
  margin-left: 20px; */
  background-color: #fefefe;
  border: 1px;
  border-color: #d7d7d7;
  border-style: solid;
  text-align: center;
  padding-top: 5px;
  height: 35px;
`;
const StyledFilterDivTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 10px;
  margin-left: 10px;
  /* background-color: #fefefe;
  border: 1px;
  border-color: #d7d7d7;
  border-style: solid;
  text-align: center;
  padding-top: 5px;
  height: 35px; */
`;

const StyledFilterDiv2 = styled.div`
  width: 850px;
  margin: auto;
  margin-top: 10px;
  display: flex;
`;

const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
`;

const Styleddiv2 = styled.div`
  text-align: center;
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
const Styledtr = styled.tr`
  border: none;
`;
const Styledtd = styled.td`
  border: none;
`;
const Styledimg = styled.img`
  width: 30px;
  height: 25px;
  object-fit: cover;
`;
const Styledtbody1 = styled.tbody`
  border: none;
`;
export default S_Ganeral;
