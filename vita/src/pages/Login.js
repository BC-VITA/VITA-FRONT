import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LogIn() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = ({ target: { value } }) => setId(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);

  const navigate = useNavigate();

  const handleSubmit1 = () => {
    navigate('/SignUp');
  };
  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8004/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: id,
        userPw: password
      })
    });
    const result = await response.text();
    console.log(result);
    if (result === '로그인 성공') {
      // 세션에 저장
      sessionStorage.setItem('userId', id);
      navigate('/');
    }
  }

  return (
    <div>
      <section>
        <Styleddiv>로그인</Styleddiv>
        <Styleddiv1>회원일 경우 로그인 해주세요</Styleddiv1>
        <hr style={{ width: '70%', size: '10', borderWidth: '2px', border: 'solid', marginLeft: '15%' }}
        ></hr>
      </section>
      <section
        style={{
          position: 'static',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <Styledinput
              type="id"
              placeholder="id"
              name="id"
              value={id}
              onChange={handleChangeId}
            />
            <br />
            <Styledinput
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
            <br />
            <StyledButton1 type="button" onClick={handleSubmit}>
              로그인
            </StyledButton1>
            <br />
            <StyledButton2 type="button" onClick={handleSubmit1}> {/*인풋타입 버튼으로 바꿈 onclick으로 회원가입 페이지 넘어가게 만들어야 됨*/}
              회원가입
            </StyledButton2>
            {/* <StyledButton2 type="submit" disabled={disabled}>
              아이디/비밀번호찾기
            </StyledButton2> */}
          </form>
        </div>
      </section>
    </div>
  );
}
const Styleddiv = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 48px;
  font-weight: 700;
  margin-top: 3%;
  margin-left: 15%;
`;
const Styleddiv1 = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
  margin-left: 15%;
`;
const Styledinput = styled.input`
  width: 593px;
  height: 68.51px;
  left: 567px;
  top: 351.7px;
`;
const StyledButton1 = styled.button`
  background-color: #ff9f9f;
  color: white;
  border-radius: 8px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  width: 593px;
  height: 87px;
  left: 567px;
  top: 541px;
`;
const StyledButton2 = styled.button`
  background-color: #ffd7d7;
  color: black;
  font-size: 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 25px;
  width: 242px;
  height: 61px;
  left: 567px;
  top: 640px;
`;
export default LogIn;
