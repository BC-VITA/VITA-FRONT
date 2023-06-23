import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function BD_Details() {
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
          <StyledSubDiv1>이야기하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1p>
              <Nav.Link href="/BD_Story">
                <StyledSubDiv2_2>헌혈후기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_Story">
                <StyledSubDiv2_2g>지정헌혈후기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈후기</StyledTitle>
          {/* <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton> */}
        </StyledTop>

        <StyledDiv>
          <img
            style={{ width: '870px', height: '500px' }}
            src={imageUrl}
            alt="Board Image"
          />
          <StyledText>{board.title}</StyledText>
          <StyledText2>{board.content}</StyledText2>
        </StyledDiv>
        <Styledtext>
          <Styledbox>
            <StyledName>{}이름</StyledName>
            <StyledDay>{}날짜</StyledDay>
          </Styledbox>
          <Styledbox>
            <Styledcontent>{}대박 대단해</Styledcontent>
            <Styledbox>
              <StyledButton1>신고하기</StyledButton1>
              <StyledButton1> | </StyledButton1>
              <StyledButton1>삭제</StyledButton1>
            </Styledbox>
          </Styledbox>
        </Styledtext>
        <StyledBox4>
          <FloatingLabel
            label="댓글 작성"
            name="message"
            style={{ width: '45em' }}
          >
            <Form.Control
              type="text"
              placeholder="label"
              // value={message}
              // onChange={handleInputChange}
            />
          </FloatingLabel>
          <StyledButton4
          // onClick={sendMessage}
          >
            등록
          </StyledButton4>
        </StyledBox4>
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
  height: 123px;
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

const Styledtext = styled.div`
  width: 875px;
  height: 110px;
  border: 2px solid #656464;
  background: #fff4f4;
  padding: 20px;
`;

const Styledbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledName = styled.div`
  color: #333;
  font-size: 24px;
  font-family: Gmarket Sans TTF;
  font-weight: 700;
`;

const StyledDay = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
`;

const Styledcontent = styled.div`
  color: #333;
  font-size: 22px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
`;

const StyledButton1 = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
`;

const StyledBox4 = styled.div`
  width: 875px;
  display: flex;
  background: #ff9f9f;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;
const StyledButton4 = styled.div`
  width: 130px;
  height: 57px;
  background: #fff2f2;
  border-radius: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 57px;

  text-align: center;

  color: #333333;
`;
export default BD_Details;
