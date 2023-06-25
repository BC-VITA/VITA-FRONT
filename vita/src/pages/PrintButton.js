import React from 'react';
import styled from 'styled-components';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return <StyledButton onClick={handlePrint}>인쇄</StyledButton>;
};

const StyledButton = styled.button`
  display: none;

  @media print {
    display: block;
  }
`;

export default PrintButton;
