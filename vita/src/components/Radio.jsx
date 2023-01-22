import { useContext } from 'react';
import RadioContext from './RadioContext';
import styled from 'styled-components';

function Radio({ children, value, name, defaultChecked, disabled }) {
  const group = useContext(RadioContext);

  return (
    <Styleddiv>
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled || group.disabled}
          checked={
            group.value !== undefined ? value === group.value : undefined
          }
          onChange={(e) => group.onChange && group.onChange(e.target.value)}
        />
        {children}
      </label>
    </Styleddiv>
  );
}
const Styleddiv = styled.div`
  font-size: 28px;
  display: flex;
`;
export default Radio;
