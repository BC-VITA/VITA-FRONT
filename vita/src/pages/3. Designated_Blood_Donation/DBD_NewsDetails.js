import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { useLocation, useNavigate } from 'react-router-dom';

function DBD_NewsDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { board, imageUrl } = location.state;

  const handleDetailClick = (board) => {
    navigate('/D_SelectDonation', { state: board });
  };

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>지정헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_Main">
                <StyledSubDiv2_2g>지정헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_General">
                <StyledSubDiv2_2g>지정헌혈하기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_WatchList">
                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBD_News">
                <StyledSubDiv2_2>따뜻한 사례</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>따뜻한 사례</StyledTitle>
        </StyledTop>
        <StyledDiv>
          <img
            style={{ width: '870px', height: '500px' }}
            src={imageUrl}
            alt="Board Image"
          />
          <StyledText>{board.title}</StyledText>
          <StyledText2>{board.content}</StyledText2>
          <StyledButton onClick={() => handleDetailClick(board)}>
            기부하러가기
          </StyledButton>
        </StyledDiv>
      </StyledSubcomment>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
const StyledSub = styled.div`
  width: 200px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 180px;
`;
const StyledSubDiv1 = styled.div`
  width: 220px;
  height: 60px;
  /* left: 370px;
  top: 123px; */
  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;
const StyledSubDiv2 = styled.div`
  width: 220px;
  height: 242px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #333333;
`;
const StyledSubDiv2_2g = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #969696;
`;

const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
`;
const StyledTop = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  display: block;
  border: 2px solid #333333;
  margin-top: 10px;
  width: 875px;
`;
const StyledText = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  margin: 20px;

  color: #333333;
`;
const StyledText2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;

  margin: 20px;
  padding-bottom: 100px;

  color: #333333;
`;
const StyledButton = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  padding: 10px;

  text-align: center;
  width: 170px;

  color: #ffffff;

  background: #ff9f9f;
  border-radius: 9px;

  float: right;
  margin-top: 20px;
`;
export default DBD_NewsDetails;
