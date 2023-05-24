import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function BD_House() {
  const [id, setId] = useState('');
  const handleChangeId = (event) => {
    const newId = event.target.value;

    // inputData를 필터링하여 centerName과 비교하여 필터링된 데이터만 남기기
    const filteredData1 =
      newId === '' ? inputData : inputData.filter((item) => item.centerName === newId);

    setInputData(filteredData1);
    console.log(inputData);
  };

  // const filteredData =
  //   firstListValue === '전체' ? inputData : inputData.filter((item) => item.area === firstListValue);



  const navigate = useNavigate();

  const [mapSize, setMapSize] = useState([400, 400]);
  const selectList1 = ['전체', '인천', '서울', '경기', '강원', '부산', '광주', '충북', '제주'];

  const [firstListValue, setFirstListValue] = useState('전체');
  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  function handleFirstListChange(event) {
    const selectedValue = event.target.value;
    setFirstListValue(selectedValue);
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
    fetch('http://localhost:8004/blood/board/list ', {
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

  //필터
  const filteredData =
    firstListValue === '전체'
      ? inputData
      : inputData.filter((item) => item.area === firstListValue);


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
              <Nav.Link href="/BD_Reservation">
                <StyledSubDiv2_2g>헌혈 예약</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
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
            <StyledFilterDiv1 style={{ paddingTop: '20px' }}>
              <StyledFilterDivTitle style={{ paddingTop: '8px' }}>
                지역선택
              </StyledFilterDivTitle>
              <select
                onChange={handleFirstListChange}
                value={firstListValue}
                style={{ height: '40px' }}
              >
                {selectList1.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {/* <select value={secondListOptions} onChange={setSecondListOptions}>
                {secondListOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select> */}
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
            <Styleddiv2>
              <StyledTable>
                <thead>
                  <tr>
                    <th
                      id="area-header"
                      style={{
                        width: '80px',
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '22px',
                        lineHeight: '35px',

                        textAlign: 'center',

                        color: '#333333',
                      }}
                    >
                      지역
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
                      헌혈의 집
                    </th>
                    <th
                      id="bloodHouseAddress-header"
                      style={{
                        width: '350px',
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
                        width: '130px',
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
                              width: '80px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '18px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.area}
                          </td>
                          <td
                            headers="centerName-header"
                            style={{
                              width: '120px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '18px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.centerName}
                          </td>
                          <td
                            headers="bloodHouseAddress-header"
                            style={{
                              width: '130px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '15px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
                            }}
                          >
                            {element.bloodHouseAddress}
                          </td>
                          <td
                            headers="bloodHousePhoneNumber-header"
                            style={{
                              width: '130px',
                              fontFamily: 'Gmarket Sans TTF',
                              fontStyle: 'normal',
                              fontWeight: '500',
                              fontSize: '15px',
                              lineHeight: '30px',

                              textAlign: 'center',

                              color: '#333333',
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
                            <td colSpan={3}>
                              <Styledtd1 id="wrap">
                                <KakaoMap
                                  markerPositions={markerPositions}
                                  size={mapSize}
                                />
                              </Styledtd1>
                            </td>
                            <Styledtd2
                              colSpan={2}
                              style={{
                                width: '240px',
                                marginLeft: '-110px',
                              }}
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
  height: 223px;
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
  height: 145px;
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  margin-top: 20px;
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
export default BD_House;
