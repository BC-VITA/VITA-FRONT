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
          <StyledStr>
            <Link to="/">VITA</Link>
          </StyledStr>
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
  width: 100%;
  height: 48px;

  background: #333333;
`;

const StyledDiv = styled.div`
  margin-left: 190px;
  margin-top: 12px;
  display: flex;
`;

const StyledDiv1 = styled.div`
  display: flex;
`;
const Styledimg = styled.img`
  width: 17.5px;
  height: 23px;

  margin-right: 4px;

  /* flex: none;
  order: 0;
  flex-grow: 0; */
`;
const StyledStr = styled.Link`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;

  /* flex: none;
  order: 1;
  flex-grow: 0; */
  text-decoration: inherit;
`;

const StyledStrLogo = styled.div`
  text-decoration: none;
  color: #ffffff;
`;
const StyledDiv2 = styled.div`
  margin-left: 59.5px;
  margin-right: 59.5px;
  margin-top: 3px;

  display: flex;
`;
const StyledDiv2_1 = styled.div`
  width: 140px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;

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
  font-size: 8px;
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

  margin-right: 5px;
`;

export default Nav;
