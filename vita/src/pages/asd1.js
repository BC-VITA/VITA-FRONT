import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Chat() {
  const userId = sessionStorage.getItem('userId');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const volunteerId = location.state?.volunteerId;

  useEffect(() => {
    const apiUrl = `http://localhost:8004/volunteer/reservation/${volunteerId}/list`;
    fetch(apiUrl, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleComplete = (reservationId) => {
    // API 호출
    fetch(`http://localhost:8004/volunteer/reservation/list/${reservationId}?status=참여완료`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    const updatedData = userData.filter((item) => item.reservationId !== reservationId);
    setUserData(updatedData);
  };

  if (userData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {userData.map((review, index) => (
          <div key={index}>
            <div>아이디 : {review.reservationId}</div>
            <div>예약자 : {review.userName}</div>
            <button onClick={() => handleComplete(review.reservationId)}>참여완료</button>
            <div><br /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
