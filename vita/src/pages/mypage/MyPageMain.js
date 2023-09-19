import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function MyPageMaine() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');

  const [userPw, setUserPw] = useState('');
  const [userPw1, setUserPw1] = useState('');
  // const [roomnumber, setroomnumber] = useState('');
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
  // const handleChangeroomnumber = ({ target: { value } }) =>  setroomnumber(value);
  const handleChangeBirth = ({ target: { value } }) => setUserBirth(value);
  const handleChangeEmail = ({ target: { value } }) => setUserEmail(value);
  const handleChangePhone = ({ target: { value } }) => setUserPhone(value);

  useEffect(() => {
    const url = `http://localhost:8004/user/mypage?userId=${userId}`;

    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res);
        setuserName(res.userName);
        setuserBlood(res.userBlood);
        setUserSex(res.sex);
        setisRH(res.isRH);
        setBloodHistory(res.bloodHistory);
        setUserBirth(res.userBirth);
        setUserEmail(res.userEmail);
        setUserPhone(res.userPhoneNumber);
      });
    console.log(userData);
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
          <StyledTitle2 href="#chat">지정헌혈 채팅</StyledTitle2>
        </StyledTitle2Box>
      </section>
      <StyledBox id="myInformation">
        <StyledDiv>
          <StyledDiv1>
            <div>{userId}</div>
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
            <StyledDiv3>
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
            <StyledDiv3>
              <StyledTxtR>성명</StyledTxtR>
              <FloatingLabel
                label={userData && userData.userName ? userData.userName : ''}
                // label={userName}
                // value={roomnumber}
                // onChange={handleChangeroomnumber}
              >
                <Form.Control placeholder="name" disabled />
              </FloatingLabel>
            </StyledDiv3>
            <StyledDiv3>
              <StyledTxtR>생년월일</StyledTxtR>
              <FloatingLabel
                label={userData && userData.userBirth ? userData.userBirth : ''}
                value={userBirth}
                onChange={handleChangeBirth}
              >
                <Form.Control placeholder="name" />
              </FloatingLabel>
            </StyledDiv3>
          </StyledDiv2>
          <StyledDiv2>
            <StyledDiv3>
              <StyledTxtR>이메일</StyledTxtR>
              <FloatingLabel
                label={userData && userData.userEmail ? userData.userEmail : ''}
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
        <StyledDiv31>
          <StyledTxtB>내가 작성한 게시물</StyledTxtB>
          <StyledTxt2>지정헌혈 | 봉사 | 후기</StyledTxt2>
        </StyledDiv31>
      </StyledBox3>
      <StyledBox3 id="write">
        <StyledDiv31>
          <StyledTxtB>신청기록</StyledTxtB>
          <StyledTxt2>헌혈 에약 | 봉사 | 지정헌혈</StyledTxt2>
        </StyledDiv31>
      </StyledBox3>
      <StyledBox4>
        <StyledDiv32>
          <StyledTxtB>헌혈 예약</StyledTxtB>
        </StyledDiv32>
      </StyledBox4>
      <StyledBox3 id="write">
        <StyledDiv31>
          <StyledTxtB>관심목록</StyledTxtB>
          <StyledTxt2>헌혈 에약 | 봉사 | 지정헌혈</StyledTxt2>
        </StyledDiv31>
      </StyledBox3>
      <StyledBox5 id="record">
        <StyledDiv32>
          <StyledTxtB>지정헌혈</StyledTxtB>
        </StyledDiv32>
      </StyledBox5>
      <StyledBox3 id="write">
        <StyledDiv31>
          <StyledTxtB>지정헌혈 채팅</StyledTxtB>
        </StyledDiv31>
      </StyledBox3>
      <StyledBox6 id="chat">
        <StyledDiv32></StyledDiv32>
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
const StyledDiv31 = styled.div`
  padding-top: 20px;
  margin-left: 30px;
  display: flex;
`;
const StyledDiv32 = styled.div`
  padding-top: 20px;
  margin-left: 30px;
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
