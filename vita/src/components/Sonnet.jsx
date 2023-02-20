import styled from 'styled-components';

const SubBar = () => {
  return (
    <NavigationStyled>
      <div>
        <div>헌혈하자</div>
        <div>헌혈버스 찾기</div>
        <div>헌혈예약</div>
        <div>헌혈 내역 조회</div>
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

export default SubBar;
