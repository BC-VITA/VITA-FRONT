import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return <button onClick={handlePrint}>인쇄</button>;
};

export default PrintButton;
