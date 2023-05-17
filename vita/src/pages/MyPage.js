import React, { useEffect, useState } from 'react';

const MyPage = () => {
  const [userData, setUserData] = useState(null);

  const userId = 'asd';

  useEffect(() => {
    const url = `http://localhost:8004/user/mypage?userId=${userId}`;

    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res);
        console.log(userData);
      });

    console.log(userData);
  }, []);

  
  return (
    <div>
      <h1>My Page</h1>
      {userData ? (
        <div>
          <p>User ID: {userData.userId}</p>
          <p>User Name: {userData.userName}</p>
          <p>User Email: {userData.userEmail}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default MyPage;
