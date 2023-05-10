// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';
import Form from 'react-bootstrap/Form';

function MyPageMaine() {
  const navigate = useNavigate();

  const [mapSize, setMapSize] = useState([300, 300]);

  const selectList1 = ['전체', '인천', '서울', '경기도', '강원도'];
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
      setSecondListOptions(['가', '나', '다']);
    } else if (selectedValue === '인천') {
      setSecondListOptions(['가가', '나나', '다다']);
    } else if (selectedValue === '경기도') {
      setSecondListOptions(['가가가', '나나나', '다다다']);
    } else {
      setSecondListOptions(['가가가가', '나나나나', '다다다다']);
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

  function handleReservation() {
    navigate('/BD_ReservationSecond');
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
      });
    console.log(inputData);
    setFirstListValue('전체');
  }, []);

  const filteredData =
    firstListValue === '전체'
      ? inputData
      : inputData.filter((item) => item.area === firstListValue);
  // const handleSubmit = async (event) => {
  //   setDisabled(true);
  //   event.preventDefault();
  //   await new Promise((r) => setTimeout(r, 1000));
  //back으로 정보 post함
  //   fetch('http://localhost:8004/user/board', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       patientName: id,
  //       bloodPersonNumber: number,
  //       bloodNumber: people,
  //       patientAge: age,
  //       hospitalRoomNumber: roomnumber,
  //       hospitalName: hostipalname,
  //       hostipalAddress: hostipaladdress,
  //       hospitalPhoneNumber: hostipalcall,
  //       patientBlood: bloodtype,
  //       patientIsRH: rhtype,
  //       bloodType: donationtype,
  //       needBloodSystem: bloodproduct,
  //       bloodMatchType: bloodmatch,
  //       isReview: review,
  //       startDate: startDate,
  //       endDate: endDate,
  //       title: title,
  //       content: detail,
  //     }),
  //   })
  //보낸거를 문자열 받아 다시 json(객체)으로 변환하여 비교
  //     .then((res) => {
  //       res.json();
  //       if (res.ok) {
  //         navigate('/DBD_General');
  //       }
  //     })
  //회원가입 실패시 실행
  //     .catch((err) => {
  //       setError(err.message);
  //에러시 Loading메세지 사라지고
  //에러메세지만 보이도록 설정
  //     });
  //   setDisabled(false);
  //   console.log(
  //     'data: ' +
  //       JSON.stringify({
  //         patientName: id,
  //         bloodPersonNumber: number,
  //         bloodNumber: people,
  //         patientAge: age,
  //         hospitalRoomNumber: roomnumber,
  //         hospitalName: hostipalname,
  //         hostipalAddress: hostipaladdress,
  //         hospitalPhoneNumber: hostipalcall,
  //         patientBlood: bloodtype,
  //         patientIsRH: rhtype,
  //         bloodType: donationtype,
  //         needBloodSystem: bloodproduct,
  //         bloodMatchType: bloodmatch,
  //         isReview: review,
  //         startDate: startDate,
  //         endDate: endDate,
  //         title: title,
  //         content: detail,
  //       })
  //   );
  // };

  return (
    <StyledAll>
      <section>
        <StyledTitle>마이페이지</StyledTitle>
        <StyledTitle2Box>
          <StyledTitle2 href="#myInformation">나의 정보 수정하기</StyledTitle2>
          <StyledTitle2>&nbsp;|&nbsp;</StyledTitle2>
          <StyledTitle2 href="#point">포인트</StyledTitle2>
          <StyledTitle2>&nbsp;|&nbsp;</StyledTitle2>
          <StyledTitle2 href="#write">내가 작성한 게시물</StyledTitle2>
          <StyledTitle2>&nbsp;|&nbsp;</StyledTitle2>
          <StyledTitle2 href="#record">신청기록</StyledTitle2>
          <StyledTitle2>&nbsp;|&nbsp;</StyledTitle2>
          <StyledTitle2 href="#interest">관심목록</StyledTitle2>
          <StyledTitle2>&nbsp;|&nbsp;</StyledTitle2>
          <StyledTitle2 href="#chat">채팅</StyledTitle2>
        </StyledTitle2Box>
      </section>
      <StyledBox id="myInformation">
        <StyledDiv>
          <StyledDiv1>
            <StyledTxtB>나의 정보</StyledTxtB>
            <StyledButton>
              <Nav.Link href="/DBDPostGeneral">
                <StyledButtonTxt>정보 수정하기</StyledButtonTxt>
              </Nav.Link>
            </StyledButton>
          </StyledDiv1>
          <StyledDiv2>
            <StyledDiv3>
              <StyledTxtR>아이디</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
          </StyledDiv2>
          <StyledDiv2>
            <StyledDiv3>
              <StyledTxtR>비밀번호</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
            <StyledDiv3>
              <StyledTxtR>비밀번호 확인</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
          </StyledDiv2>
          <StyledDiv2>
            <StyledDiv3>
              <StyledTxtR>성명</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
            <StyledDiv3>
              <StyledTxtR>생년월일</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
          </StyledDiv2>
          <StyledDiv2>
            <StyledDiv3>
              <StyledTxtR>이메일</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
            <StyledDiv3>
              <StyledTxtR>전화번호</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
          </StyledDiv2>
          {/* <StyledDiv2>
            <StyledDiv3>
              <StyledTxtR>아이디</StyledTxtR>
              <FloatingLabel
                label="ID"
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
          </StyledDiv2> */}
        </StyledDiv>
      </StyledBox>
      <StyledBox2 id="point">
        <StyledDiv4>
          <StyledDiv5>
            <StyledTxt1>나의 포인트</StyledTxt1>
            <FloatingLabel
              label="ID"
              // value={roomnumber}
              // onChange={handleChangeroomnumber}
            >
              <Form.Control placeholder="name" />
            </FloatingLabel>
            <StyledButton2>
              <Nav.Link href="/DBDPostGeneral">
                <StyledButtonTxt>포인트 기부하기</StyledButtonTxt>
              </Nav.Link>
            </StyledButton2>
            <StyledButton3>
              <Nav.Link href="/DBDPostGeneral">
                <StyledButtonTxt>내가 기부한 포인트 조회하기</StyledButtonTxt>
              </Nav.Link>
            </StyledButton3>
          </StyledDiv5>
        </StyledDiv4>
      </StyledBox2>
      <StyledBox3 id="write">
        <StyledDiv3_1>
          <StyledTxtB>내가 작성한 게시물</StyledTxtB>
          <StyledTxt2>지정헌혈 | 봉사 | 후기</StyledTxt2>
        </StyledDiv3_1>
      </StyledBox3>
      <StyledBox3_1>
        <StyledDiv3_2>
          <StyledTxtB>헌혈 예약</StyledTxtB>

          {/* <StyledDiv3_3>
            <StyledTxt3>지정헌혈 | 봉사 | 후기</StyledTxt3>
          </StyledDiv3_3> */}
          <StyledTab1>
            <section>
              <Styleddiv2>
                <StyledTable striped>
                  <thead>
                    <Styledtr>
                      <Styledth1 id="area-header">제목</Styledth1>
                      <Styledth2 id="centerName-header">헌혈의 집</Styledth2>
                      <Styledth3>&nbsp;</Styledth3>
                    </Styledtr>
                  </thead>
                  <tbody>
                    {filteredData.map((element, index) => {
                      const markerPositions = [
                        [element.latitude, element.longitude],
                      ];
                      return (
                        <React.Fragment key={index}>
                          <tr onClick={() => handleRowClick(index)}>
                            <td headers="area-header">{element.area}</td>
                            <td headers="centerName-header">
                              {element.centerName}
                            </td>
                            <Styledtd>
                              {/* <StyledTdDiv
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              > */}
                              <StyledTdButton
                                type="button"
                                onClick={handleReservation}
                              >
                                수정하기
                              </StyledTdButton>
                              <StyledTdButton2
                                type="button"
                                onClick={handleReservation}
                              >
                                삭제하기
                              </StyledTdButton2>
                              {/* </StyledTdDiv> */}
                            </Styledtd>
                          </tr>
                          {/* {openIndex === index && (
                            <tr>
                              <td colSpan={3}>
                                <Styledtd1 id="wrap">
                                  <KakaoMap
                                    markerPositions={markerPositions}
                                    size={mapSize}
                                  />
                                </Styledtd1>
                              </td>
                              <Styledtd2 colSpan={2}>
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
                                <Styledtxt>
                                  공휴일 : {element.restTime}
                                </Styledtxt>
                              </Styledtd2>
                            </tr>
                          )} */}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </StyledTable>
              </Styleddiv2>
            </section>
          </StyledTab1>
        </StyledDiv3_2>
      </StyledBox3_1>

      <StyledBox3 id="write">
        <StyledDiv3_1>
          <StyledTxtB>신청기록</StyledTxtB>
          <StyledTxt2>헌혈 에약 | 봉사 | 지정헌혈</StyledTxt2>
        </StyledDiv3_1>
      </StyledBox3>
      <StyledBox4>
        <StyledDiv3_2>
          <StyledTxtB>헌혈 예약</StyledTxtB>
        </StyledDiv3_2>
      </StyledBox4>

      <StyledBox3 id="write">
        <StyledDiv3_1>
          <StyledTxtB>관심목록</StyledTxtB>
          <StyledTxt2>헌혈 에약 | 봉사 | 지정헌혈</StyledTxt2>
        </StyledDiv3_1>
      </StyledBox3>
      <StyledBox5 id="record">
        <StyledDiv3_2>
          <StyledTxtB>지정헌혈</StyledTxtB>
        </StyledDiv3_2>
      </StyledBox5>

      <StyledBox3 id="write">
        <StyledDiv3_1>
          <StyledTxtB>채팅</StyledTxtB>
        </StyledDiv3_1>
      </StyledBox3>
      <StyledBox6 id="chat">
        <StyledDiv3_2></StyledDiv3_2>
      </StyledBox6>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  margin: auto;
  padding-bottom: 300px;
`;
const StyledTitle = styled.div`
  width: 270px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
  margin-top: 35px;
`;
const StyledTitle2Box = styled.div`
  margin-top: 10px;

  display: flex;
  padding-bottom: 10px;
`;
const StyledTitle2 = styled.a`
  margin-top: 10px;
  margin-left: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  text-decoration: none;

  letter-spacing: 0.05em;

  color: #333333;
`;
const StyledBox = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  margin-left: 10px;
  margin-bottom: 30px;

  padding-bottom: 50px;

  width: 1100px;
  /* height: 130px; */
  /* left: 378px;
  top: 259px; */

  background: #ffe9e9;
  border-radius: 10px;
`;
const StyledDiv = styled.div`
  margin-left: 30px;
`;

const StyledDiv1 = styled.div`
  display: flex;
`;
const StyledTxtB = styled.div`
  margin-bottom: 10px;
  margin-top: 30px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;
const StyledButton = styled.button`
  margin-top: 30px;

  width: 150px;
  height: 35px;
  margin-left: 85ch;

  background: #ff9f9f;
  border-radius: 9px;
  border: none;
`;
const StyledButtonTxt = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  margin: auto;
  /* margin-left: 25px; */
  /* identical to box height, or 100% */

  color: #ffffff;
`;

const StyledBox2 = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 30px;

  padding-bottom: 50px;

  width: 1100px;
  /* height: 130px; */
  /* left: 378px;
  top: 259px; */

  /* background: #ffe9e9; */
  border: 4px solid #333333;
  border-left: none;
  border-right: none;
  /* border-radius: 10px; */
`;
const StyledDiv2 = styled.div`
  margin-top: 30px;
  display: flex;
`;
const StyledDiv3 = styled.div`
  width: 55ch;
  margin-right: 50px;
`;
const StyledTxtR = styled.div`
  margin-bottom: 3px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;

const StyledDiv4 = styled.div`
  padding-top: 20px;
  margin-left: 30px;
  /* display: flex; */
`;
const StyledDiv5 = styled.div`
  margin-top: 30px;
  display: flex;
`;
const StyledTxt1 = styled.div`
  margin-top: 20px;
  margin-bottom: 3px;
  margin-right: 40px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;
const StyledButton2 = styled.button`
  margin-left: 40px;
  margin-top: 5px;

  width: 200px;
  height: 50px;

  background: #ff9f9f;
  border-radius: 9px;
  border: none;
`;
const StyledButton3 = styled.button`
  margin-left: 40px;
  margin-top: 5px;

  width: 300px;
  height: 50px;

  background: #ff9f9f;
  border-radius: 9px;
  border: none;
`;

const StyledBox3 = styled.div`
  margin-left: 10px;
  /* margin-top: 20px;

  margin-bottom: 30px;

  padding-bottom: 10px; */

  width: 1100px;
  height: 116px;

  background: #ffe9e9;
`;
const StyledTxt2 = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 3px;
  margin-right: 40px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;
const StyledDiv3_1 = styled.div`
  padding-top: 20px;
  margin-left: 30px;
  display: flex;
`;
const StyledBox3_1 = styled.div`
  margin-left: 10px;

  margin-bottom: 30px;

  padding-bottom: 10px;

  width: 1100px;
  border: 1px solid #666666;
`;
const StyledDiv3_2 = styled.div`
  padding-top: 20px;
  margin-left: 30px;
`;
const StyledDiv3_3 = styled.div`
  padding-top: 20px;
  /* margin-left: 30px; */
  display: flex;
  /* margin-left: 10px; */

  margin-bottom: 30px;

  padding-bottom: 10px;

  width: 1030px;
  /* height: 45px; */
  border: 1px solid #666666;
`;
const StyledTxt3 = styled.div`
  margin-left: 50px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;

// 따온거
const Styledtr = styled.div`
  display: flex;
`;
const Styledth1 = styled.div`
  width: 400px;
  background-color: beige;
`;
const Styledth2 = styled.div`
  width: 200px;
  background-color: beige;
`;
const Styledth3 = styled.div`
  width: 200px;
  background-color: beige;
`;
const Styledtd = styled.div`
  display: flex;
  width: 300px;
  background-color: beige;
`;
const StyledTdButton = styled.button`
  width: 130px;
  height: 35px;

  background: #ff9f9f;
  border-radius: 9px;
  border: none;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 35px;
  /* identical to box height, or 114% */

  color: #ffffff;
`;
const StyledTdButton2 = styled.button`
  width: 130px;
  height: 35px;

  background: #f55757;
  border-radius: 9px;
  border: none;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 35px;
  /* identical to box height, or 114% */

  color: #ffffff;
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

// 옛날
const StyledTable = styled(Table)`
  border-collapse: collapse;
  th,
  tbody,
  td td {
    padding: 0;
  }
`;

const StyledTab1 = styled.div`
  width: 95%;
  margin-top: 5px;
  padding-bottom: 500px;
`;

const Styleddiv2 = styled.div`
  /* margin-right: 100px;
  margin-left: 100px; */
  text-align: center;
`;

const StyledBox4 = styled.div`
  margin-left: 10px;

  margin-bottom: 30px;

  padding-bottom: 10px;

  width: 1100px;
  border: 1px solid #666666;
`;
const StyledBox5 = styled.div`
  margin-left: 10px;

  margin-bottom: 30px;

  padding-bottom: 10px;

  width: 1100px;
  border: 1px solid #666666;
`;
const StyledBox6 = styled.div`
  margin-left: 10px;

  margin-bottom: 30px;

  padding-bottom: 10px;

  width: 1100px;
  border: 1px solid #666666;
`;

export default MyPageMaine;
