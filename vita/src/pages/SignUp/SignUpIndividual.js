import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RadioGroup from '../../components/RadioGroup';
import Radio from '../../components/Radio';

function SignUpIndividual() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [Name, setName] = useState('');
  const [Phon, setPhon] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleChangeId = ({ target: { value } }) => setId(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);
  const handleChangePasswordCheck = ({ target: { value } }) =>
    setPasswordCheck(value);
  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangePhon = ({ target: { value } }) => setPhon(value);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    fetch('http://localhost:8004/volunteer/join', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        volunteerId: id,
        volunteerPw: password,
        volunteerGroupName: Name,
        volunteerPhoneNumber: Phon,
        volunteerField: '카테고리',
      }),
    })
      .then((res) => res.json())
    setDisabled(false);
    navigate('/');
  };
  return (
    <div
      style={{
        marginLeft: '370px',
        marginRight: '370px',
        marginTop: '44.2px',
      }}
    >
      <section>
        <Stylednav>회원가입</Stylednav>
        <Styleddiv1>
          자신에게 맞는 항목을 선택하여 회원가입 해주세요.
        </Styleddiv1>
        <hr
          style={{
            width: '1180px',
            border: 'solid 2px',
          }}
        ></hr>
        <div
          style={{
            marginTop: '42px',
            fontSize: '45px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          봉사 기업・단체
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <Styleddiv2>
          <Styleddiv>아이디</Styleddiv>
          <Styledinput
            type="id"
            placeholder="아이디"
            name="id"
            value={id}
            onChange={handleChangeId}
          />
          <StyledFlax>
            <StyledBlock>
              <Styleddiv>비밀번호</Styleddiv>
              <Styledinput
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={handleChangePassword}
              />
            </StyledBlock>
            <StyledBlock1>
              <Styleddiv>비밀번호 확인</Styleddiv>
              <Styledinput
                type="password"
                placeholder="비밀번호 확인"
                name="passwordCheck"
                value={passwordCheck}
                onChange={handleChangePasswordCheck}
              />
            </StyledBlock1>
          </StyledFlax>
          <StyledFlax>
            <StyledBlock>
              <Styleddiv>성명</Styleddiv>
              <Styledinput
                type="Name"
                placeholder="성명"
                name="Name"
                value={Name}
                onChange={handleChangeName}
              />
            </StyledBlock>
            <StyledBlock1>
              <Styleddiv>전화번호</Styleddiv>
              <Styledinput
                type="Phon"
                placeholder="전화번호"
                name="Phon"
                value={Phon}
                onChange={handleChangePhon}
              />
            </StyledBlock1>
          </StyledFlax>
          <StyledBlock1>
            <Styleddiv>카테고리</Styleddiv>
            <Styledslsct>
              <select>
                <option key="banana" value="banana">
                  연탄봉사
                </option>
              </select>
            </Styledslsct>
          </StyledBlock1>
          <br />
          <StyledButton type="submit" disabled={disabled}>
            회원가입
          </StyledButton>
        </Styleddiv2>
      </form>
    </div>
  );
}

const Stylednav = styled.nav`
  position: static;
  bottom: 100;
  width: 100%;
  height: 60px;
  display: flex;
  padding: auto;
  margin: auto;
  font-size: 48px;
  font-weight: bold;
`;
const StyledBlock = styled.div`
  display: block;
`;
const StyledBlock1 = styled.div`
  margin-left: 148px;
  display: block;
`;
const StyledFlax = styled.div`
  display: flex;
`;
const Styledinput = styled.input`
  width: 450px;
  height: 68px;
  margin-top: 14px;
  font-size: 20px;
`;
const Styledslsct = styled.div`
  width: 450px;
  height: 68px;
  margin-top: 14px;
  font-size: 20px;
`;
const Styledinput2 = styled.input`
  width: 199px;
  height: 68px;
  margin-top: 14px;
  font-size: 20px;
`;
const Styleddiv = styled.div`
  margin-top: 44px;
  font-size: 32px;
`;
const Styleddiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  color: black;
  text-decoration-line: none;
  font-size: 24px;
`;
const Styleddiv2 = styled.div`
  margin-left: 66px;
`;
const StyledButton = styled.button`
  background-color: #ff9f9f;
  color: white;
  border-radius: 8px;
  font-size: 40px;
  border: none;
  cursor: pointer;
  width: 568px;
  height: 99px;
  font-weight: bold;
  margin: 240px;
`;
export default SignUpIndividual;
