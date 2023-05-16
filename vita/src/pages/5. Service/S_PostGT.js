import styled from 'styled-components';

function S_PostGT() {
  return (
    <StyledAll>
      <section>
        <StyledTitle>헌혈의 집</StyledTitle>
      </section>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  margin: auto;
  padding-bottom: 300px;
`;
const StyledTitle = styled.div`
  width: 270px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;

  color: #333333;
  margin-top: 35px;
`;

export default S_PostGT;
