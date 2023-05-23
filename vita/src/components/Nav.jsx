import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../img/icon.png';

const Nav = () => {
  const userId = sessionStorage.getItem('userId');

  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    navigator('/');
    window.location.reload();
  };

  return (
    <Stylednav>
      <StyledDiv1>
        <Styledimg src={icon} class name="main-icon" alt="logo" />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <StyledDiv11>
            <div>vita</div>
          </StyledDiv11>
        </Link>
      </StyledDiv1>

      <StyledDiv2>
        <Link to="Learn" style={{ textDecoration: 'none' }}>
          <StyledDiv21>
            <div>알아보자</div>
          </StyledDiv21>
        </Link>

        <Link to="BD_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv21>
            <div>헌혈하자</div>
          </StyledDiv21>
        </Link>

        <Link to="DBD_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv21L>
            <div>지정헌혈하자</div>
          </StyledDiv21L>
        </Link>

        <Link to="BD_Story" style={{ textDecoration: 'none' }}>
          <StyledDiv21M>
            <div>이야기하자</div>
          </StyledDiv21M>
        </Link>

        <Link to="S_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv21>
            <div>봉사하자</div>
          </StyledDiv21>
        </Link>

        <Link to="D_Main" style={{ textDecoration: 'none' }}>
          <StyledDiv21>
            <div>기부하자</div>
          </StyledDiv21>
        </Link>
      </StyledDiv2>
      <StyledDiv3>
        <Link
          to={userId ? `/` : '/login'}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <StyledDiv31L>
            <div>{userId ? `${userId}님` : '로그인'}</div>
          </StyledDiv31L>
        </Link>
        <StyledDiv31m>
          {/* <div>|</div> */}
          <Link
            to={userId ? `/mypage` : '/'}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <StyledDiv31m>
              <div>{userId ? `| 마이페이지 |` : '|'}</div>
            </StyledDiv31m>
          </Link>
        </StyledDiv31m>
        <Link
          to={userId ? '/' : '/signup'}
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={handleLogout}
        >
          <StyledDiv31R>
            <div>{userId ? '로그아웃' : '회원가입'}</div>
          </StyledDiv31R>
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
const StyledDiv11 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  text-align: center;
  margin-left: 8px;

  color: #ffffff;
`;

const StyledDiv2 = styled.div`
  width: 700px;
  display: flex;
  /* text-decoration-line: none; */
  color: white;

  text-decoration: none;
  text-decoration-line: none;
  margin-top: 15px;
  margin-left: 95px;
  margin-right: 35px;
`;
const StyledDiv21 = styled.div`
  width: 100px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;
const StyledDiv21L = styled.div`
  width: 150px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;
const StyledDiv21M = styled.div`
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
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: end;
  text-decoration-line: none;

  background-color: red;
`;
const StyledDiv31L = styled.div`
  /* width: 50px; */
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;
  text-align: right;

  color: #ffffff;
`;
const StyledDiv31m = styled.div`
  /* width: 50px; */
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;
  text-align: center;

  margin-left: 5px;
  margin-right: 5px;

  color: #ffffff;
`;
const StyledDiv31R = styled.div`
  /* width: 70px; */
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;
  text-align: left;

  color: #ffffff;
`;

export default Nav;
