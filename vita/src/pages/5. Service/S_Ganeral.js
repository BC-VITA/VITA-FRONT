import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, FloatingLabel, Accordion, Table, Nav, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import icon from './heart.png';

function S_Ganeral() {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');

  const mapSize = [450, 300];
  //지역선택
  const selectArea1 = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
  const [volunteerArea1, setvolunteerArea] = useState('전체'); //지역선택에서 사용하는 값
  function handleAreaChange(event) {
    const selectedValue = event.target.value;
    setvolunteerArea(selectedValue);
  }
  //봉사분야
  const selectType = ['전체', '생활편의시설', '주거환경', '교육', '보건의료', '환경보호'];
  const [volunteerBigType1, setvolunteerBigType] = useState('생활편의시설'); // 실제로 사용하는 분야의 첫번째 값
  const [volunteerSmallType, setvolunteerSmallType] = useState(['전체', '활동보조', '아동보조', '청결지도', '급식지원', '식사반찬지원', '기타',]);
  const [volunteerSmallType11, setvolunteerSmallType1] = useState('전체'); //실제로 사용하는 분야의 두번째 값
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
  //자격요건
  const selectField4 = ['전체', '있음', '없음'];
  const [volunteercondition, setvolunteercondition] = useState('전체'); //모집상태에서 실제 사용하는 값
  const handleSelectVolunteercondition = (e) => {
    setvolunteercondition(e.target.value);
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
  const [inputData, setInputData] = useState([{}, {}]);
  const type = 'time';
  const [wishList123, setWishList123] = useState([]);
  useEffect(() => {
    const url = `http://localhost:8004/volunteer/board/list?volunteerType=${type}`;
    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
        console.log(res);
      });

    fetch('http://localhost:8004/user/wishListTable', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setWishList123(res);
      });
  }, []);

  const handleReservation = (
    volunteerArea1,
    volunteerBigType1,
    volunteerSmallType11,
    activitySection1,
    volunteerTarget1,
    volunteerCategory
  ) => {
    navigate('/S_PostGT', {
      state: {
        volunteerArea1,
        volunteerBigType1,
        volunteerSmallType11,
        activitySection1,
        volunteerTarget1,
        volunteerCategory,
      },
    });
  };
  //필터
  const handleSearch = () => {
    const filteredData = inputData.filter((item) => {
      if (
        (volunteerArea1.length === 1 && volunteerArea1[0] === '전체') ||
        (volunteerBigType1.length === 1 && volunteerBigType1[0] === '전체') ||
        (activitySection1.length === 1 && activitySection1[0] === '전체') ||
        (volunteerTarget1.length === 1 && volunteerTarget1[0] === '전체') ||
        (volunteerCategory.length === 1 && volunteerCategory[0] === '전체')
      ) {
        return true;
      }
      return (
        volunteerArea1.includes(item.volunteerArea) &&
        volunteerBigType1.includes(item.volunteerField) &&
        activitySection1.includes(item.activitySection) &&
        volunteerTarget1.includes(item.volunteerTarget) &&
        volunteerCategory.includes(item.volunteerPersonType)
        // 봉사분야2, 모집상태
      );
    });
    setInputData(filteredData);
    console.log('검색 결과:', filteredData);
  };
  //초기화
  const handlereturn = () => {
    window.location.reload();
  };
  const handleJoin = (element) => {
    navigate('/S_ReservationFirst', { state: { element } });
  };

  //수정
  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const handleClick = async (volunteerId) => {
    fetch('http://localhost:8004/user/wishList/wishListUpdate', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userId: userId,
        boardId: volunteerId,
        boardType: "volunteer"
      }),
    })
      .then((res) => {
        res.json();
      });
  };

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>봉사하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv21>
              <Nav.Link href="/S_Main">
                <StyledSubDiv22g>자원봉사란</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21p>
              <Nav.Link href="/S_Ganeral">
                <StyledSubDiv22>개인봉사</StyledSubDiv22>
              </Nav.Link>
            </StyledSubDiv21p>
            <StyledSubDiv21>
              <Nav.Link href="/S_Group">
                <StyledSubDiv22g>기업 단체 봉사</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/S_Other">
                <StyledSubDiv22g>타기관 봉사정보</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/S_WatchList">
                <StyledSubDiv22g>관심목록</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>개인봉사</StyledTitle>
          <StyledButton
            onClick={() =>
              handleReservation(
                volunteerArea1,
                volunteerBigType1,
                volunteerSmallType11,
                activitySection1,
                volunteerTarget1,
                volunteerCategory
              )
            }
          >
            작성하기
          </StyledButton>
        </StyledTop>
        <StyledTab1>
          <Tabs>
            <Tab eventKey="Time" title="시간인증">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1 style={{ marginTop: '10px' }}>
                    <StyledFilterDivTitle style={{ width: '100px' }}>
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
                    <StyledFilterDivTitle style={{ width: '110px' }}>
                      봉사자 유형
                    </StyledFilterDivTitle>
                  </StyledFilterDiv1>
                  <StyledFilterDiv1>
                    <select
                      onChange={handleAreaChange}
                      value={
                        Array.isArray(volunteerArea1)
                          ? volunteerArea1
                          : [volunteerArea1]
                      }
                      style={{
                        border: 'none',
                        width: '100px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                      multiple
                    >
                      {selectArea1.map((item) => (
                        <option
                          value={item}
                          key={item.area}
                          style={{
                            backgroundColor: volunteerArea1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerArea1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleTypeChange}
                      value={
                        Array.isArray(volunteerBigType1)
                          ? volunteerBigType1
                          : [volunteerBigType1]
                      }
                      style={{
                        border: 'none',
                        width: '130px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                      multiple
                    >
                      {selectType.map((item) => (
                        <option
                          value={item}
                          key={item.bigType}
                          style={{
                            backgroundColor: volunteerBigType1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerBigType1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleTypeChange1}
                      value={
                        Array.isArray(volunteerSmallType11)
                          ? volunteerSmallType11
                          : [volunteerSmallType11]
                      }
                      style={{
                        border: 'none',
                        width: '130px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                      multiple
                    >
                      {volunteerSmallType.map((option) => (
                        <option
                          key={option.smalltype}
                          value={option}
                          style={{
                            backgroundColor: volunteerSmallType11.includes(
                              option
                            )
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerSmallType11.includes(option)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectActivitySection}
                      value={
                        Array.isArray(activitySection1)
                          ? activitySection1
                          : [activitySection1]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '110px',
                      }}
                      multiple
                    >
                      {selectField3.map((item) => (
                        <option
                          value={item}
                          key={item.section}
                          style={{
                            backgroundColor: activitySection1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: activitySection1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerTarget}
                      value={
                        Array.isArray(volunteerTarget1)
                          ? volunteerTarget1
                          : [volunteerTarget1]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '120px',
                      }}
                      multiple
                    >
                      {selectVolunteerTarget.map((item) => (
                        <option
                          value={item}
                          key={item.target}
                          style={{
                            backgroundColor: volunteerTarget1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerTarget1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerState}
                      value={
                        Array.isArray(volunteerState)
                          ? volunteerState
                          : [volunteerState]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '110px',
                      }}
                      multiple
                    >
                      {selectField5.map((item) => (
                        <option
                          value={item}
                          key={item.state}
                          style={{
                            backgroundColor: volunteerState.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerState.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerCategory}
                      value={
                        Array.isArray(volunteerCategory)
                          ? volunteerCategory
                          : [volunteerCategory]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '110px',
                      }}
                      multiple
                    >
                      {selectField6.map((item) => (
                        <option
                          value={item}
                          key={item.category}
                          style={{
                            backgroundColor: volunteerCategory.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerCategory.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1>
                  <StyledFilterDiv1 style={{ marginTop: '15px' }}>
                    <StyledFilterDivTitle2>봉사기간</StyledFilterDivTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      style={{
                        border: 'none',
                      }}
                      onChange={handleStartDateChange}
                    />
                    <StyledFilterDivTitle2>
                      &nbsp;&nbsp;&nbsp;-&nbsp;
                    </StyledFilterDivTitle2>
                    <input
                      type="Date"
                      value={endDate}
                      style={{
                        border: 'none',
                      }}
                      onChange={handleEndDateChange}
                    />
                    <StyledButton2 onClick={handleSearch}>검색</StyledButton2>
                    <StyledButton3 onClick={handlereturn}>초기화</StyledButton3>
                  </StyledFilterDiv1>
                  <StyledFilterDiv2>
                    <FloatingLabel
                      label="봉사명"
                      name="volunteer"
                      value={volunteer}
                      onChange={handleChangeVolunteer}
                      style={{
                        marginTop: '10px',
                        marginLeft: '15px',
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
                        marginLeft: '15px',
                        width: '400px',
                        height: '50px',
                      }}
                    >
                      <Form.Control type="demand" />
                    </FloatingLabel>
                  </StyledFilterDiv2>
                </StyledFilter>

                {/* <section>
                  <Accordion defaultActiveKey="0">
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr style={{ textAlign: 'center' }}>
                          <th style={{ width: '600px' }}>제목 / 내용</th>
                          <th>모집인원 및 현황</th>
                        </tr>
                      </thead>
                      <Styledtbody1>
                        {inputData.map((element, index) => {
                          const markerPositions = [
                            [element.latitude, element.longitude],
                          ];
                          return (
                            <Styledtr key={element.id}>
                              <Styledtd>
                                <Accordion.Item eventKey={index}>
                                  <Accordion.Header>
                                    {element.title}
                                    <br />
                                    글을 올린 날짜: {element.startDate}
                                    <br />
                                    모집기간: {element.volunteerSeekStartDate}-
                                    {element.volunteerSeekEndDate}
                                    <br />
                                    활동날짜: {element.volunteerStartTime}-
                                    {element.volunteerEndTime}
                                    <br />
                                    활동요일: {element.volunteerActivityWeek}
                                    <br />
                                    봉사시간: {element.volunteerStartTime}-
                                    {element.volunteerEndTime}
                                    <br />
                                    봉사장소: {element.volunteerPlace}
                                  </Accordion.Header>
                                  <Accordion.Body colSpan={2}>
                                    모집인원: {element.needVolunteerNumber}
                                    <br />
                                    신청인원: {element.bloodType}
                                    <br />
                                    봉사자 유형: {element.volunteerPersonType}
                                    <br />
                                    주소: {element.volunteerAddress}
                                    <br />
                                    <KakaoMap
                                      markerPositions={markerPositions}
                                      size={mapSize}
                                    />
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Styledtd>
                              <Styledtd
                                style={{
                                  padding: '30px',
                                  margin: 'auto',
                                }}
                              >
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
                              </Styledtd>
                            </Styledtr>
                          );
                        })}
                      </Styledtbody1>
                    </Table>
                  </Accordion>
                </section> */}

                <section id="list">
                  <Styleddiv2>
                    <StyledTable>
                      <thead>
                        <tr>
                          <th
                            id="area-header"
                            style={{ width: '350px', fontWeight: '700', fontSize: '22px' }}>
                            제목 / 내용
                          </th>
                          <th
                            style={{ width: '100px' }}>
                            &nbsp;
                          </th>
                          <th
                            id="centerName-header"
                            style={{ width: '200px', fontWeight: '700', fontSize: '22px' }}>
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
                          let iconFilterValue = '100%';
                          wishList123.forEach((item) => {
                            if (item.volunteerBoardId === element.volunteerId && item.userId === userId) {
                              iconFilterValue = '0%';
                            }
                          });
                          return (
                            <React.Fragment key={element.id}>
                              <tr>
                                <td
                                  onClick={() => handleRowClick(index)}
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
                                  글을 올린 날짜: {element.startDate}
                                  <br />
                                  모집기간: {element.volunteerSeekStartDate}-
                                  {element.volunteerSeekEndDate}
                                  <br />
                                  활동날짜: {element.volunteerStartTime}-
                                  {element.volunteerEndTime}
                                  <br />
                                  활동요일: {element.volunteerActivityWeek}
                                  <br />
                                  봉사시간: {element.volunteerStartTime}-
                                  {element.volunteerEndTime}
                                  <br />
                                  봉사장소: {element.volunteerPlace}
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
                                    onClick={() => handleClick(element.volunteerId)}
                                    style={{
                                      cursor: 'pointer',
                                      filter: `grayscale(${iconFilterValue})`,
                                    }}
                                  />
                                  <br />
                                  <button
                                    type="button"
                                    onClick={() => handleJoin(element)}
                                    style={{
                                      width: '100px',
                                      height: '35px',
                                      marginTop: '5px',
                                      borderRadius: '9px',
                                      background: '#d9d9d9',
                                      color: '#333333',
                                      border: 'none',
                                    }}
                                  >
                                    참여하기
                                  </button>
                                </td>
                              </tr>
                              {openIndex === index && (
                                <tr>
                                  <td colSpan={2}>
                                    <Styledtd1 id="wrap">
                                      <KakaoMap
                                        markerPositions={markerPositions}
                                        size={mapSize}
                                      />
                                    </Styledtd1>
                                  </td>
                                  <td>
                                    <Styledtd2
                                      colSpan={1}
                                      style={{
                                        width: '200px',
                                      }}
                                    >
                                      <Styledtxt>
                                        모집인원: {element.needVolunteerNumber}
                                        <br />
                                        신청인원: {element.bloodType}
                                        <br />
                                        봉사자 유형:{' '}
                                        {element.volunteerPersonType}
                                        <br />
                                        주소: {element.volunteerAddress}
                                        <br />
                                      </Styledtxt>
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
            <Tab eventKey="Activity" title="활동인증">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1 style={{ marginTop: '10px' }}>
                    <StyledFilterDivTitle style={{ width: '125px' }}>
                      지역선택
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '135px' }}>
                      활동 구분
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '145px' }}>
                      봉사 대상
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '135px' }}>
                      자격요건
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '135px' }}>
                      모집상태
                    </StyledFilterDivTitle>
                    <StyledFilterDivTitle style={{ width: '135px' }}>
                      봉사자 유형
                    </StyledFilterDivTitle>
                  </StyledFilterDiv1>
                  <StyledFilterDiv1>
                    <select
                      onChange={handleAreaChange}
                      value={
                        Array.isArray(volunteerArea1)
                          ? volunteerArea1
                          : [volunteerArea1]
                      }
                      style={{
                        border: 'none',
                        width: '125px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      }}
                      multiple
                    >
                      {selectArea1.map((item) => (
                        <option
                          value={item}
                          key={item.area}
                          style={{
                            backgroundColor: volunteerArea1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerArea1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectActivitySection}
                      value={
                        Array.isArray(activitySection1)
                          ? activitySection1
                          : [activitySection1]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '135px',
                      }}
                      multiple
                    >
                      {selectField3.map((item) => (
                        <option
                          value={item}
                          key={item.section}
                          style={{
                            backgroundColor: activitySection1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: activitySection1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerTarget}
                      value={
                        Array.isArray(volunteerTarget1)
                          ? volunteerTarget1
                          : [volunteerTarget1]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '145px',
                      }}
                      multiple
                    >
                      {selectVolunteerTarget.map((item) => (
                        <option
                          value={item}
                          key={item.target}
                          style={{
                            backgroundColor: volunteerTarget1.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerTarget1.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteercondition}
                      value={
                        Array.isArray(volunteercondition)
                          ? volunteercondition
                          : [volunteercondition]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '135px',
                      }}
                      multiple
                    >
                      {selectField4.map((item) => (
                        <option
                          value={item}
                          key={item.state}
                          style={{
                            backgroundColor: volunteercondition.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteercondition.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerState}
                      value={
                        Array.isArray(volunteerState)
                          ? volunteerState
                          : [volunteerState]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '135px',
                      }}
                      multiple
                    >
                      {selectField5.map((item) => (
                        <option
                          value={item}
                          key={item.state}
                          style={{
                            backgroundColor: volunteerState.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerState.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleSelectVolunteerCategory}
                      value={
                        Array.isArray(volunteerCategory)
                          ? volunteerCategory
                          : [volunteerCategory]
                      }
                      style={{
                        border: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        width: '135px',
                      }}
                      multiple
                    >
                      {selectField6.map((item) => (
                        <option
                          value={item}
                          key={item.category}
                          style={{
                            backgroundColor: volunteerCategory.includes(item)
                              ? 'rgb(128, 128, 128)'
                              : 'inherit',
                            color: volunteerCategory.includes(item)
                              ? 'white'
                              : 'black',
                          }}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1>
                  <StyledFilterDiv1 style={{ marginTop: '15px' }}>
                    <StyledFilterDivTitle2>봉사기간</StyledFilterDivTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      style={{
                        border: 'none',
                      }}
                      onChange={handleStartDateChange}
                    />
                    <StyledFilterDivTitle2>
                      &nbsp;&nbsp;&nbsp;-&nbsp;
                    </StyledFilterDivTitle2>
                    <input
                      type="Date"
                      value={endDate}
                      style={{
                        border: 'none',
                      }}
                      onChange={handleEndDateChange}
                    />
                    <StyledButton2 onClick={handleSearch}>검색</StyledButton2>
                    <StyledButton3 onClick={handlereturn}>초기화</StyledButton3>
                  </StyledFilterDiv1>
                  <StyledFilterDiv2>
                    <FloatingLabel
                      label="봉사명"
                      name="volunteer"
                      value={volunteer}
                      onChange={handleChangeVolunteer}
                      style={{
                        marginTop: '10px',
                        marginLeft: '15px',
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
                        marginLeft: '15px',
                        width: '400px',
                        height: '50px',
                      }}
                    >
                      <Form.Control type="demand" />
                    </FloatingLabel>
                  </StyledFilterDiv2>
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
                                  글을 올린 날짜: {element.startDate}
                                  <br />
                                  모집기간: {element.volunteerSeekStartDate}-
                                  {element.volunteerSeekEndDate}
                                  <br />
                                  활동날짜: {element.volunteerStartTime}-
                                  {element.volunteerEndTime}
                                  <br />
                                  활동요일: {element.volunteerActivityWeek}
                                  <br />
                                  봉사시간: {element.volunteerStartTime}-
                                  {element.volunteerEndTime}
                                  <br />
                                  봉사장소: {element.volunteerPlace}
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
                                    type="button"
                                    onClick={() => handleJoin(element)}
                                    style={{
                                      width: '100px',
                                      height: '35px',
                                      marginTop: '5px',
                                      borderRadius: '9px',
                                      background: '#d9d9d9',
                                      color: '#333333',
                                      border: 'none',
                                    }}
                                  >
                                    참여하기
                                  </button>
                                </td>
                              </tr>

                              {openIndex === index && (
                                <tr>
                                  <td colSpan={2}>
                                    <Styledtd1 id="wrap">
                                      <KakaoMap
                                        markerPositions={markerPositions}
                                        size={mapSize}
                                      />
                                    </Styledtd1>
                                  </td>
                                  <td>
                                    <Styledtd2
                                      colSpan={1}
                                      style={{
                                        width: '200px',
                                      }}
                                    >
                                      <Styledtxt>
                                        모집인원: {element.needVolunteerNumber}
                                        <br />
                                        신청인원: {element.bloodType}
                                        <br />
                                        봉사자 유형:{' '}
                                        {element.volunteerPersonType}
                                        <br />
                                        주소: {element.volunteerAddress}
                                        <br />
                                      </Styledtxt>
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
          </Tabs>
        </StyledTab1>
      </StyledSubcomment>
    </StyledAll>
  );
}

// const StyledAll = styled.div`
//   display: flex;
//   padding-bottom: 300px;
// `;
// const StyledSub = styled.div`
//   width: 170px;
//   /* height: 175px; */
//   margin-top: 25px;
//   margin-left: 205px;
// `;
// const StyledSubDiv1 = styled.div`
//   width: 190px;
//   height: 50px;
//   /* left: 370px;
//   top: 123px; */
//   background: #ff9f9f;
//   font-family: 'Gmarket Sans TTF';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 23px;
//   line-height: 55px;
//   /* identical to box height, or 100% */
//   text-align: center;
//   color: #ffffff;
// `;
// const StyledSubDiv2 = styled.div`
//   width: 190px;
//   height: 278px;
//   border: 3px solid #d7d7d7;
// `;
// const StyledSubDiv21 = styled.div`
//   border-bottom: 3px solid #d7d7d7;
//   background-color: white;
//   height: 55px;
//   margin-left: 3px;
//   margin-right: 3px;
// `;
// const StyledSubDiv21p = styled.div`
//   border-bottom: 3px solid #ff9f9f;
//   background-color: white;
//   height: 55px;
//   margin-left: 3px;
//   margin-right: 3px;
// `;
// const StyledSubDiv22 = styled.div`
//   border: solid white 3px;
//   height: 24px;
//   font-family: 'Gmarket Sans TTF';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 19px;
//   line-height: 38px;
//   /* identical to box height, or 100% */
//   text-align: center;
//   color: #333333;
// `;
// const StyledSubDiv22g = styled.div`
//   border: solid white 3px;
//   height: 24px;
//   font-family: 'Gmarket Sans TTF';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 19px;
//   line-height: 38px;
//   /* identical to box height, or 100% */
//   text-align: center;
//   color: #969696;
// `;
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
  height: 302px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv21 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv21p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv22 = styled.div`
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
const StyledSubDiv22g = styled.div`
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
  margin-left: 30em;
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
const StyledButton2 = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 220px;
  margin-top: 5px;
  border-radius: 9px;
  background: #d9d9d9;
  color: #333333;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  border: none;
`;
const StyledButton3 = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 9px;
  background: #d9d9d9;
  color: #333333;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  border: none;
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
  line-height: 40px;
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

// 수정
const Styleddiv2 = styled.div`
  text-align: center;
`;
const StyledTable = styled(Table)`
  /* margin-top: 30px; */
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
const Styledtd1 = styled.div`
  /* width: 500px; */
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
  /* line-height: 30px; */
  /* or 158% */
  letter-spacing: 0.05em;
  color: #333333;
`;
export default S_Ganeral;
