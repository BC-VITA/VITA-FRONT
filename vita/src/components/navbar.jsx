import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import BloodDonation from '../pages/BloodDonation';
import DesignatedBloodDonation from '../pages/DesignatedBloodDonation';
import Story from '../pages/Story';
import Service from '../pages/Service';
import Donation from '../pages/Donation';
import Find from '../pages/Find';
import { useNavigate } from 'react-router-dom';

const navbar = () => {
  const Navigate = useNavigate;
  const BloodDonation = () => {    
    Navigate('/BloodDonation');
  };
  const DesignatedBloodDonation = () => {
    Navigate('/DesignatedBloodDonation');
  };
  const Story = () => {
    Navigate('/Story');
  };
  const Service = () => {
    Navigate('/Service');
  };
  const Donation = () => {
    Navigate('/Donation');
  };
  const Find = () => {
    Navigate('/Find');
  };
  return (    
    <NavigationStyled>
        <NavigationStyledvita>VITA</NavigationStyledvita>
        <NavigationStyledmenu>
          <button onClick={Find()}><p>알아보자</p></button>        
          <button onClick={BloodDonation()}><p>헌혈하자</p></button>
          <button onClick={DesignatedBloodDonation()}><p>지정헌혈하자</p></button>
          <button onClick={Story()}><p>이야기하자</p></button>
          <button onClick={Service()}><p>봉사하자</p></button>
          <button onClick={Donation()}><p>기부하자</p></button>
        </NavigationStyledmenu>
        <NavigationStyledsearch>
          <NavigationStyledbox></NavigationStyledbox>          
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </NavigationStyledsearch>
        <NavigationStyledstate>
          <div>로그인</div>
          <div>/</div>
          <div>회원가입</div>
        </NavigationStyledstate>
      </NavigationStyled>
  );
};

const NavigationStyledvita = styled.div`  
  margin-left:10%;
  margin-right:10%;
`;
const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: white;
  padding: 24px 16px;
  text-align: center;
  display:flex;
  background-color:black;  
`;
const NavigationStyledmenu = styled.button`  
  display:flex;
  background-color:red;
  max
`;
const NavigationStyledbox = styled.div`
  display:flex;
  width:350px;
  height:50px;
  background-color:white;
  margin-left:10%;
  margin-right:10%;  
`;
const NavigationStyledsearch = styled.div`
  display:flex;  
  margin-right:50px
`;
const NavigationStyledstate = styled.div`
  display:flex;  
  margin-right:270px;
`;

export default navbar;