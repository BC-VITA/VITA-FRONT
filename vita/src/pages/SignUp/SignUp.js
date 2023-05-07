import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import GroupPhoTO from '../../img/개인.png';
import icHospitalonPhoTO from '../../img/병원.png';
import IndividualPhoTO from '../../img/봉사 기업・단체.png';

function SignUp() {
  const navigate = useNavigate();

  const Group = () => {
    navigate('/SignUpGroup');
  };
  const Hospital = () => {
    navigate('/SignUpHospital');
  };
  const Individual = () => {
    navigate('/SignUpIndividual');
  };

  return (
    <div style={{ marginLeft: '15%' }}>
      <section>
        <div style={{ ...divStyle, fontSize: '48px', fontWeight: 'bold', marginTop: '3%', color: 'black', }}>
          회원가입
        </div>
        <div style={{ ...divStyle }}>
          자신에게 맞는 항목을 선택하여 회원가입 해주세요.
        </div>
        <hr style={{ width: '85%', borderWidth: '3px', border: 'solid', borderColor: 'black' }} />
      </section>
      <section style={{ display: 'flex', marginTop: '3%' }}>
        <Button
          size="large"
          onClick={Group}
          style={{ ...buttonStyle, marginLeft: '4%', marginRight: '4%' }}
        >
          <Styledimg src={GroupPhoTO} class name="GroupPhoTO" alt="GroupPhoTO" />
          <div style={{ ...divStyle1 }}>개 인</div>
        </Button>
        <Button
          size="large"
          onClick={Hospital}
          style={{ ...buttonStyle, width: '23.3%', marginRight: '4%' }}
        >
          <Styledimg src={icHospitalonPhoTO} class name="icHospitalonPhoTO" alt="icHospitalonPhoTO" />
          <div style={{ ...divStyle1 }}>병 원</div>
        </Button>
        <Button
          size="large"
          onClick={Individual}
          style={{ ...buttonStyle, width: '23.3%' }}
        >
          <Styledimg
            src={IndividualPhoTO} class name="IndividualPhoTO" alt="IndividualPhoTO" />
          <div style={{ ...divStyle1 }}>봉사 기업・단체</div>
        </Button>
      </section >
    </div>
  );
}
const divStyle1 = {
  color: 'black',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  backgroundColor: '#FF9898',
  width: '106%',
  height: '18%',
  marginTop: '2rem',
};
const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '23%',
  height: '40vh',
  backgroundColor: '#FFE0E0',
  border: '3px solid #606060',
  borderRadius: '35px',
};
const divStyle = {
  display: 'flex',
  justifycontent: 'center',
  alignitems: 'flex-start',
  flexdirection: 'column',
  color: '#787878',
  fontSize: '1.5rem',
  marginLeft: '1%',
};
const Styledimg = styled.img`
  width: 90px;
  height: 100px;
  object-fit: cover;
`;
export default SignUp;