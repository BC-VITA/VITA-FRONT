import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
function BD_House() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const handleChangeId = (event) => {
    const newId = event.target.value;
    // inputData를 필터링하여 centerName과 비교하여 필터링된 데이터만 남기기
    const filteredData1 =
      newId === ''
        ? inputData
        : inputData.filter((item) => item.centerName === newId);
    setInputData(filteredData1);
  };
  const [mapSize, setMapSize] = useState([400, 400]);
  const [markerPositions, setMarkerPositions] = useState([]);
  const handleMarkerClick = (marker) => {
    // 마커를 클릭했을 때 수행할 작업을 여기에 작성합니다.
    // 예를 들어, 간단한 정보를 생성하거나 팝업을 표시할 수 있습니다.
    console.log('Clicked marker:', marker);
    // 추가적인 작업을 수행하고 싶다면 여기에 작성합니다.
  };
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
  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  function handleFirstListChange(event) {
    const selectedValue = event.target.value;
    setFirstListValue(selectedValue);
  }
  const [inputData, setInputData] = useState([{}, {}]);
  const handleReservation = (centerName) => {
    navigate('/BD_ReservationSecond', { state: { centerName } });
  };
  useEffect(() => {
    fetch('http://localhost:8004/blood/board/list ', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
        const extractedData = res.map((item) => [
          item.latitude,
          item.longitude,
        ]);
        setMarkerPositions(extractedData);
      });
    setFirstListValue('전체');
  }, []);
  //필터
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
            <StyledSubDiv21>
              <Nav.Link href="/BD_Main">
                <StyledSubDiv22g>헌혈이란</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21p>
              <Nav.Link href="/BD_House">
                <StyledSubDiv22>헌혈의 집 찾기</StyledSubDiv22>
              </Nav.Link>
            </StyledSubDiv21p>
            <StyledSubDiv21>
              <Nav.Link href="/BD_Bus">
                <StyledSubDiv22g>헌혈 버스 찾기</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/BD_Reservation">
                <StyledSubDiv22g>헌혈 예약</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈의 집 찾기</StyledTitle>
          {/* <StyledButton>
            <Nav.Link href="/M_HouseInfo">
              <StyledButtonDiv>작성하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
          <StyledButton2>
            <Nav.Link href="/M_Blood_Reservation">
              <StyledButtonDiv2>예약하기 넣기</StyledButtonDiv2>
            </Nav.Link>
          </StyledButton2> */}
        </StyledTop>
        <StyledTab1>
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
            <StyledFilterDiv2>
              <FloatingLabel
                label="헌혈의 집 명 또는 헌혈의 집 주소를 입력해주세요."
                name="id"
                value={id}
                onChange={handleChangeId}
                style={{
                  marginTop: '10px',
                  marginLeft: '20px',
                  marginRight: '20px',
                }}
              >
                <Form.Control type="id" placeholder="label" />
              </FloatingLabel>
            </StyledFilterDiv2>
          </StyledFilter>
          <section>
            <KakaoMap
              markerPositions={inputData.map((data) => [
                data.latitude,
                data.longitude,
              ])}
              size={[865, 400]}
              inputData={inputData}
            />
          </section>
          <section id="list">
            <Styleddiv2>
              <StyledTable>
                <thead>
                  <tr>
                    <th id="area-header" style={thStyle}>
                      지역
                    </th>
                    <th
                      id="centerName-header"
                      style={{ ...thStyle, width: '120px' }}
                    >
                      헌혈의 집
                    </th>
                    <th
                      id="bloodHouseAddress-header"
                      style={{ ...thStyle, width: '350px' }}
                    >
                      주소
                    </th>
                    <th
                      id="bloodHousePhoneNumber-header"
                      style={{ ...thStyle, width: '130px' }}
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
                          <td headers="area-header" style={{ ...tdStyle }}>
                            {element.area}
                          </td>
                          <td
                            headers="centerName-header"
                            style={{ ...tdStyle, width: '120px' }}
                          >
                            {element.centerName}
                          </td>
                          <td
                            headers="bloodHouseAddress-header"
                            style={{
                              ...tdStyle,
                              width: '130px',
                              fontSize: '15px',
                            }}
                          >
                            {element.bloodHouseAddress}
                          </td>
                          <td
                            headers="bloodHousePhoneNumber-header"
                            style={{
                              ...tdStyle,
                              width: '130px',
                              fontSize: '15px',
                            }}
                          >
                            {element.bloodHousePhoneNumber}
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
                                style={{ ...btStyle }}
                              >
                                예약하기
                              </button>
                              <button
                                type="button"
                                style={{
                                  ...btStyle,
                                  marginTop: '10px',
                                  background: '#FF9F9F',
                                }}
                              >
                                자세히보기
                              </button>
                            </div>
                          </td>
                        </tr>
                        {openIndex === index && (
                          <tr>
                            <td colSpan={3}>
                              <Styledtd1 id="wrap">
                                <KakaoMap
                                  markerPositions={markerPositions}
                                  onClick={handleMarkerClick}
                                  size={mapSize}
                                />
                              </Styledtd1>
                            </td>
                            <Styledtd2
                              colSpan={2}
                              style={{ width: '240px', marginLeft: '-110px' }}
                            >
                              <Styledtxt>
                                헌혈종류 :
                                <br /> 전혈, 혈장, 혈소판
                              </Styledtxt>
                              <br />
                              <Styledtxt>
                                평 일 : {element.weekdayTime}
                              </Styledtxt>
                              <Styledtxt>
                                토요일 : {element.saturdayTime}
                              </Styledtxt>
                              <Styledtxt>
                                일요일 : {element.sundayRestTime}
                              </Styledtxt>
                              <Styledtxt>공휴일 : {element.restTime}</Styledtxt>
                            </Styledtd2>
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
  text-align: center;
  color: #ffffff;
`;
const StyledSubDiv2 = styled.div`
  width: 220px;
  height: 242px;
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
  padding-bottom: 15px;
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  /* margin-top: 20px; */
  margin-left: 2px;
  margin-right: 2px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  /* font-size: 30px; */
  line-height: 40px;
  text-align: center;
`;
const StyledFilterbutton = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  text-align: center;

  width: 94px;
  font-size: 20px;
  /* margin-right: 5px; */
  display: block;
  margin: auto;
  background-color: #fcfcfc;
  border: 1px;
  border-color: #d7d7d7;
  border-style: solid;
`;
const StyledFilterDivTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 30px;
`;
const StyledFilterDiv2 = styled.div`
  width: 850px;
  margin: auto;
  margin-top: 10px;
`;
// 집만의 콘텐츠
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
export default BD_House;
