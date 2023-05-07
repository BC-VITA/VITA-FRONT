import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Select from 'react-select';

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

  const options = [
    { value: 'RH+', label: 'RH+' },
    { value: 'RH-', label: 'RH-' },
  ];

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChangeId = ({ target: { value } }) => setId(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);
  const handleChangePasswordCheck = ({ target: { value } }) => setPasswordCheck(value);
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

  const handleSelectChange = (selectedOption) => {
    setRh(selectedOption.value);
  };

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    fetch('http://localhost:8004/user/join', {
      method: 'post',
      headers:{
        "Content-Type":'application/json'
      },
      body: JSON.stringify({
        userID: id,
        password: password,
        confirmPassword :passwordCheck,
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
      //.then((res) => {
     //   navigate('/');
     // })
      .catch((err) => {
        setError(err.message);
      });
    setDisabled(false);
    console.log(
      '정보: ' +
        JSON.stringify({
          userID: id,
          password: password,
          confirmPassword :passwordCheck,
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
  };
  return (
    <div
      style={{ marginLeft: '370px', marginRight: '370px', marginTop: '44.2px', }}>
      <section>
        <Stylednav>회원가입</Stylednav>
        <Styleddiv1>
          자신에게 맞는 항목을 선택하여 회원가입 해주세요.
        </Styleddiv1>
        <hr style={{ width: '1180px', border: 'solid 2px', }}></hr>
        <div style={{ marginTop: '42px', fontSize: '45px', textAlign: 'center', fontWeight: 'bold', }}>
          개인
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <Styleddiv2>
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
                onChange={handleChangePassword}/>
            </StyledBlock>
            <StyledBlock1>
              <Styleddiv>비밀번호 확인</Styleddiv>
              <Styledinput
                type="password"
                placeholder="비밀번호 확인"
                name="passwordCheck"
                value={passwordCheck}
                onChange={handleChangePasswordCheck}/>
            </StyledBlock1>
          </StyledFlax>
          <StyledFlax>
            <StyledBlock>
              <Styleddiv>성명</Styleddiv>
              <Styledinput
                type="Name"
                placeholder="성명"
                name="Name"
                value={name}
                onChange={handleChangeName}/>
            </StyledBlock>
            <StyledBlock1>
              <Styleddiv>생년월일</Styleddiv>
              <Styledinput
                type="Date"
                placeholder="생년월일"
                name="Date"
                value={birth}
                onChange={handleChangeBirth}/>
            </StyledBlock1>
          </StyledFlax>
          <StyledFlax>
            <StyledBlock>
              <Styleddiv>이메일</Styleddiv>
              <Styledinput
                type="Email"
                placeholder="이메일"
                name="Email"
                value={email}
                onChange={handleChangeEmail}/>
            </StyledBlock>
            <StyledBlock1>
              <Styleddiv>전화번호</Styleddiv>
              <Styledinput
                type="Phon"
                placeholder="전화번호"
                name="Phon"
                value={Phon}
                onChange={handleChangePhon}/>
            </StyledBlock1>
          </StyledFlax>
          <StyledFlax>
            <form style={{marginTop:'5%'}}>
              <div>
              <div style={{marginBottom:'2%', fontSize: '32px'}}>혈액형</div>
                <label style={{ display: 'inline-block' ,  fontSize:'28px'}}>
                  <input type="radio" name="blood" value="A형" checked={blood === 'A형'} onChange={handlebloodChange} />
                  A형&nbsp;&nbsp;
                </label>
                <label style={{ display: 'inline-block' ,  fontSize:'28px'}}>
                  <input type="radio" name="blood" value="B형" checked={blood === 'B형'} onChange={handlebloodChange} />
                  B형&nbsp;&nbsp;
                </label>
                <label style={{ display: 'inline-block' ,  fontSize:'28px'}}>
                  <input type="radio" name="blood" value="O형" checked={blood === 'O형'} onChange={handlebloodChange} />
                  O형&nbsp;&nbsp;
                </label>
                <label style={{ display: 'inline-block' ,  fontSize:'28px'}}>
                  <input type="radio" name="blood" value="AB형" checked={blood === 'AB형'} onChange={handlebloodChange} />
                  AB형
                </label>
              </div>
            </form>
            <form style={{margin:'5%'}}>
            <div style={{marginBottom:'5%', fontSize: '32px'}}>RH여부</div>
              <div>
                <Select options={options} value={rh} onChange={handleSelectChange} />
              </div>
            </form>
            <StyledBlock>
              <Styleddiv>헌혈이력</Styleddiv>
              <Styledinput2
                type="text"
                placeholder="1회"
                name="History"
                value={history}
                onChange={handleChangeHistory}/>
            </StyledBlock>
            <form style={{margin:'5%'}}>
              <div>
              <div style={{marginBottom:'2%', fontSize: '32px'}}>성별</div>
                <label style={{ display: 'inline-block' ,  fontSize:'32px'}}>
                  <input type="radio" name="sex" value="남자" checked={sex === '남자'} onChange={handlesexChange} />
                  남자&nbsp;&nbsp;
                </label>
                <label style={{ display: 'inline-block' ,  fontSize:'32px'}}>
                  <input type="radio" name="sex" value="여자" checked={sex === '여자'} onChange={handlesexChange} />
                  여자&nbsp;&nbsp;
                </label>
              </div>
            </form>
          </StyledFlax>
          <br />
          <StyledButton type="submit" disabled={disabled}>
            회원가입
          </StyledButton>
          <div className="home">{error && <div>{error}</div>}</div>
        </Styleddiv2>
      </form>
      <div>{rh}</div>
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

export default SignUpGroup;