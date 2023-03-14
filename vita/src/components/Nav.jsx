import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import icon from './icon.png';

const Nav = () => {
  return (
    <Stylednav>
      <Styleddiv1>
        <Styledimg src={icon} class name="main-icon" alt="logo" />
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem style={{ fontSize: '28px', marginLeft: '0.5%' }}>
            vita
          </MenuItem>
        </Link>
      </Styleddiv1>
      <Styleddiv>
        <Link to="Learn" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>알아보자</MenuItem>
        </Link>
      </Styleddiv>
      <Styleddiv>
        <Link to="DBD_PostGeneral" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>헌혈하자</MenuItem>
        </Link>
      </Styleddiv>
      <Styleddiv>
        <Link to="BD_Story" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>이야기하자</MenuItem>
        </Link>
      </Styleddiv>
      <Styleddiv>
        <Link to="S_Main" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>봉사하자</MenuItem>
        </Link>
      </Styleddiv>
      <Styleddiv>
        <Link to="D_Main" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>기부하자</MenuItem>
        </Link>
      </Styleddiv>
      <Styledstate>
        <Link to="Login" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>로그인</MenuItem>
        </Link>
        <div>|</div>
        <Link to="SignUp" style={{ textDecoration: 'none', color: 'white' }}>
          <MenuItem>회원가입</MenuItem>
        </Link>
      </Styledstate>
    </Stylednav>
  );
};
const Styledstate = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none;
  margin-right: 15%;
`;
const Stylednav = styled.nav`
  position: static;
  bottom: 100;
  width: 100%;
  height: 60px;
  display: flex;
  border: solid 2px;
  background-color: black;
`;
const Styleddiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none;
`;
const Styleddiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none;
  margin-left: 15%;
  font-size: 3rem;
`;
const Styledimg = styled.img`
  width: 20px;
  height: 25px;
  object-fit: cover;
`;


export default Nav;
