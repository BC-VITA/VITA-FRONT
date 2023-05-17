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

function S_Ganeral() {
  const [id, setId] = useState('');
  // const [id, setId] = useState('');
  const handleChangeId = ({ target: { value } }) => setId(value);

  const navigate = useNavigate();

  const [mapSize, setMapSize] = useState([300, 300]);
  const selectArea1 = [
    '전체',
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
  ];
  // const selectField2 = [
  //   '전체',
  //   '생활편의시설',
  //   '주거환경',
  //   '교육',
  //   '보건의료',
  //   '문화행사',
  //   '환경보호',
  //   '안전예방',
  // ];
  // const selectField3 = ['전체', '온라인', '오프라인'];
  // const selectField4 = [
  //   '전체',
  //   '아동.청소년',
  //   '장애인',
  //   '노인',
  //   '쪽방촌',
  //   '다문화가정',
  //   '여성',
  //   '환경',
  //   '사회적기업',
  //   '고향봉사',
  //   '기타',
  // ];
  // const selectField5 = ['전체', '모집중', '모집완료'];
  // const selectField6 = ['성인', '청소년'];
  // const selectField7 = [
  //   봉사기간
  // ];

  const [firstAreaValue, setFirstAreaValue] = useState('전체');
  // const [secondAreaOptions, setSecondAreaOptions] = useState([
  //   '검색할 지역을 골라주세요',
  // ]);

  const [firstFieldValue2, setFirstFieldValue2] = useState('전체');
  const [secondFieldOptions2, setSecondFieldOptions2] = useState([
    '검색할 봉사분야를 골라주세요',
  ]);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  function handleFirstAreaChange(event) {
    const selectedValue = event.target.value;
    setFirstAreaValue(selectedValue);

    // if (selectedValue === '전체') {
    //   setSecondListOptions(['검색할 지역을 골라주세요']);
    // } else if (selectedValue === '서울') {
    //   setSecondListOptions(['가', '나', '다']);
    // } else if (selectedValue === '인천') {
    //   setSecondListOptions(['가가', '나나', '다다']);
    // } else if (selectedValue === '경기') {
    //   setSecondListOptions(['가가가', '나나나', '다다다']);
    // } else {
    //   setSecondListOptions(['가가가가', '나나나나', '다다다다']);
    // }
  }

  // function handleFirstFieldChange2(event) {
  //   const selectedValue2 = event.target.value;
  //   setFirstFieldValue2(selectedValue2);

  //   if (selectedValue2 === '전체') {
  //     setSecondFieldOptions2(['검색할 봉사분야를 골라주세요']);
  //   } else if (selectedValue2 === '생활편의시설') {
  //     setSecondFieldOptions2([
  //       '전체',
  //       '활동보조',
  //       '이동지원',
  //       '청결지도',
  //       '급식지원',
  //       '식사반찬지원',
  //       '기타',
  //     ]);
  //   } else if (selectedValue2 === '주거환경') {
  //     setSecondFieldOptions2(['전체', '주거개선', '마을공동체활동', '기타']);
  //   } else if (selectedValue2 === '안전예방') {
  //     setSecondFieldOptions2([
  //       '전체',
  //       '지역안전',
  //       '교통안전',
  //       '어린이 안전',
  //       '청소년 안전',
  //       '취약계층 안전',
  //       '안전신고활동',
  //       '기타',
  //     ]);
  //   } else if (selectedValue2 === '교육') {
  //     setSecondFieldOptions2([
  //       '전체',
  //       '방과후 교육',
  //       '학습지도 교육',
  //       '특수교육',
  //       '평생교육',
  //       '전문교육',
  //       '진로체험교육',
  //       '기타',
  //     ]);
  //   } else if (selectedValue2 === '보건의료') {
  //     setSecondFieldOptions2(['전체', '간호간병', '의료지원', '헌혈', '기타']);
  //   } else if (selectedValue2 === '문화행사') {
  //     setSecondFieldOptions2([
  //       '전체',
  //       '행사보조',
  //       '공연활동',
  //       '캠페인',
  //       '관광안내',
  //       '사진촬영',
  //       '기타',
  //     ]);
  //   } else if (selectedValue2 === '환경보호 ') {
  //     setSecondFieldOptions2(['전체', '환경정화', '환경감시', '기타']);
  //   }
  // }

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
    fetch('http://localhost:8004/volunteer/board/list', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputData(res);
        console.log(inputData);
      });
    console.log(inputData);
    setFirstAreaValue('전체');
  }, []);

  const filteredData =
    firstAreaValue === '전체'
      ? inputData
      : inputData.filter((item) => item.area === firstAreaValue);

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
            <StyledSubDiv2_1>
              <Nav.Link href="/S_History">
                <StyledSubDiv2_2g>봉사 활동 기록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>개인봉사</StyledTitle>
        </StyledTop>
        <StyledTab1>
          <Tabs>
            <Tab eventKey="Time" title="시간인증">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1>
                    <StyledFilterDivTitle>지역선택</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstAreaChange}
                      value={firstAreaValue}
                      style={{ border: 'none' }}
                    >
                      {selectArea1.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    {/* <StyledFilterDivTitle>봉사분야</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstFieldChange2}
                      value={firstFieldValue2}
                      style={{ border: 'none' }}
                    >
                      {selectField2.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      onChange={handleFirstFieldChange2}
                      value={secondFieldOptions2}
                      style={{ border: 'none' }}
                    >
                      {selectField2.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select> */}

                    <StyledButton>
                      <Nav.Link href="/S_PostGT">
                        <StyledButtonDiv>작성하기</StyledButtonDiv>
                      </Nav.Link>
                    </StyledButton>
                  </StyledFilterDiv1>

                  {/* <StyledFilterDiv1>
                    <StyledFilterDivTitle>활동 구분</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstAreaChange}
                      value={firstAreaValue}
                      style={{ border: 'none' }}
                    >
                      {selectField3.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <StyledFilterDivTitle>봉사 대상</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstFieldChange2}
                      value={firstFieldValue2}
                      style={{ border: 'none' }}
                    >
                      {selectField4.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <StyledFilterDivTitle>모집상태</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstAreaChange}
                      value={firstAreaValue}
                      style={{ border: 'none' }}
                    >
                      {selectField5.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1> */}

                  {/* <StyledFilterDiv1>
                    <StyledFilterDivTitle>봉사자 유형</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstAreaChange}
                      value={firstAreaValue}
                      style={{ border: 'none' }}
                    >
                      {selectField6.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <StyledFilterDivTitle>봉사기간</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstFieldChange2}
                      value={firstFieldValue2}
                      style={{ border: 'none' }}
                    >
                      {selectField6.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <StyledFilterDivTitle>&nbsp;-&nbsp;</StyledFilterDivTitle>
                    <select
                      onChange={handleFirstFieldChange2}
                      value={secondFieldOptions2}
                      style={{ border: 'none' }}
                    >
                      {selectField6.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1> */}

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
                </StyledFilter>

                <section></section>
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
  height: 332px;
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
const StyledButton = styled.div`
  margin-top: 3px;
  width: 125px;
  height: 35px;
  /* margin-left: 540px; */

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

const StyledButton2 = styled.div`
  margin-top: 10px;
  width: 165px;
  height: 35px;
  margin-left: 10px;

  background: #ff9f9f;
  border-radius: 9px;
`;

const StyledButtonDiv2 = styled.div`
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
export default S_Ganeral;
