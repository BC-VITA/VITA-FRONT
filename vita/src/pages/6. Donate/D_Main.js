import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

import serviceimg from '../../img/serviceimg.png';

function D_Main() {
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
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1p>
              <Nav.Link href="/D_Main">
                <StyledSubDiv2_2>기부란</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv2_2g>기부하기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv2_2g>기부 영수증</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>기부란?</StyledTitle>
          {/* <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton> */}
        </StyledTop>
        <StyledComment>
          <ul>
            <li>
              기부(寄附, donation)란 공익을 위하여 대가 없이 타인에게 금전, 물품
              또는 금전적 가치가 있는 것을 제공하는 자발적인 행위입니다.
            </li>
          </ul>
        </StyledComment>

        <StyledCommentTitle>기부의 종류는 무엇이 있을까요?</StyledCommentTitle>
        <StyledSComment>
          우리는 일상에서 '기부'라는 말을 어렵지 않게 들어볼 수 있습니다. 구세군
          냄비에 동전을 넣거나 ARS를 통한 수재민 돕기와 같은 행동들을 통해
          누구나 한번쯤은 기부행위에 동참해 보았을 것입니다. 그러나 우리가
          일반적으로 '남을 돕는 일'이라고만 생각하는 기부는 동기, 의도, 비전에
          따라 몇 가지로 나눠볼 수 있습니다. 나의 기부는 어디에 속해 있을까요?
        </StyledSComment>

        <StyledCommentSTitle>주는 행위(giving)</StyledCommentSTitle>
        <StyledSComment>
          지하철 안에서나 길거리에서 걸인에게 적선해 본 적이 있거나 수퍼마켓이나
          은행에 설치된 불우이웃 돕기 모금통에 거스름 돈을 넣어본경험도 있을
          것입니다.이 경우 베푸는 사람은 자신의 ‘돈’이 어디에 사용될 것인지에
          대한 구체적인 생각보다는 단지 돈이 유용하게 사용될 것이라는 막연한
          생각속에 줍니다.이 경우 자신의 돈이나 물품을 주는 사람이나 그것을 받는
          사람 모두 그 행위를 심각하게 받아들이지 않기 때문에 곧 잊어버리는
          경우가 많으며, '단순히 주는 행위'는 돕고자 하는 사람이 가지고 있는
          유·무형의 자원이 일방향으로 도움이 필요한 사람에게 옮겨지는 것을
          말합니다(transfer).
        </StyledSComment>
        <StyledCommentSTitle>자선(charity)</StyledCommentSTitle>
        <StyledSComment>
          전통적으로 우리에게 매우 익숙한 기부형태입니다. 수재민을 위해 담요나
          음식물을 제공한다든지 노숙자를 위해 임시거처를 제공하기 위해 또는
          소년소녀가장들에 대한 생활보조를 위한 기부를 포함합니다.자선이란 말은
          라틴어의 '사랑으로 주어진 기부(GIFT GIVEN OUT OF LOVE)'라는 말에서
          파생되었으며 주는 사람과 받는 사람간의 동정적이고 감정적 관계가
          전제됩니다.대중매체에서 소년소녀가장들의 눈물겨운 겨울나기 이야기를
          접한다든지 추운 지하철 역사 바닥에서 잠을 자는 노숙자를 보면서 또는
          홍수로 인해 모든 것을 잃어버린 수재민들을 보며 우리는 마음깊이
          애처로움과 동정심을 갖게되고, 그래서 자선은 자신보다 불행한 사람이나
          위기에 처한 사람들의 당장의 필요한 욕구를 해결하고자 합니다.자선에서는
          자신의 기부에 대한 어떠한 분명한 결과를 요구하기보다는 기부에 따른
          뿌듯함과 수혜자들의 고통과 필요가 어느 정도 줄었을 것이라는 믿음이
          기부에 대한 보답으로 여겨집니다.자선적 기부는 주로 그 문제가 왜
          발생했는가 하는 근본원인보다는 현재 요구되는 개인적 욕구와 필요에
          초점을 맞춥니다.
        </StyledSComment>
        <StyledCommentSTitle>박애적 기부(philanthropy)</StyledCommentSTitle>
        <StyledComment>
          개개인의 문제 말고도 사회에는 빈곤문제, 환경문제, 아동학대문제,
          노인문제, 디지털 격차 문제, 여성차별 문제 등 해결되지 않은 많은 문제가
          존재합니다박애적 기부는 개개인의 욕구가 아닌 좀더 넓고 좀더 공공의
          사회적 문제를 해결하기 위해 기부하는 것입니다.박애적 기부는 현상유지가
          아니라 정의롭지 못하고 불평등한 사회구조와 체계, 기관등의 변화를
          원합니다.따라서 불우한 개개인 욕구해결에 머물지 않고 좀 더 폭넓은 특정
          사회적 문제 해결과 인간의 삶의 질을 향상시키기 위한 다양한 조직들에
          기부하는 행위를 포함합니다.박애활동은 라틴어의 '깊은 인간애(love of
          humanity)'에서 나온 말로, 단순히 주는 행위나 자선과는 기부동기면에서
          차이가 있습니다. 박애적 기부자들은 자신의 기부의 결과로서 인간사회가
          지속적이고 발전적으로 변화할 것이라는 기대를 갖고 하는 투자이기 때문에
          기부자의 비전, 세계에 대한 이해노력, 신념 등이 필요합니다.박애활동의
          대상영역은 빈곤 문제와 같은 사회적 문제 해결에서부터 궁극적으로 인간
          삶의 질 향상을 위한 단체에 기부하는 행위까지를 포함하며, 박애적 기부는
          연구활동, 보건, 예술, 교육, 문화, 장학사업 등과 같은 보다 다양한
          영역에 걸쳐 이루어질 수 있습니다.
        </StyledComment>

        <StyledCommentTitle>기부와 혼용하여 사용하는 단어들</StyledCommentTitle>
        <StyledComment2>
          <ul>
            <li>
              {' '}
              기부(寄附, donation)자선사업이나 공공사업을 돕기 위하여 돈이나
              물건 따위를 대가없이 내놓음
            </li>
            <li>
              기탁(寄託, donation)부탁하여 맡겨두는 것으로 내용상 기부와
              유사하나 위탁이라는 절차를 거치는 행위
            </li>
            <li>
              후원(後援, sponsorship)이떤 일에 재정적으로 도움을 주는 것으로
              비교적 상응하는 반대급부가 있음
            </li>
            <li>
              협찬(協贊, sponsorship)후원과 동일하며 홍보와 광고 등의 반대급부가
              수반됨
            </li>
          </ul>
        </StyledComment2>
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
  height: 182px;
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
  margin-bottom: 10px;

  color: #333333;
`;
const StyledComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 50px;
  margin-right: 60px;
`;

const StyledCommentSTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  /* line-height: 48px; */
  /* margin-left: 375px; */
  margin-top: 10px;
  color: #ff9f9f;
`;
const StyledSComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  /* line-height: 28px; */
  margin-bottom: 5px;
  margin-right: 60px;
`;

const StyledComment2 = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  /* margin-bottom: 50px; */
  margin-right: 60px;

  padding: 20px;
  background: #f4f4f4;

  border: 1px solid #a3a3a3;
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
export default D_Main;
