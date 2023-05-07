import React from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

function DBD_Main() {

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>지정헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBD_Main">
                <StyledSubDiv2_2>지정헌혈이란</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
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
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_News">
                <StyledSubDiv2_2g>따뜻한 사례</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>지정헌혈이란</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>
        <StyledTopComment>
          헌혈자가 헌혈카페에서 의료기관 및 환자를 지정하여 헌혈하는 것을
          말합니다. 한마음혈액원은 문진 시 헌혈자가 지정헌혈을 요청할 경우
          [지정헌혈의뢰서]를 자체 작성해 혈액과 함께 지정병원에 보냅니다.
          <br />
          지정헌혈을 원하는 헌혈자는 반드시 수혈자에게 수혈될 혈액의 종류 및
          수혈 받을 병원 등에 대하여 정확히 확인하시는 것이 중요합니다
        </StyledTopComment>

        <StyledCommentTitle>지정헌혈 필수 지참 사항</StyledCommentTitle>
        <StyledComment>
          <ul>
            <li>“환자 또는 보호자＂로 부터 전달 받은 “수혈자 등록번호”</li>
            <li>헌혈자 본인 신분증</li>
          </ul>
        </StyledComment>

        <StyledCommentBox1>
          <StyledCommentBox2>
            <StyledCommentBox3>
              <StyledCommentSmailTitle>
                “수혈자 등록번호”를 지참한 지정헌혈자
              </StyledCommentSmailTitle>
              <StyledComment>
                <ul>
                  <li>
                    문진 간호사에게 “수혈자 등록번호”를 보여주시기 바랍니다.
                  </li>
                  <li>혈연여부 확인 후 채혈이 진행됩니다.</li>
                </ul>
              </StyledComment>
            </StyledCommentBox3>
            <StyledCommentBox3>
              <StyledCommentSmailTitle>
                “수혈자 등록번호”가 없는 지정헌혈자
              </StyledCommentSmailTitle>
              <StyledComment>
                <ul>
                  <li>
                    환자 또는 보호자에게 “ 수혈자 등록번호 ” 를 받아 주시기
                    바랍니다.
                  </li>
                  <li>
                    “수혈자 등록번호”가 없으면 지정헌혈 진행이 불가능합니다.
                  </li>
                </ul>
              </StyledComment>
            </StyledCommentBox3>
          </StyledCommentBox2>
          <StyledComment2>
            <div>
              수혈자 등록번호 ”는 해당 병원에서 환자 또는 보호자에게 전달(전송)
              됩니다.
            </div>
          </StyledComment2>
          <StyledCommentSmailTitle2>유의사항</StyledCommentSmailTitle2>
          <StyledComment>
            <ul>
              <li>
                의료기관에서 수혈자 정보가 등록되지 않거나 요청 기간이 만료된
                경우 일반 헌혈로 전환되어 다른 환자에게 수혈될 수 있습니다.
              </li>
            </ul>
          </StyledComment>
        </StyledCommentBox1>

        <StyledCommentTitle>지정헌혈 절차</StyledCommentTitle>
        <StyledComment>
          <ol>
            <li>
              문진 시 ‘지정헌혈자 안내문’(SMS 발신내용)을 문진 간호사에게
              보여주세요.
            </li>
            <li>지정헌혈(수혈자 등록번호) 정보조회 후 채혈이 진행됩니다.</li>
            <li>
              채혈되어진 혈액은 환자의 지정혈액으로 등록되어 해당병원으로
              보냅니다.
            </li>
          </ol>
        </StyledComment>
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
  height: 222.5px;
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
  width: 270px;
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
  margin-top: 10px;
  width: 120px;
  height: 35px;
  margin-left: 475px;

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
  margin-left: 25px;
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
const StyledTopComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: 60px;
`;

const StyledCommentBox1 = styled.div`
  margin-bottom: 50px;
`;
const StyledCommentBox2 = styled.div`
  display: flex;
`;
const StyledCommentBox3 = styled.div`
  width: 800px;
  margin-left: 10px;
`;

const StyledCommentSmailTitle = styled.div`
  background-color: #ff5050;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 48px;

  width: 400px;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledCommentSmailTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 48px;

  /* width: 400px; */
  /* text-align: center; */
  color: #ff5050;
  margin-top: 15px;
  /* margin-bottom: 10px; */
`;
const StyledComment = styled.div`
  /* width: 400px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* margin-top: 10px; */
  margin-right: 60px;
`;
const StyledComment2 = styled.div`
  width: 860px;
  background-color: #ffd7d7;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 48px;

  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  margin-left: 10px;
`;
export default DBD_Main;
