import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
    <StyledAll>
      <section>
        <StyledTop>
          <StyledTitle>로그인</StyledTitle>
          <StyledTitleSub>회원일 경우 로그인 해주세요</StyledTitleSub>
          <StyledHr />
        </StyledTop>
      </section>
      <section
      // style={{
      //   position: 'static',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   height: '50vh',
      // }}
      >
        <div>
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
              {/* <Styledinput
              type="id"
              placeholder="id"
              name="id"
              value={id}
              onChange={handleChangeId}
            /> */}
              {/* <br />
            <Styledinput
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            /> */}
              <StyledGroup1_1>
                <StyledButton1
                  type="button"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  로그인
                </StyledButton1>
              </StyledGroup1_1>
              <StyledGroup1_1>
                <StyledButton2 type="button" disabled={disabled}>
                  {' '}
                  {/*인풋타입 버튼으로 바꿈 onclick으로 회원가입 페이지 넘어가게 만들어야 됨*/}
                  회원가입
                </StyledButton2>
              </StyledGroup1_1>
              {/* <StyledButton2 type="submit" disabled={disabled}>
              아이디/비밀번호찾기
            </StyledButton2> */}
              <div className="home">{error && <div>{error}</div>}</div>
            </StyledGroup1>
          </form>
        </div>
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
// const Styledinput = styled.input`
//   width: 593px;
//   height: 68.51px;
//   left: 567px;
//   top: 351.7px;
// `;
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
  /* identical to box height */

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
  /* identical to box height */

  text-align: center;

  margin: auto;
  margin: 0 auto;
  margin-top: 13px;
`;
export default LogIn;
