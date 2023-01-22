import RadioContext from './RadioContext';
import styled from 'styled-components';

function RadioGroup({ label, children, ...rest }) {
  return (
    <Styleddiv>
      <fieldset>
        <legend>{label}</legend>
        <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
      </fieldset>
    </Styleddiv>
  );
}
const Styleddiv = styled.div`
  margin-top: 44px;
  margin-right: 48px;
  font-size: 32px;
`;

export default RadioGroup;
