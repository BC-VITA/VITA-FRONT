import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function SignUpGroup() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [blood, setBlood] = useState('');
  const [sex, setSex] = useState('');
  const [rh, setRh] = useState('');
  const [history, setHistory] = useState('');
  const [Phon, setPhon] = useState('');

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChangeId = ({ target: { value } }) => setId(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);
  const handleChangePasswordCheck = ({ target: { value } }) =>
    setPasswordCheck(value);
  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeEmail = ({ target: { value } }) => setEmail(value);
  const handleChangeBirth = ({ target: { value } }) => setBirth(value);
  const handleChangePhon = ({ target: { value } }) => setPhon(value);
  const handleChangeHistory = ({ target: { value } }) => setHistory(value);

  const num = parseInt(history);

  const handlebloodChange = (event) => {
    setBlood(event.target.value);
  };

  const handlesexChange = (event) => {
    setSex(event.target.value);
  };

  const handleSelectChange = (event) => {
    setRh(event.target.value);
  };

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    fetch('http://localhost:8004/user/join', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: id,
        password: password,
        confirmPassword: passwordCheck,
        userName: name,
        userEmail: email,
        userBirth: birth,
        userBlood: blood,
        sex: sex,
        isRH: rh,
        bloodHistory: num,
        userPhoneNumber: Phon,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        setError(err.message);
      });
    setDisabled(false);
    console.log(
      '정보: ' +
        JSON.stringify({
          userID: id,
          password: password,
          confirmPassword: passwordCheck,
          userName: name,
          userEmail: email,
          userBirth: birth,
          userBlood: blood,
          sex: sex,
          isRH: rh,
          bloodHistory: num,
          userPhoneNumber: Phon,
        })
    );
    navigate('/');
  };
  return (
    <StyledAll>
      <section>
        <StyledTop>
          <StyledTitle>회원가입</StyledTitle>
          <StyledTitleSub>
            자신에게 맞는 항목을 선택하여 회원가입 해주세요.
          </StyledTitleSub>
          <StyledHr />
          <StyledTitleSub2>개인</StyledTitleSub2>
        </StyledTop>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <StyledDiv>
            <StyledFlax>
              <StyledBox>
                <StyledBoxTitle>아이디</StyledBoxTitle>
                <FloatingLabel
                  label="ID"
                  name="id"
                  value={id}
                  onChange={handleChangeId}
                >
                  <Form.Control type="id" placeholder="label" />
                </FloatingLabel>
              </StyledBox>

              <StyledBox></StyledBox>
            </StyledFlax>
            <StyledFlax>
              <StyledBox>
                <StyledBoxTitle>비밀번호</StyledBoxTitle>
                <FloatingLabel
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handleChangePassword}
                >
                  <Form.Control type="password" placeholder="label" />
                </FloatingLabel>
              </StyledBox>
              <StyledBox>
                <StyledBoxTitle>비밀번호 확인</StyledBoxTitle>
                <FloatingLabel
                  label="Password 확인"
                  name="passwordCheck"
                  value={passwordCheck}
                  onChange={handleChangePasswordCheck}
                >
                  <Form.Control type="password" placeholder="label" />
                </FloatingLabel>
              </StyledBox>
            </StyledFlax>
            <StyledFlax>
              <StyledBox>
                <StyledBoxTitle>성명</StyledBoxTitle>
                <FloatingLabel
                  label="홍길동"
                  name="Name"
                  value={name}
                  onChange={handleChangeName}
                >
                  <Form.Control type="text" placeholder="label" />
                </FloatingLabel>
              </StyledBox>
              <StyledBox>
                <StyledBoxTitle>생년월일</StyledBoxTitle>
                <FloatingLabel
                  label="2023-03-03"
                  name="Date"
                  value={birth}
                  onChange={handleChangeBirth}
                >
                  <Form.Control type="Date" placeholder="label" />
                </FloatingLabel>
              </StyledBox>
            </StyledFlax>
            <StyledFlax>
              <StyledBox>
                <StyledBoxTitle>이메일</StyledBoxTitle>
                <FloatingLabel
                  label="blood@gmail.com"
                  name="Email"
                  value={email}
                  onChange={handleChangeEmail}
                >
                  <Form.Control type="Email" placeholder="label" />
                </FloatingLabel>
              </StyledBox>
              <StyledBox>
                <StyledBoxTitle>전화번호</StyledBoxTitle>

                <FloatingLabel
                  label="010-1234-1234"
                  name="Phon"
                  value={Phon}
                  onChange={handleChangePhon}
                >
                  <Form.Control type="Phon" placeholder="label" />
                </FloatingLabel>
              </StyledBox>
            </StyledFlax>

            <StyledFlax>
              <StyledBox2>
                <StyledBoxTitle>혈액형</StyledBoxTitle>
                <Form.Select
                  size="lg"
                  checked={blood === 'A형'}
                  onChange={handlebloodChange}
                >
                  <option selected disabled>
                    선택해주세요.
                  </option>
                  <option
                    name="blood"
                    value="A형"
                    checked={blood === 'A형'}
                    onChange={handlebloodChange}
                  >
                    A형
                  </option>
                  <option
                    name="blood"
                    value="B형"
                    checked={blood === 'B형'}
                    onChange={handlebloodChange}
                  >
                    B형
                  </option>
                  <option
                    name="blood"
                    value="O형"
                    checked={blood === 'O형'}
                    onChange={handlebloodChange}
                  >
                    O형
                  </option>
                  <option
                    name="blood"
                    value="AB형"
                    checked={blood === 'AB형'}
                    onChange={handlebloodChange}
                  >
                    AB형
                  </option>
                </Form.Select>
              </StyledBox2>

              <StyledBox2>
                <StyledBoxTitle>RH여부</StyledBoxTitle>
                <Form.Select
                  size="lg"
                  checked={rh === 'RH-'}
                  onChange={handleSelectChange}
                >
                  <option selected disabled>
                    선택해주세요.
                  </option>
                  <option
                    name="rh"
                    value="RH-"
                    checked={rh === 'RH-'}
                    onChange={handleSelectChange}
                  >
                    RH-
                  </option>
                  <option
                    name="rh"
                    value="RH+"
                    checked={rh === 'RH+'}
                    onChange={handleSelectChange}
                  >
                    RH+
                  </option>
                </Form.Select>
              </StyledBox2>
              <StyledBox2>
                <StyledBoxTitle>헌혈이력</StyledBoxTitle>
                <FloatingLabel
                  label="1회"
                  name="History"
                  value={history}
                  onChange={handleChangeHistory}
                >
                  <Form.Control type="text" placeholder="label" />
                </FloatingLabel>
              </StyledBox2>
              <StyledBox2>
                <StyledBoxTitle>성별</StyledBoxTitle>
                <Form.Select
                  size="lg"
                  checked={sex === '남자'}
                  onChange={handlesexChange}
                >
                  <option selected disabled>
                    선택해주세요.
                  </option>
                  <option
                    name="sex"
                    value="남자"
                    checked={sex === '남자'}
                    onChange={handlesexChange}
                  >
                    남자
                  </option>
                  <option
                    name="sex"
                    value="여자"
                    checked={sex === '여자'}
                    onChange={handlesexChange}
                  >
                    여자
                  </option>
                </Form.Select>
              </StyledBox2>
            </StyledFlax>
            <br />
            <StyledButton type="submit" disabled={disabled}>
              회원가입
            </StyledButton>
            <div className="home">{error && <div>{error}</div>}</div>
          </StyledDiv>
        </form>
      </section>
      <div>{blood}</div>
      <div>{rh}</div>
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

  color: #787878;
`;
const StyledHr = styled.hr`
  margin-top: 20px;
  width: 69em;
  border: 3px solid #333333;
`;
const StyledTitleSub2 = styled.div`
  margin-top: 50px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 1em;

  color: #333333;
`;
const StyledDiv = styled.div`
  width: 1100px;
  margin: auto;
`;
const StyledBox = styled.div`
  width: 450px;
  margin: auto;
  /* margin-right: 70px; */
`;

const StyledBox2 = styled.div`
  width: 180px;
  margin: auto;
  /* margin-right: 55px; */
`;

const StyledBoxTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 80px;
  color: #333333;

  margin-top: 10px;
  /* margin-bottom: 10px; */
`;

const StyledFlax = styled.div`
  display: flex;
`;

const StyledBlock = styled.div`
  display: block;
`;
const StyledButton = styled.button`
  width: 568px;
  height: 72.18px;
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

  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  margin-left: 270px;
`;

export default SignUpGroup;
