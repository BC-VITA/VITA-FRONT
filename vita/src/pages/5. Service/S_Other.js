import React from 'react';
import { useLocation } from 'react-router-dom';

function S_Other() {
  const location = useLocation();
  const { selectedDate } = location.state;
  console.log(selectedDate);
  const formattedDate = selectedDate.toLocaleDateString();
  return (
    <div>
      <h1>날짜데이터가 잘 넘어왔는지 확인</h1>
      <p>{formattedDate}</p>
    </div>
  );
}

export default S_Other;
