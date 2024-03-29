import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function BD_Bus() {
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const handleStartDateChange = ({ target: { value } }) => setstartDate(value);
  const handleEndDateChange = ({ target: { value } }) => setendDate(value);

  const [id, setId] = useState('');
  const handleChangeId = ({ target: { value } }) => setId(value);

  const navigate = useNavigate();

  const [mapSize, setMapSize] = useState([850, 300]);
  const selectList1 = [
    '전체',
    '인천',
    '서울',
    '경기',
    '강원',
    '부산',
    '광주',
    '충북',
    '제주',
  ];

  const [firstListValue, setFirstListValue] = useState('전체');
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
      setSecondListOptions([
        '강남구',
        '강동구',
        '강북구',
        '강서구',
        '관악구',
        '광진구',
        '구로구',
        '금천구',
        '노원구',
        '도봉구',
        '동대문구',
        '동작구',
        '마포구',
        '서대문구',
        '사초구',
        '성동구',
        '성북구',
        '송파구',
        '양천구',
        '영등포구',
        '용산구',
        '은평구',
        '종로구',
        '중구',
        '중랑구',
      ]);
    } else if (selectedValue === '부산') {
      setSecondListOptions([
        '강서구',
        '금정구',
        '기장군',
        '남군',
        '동구',
        '동래구',
        '부산진구',
        '북구',
        '사상구',
        '사하구',
        '서구',
        '수영구',
        '연제구',
        '영동구',
        '중구',
        '해운대구',
      ]);
    } else if (selectedValue === '대구') {
      setSecondListOptions([
        '남구',
        '달서구',
        '달성군',
        '동구',
        '북구',
        '서구',
        '수성구',
        '중구',
      ]);
    } else if (selectedValue === '인천') {
      setSecondListOptions([
        '강화군',
        '계양구',
        '남구',
        '남동구',
        '동구',
        '미추홀구',
        '부평구',
        '서구',
        '연수구',
        '옹진구',
        '중구',
      ]);
    } else if (selectedValue === '울산') {
      setSecondListOptions(['남구', '동구', '북구', '울주군', '중구']);
    } else if (selectedValue === '세종') {
      setSecondListOptions(['']);
    } else if (selectedValue === '경기') {
      setSecondListOptions([
        '가평군',
        '고양시 덕양구',
        '고양시 일산동구',
        '고양시 일산서구',
        '과천시',
        '광명시',
        '광주시',
        '구리시',
        '군포시',
        '김포시',
        '남양주시',
        '동두천시',
        '부천시',
        '부천시 소사구',
        '부천시 오정구',
        '부천시 원미구',
        '성남시 분당구',
        '성남시 수정구',
        '성남시 중원구',
        '수원시 권선구',
        '수원시 영통구',
        '수원시 장안구',
        '수원시 팔달구',
        '시흥시',
        '안산시 단원구',
        '안산시 상록구',
        '안성시',
        '안양시 동안구',
        '안양시 만안구',
        '양주시',
        '양평군',
        '여주시',
        '연천군',
        '오산시',
        '용인시 기흥구',
        '용인시 수지구',
        '용인시 처인구',
        '의왕시',
        '의정부시',
        '이천시',
        '파주시',
        '평택시',
        '포천시',
        '하남시',
        '화성시',
      ]);
    } else if (selectedValue === '강원') {
      setSecondListOptions([
        '강릉시',
        '고성군',
        '동해시',
        '삼척시',
        '속초시',
        '양구군',
        '양양군',
        '영월군',
        '원주시',
        '인제군',
        '정선군',
        '철원군',
        '춘천시',
        '태백시',
        '평찬군',
        '홍천군',
        '화천군',
        '횡성군',
      ]);
    } else if (selectedValue === '충북') {
      setSecondListOptions([
        '괴산군',
        '단양군',
        '보은군',
        '영동군',
        '옥천군',
        '음성군',
        '제천시',
        '증평군',
        '진천군',
        '청주시 상당구',
        '청주시 서원구',
        '청주시 청원구',
        '청주시 흥덕구',
        '충주시',
      ]);
    } else if (selectedValue === '대전') {
      setSecondListOptions(['대덕구', '동구', '서구', '유성구', '중구']);
    } else if (selectedValue === '충남') {
      setSecondListOptions([
        '계룡시',
        '공주시',
        '금산군',
        '논산시',
        '당진시',
        '보령시',
        '부여군',
        '서산시',
        '서천군',
        '아산시',
        '예산군',
        '천안시 동남구',
        '천안시 서북구',
        '청양군',
        '태안군',
        '홍성군',
        '',
      ]);
    } else if (selectedValue === '전북') {
      setSecondListOptions([
        '고창군',
        '군산시',
        '김제시',
        '남원시',
        '무주군',
        '부안군',
        '순창군',
        '완주군',
        '익산시',
        '임실군',
        '장수군',
        '전주시 덕진구',
        '전주시 완산구',
        '정읍시',
        '진안군',
      ]);
    } else if (selectedValue === '광주') {
      setSecondListOptions(['광산구', '남구', '동구', '북구', '서구']);
    } else if (selectedValue === '전남') {
      setSecondListOptions([
        '강진군',
        '고흥군',
        '곡성군',
        '광양시',
        '구례군',
        '나주시',
        '담양군',
        '목포시',
        '무안군',
        '보성군',
        '순천시',
        '신안군',
        '여수시',
        '영광군',
        '영암군',
        '완도군',
        '장성군',
        '장흥군',
        '진도군',
        '함평군',
        '해남군',
        '화순군',
      ]);
    } else if (selectedValue === '경북') {
      setSecondListOptions([
        '경산시',
        '경주시',
        '고령군',
        '구미시',
        '군위군',
        '김천시',
        '문경시',
        '봉화군',
        '상주시',
        '성주군',
        '안동시',
        '영덕군',
        '영양군',
        '영주시',
        '영천시',
        '예천군',
        '울릉군',
        '울진군',
        '의성군',
        '청도군',
        '청송군',
        '칠곡군',
        '포항시 남구',
        '포항시 남구',
      ]);
    } else if (selectedValue === '경남') {
      setSecondListOptions([
        '거제시',
        '거창군',
        '고성군',
        '김해시',
        '남해군',
        '밀양시',
        '사천시',
        '산청군',
        '양산시',
        '의령군',
        '진주시',
        '창녕군',
        '창원시 마산합포구',
        '창원시 마산회원구',
        '창원시 성산구',
        '창원시 의창구',
        '창원시 진해구',
        '통영시',
        '하동군',
        '함안군',
        '함양군',
        '합천군',
      ]);
    } else if (selectedValue === '제주') {
      setSecondListOptions(['서귀포시', '제주시']);
    }
  }

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

  const handleReservation = (centerName) => {
    navigate('/BD_ReservationSecond', { state: { centerName } });
  };
  useEffect(() => {
    fetch('http://localhost:8004/blood/bus/list ', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputData(res);
        console.log(inputData);
      });
    console.log(inputData);
    setFirstListValue('전체');
  }, []);

  const filteredData =
    firstListValue === '전체'
      ? inputData
      : inputData.filter((item) => item.area === firstListValue);

  const handleFilter = (value) => {
    setFirstListValue(value);
  };
  const thStyle = {
    width: '80px',
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
    ...thStyle,
    height: '37px',
    background: '#D9D9D9',
    borderRadius: '10px',
    border: 'none',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '37px',
  };
  delete btStyle.width;
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
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_House">
                <StyledSubDiv2_2g>헌혈의 집 찾기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/BD_Bus">
                <StyledSubDiv2_2>헌혈 버스 찾기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Reservation">
                <StyledSubDiv2_2g>헌혈 예약</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>

      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈 버스 찾기</StyledTitle>
          {/* <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton> */}
        </StyledTop>
        <StyledTab1>
          {/* <StyledFilter>
            <StyledFilterDiv1>
              <StyledFilterDivTitle>지역선택</StyledFilterDivTitle>
              <select
                onChange={handleFirstListChange}
                value={firstListValue}
                style={{ border: 'none', marginRight: '20px', height: '40px' }}
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
                style={{ border: 'none', marginRight: '20px', height: '40px' }}
              >
                {secondListOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </StyledFilterDiv1>
            <StyledFilterDiv2 style={{ marginTop: '15px' }}>
              <StyledFilterDivTitle2>
                기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 간
              </StyledFilterDivTitle2>
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
              <StyledFilterDivTitle2>&nbsp;-&nbsp;</StyledFilterDivTitle2>
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
            </StyledFilterDiv2>
            {/* <StyledFilterDiv2>
              <FloatingLabel
                label="헌혈의 집 명 또는 헌혈의 집 주소를 입력해주세요."
                name="id"
                value={id}
                onChange={handleChangeId}
              >
                <Form.Control type="id" placeholder="label" />
              </FloatingLabel>
            </StyledFilterDiv2> */}
          {/* </StyledFilter> */}

          <StyledFilter>
            <StyledFilterDiv1 style={{ paddingTop: '2px' }}>
              <Button
                variant="light"
                onClick={() => handleFilter('전체')}
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                전체
              </Button>
              <Button
                variant="light"
                onClick={() => handleFilter('서울')}
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                서울
              </Button>
              <Button
                onClick={() => handleFilter('부산')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                부산
              </Button>
              <Button
                onClick={() => handleFilter('대구')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                대구
              </Button>
              <Button
                onClick={() => handleFilter('인천')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                인천
              </Button>
              <Button
                onClick={() => handleFilter('울산')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                울산
              </Button>
              <Button
                onClick={() => handleFilter('세종')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                세종
              </Button>
              <Button
                onClick={() => handleFilter('경기')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                경기
              </Button>
              <Button
                onClick={() => handleFilter('강원')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                강원
              </Button>
            </StyledFilterDiv1>
            <StyledFilterDiv1 style={{ paddingTop: '2px' }}>
              <Button
                onClick={() => handleFilter('충북')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                충북
              </Button>
              <Button
                onClick={() => handleFilter('대전')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                대전
              </Button>
              <Button
                onClick={() => handleFilter('충남')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                충남
              </Button>
              <Button
                onClick={() => handleFilter('전북')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                전북
              </Button>
              <Button
                onClick={() => handleFilter('광주')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                광주
              </Button>
              <Button
                onClick={() => handleFilter('전남')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                전남
              </Button>
              <Button
                onClick={() => handleFilter('경북')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                경북
              </Button>
              <Button
                onClick={() => handleFilter('경남')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                경남
              </Button>
              <Button
                onClick={() => handleFilter('제주')}
                variant="light"
                style={{
                  width: '92px',
                  fontSize: '20px',
                  margin: '2px',
                }}
                href="#list"
              >
                제주
              </Button>
            </StyledFilterDiv1>
            <StyledDiv>
              {/* <StyledTxt2>예약 내역</StyledTxt2> */}
              <StyledFilterDiv1 style={{ marginTop: '10px' }}>
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
            <StyledFilterDiv2>
              <FloatingLabel
                label="헌혈의 집 명 또는 헌혈의 집 주소를 입력해주세요."
                name="id"
                value={id}
                onChange={handleChangeId}
                style={{
                  marginTop: '10px',
                  // marginLeft: '20px',
                  // marginRight: '20px',
                  width: '97%',
                }}
              >
                <Form.Control type="id" placeholder="label" />
              </FloatingLabel>
            </StyledFilterDiv2>
          </StyledFilter>

          <section>
            <Styleddiv2>
              <Styledtext>
                <div>
                  <ui>
                    <li>
                      헌혈버스 관련 정보(날짜, 시간, 장소 등)는 혈액원 사정에
                      의해 변경될 수 있습니다.
                    </li>
                    <li>
                      단체 사정에 의해 점심시간에는 헌혈버스 운영을 하지 않을 수
                      있습니다 담당자에게 사전에 운영시간을 확인하시기 바랍니다.
                    </li>
                  </ui>
                </div>
              </Styledtext>
              <StyledTable>
                <thead>
                  <tr>
                    <th
                      id="area-header"
                      style={{
                        width: '120px',
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '35px',

                        textAlign: 'center',

                        color: '#333333',
                      }}
                    >
                      날짜
                    </th>
                    <th
                      id="time-header"
                      style={{
                        width: '120px',
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '35px',

                        textAlign: 'center',

                        color: '#333333',
                      }}
                    >
                      시간
                    </th>
                    <th
                      id="centerName-header"
                      style={{
                        width: '120px',
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '35px',

                        textAlign: 'center',

                        color: '#333333',
                      }}
                    >
                      장소
                    </th>
                    <th
                      id="bloodHouseAddress-header"
                      style={{
                        width: '200px',
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '35px',

                        textAlign: 'center',

                        color: '#333333',
                      }}
                    >
                      주소
                    </th>
                    <th
                      id="bloodHousePhoneNumber-header"
                      style={{
                        width: '150px',
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '35px',

                        textAlign: 'center',

                        color: '#333333',
                      }}
                    >
                      전화번호
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((element, index) => {
                    const markerPositions = [
                      [element.latitude, element.longitude],
                    ];
                    return (
                      <React.Fragment key={index}>
                        <tr onClick={() => handleRowClick(index)}>
                          <td
                            headers="area-header"
                            style={{
                              width: '120px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '15px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.date}
                          </td>
                          <td
                            headers="time-header"
                            style={{
                              width: '120px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '15px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.busTime}
                          </td>
                          <td
                            headers="centerName-header"
                            style={{
                              width: '120px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              fontSize: '18px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.locationAddress}
                          </td>
                          <td
                            headers="bloodHouseAddress-header"
                            style={{
                              width: '200px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              fontSize: '20px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.busAddress}
                          </td>
                          <td
                            headers="bloodHousePhoneNumber-header"
                            style={{
                              width: '150px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '15px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.busPhoneNumber}
                          </td>
                          <td>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                            >
                              <button
                                onClick={() =>
                                  handleReservation(element.centerName)
                                }
                                style={{
                                  height: '37px',
                                  background: '#D9D9D9',
                                  borderRadius: '10px',
                                  border: 'none',
                                  fontFamily: 'Gmarket Sans TTF',
                                  fontStyle: 'normal',
                                  fontWeight: '500',
                                  fontSize: '15px',
                                  lineHeight: '37px',

                                  textAlign: 'center',

                                  color: '#333333',
                                }}
                              >
                                예약하기
                              </button>
                              <button
                                type="button"
                                style={{
                                  height: '37px',
                                  marginTop: '10px',
                                  background: '#FF9F9F',
                                  borderRadius: '10px',
                                  border: 'none',
                                  fontFamily: 'Gmarket Sans TTF',
                                  fontStyle: 'normal',
                                  fontWeight: '500',
                                  fontSize: '15px',
                                  lineHeight: '37px',

                                  textAlign: 'center',

                                  color: '#333333',
                                }}
                              >
                                자세히보기
                              </button>
                            </div>
                          </td>
                        </tr>
                        {openIndex === index && (
                          <tr>
                            <td colSpan={6}>
                              <Styledtd1 id="wrap">
                                <KakaoMap
                                  markerPositions={markerPositions}
                                  size={mapSize}
                                />
                              </Styledtd1>
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
        </StyledTab1>
      </StyledSubcomment>
      {/* <div className="home">{error && <div>{error}</div>}</div> */}
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
// 서브탭
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
  /* identical to box height, or 100% */

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

// 콘텐즈 상단
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;
const StyledTop = styled.div`
  display: flex;
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

// 필터
const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
`;
const StyledFilter = styled.div`
  width: 865px;
  /* height: 145px; */
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  /* margin-left: 20px;
  padding-top: 15px; */
`;
const StyledFilterDiv2 = styled.div`
  display: flex;
  margin-left: 20px;
  padding-bottom: 20px;
`;

// 집만의 콘텐츠
const Styleddiv2 = styled.div`
  text-align: center;
`;
const Styledtext = styled.div`
  text-align: left;
  color: #a3a3a3;
  font-size: 14px;
  font-family: Gmarket Sans TTF;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;
const StyledTable = styled(Table)`
  border-collapse: collapse;
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
const StyledDiv = styled.div`
  margin-left: 20px;
  display: flex;
`;

const StyledFilterDivTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
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
export default BD_Bus;
