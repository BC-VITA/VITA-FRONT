import React, { useEffect, useState } from 'react';

const MyPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // API 호출
    fetch('http://localhost:8004/user/check', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // 사용자 정보 설정
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>My Page</h1>
      {userData ? (
        <div>
          <p>User ID: {userData.userID}</p>
          <p>User Name: {userData.userName}</p>
          <p>User Email: {userData.userEmail}</p>
          {/* Display other user data properties */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default MyPage;
