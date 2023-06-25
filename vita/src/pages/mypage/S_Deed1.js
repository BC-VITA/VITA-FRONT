import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import S_Deed from './S_Deed';

function S_Deed1() {
  const navigate = useNavigate();
  const location = useLocation();

  const review = location.state?.review;

  return (
    <div>
      <div>{review.reservationId}</div>
    </div>
  );
}
export default S_Deed1;
