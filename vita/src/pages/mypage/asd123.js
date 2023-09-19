import React, { useEffect, useState } from 'react';

function Asd123() {
    const userId = sessionStorage.getItem('userId');
    const [inputData, setInputData] = useState([]);

    useEffect(() => {
        if (userId) {
            const url1 = `http://localhost:8004/user/mypage/designaged-reservation-history?userId=${userId}`;
            fetch(url1)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('네트워크 응답이 정상이 아닙니다.');
                    }
                    return res.json();
                })
                .then((res) => {
                    setInputData(res);
                })
                .catch((error) => {
                    console.error('데이터를 가져오는 중 오류 발생:', error);
                });
        }
    }, [userId]);

    return (
        <div>
            <div>
                {inputData.map((review, index) => (
                    <div key={index}>
                        <div>제목: {review.title}</div>
                        <div>시간: {review.createdAt}</div>
                        <div><br /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Asd123;
