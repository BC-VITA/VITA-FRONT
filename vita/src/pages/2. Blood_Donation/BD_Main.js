import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import before1 from '../../img/유의사항 전1.png';
import before2 from '../../img/유의사항 전2.png';
import before3 from '../../img/유의사항 전3.png';
import before4 from '../../img/유의사항 전4.png';

import after1 from '../../img/유의사항 후1.png';
import after2 from '../../img/유의사항 후2.png';
import after3 from '../../img/유의사항 후3.png';
import after4 from '../../img/유의사항 후4.png';
import after5 from '../../img/유의사항 후5.png';
import after6 from '../../img/유의사항 후6.png';
import after7 from '../../img/유의사항 후7.png';
import after8 from '../../img/유의사항 후8.png';
import after9 from '../../img/유의사항 후9.png';
import after10 from '../../img/유의사항 후10.png';
import after11 from '../../img/유의사항 후11.png';

import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function BD_Main() {
  const [error, setError] = useState(null);

  const [inputData, setInputData] = useState([
    {
      hospitalName: '',
      title: '',
      content: '',
      patientBlood: '',
      bloodType: '',
      startDate: '',
      DesignatedBloodWriteNumber: '',
      bloodNumber: '',
    },
    {},
  ]);

  useEffect(() => {
    fetch('http://localhost:8004/blood/house/filter', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputData(res);
        console.log(inputData);
      })
      .catch((err) => {
        setError(err.message);
      });
    console.log(inputData);
  }, []);
  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1p>
              <Nav.Link href="/BD_Main">
                <StyledSubDiv2_2>헌혈이란</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_House">
                <StyledSubDiv2_2g>헌혈의 집 찾기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Bus">
                <StyledSubDiv2_2g>헌혈 버스 찾기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_Reservation">
                <StyledSubDiv2_2g>헌혈 예약</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/BD_History">
                <StyledSubDiv2_2g>헌혈내역조회</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>헌혈이란</StyledTitle>
        </StyledTop>
        <StyledTopComment>
          생명을 나누는 고귀한 행위 입니다
          <br />
          생명이 위태로운 다른 사람에게 자신의
          <br />
          혈액을 기증하는 사랑의 실천이자 생명을 나누는 고귀한 행위입니다.
        </StyledTopComment>

        <StyledCommentTitle>헌혈 전 유의사항</StyledCommentTitle>
        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={before1} class name="before1" alt="before1" />
            <StyledDiv>
              1. 헌혈 당일 몸상태가 좋지 않은 경우 헌혈자의 안전을 위해 헌혈이
              제한될 수 있습니다.(전날 과음, 피로, 생리중 등)
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={before2} class name="before2" alt="before2" />
            <StyledDiv>
              2. 헌혈 전 신분확인을 위해 신분증을 지참하여야 합니다.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>
        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={before3} class name="before3" alt="before3" />
            <StyledDiv>
              3. 헌혈 전날 충분한 수면을 취해 주시고, 헌혈 전에는 가벼운 식사를
              해주세요.
              <StyledDivBold>
                * 혈소판성분헌혈에 참여하실 경우 헌혈 당일 기름진 음식 섭취는
                피해 주세요.
              </StyledDivBold>
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={before4} class name="before4" alt="before4" />
            <StyledDiv>
              4. 복용 중인 약물이나 치료 중인 질환이 있는 경우 헌혈장소 방문 전
              고객센터 또는 혈액원으로 문의해 주세요.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>

        <StyledCommentTitle>헌혈 후 유의사항</StyledCommentTitle>
        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={after1} class name="after1" alt="after1" />
            <StyledDiv>
              1. 헌헌혈 중이나 헌혈 후 채혈침대에 누워 있을 때 호흡을 규칙적으로
              하면서 다리를 발목 근처에서 꼬고 다리 근육에 힘을 주는 운동을
              해주세요. 이 자세는 헌혈 후 발생할 수 있는 저혈압을 예방해 줍니다.
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={after2} class name="after1" alt="after1" />
            <StyledDiv>
              2. 헌혈 부위를 10분 이상 눌러 주세요. 문지르면 멍이
              듭니다.(헌혈장소를 떠나기 전에 헌혈하신 부위가 완전히 지혈되었는지
              반드시 확인해 주세요)
              <br />
              <br /> 3. 헌혈부위 반창고는 최소 4시간 이상 붙여 주세요.헌혈하신
              부위에 이물질이 접촉되지 않도록 주의하셔야 합니다.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>

        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={after3} class name="after1" alt="after1" />
            <StyledDiv>
              4. 헌혈 직후에는 헌혈장소에서 편안한 자세로 15분 이상 휴식을 취해
              주세요.
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={after4} class name="after1" alt="after1" />
            <StyledDiv>
              5. 헌혈 후 탁자 근처에 앉을 경우 양발이 바닥에 닿은 상태에서
              탁자에 팔꿈치를 대고 앞쪽으로 기대어 앉아 주세요. 이 자세는
              현기증을 느끼거나 실신할 경우 바닥에 쓰러질 가능성을 줄여줍니다.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>
        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={after5} class name="after1" alt="after1" />
            <StyledDiv>
              6. 평소보다 3~4컵의 물을 더 섭취해 주세요. 손실된 혈액량을
              보충하는데 많은 도움이 됩니다.
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={after6} class name="after1" alt="after1" />
            <StyledDiv>
              7. 당일 음주, 1시간 이내의 흡연은 피해 주세요. 1시간 이내의 흡연은
              현기증이나 구토를 유발할 수 있습니다.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>
        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={after7} class name="after1" alt="after1" />
            <StyledDiv>
              8. 당일 등산, 과격한 운동, 놀이기구 탑승 등은 피해 주세요. 헌혈한
              팔로 무거운 것을 들거나 심한 운동을 할 경우 멍이 들 수 있습니다.
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={after8} class name="after1" alt="after1" />
            <StyledDiv>
              9. 당일 가벼운 샤워는 괜찮지만 사우나, 찜질방, 통목욕은 수분
              손실이 많으니 피해 주세요.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>
        <StyledCommentBox>
          <StyledComment>
            <Styledimg src={after9} class name="after1" alt="after1" />
            <StyledDiv>
              10. 헌혈부위에서 출혈이 되면 가급적 팔을 가슴보다 높게 들어 올린
              상태에서 지혈이 될 때까지 출혈 부위를 눌러주세요.
            </StyledDiv>
          </StyledComment>
          <StyledComment>
            <Styledimg src={after10} class name="after1" alt="after1" />
            <StyledDiv>
              11. 트럭 운전사, 다이버, 높은 곳에서 작업하시는 분은 최소 12시간
              이상, 항공기 조종사는 최소 24시간 이상 휴식을 취하신 후 업무에
              복귀해 주세요.
            </StyledDiv>
          </StyledComment>
        </StyledCommentBox>
        <StyledCommentLarge>
          <StyledimgLarge src={after11} class name="after1" alt="after1" />
          <StyledDivLarge>
            12. 헌혈장소를 떠난 후에 오심, 구토, 현기증 등의 증상(지연성
            혈관미주신경반응)이 나타나면 즉시 바닥에 주저앉아 호전될 때까지
            무릎사이에 머리를 넣거나, 가능하면 다리를 들어 올려 주세요. 운전
            중일 때 이러한 증상이 발생하면 증상이 호전될 때까지 운전을 멈춰
            주세요. 이러한 증상은 보통 헌혈 후 1~2시간 이내에 일어나기 때문에 이
            기간 동안에는 운전을 하거나 기기를 작동하지 않는 것이 좋으며, 헌혈
            후 12시간까지는 격렬한 육체운동은 피해 주세요.
          </StyledDivLarge>
        </StyledCommentLarge>
      </StyledSubcomment>
      <div className="home">{error && <div>{error}</div>}</div>
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
  margin-top: 10px;
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
const StyledCommentBox = styled.div`
  display: flex;
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
const StyledCommentLarge = styled.div``;
const Styledimg = styled.img`
  width: 400px;
  height: 230px;
  display: block;
  margin-bottom: 10px;
  border: solid 2px #a3a3a3;
  padding: 30px;
  border-radius: 15px;
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
export default BD_Main;
