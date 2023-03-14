import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import GroupPhoTO from '../img/개인.png';
import icHospitalonPhoTO from '../img/병원.png';
import IndividualPhoTO from '../img/봉사 기업・단체.png';

function SignUp() {
  const navigate = useNavigate();

  const Group = () => {
    navigate('/Group');
  };
  const Hospital = () => {
    navigate('/Hospital');
  };
  const Individual = () => {
    navigate('/Individual');
  };

  return (
    <div >
      <section>
        <Styleddiv>회원가입</Styleddiv>
        <Styleddiv1>자신에게 맞는 항목을 선택하여 회원가입 해주세요.</Styleddiv1>
        <hr
          style={{
            width: '70%',
            size: '10',
            borderWidth: '2px',
            border: 'solid',
            marginLeft: '15%'
          }}
        ></hr>
      </section>
      <section style={{
        display: 'flex'
      }}>
        <div style={{ flexdirection: 'column' }}>
          <Button size="large" onClick={Group} style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
          }}>
            <Styledimg
              src={GroupPhoTO}
              class
              name="GroupPhoTO"
              alt="GroupPhoTO"
            />
            <div >개 인</div>
          </Button>
        </div>
        <div>
          <Button size="large" onClick={Hospital} style={{
            display: 'flex',
            flexdirection: 'column',
          }}>
            <Styledimg
              src={icHospitalonPhoTO}
              class
              name="icHospitalonPhoTO"
              alt="icHospitalonPhoTO"
            />
            <div>병 원</div>
          </Button>
        </div>
        <div>
          <Button size="large" onClick={Individual} >
            <Styledimg
              src={IndividualPhoTO}
              class
              name="IndividualPhoTO"
              alt="IndividualPhoTO"
            />
            <div>봉사 기업・단체</div>
          </Button>
        </div>
      </section >
    </div>
  );
}
const Styleddiv = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 48px;
  font-weight: 700;
  margin-top: 3%;
  margin-left: 15%;
`;

/*const Styleddiv2 = styled(Styleddiv)`
  margin-top: 0%;
`;*/
const Styleddiv1 = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
  margin-left: 15%;
`;
const Styledimg = styled.img`
  width: 20px;
  height: 25px;
  object-fit: cover;
`;
export default SignUp;
