import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import groupPhoto from '../../img/개인.png';
import icHospitalonPhoto from '../../img/병원.png';
import individualPhoto from '../../img/봉사 기업・단체.png';

function SignUp() {
  const navigate = useNavigate();

  const Group = () => {
    navigate('/groupPhoto');
  };
  const Hospital = () => {
    navigate('/icHospitalonPhoto');
  };
  const Individual = () => {
    navigate('/individualPhoto');
  };

  return (
    <StyledDiv>
      <section>
        <StyledTop>
          <StyledTitle>회원가입</StyledTitle>
          <StyledTitleSub>
            자신에게 맞는 항목을 선택하여 회원가입 해주세요.
          </StyledTitleSub>
          <StyledHr />
        </StyledTop>
        {/* <div
          style={{
            ...divStyle,
            fontSize: '48px',
            fontWeight: 'bold',
            marginTop: '3%',
            color: 'black',
          }}
        >
          회원가입
        </div>
        <div style={{ ...divStyle }}>
          자신에게 맞는 항목을 선택하여 회원가입 해주세요.
        </div>
        <hr
          style={{
            width: '85%',
            borderWidth: '3px',
            border: 'solid',
            borderColor: 'black',
          }}
        /> */}
      </section>
      <StyledButton>
        <StyledButton1>
          <Nav.Link href="/SignUpGroup">
            <Styledimg
              src={groupPhoto}
              class
              name="groupPhoto"
              alt="groupPhoto"
            />
            {/* <div style={{ ...divStyle1 }}>개 인</div> */}
            <StyledTxt>개 인</StyledTxt>
          </Nav.Link>
        </StyledButton1>
        <StyledButton1C>
          <Nav.Link href="/SignUpHospital">
            <Styledimg
              src={icHospitalonPhoto}
              class
              name="icHospitalonPhoto"
              alt="icHospitalonPhoto"
            />
            {/* <div style={{ ...divStyle1 }}>개 인</div> */}
            <StyledTxt>병 원</StyledTxt>
          </Nav.Link>
        </StyledButton1C>
        <StyledButton1>
          <Nav.Link href="/SignUpIndividual">
            <Styledimg
              src={individualPhoto}
              class
              name="individualPhoto"
              alt="individualPhoto"
            />
            {/* <div style={{ ...divStyle1 }}>개 인</div> */}
            <StyledTxt>
              봉사 <br />
              기업・단체
            </StyledTxt>
          </Nav.Link>
        </StyledButton1>
        {/* <Button
          size="large"
          onClick={"/SignUpGroup"}
          style={{ ...buttonStyle, marginLeft: '4%', marginRight: '4%' }}
        >
          <Styledimg
            src={groupPhoto}
            class
            name="groupPhoto"
            alt="groupPhoto"
          />
          <div style={{ ...divStyle1 }}>개 인</div>
        </Button> */}
        {/* <Button
          size="large"
          onClick={Hospital}
          style={{ ...buttonStyle, width: '23.3%', marginRight: '4%' }}
        >
          <Styledimg
            src={icHospitalonPhoto}
            class
            name="icHospitalonPhoto"
            alt="icHospitalonPhoto"
          />
          <div style={{ ...divStyle1 }}>병 원</div>
        </Button>
        <Button
          size="large"
          onClick={Individual}
          style={{ ...buttonStyle, width: '23.3%' }}
        >
          <Styledimg
            src={individualPhoto}
            class
            name="individualPhoto"
            alt="individualPhoto"
          />
          <div style={{ ...divStyle1 }}>봉사 기업・단체</div>
        </Button> */}
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  /* margin: auto;
  display: block; */
  margin-left: 200px;
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
const StyledButton = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  display: flex;
  margin-bottom: 300px;
`;
const StyledButton1 = styled.div`
  width: 282px;
  height: 306px;
  /* left: 436px;
  top: 326px; */

  background: #ffe9e9;
  border-radius: 35px;

  filter: drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25));
`;
const StyledButton1C = styled.div`
  margin-left: 70px;
  margin-right: 70px;

  width: 282px;
  height: 306px;
  /* left: 436px;
  top: 326px; */

  background: #ffe9e9;
  border-radius: 35px;

  filter: drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.25));
`;
const Styledimg = styled.img`
  margin-top: 200px;
  width: 160px;
  height: 145px;
  display: block;
  margin: auto;
  /* object-fit: cover; */
  margin-top: 40px;
`;
const StyledTxt = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  text-align: center;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #333333;

  margin-top: 20px;
`;

// const divStyle1 = {
//   color: 'black',
//   fontSize: '2.5rem',
//   fontWeight: 'bold',
//   backgroundColor: '#FF9898',
//   width: '106%',
//   height: '18%',
//   marginTop: '2rem',
// };
// const buttonStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   width: '23%',
//   height: '40vh',
//   backgroundColor: '#FFE0E0',
//   border: '3px solid #606060',
//   borderRadius: '35px',
// };
// const divStyle = {
//   display: 'flex',
//   justifycontent: 'center',
//   alignitems: 'flex-start',
//   flexdirection: 'column',
//   color: '#787878',
//   fontSize: '1.5rem',
//   marginLeft: '1%',
// };

export default SignUp;
