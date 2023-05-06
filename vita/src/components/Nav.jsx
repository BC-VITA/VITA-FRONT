import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../img/icon.png';

const Nav = () => {
  const userId = sessionStorage.getItem('userId');

  return (
    <Stylednav>
      <StyledDiv1>
        <Styledimg src={icon} class name="main-icon" alt="logo" />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <StyledDiv1_1>
            <div>vita</div>
          </StyledDiv1_1>
        </Link>
      </StyledDiv1>

      <StyledDiv2>
        <Link to="Learn" style={{ textDecoration: 'none' }}>
          <StyledDiv2_1>
            <div>알아보자</div>
          </StyledDiv2_1>
        </Link>

        <Link to="BD_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv2_1>
            <div>헌혈하자</div>
          </StyledDiv2_1>
        </Link>

        <Link to="DBD_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv2_1L>
            <div>지정헌혈하자</div>
          </StyledDiv2_1L>
        </Link>

        <Link to="BD_Story" style={{ textDecoration: 'none' }}>
          <StyledDiv2_1M>
            <div>이야기하자</div>
          </StyledDiv2_1M>
        </Link>

        <Link to="S_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv2_1>
            <div>봉사하자</div>
          </StyledDiv2_1>
        </Link>

        <Link to="D_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv2_1>
            <div>기부하자</div>
          </StyledDiv2_1>
        </Link>
      </StyledDiv2>

      <StyledDiv3>
        <Link to={userId ? `/users/${userId}` : "/login"} style={{ textDecoration: 'none', color: 'white' }}>
          <StyledDiv3_1>
            <div>{userId ? `${userId}님 반갑습니다` : '로그인'}</div>
          </StyledDiv3_1>
        </Link>
        <StyledDiv3_1m>
          <div>|</div>
        </StyledDiv3_1m>
        <Link to={userId ? "/logout" : "/signup"} style={{ textDecoration: 'none', color: 'white' }}>
          <StyledDiv3_1>
            <div>{userId ? '로그아웃' : '회원가입'}</div>
          </StyledDiv3_1>
        </Link>
      </StyledDiv3>
    </Stylednav>
  );
};

const Stylednav = styled.nav`
  position: static;
  /* position: fixed; */
  /* bottom: 100; */
  width: 100%;
  height: 60px;
  display: flex;
  border: solid 2px;
  background-color: #333333;
`;

const StyledDiv1 = styled.div`
  width: 90px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  color: white;
  text-decoration-line: none;
  margin-left: 200px;
  margin-top: 10px;
`;
const Styledimg = styled.img`
  width: 25px;
  height: 30px;
  /* object-fit: cover; */
`;
const StyledDiv1_1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  text-align: center;
  margin-left: 8px;

  color: #ffffff;
`;

const StyledDiv2 = styled.div`
  width: 655px;
  display: flex;
  /* text-decoration-line: none; */
  color: white;

  text-decoration: none;
  text-decoration-line: none;
  margin-top: 15px;
  margin-left: 120px;
  margin-right: 120px;
`;
const StyledDiv2_1 = styled.div`
  width: 110px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;
const StyledDiv2_1L = styled.div`
  width: 150px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;
const StyledDiv2_1M = styled.div`
  width: 130px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;

const StyledDiv3 = styled.div`
  /* flex-direction: row; */
  width: 125px;
  display: flex;
  align-items: center;
  text-decoration-line: none;
`;
const StyledDiv3_1 = styled.div`
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;

  color: #ffffff;
`;
const StyledDiv3_1m = styled.div`
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;

  margin-left: 15px;
  margin-right: 15px;

  color: #ffffff;
`;

export default Nav;
