import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

import serviceimg from '../../img/serviceimg.png';

function S_Main() {
  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>봉사하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1p>
              <Nav.Link href="/S_Main">
                <StyledSubDiv2_2>자원봉사란</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_Ganeral">
                <StyledSubDiv2_2g>개인봉사</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_Group">
                <StyledSubDiv2_2g>기업 단체 봉사</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_Other">
                <StyledSubDiv2_2g>타기관 봉사정보</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/S_WatchList">
                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>자원봉사란</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>
        <StyledComment>
          <ul>
            <li>라틴어 voluntas에서 유래</li>
            <li>
              volo(의지)
              <ol>
                <li>영어의 will</li>
                <li>voluntus라는 말 생성</li>
                <li>의미: 자발적인 것, 자주적·임의적 자유의</li>
              </ol>
            </li>
            <li>
              자원봉사 활동
              <ul>
                <li>
                  개인 또는 단체가 지역사회·국가 및 인류사회를 위하여 대가 없이
                  자발적으로 시간과 노력을 제공하는 행위
                </li>
              </ul>
            </li>
          </ul>
        </StyledComment>

        <StyledCommentTitle>자원봉사의 특성</StyledCommentTitle>
        <StyledComment>
          <ul>
            <li>
              자발성 : 자신의 의사로써 시간과 재능, 경험을 도움이 필요한 이웃과
              지역사회 공동체 형성에 아무런 대가 없이 활동하는 것
            </li>
            <li>
              무보수성 : 경제적 보상과 관련되는 것으로 자원봉사활동에 대해
              금전적 대가를 받지 않는 것
            </li>
            <li>
              공익성 : 이웃과 지역사회 내에 산재하고 있는 문제를 해결하여 삶의
              질을 향상시키기 위하여 활동하는 것
            </li>
            <li>
              지속성 : 자원봉사활동에 참여하게 되면 일정기간 동안 지속성과
              정기적으로 봉사활동에 참여하는 것
            </li>
          </ul>
        </StyledComment>

        <StyledCommentTitle>봉사자의 자세</StyledCommentTitle>
        <StyledComment>
          <ul>
            <li>
              자원봉사 활동을 하는 목적을 분명히 알고 처음의 순수함을 돌아보는
              자세를 갖습니다.
            </li>
            <li>
              매사에 긍정적인 생각을 가지고 타인에게 모범을 보일 수 있는 성품을
              지닐 수 있도록 노력합니다.
            </li>
            <li>다른 사람들을 보살피고 맡은 바 직책을 충실히 이행합니다.</li>
            <li>
              자신의 말이나 행동이 어떠한 영향을 미치는지 항상 생각하고 신중한
              자세로 임합니다.
            </li>
            <li>활동에 대한 책임감을 가지고 봉사활동을 시작합니다.</li>
            <li>활동은 성실히 하며, 활동 시간에 대한 약속을 꼭 지킵니다.</li>
            <li>
              자신의 개인 적인 문제나 감정이 있더라도 이를 자신의 일과 분리할 수
              있는 능력과 자질이 있어야 합니다.
            </li>
            <li>자원봉사자는 양심적이어야 합니다.</li>
            <li>자원봉사자는 끊임없이 공부하며 배우는 자세를 가져야 합니다.</li>
          </ul>
        </StyledComment>

        <StyledCommentTitle>봉사참여과정</StyledCommentTitle>

        <Styledimg src={serviceimg} class name="serviceimg" alt="serviceimg" />
      </StyledSubcomment>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
const StyledSub = styled.div`
  width: 170px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 205px;
`;
const StyledSubDiv1 = styled.div`
  width: 190px;
  height: 50px;
  /* left: 370px;
  top: 123px; */

  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 55px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffffff;
`;

const StyledSubDiv2 = styled.div`
  width: 190px;
  height: 278px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 55px;
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

const StyledButton = styled.div`
  margin-top: 3px;
  width: 125px;
  height: 35px;
  margin-left: 540px;

  background: #ff9f9f;
  border-radius: 9px;
`;

const StyledButtonDiv = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  margin: auto;
  margin-left: 28px;
  /* identical to box height, or 100% */

  color: #ffffff;
`;

const StyledCommentTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  /* margin-left: 375px; */

  color: #333333;
`;
const StyledComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-right: 60px;
`;

const Styledimg = styled.img`
  /* width: 400px; */
  height: 230px;
  display: block;
  margin-bottom: 10px;
  /* border: solid 2px #a3a3a3; */
  padding: 30px;
  /* border-radius: 15px; */
`;
const StyledimgLarge = styled.img`
  width: 860px;
  height: 230px;
  display: block;
  border: solid 2px #a3a3a3;
  padding: 30px;
  padding-left: 230px;
  padding-right: 230px;
  border-radius: 15px;
  /* margin: auto; */
`;
const StyledDiv = styled.div`
  width: 400px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const StyledDivLarge = styled.div`
  width: 860px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
`;
const StyledDivBold = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  color: red;
`;
export default S_Main;
