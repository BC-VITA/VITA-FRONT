import React from "react";
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import '../components/Nav.css'
import styled from 'styled-components';
import icon from './icon.png'

const Nav = () => {
  return (
    <nav>      
      <div>
        <img src={icon} class name="main-icon" alt="logo"/>
        <Link to="first" style={{ textDecoration: 'none', color:"white"}}>          
          <MenuItem style={{ paddingLeft: 13 }}>헌혈하러 갈래?</MenuItem>
        </Link>
      </div>
      <div>
        <Link to="first" style={{ textDecoration: 'none', color:"white" }}>
          <MenuItem style={{ paddingLeft: 13 }}>알아보자</MenuItem>
        </Link>
      </div>
      <div>
        <Link to="first" style={{ textDecoration: 'none', color:"white" }}>
          <MenuItem style={{ paddingLeft: 13 }}>헌혈하자</MenuItem>
        </Link>
      </div>
      <div>
        <Link to="first" style={{ textDecoration: 'none', color:"white" }}>
          <MenuItem style={{ paddingLeft: 13 }}>이야기하자</MenuItem>
        </Link>
      </div>
      <div>
        <Link to="first" style={{ textDecoration: 'none', color:"white" }}>
          <MenuItem style={{ paddingLeft: 13 }}>봉사하자</MenuItem>
        </Link>
      </div>
      <div>
        <Link Link to="first" style={{ textDecoration: 'none', color:"white" }}>
          <MenuItem style={{ paddingLeft: 13 }}>기부하자</MenuItem>
        </Link>
      </div>
      <NavigationStyledstate>
          <div>로그인</div>
          <div>/</div>
          <div>회원가입</div>
      </NavigationStyledstate>
    </nav>
  );
};
const NavigationStyledstate = styled.div`
`;
export default Nav;