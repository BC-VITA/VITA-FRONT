import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: id,
        userPw: password,
      }),
    });
    const result = await response.text();
    console.log(result);
    if (result === '로그인 성공') {
      sessionStorage.setItem('userId', id);
      navigate('/');
      window.location.reload();
    }
  };

  return (
    <StyledAll>
      <section>
        <StyledTop>
          <StyledTitle>로그인</StyledTitle>
          <StyledTitleSub>회원일 경우 로그인 해주세요</StyledTitleSub>
          <StyledHr />
        </StyledTop>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <StyledGroup1>
            <StyledGroup1_1>
              <FloatingLabel
                controlId="floatingInput"
                label="ID"
                className="id"
                value={id}
                onChange={handleChangeId}
              >
                <Form.Control type="id" placeholder="id" />
              </FloatingLabel>
            </StyledGroup1_1>
            <StyledGroup1_1>
              <FloatingLabel
                controlId="floatingInput"
                label="Password"
                className="password"
                value={password}
                onChange={handleChangePassword}
              >
                <Form.Control type="password" placeholder="password" />
              </FloatingLabel>
            </StyledGroup1_1>
            <StyledGroup1_1>
              <StyledButton1 type="button" onClick={handleSubmit}>
                로그인
              </StyledButton1>
            </StyledGroup1_1>
            <StyledGroup1_1>
              <StyledButton2 type="button" onClick={handleSubmit1}>
                {' '}
                {/*인풋타입 버튼으로 바꿈 onclick으로 회원가입 페이지 넘어가게 만들어야 됨*/}
                회원가입
              </StyledButton2>
            </StyledGroup1_1>
            {/* <StyledButton2 type="submit" disabled={disabled}>
                아이디/비밀번호찾기
              </StyledButton2> */}
            {/* <div className="home">{error && <div>{error}</div>}</div> */}
          </StyledGroup1>
        </form>
      </section>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  width: 125ch;
  margin: auto;
  margin-bottom: 300px;
`;
const StyledTop = styled.div`
  margin-top: 44.2px;
`;
const StyledTitle = styled.div`
  /* width: 230px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 48px;
  color: #333333;
`;
const StyledTitleSub = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */
  color: #787878;
`;
const StyledHr = styled.div`
  margin-top: 20px;
  width: 69em;
  border: 3px solid #333333;
`;

const StyledGroup1 = styled.div`
  width: 69em;
  margin: auto;
  margin-top: 50px;
`;
const StyledGroup1_1 = styled.div`
  /* width: 200px; */
  width: 639.92px;
  height: 72.18px;
  margin: auto;
`;
const StyledButton1 = styled.button`
  color: white;
  width: 639.92px;
  height: 72.18px;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2));
  background: #ff9f9f;
  border: none;
  border-radius: 8px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 0.3em;
  color: #ffffff;
  margin: auto;
  padding: auto;
`;
const StyledButton2 = styled.button`
  color: #333333;
  border: none;
  width: 210.02px;
  height: 57.47px;
  background: #ffd7d7;
  border-radius: 8px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin: auto;
  margin: 0 auto;
  margin-top: 13px;
`;
export default LogIn;
