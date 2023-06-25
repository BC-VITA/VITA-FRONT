import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const userId = sessionStorage.getItem('userId');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:8004/volunteer/board/list?userId=${userId}&volunteerType=time`;
    fetch(url, {
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

  if (userData === null) {
    return <div>Loading...</div>;
  }

  const handleJoin = (volunteerId) => {
    navigate('/asd1', { state: { volunteerId } });
  };

  return (
    <div>
      <div>
        {userData.map((review, index) => (
          <div key={index}>
            <div>예약자 : {review.volunteerId}</div>
            <div>제목 : {review.title}</div>
            <div>시작: {review.volunteerStartDate}</div>
            <div>끝: {review.volunteerEndDate}</div>
            <div>시작시간: {review.volunteerStartTime}</div>
            <div>끝시간: {review.volunteerEndTime}</div>
            <button type="button"
              onClick={() =>
                handleJoin(review.volunteerId)
              }>
              신청자보기
            </button>
            <div><br /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
