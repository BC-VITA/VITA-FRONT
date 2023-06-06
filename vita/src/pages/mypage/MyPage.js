import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function MyPage() {
  const [userData, setUserData] = useState(null);
  const userId = sessionStorage.getItem('userId');

  const [userPw, setUserPw] = useState('');
  const [userPw1, setUserPw1] = useState('');
  const [userBirth, setUserBirth] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhone] = useState('');

  const [userName, setuserName] = useState('');
  const [userBlood, setuserBlood] = useState('');
  const [sex, setUserSex] = useState('');
  const [isRH, setisRH] = useState('');
  const [bloodHistory, setBloodHistory] = useState('');

  const handleChangePw = ({ target: { value } }) => setUserPw(value);
  const handleChangePw1 = ({ target: { value } }) => setUserPw1(value);
  const handleChangeBirth = ({ target: { value } }) => setUserBirth(value);
  const handleChangeEmail = ({ target: { value } }) => setUserEmail(value);
  const handleChangePhone = ({ target: { value } }) => setUserPhone(value);

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
    fetch('http://localhost:8004/blood/house/filter', {
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
  function writeDonateBoard() {
    const donateBoardRequest = {
      userId: userId,
      userName: userName,
      userPhoneNumber: userPhoneNumber,
      userEmail: userEmail,
      userBirth: userBirth,
      userBlood: userBlood,
      sex: sex,
      isRH: isRH,
      bloodHistory: bloodHistory,
    };

    fetch('http://localhost:8004/user/mypage', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(donateBoardRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        // 응답 처리
      })
      .catch((error) => {
        console.log('오류났음');
      });
    console.log('전송완료');
  }
  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>마이페이지</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_DBD">
                <StyledSubDiv2_2g>지정헌혈</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_chat">
                <StyledSubDiv2_2g>채팅</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_BD">
                <StyledSubDiv2_2g>헌혈</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_S">
                <StyledSubDiv2_2g>봉사</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_D">
                <StyledSubDiv2_2g>기부</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/MyPage">
                <StyledSubDiv2_2>개인정보</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>개인정보</StyledTitle>
        </StyledTop>
        <StyledBox id="myInformation">
          <StyledDiv>
            <StyledDiv1>
              {/* <div>{userId}</div> */}
              <div>{userName}</div>
              <div>{userPhoneNumber}</div>
              <div>{userEmail}</div>
              <div>{userBirth}</div>
              <div>{userBlood}</div>
              <div>{sex}</div>
              <div>{isRH}</div>
              <div>{bloodHistory}</div>
              <StyledTxtB>나의 정보</StyledTxtB>
              <StyledButton type="button" onClick={writeDonateBoard}>
                <StyledButtonTxt>정보 수정하기</StyledButtonTxt>
              </StyledButton>
            </StyledDiv1>
            <StyledDiv2>
              <StyledDiv3>
                <StyledTxtR>아이디</StyledTxtR>
                <FloatingLabel
                  label={userId}
                  //value={roomnumber}
                  //onChange={handleReservation}
                >
                  <Form.Control placeholder="name" disabled />
                </FloatingLabel>
              </StyledDiv3>
            </StyledDiv2>
            <StyledDiv2>
              <StyledDiv3 style={{ marginRight: '80px' }}>
                <StyledTxtR>비밀번호</StyledTxtR>
                <FloatingLabel
                  label="비밀번호"
                  value={userPw}
                  onChange={handleChangePw}
                >
                  <Form.Control placeholder="name" />
                </FloatingLabel>
              </StyledDiv3>
              <StyledDiv3>
                <StyledTxtR>비밀번호 확인</StyledTxtR>
                <FloatingLabel
                  label="비밀번호"
                  value={userPw1}
                  onChange={handleChangePw1}
                >
                  <Form.Control placeholder="name" />
                </FloatingLabel>
              </StyledDiv3>
            </StyledDiv2>
            <StyledDiv2>
              <StyledDiv3 style={{ marginRight: '80px' }}>
                <StyledTxtR>성명</StyledTxtR>
                <FloatingLabel
                  label={userData && userData.userName ? userData.userName : ''}
                  // value={roomnumber}
                  // onChange={handleChangeroomnumber}
                >
                  <Form.Control placeholder="name" disabled />
                </FloatingLabel>
              </StyledDiv3>
              <StyledDiv3>
                <StyledTxtR>생년월일</StyledTxtR>
                <FloatingLabel
                  label={
                    userData && userData.userBirth ? userData.userBirth : ''
                  }
                  value={userBirth}
                  onChange={handleChangeBirth}
                >
                  <Form.Control placeholder="name" />
                </FloatingLabel>
              </StyledDiv3>
            </StyledDiv2>
            <StyledDiv2>
              <StyledDiv3 style={{ marginRight: '80px' }}>
                <StyledTxtR>이메일</StyledTxtR>
                <FloatingLabel
                  label={
                    userData && userData.userEmail ? userData.userEmail : ''
                  }
                  value={userEmail}
                  onChange={handleChangeEmail}
                >
                  <Form.Control placeholder="name" />
                </FloatingLabel>
              </StyledDiv3>
              <StyledDiv3>
                <StyledTxtR>전화번호</StyledTxtR>
                <FloatingLabel
                  label={
                    userData && userData.userPhoneNumber
                      ? userData.userPhoneNumber
                      : ''
                  }
                  value={userPhoneNumber}
                  onChange={handleChangePhone}
                >
                  <Form.Control placeholder="name" />
                </FloatingLabel>
              </StyledDiv3>
            </StyledDiv2>
          </StyledDiv>
        </StyledBox>
      </StyledSubcomment>
    </StyledAll>
  );
}

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
  height: 362px;
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
  /* width: 203px; */
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
  width: 150px;
  height: 40px;
  margin-left: 530px;
  text-align: center;
  line-height: 45px;

  background: #ff9f9f;
  border-radius: 9px;
`;

const StyledBox = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  /* margin-left: 10px; */
  margin-bottom: 30px;

  padding-bottom: 50px;

  width: 880px;
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
  margin-top: 20px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;

const StyledButtonTxt = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  margin: auto;
  /* margin-left: 25px; */
  /* identical to box height, or 100% */
  /* width: 500px; */

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
  margin-top: 35px;
  display: flex;
`;
const StyledDiv3 = styled.div`
  width: 41ch;
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
const StyledComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-right: 60px;
`;
export default MyPage;
