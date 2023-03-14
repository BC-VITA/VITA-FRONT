import React from 'react';
import styled from 'styled-components';
import icon from './icon.png';

const Footer = () => {
  return (
    <Styledfoot>
      <div style={{ fontSize: '28px', marginbottom: '200px' }}>
        <Styledimg src={icon} class name="main-icon" alt="logo" />
        <Sp0>
          헌혈하러 갈래?
        </Sp0>
      </div>
      <div style={{ marginLeft: '5%' }}>
        <div>부천대학교  |  컴퓨터소프트웨어과  |  6조 졸업작품  |  GITHUBE</div>
        <br />
        <div style={{ color: '#777777' }}>팀원 : (팀장)김민지, 김수임, 이민렬</div>
      </div>
    </Styledfoot>
  );
};

const Sp0 = styled.span`
  font-weight: bold;

`;
const Styledfoot = styled.footer`
  position: static;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #F5F5F5;
  margin-top: auto;
  display:flex;
  justify-content: center;
  align-items: center;
`;
const Styledimg = styled.img`
  width: 40px;
  height: 48px;
  object-fit: cover; 
  filter: grayscale(100%);
  margin-bottom: 10px;
  margin-right: 10px;
`;


export default Footer;
