import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import icHospitalonPhoto from '../../img/헌혈의 무한 변신.png';
import icHospitalonPhoto2 from '../../img/image 31.png';

import Nav from 'react-bootstrap/Nav';

function Learn() {
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

  return (
    <StyledAll>
      <StyledTop>
        <StyledTitle>알쓸신잡</StyledTitle>
        {/* <StyledSub>
          <Link to="/about">헌혈이 왜 필요한가?</Link>
          <a href="">
            <span>헌혈이 왜 필요한가?</span>
          </a>
          <a href="">
            <span>혈액의 무한 변신</span>
          </a>
          <a href="">
            <span>혈액이 어디로 갈까요?</span>
          </a>
          <a href="">
            <span>헌혈을 하면 안되는 유형</span>
          </a>
        </StyledSub> */}
        <hr />
      </StyledTop>
      <StyledCommentTitle>헌혈이 왜 필요한가? </StyledCommentTitle>
      <StyledCommentUL>
        <ul>
          <li>
            혈액은 수혈이 필요한 환자의 생명을 구하는 유일한 수단으로 아직까지
            대체할 물질이 없고 인공적으로 만들 수도 없습니다.
          </li>
          <li>
            생명을 사고 팔 수 없다는 인류 공통의 윤리에 기반하여 세계 각국은
            혈액의 상업적 유통을 법으로 규제하고 있습니다.
          </li>
          <li>
            혈액은 장기간 보관이 불가능하기 때문에 적정 혈액보유량을 유지하기
            위해서는 지속적이고 꾸준한 헌혈이 필요합니다.
          </li>
          <li>
            우리나라는 수혈용 혈액은 자급자족하고 있지만, 의약품 제조를 위한
            분획용 혈액은 외국으로부터 일부 수입하고 있습니다.
          </li>
          <li>
            우리는 언제든 수혈받을 상황에 처할 수 있습니다. 건강할 때 헌혈하는
            것은 자신과 사랑하는 가족, 더 나아가 우리 모두를 위한 사랑의
            실천입니다.
          </li>
        </ul>
      </StyledCommentUL>
      <StyledHr />
      <StyledCommentTitle>헐액의 무한 변신</StyledCommentTitle>
      <StyledComment>
        안전한 보관과 검사를 거쳐 필요한 환자에게 전달됩니다.
      </StyledComment>
      <Styledimg
        src={icHospitalonPhoto}
        class
        name="icHospitalonPhoto"
        alt="icHospitalonPhoto"
      />
      <StyledHr />
      <StyledCommentTitle>헐액이 어디로 갈까요?</StyledCommentTitle>
      <StyledComment>
        안전한 보관과 검사를 거쳐 필요한 환자에게 전달됩니다.
      </StyledComment>
      <Styledimg2
        src={icHospitalonPhoto2}
        class
        name="icHospitalonPhoto2"
        alt="icHospitalonPhoto2"
      />
      <StyledHr />
      <StyledCommentTitle>헌혈을 하면 안되는 유형</StyledCommentTitle>
      <StyledCommentUL>
        <ul>
          <li>
            혈액은 수혈이 필요한 환자의 생명을 구하는 유일한 수단으로 아직까지
            대체할 물질이 없고 인공적으로 만들 수도 없습니다.
          </li>
          <li>
            생명을 사고 팔 수 없다는 인류 공통의 윤리에 기반하여 세계 각국은
            혈액의 상업적 유통을 법으로 규제하고 있습니다.
          </li>
          <li>
            혈액은 장기간 보관이 불가능하기 때문에 적정 혈액보유량을 유지하기
            위해서는 지속적이고 꾸준한 헌혈이 필요합니다.
          </li>
          <li>
            우리나라는 수혈용 혈액은 자급자족하고 있지만, 의약품 제조를 위한
            분획용 혈액은 외국으로부터 일부 수입하고 있습니다.
          </li>
          <li>
            우리는 언제든 수혈받을 상황에 처할 수 있습니다. 건강할 때 헌혈하는
            것은 자신과 사랑하는 가족, 더 나아가 우리 모두를 위한 사랑의
            실천입니다.
          </li>
        </ul>
      </StyledCommentUL>
      {/* <StyledCommentTitle>헐액이 어디로 갈까요?</StyledCommentTitle>
      <StyledCommentTitle>헌혈을 하면 안되는 유형</StyledCommentTitle> */}
    </StyledAll>
  );
}

const StyledAll = styled.div`
  /* display: flex; */
  padding-bottom: 300px;
  margin-left: 200px;
`;

const StyledTop = styled.div`
  display: block;
  width: 1110px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 230px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
`;
// const StyledSub = styled.span`
//   text-decoration-line: none;
//   margin-right: 10px;
// `;
const StyledHr = styled.div`
  width: 300px;

  border: 3px solid #ff6565;

  margin-left: 46.7ch;
  margin-bottom: 70px;
`;
const StyledCommentTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  /* margin-left: 375px; */
  width: 53ch;
  text-align: center;

  color: #333333;
  margin-top: 50px;
`;
const StyledCommentUL = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 35px;

  margin-bottom: 70px;
  margin-left: 40px;
  width: 60ch;
  text-align: center;
  /* background-color: black; */
  margin-top: 10px;
`;
const StyledComment = styled.div`
  width: 1100px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  margin-bottom: 70px;
  width: 80.7ch;
  text-align: center;
`;
const Styledimg = styled.img`
  width: 550px;
  height: 583px;
  display: block;
  /* margin: auto; */
  /* object-fit: cover; */
  margin-left: 33ch;
  margin-bottom: 70px;
`;
const Styledimg2 = styled.img`
  width: 100ch;
  /* height: 100ch; */
  display: block;
  /* margin: auto; */
  /* object-fit: cover; */
  margin-left: 16ch;
  margin-bottom: 70px;
`;
export default Learn;
