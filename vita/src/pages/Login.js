import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LogIn() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChangeId = ({ target: { value } }) => setId(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    //back으로 정보 post함
    fetch('http://localhost:8003/join', {
      method: 'post',
      body: JSON.stringify({
        id: 'userID',
        password: 'userPW',
      }),
    })
      //보낸거를 문자열 받아 다시 json(객체)으로 변환하여 비교
      .then((res) => res.json())
      //회원가입 성공시 실행
      .then((res) => {
        navigate('/');
      })
      //회원가입 실패시 실행
      .catch((err) => {
        setError(err.message);
        //에러시 Loading메세지 사라지고
        //에러메세지만 보이도록 설정
      });
    setDisabled(false);
  };
  return (
    <div>
      <section>
        <Styleddiv>로그인</Styleddiv>
        <Styleddiv1>회원일 경우 로그인 해주세요</Styleddiv1>
        <hr
          style={{
            width: '70%',
            size: '10',
            borderWidth: '2px',
            border: 'solid',
            marginLeft:'15%'
          }}
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
            <StyledButton1 type="submit" disabled={disabled}>
              로그인
            </StyledButton1>
            <br />
            <StyledButton2 type="submit" disabled={disabled}>
              회원가입
            </StyledButton2>
            {/* <StyledButton2 type="submit" disabled={disabled}>
              아이디/비밀번호찾기
            </StyledButton2> */}
            <div className="home">{error && <div>{error}</div>}</div>
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
