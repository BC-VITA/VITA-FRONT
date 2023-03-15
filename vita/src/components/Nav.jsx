import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import icon from './icon.png';

const Nav = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <StyledDiv1>
          <Styledimg src={icon} class name="main-icon" alt="logo" />
          <Link to="/">
            <StyledStrBig>
              <div>VITA</div>
            </StyledStrBig>
          </Link>
        </StyledDiv1>

        <StyledDiv2>
          <Link to="Learn">
            <StyledDiv2_1>
              <div>알아보자</div>
            </StyledDiv2_1>
          </Link>
          <Link to="BDMain">
            <StyledDiv2_1>
              <div>헌혈하자</div>
            </StyledDiv2_1>
          </Link>
          <Link to="DBDMain">
            <StyledDiv2_1>
              <div>지정헌혈하자</div>
            </StyledDiv2_1>
          </Link>
          <Link to="BDStory">
            <StyledDiv2_1>
              <div>이야기하자</div>
            </StyledDiv2_1>
          </Link>
          <Link to="S_Main">
            <StyledDiv2_1>
              <div>봉사하자</div>
            </StyledDiv2_1>
          </Link>
          <Link to="D_Main">
            <StyledDiv2_1>
              <div>기부하자</div>
            </StyledDiv2_1>
          </Link>
        </StyledDiv2>

        <StyledDiv3>
          <Link to="Login">
            <StyledStrSmall>
              <div>로그인</div>
            </StyledStrSmall>
          </Link>
          <StyledStrSmall>
            <div> | </div>
          </StyledStrSmall>

          <Link to="SignUp">
            <StyledStrSmall>
              <div>회원가입</div>
            </StyledStrSmall>
          </Link>
        </StyledDiv3>
      </StyledDiv>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 94.8px;

  background: #333333;
`;

const StyledDiv = styled.div`
  /* position: absolute; */
  /* width: 1180.12px;
  height: 306px; */
  margin-left: 370px;
  margin-top: 24px;
  display: flex;
`;

const StyledDiv1 = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none;
  margin-left: 15%;
  font-size: 3rem; */
  /* position: absolute;
  width: 120px;
  height: 46px; */
  display: flex;
`;
const Styledimg = styled.img`
  /* width: 20px;
  height: 25px;
  object-fit: cover; */

  width: 35px;
  height: 46px;

  flex: none;
  order: 0;
  flex-grow: 0;

  margin-right: 8px;
`;
const StyledStrBig = styled.div`
  /* textdecoration: none;
  color: white;
  fontsize: 28px;
  marginleft: 0.5%; */

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  /* line-height: 41px; */
  text-align: center;

  color: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StyledDiv2 = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none; */

  /* width: 699px;
  height: 300px; */
  margin-left: 119px;
  margin-right: 119px;
  margin-top: 6px;

  display: flex;
`;
const StyledDiv2_1 = styled.div`
  /* width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none; */
  width: 140px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* line-height: 29px; */
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

const StyledDiv3 = styled.div`
  /* flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none;
  margin-right: 15%; */
  display: flex;
`;

const StyledStrSmall = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 22px; */
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  /* Inside auto layout */
  /* 
  flex: none;
  order: 0;
  flex-grow: 0; */
  /* margin: auto;

  text-align: center; */

  margin-right: 10px;
`;

export default Nav;
