import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Group from './SignUpGroup';
import Hospital from './SignUpHospital';
import Individual from './SignUpIndividual';
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
    <div>
      <section>
        <Styleddiv1>로그인</Styleddiv1>
        <Styleddiv1>회원일 경우 로그인 해주세요</Styleddiv1>
        <hr
          style={{
            width: '60%',
            size: '10',
            borderWidth: '2px',
            border: 'solid',
          }}
        ></hr>
      </section>
      <Stylednav>
        <Styleddiv1>
          <Button size="large" onClick={Group}>
            <Styledimg
              src={GroupPhoTO}
              class
              name="GroupPhoTO"
              alt="GroupPhoTO"
            />
            <div>개 인</div>
          </Button>
        </Styleddiv1>
        <Styleddiv1>
          <Button size="large" onClick={Hospital}>
            <Styledimg
              src={icHospitalonPhoTO}
              class
              name="icHospitalonPhoTO"
              alt="icHospitalonPhoTO"
            />
            <div>병 원</div>
          </Button>
        </Styleddiv1>
        <Styleddiv1>
          <Button size="large" onClick={Individual}>
            <Styledimg
              src={IndividualPhoTO}
              class
              name="IndividualPhoTO"
              alt="IndividualPhoTO"
            />
            <div>봉사 기업・단체</div>
          </Button>
        </Styleddiv1>
      </Stylednav>
    </div>
  );
}

const Stylednav = styled.nav`
  position: static;
  bottom: 100;
  width: 100%;
  height: 60px;
  display: flex;
  border: solid 2px;
  background-color: black;
  padding: auto;
  margin: auto;
`;

const Styleddiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration-line: none;
  margin-left: 15%;
  font-size: 3rem;
`;
const Styledimg = styled.img`
  width: 20px;
  height: 25px;
  object-fit: cover;
`;
export default SignUp;
