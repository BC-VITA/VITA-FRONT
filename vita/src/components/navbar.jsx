import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <NavigationStyled>
      <div>
        <div>VITA</div>
        <div>알아보자</div>
        <div>헌혈하자</div>
        <div>지정헌혈하자</div>
        <div>이야기하자</div>
        <div>봉사하자</div>
        <div>기부하자</div>
        <div>
          <div></div>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div>
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 17px;
  padding: 24px 16px;
  text-align: center;
`;

export default navbar;
