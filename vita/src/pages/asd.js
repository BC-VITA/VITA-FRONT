import React, { useEffect, useState } from 'react';
import { Stomp } from '@stomp/stompjs';

function Chat() {
  const [roomId, setRoomId] = useState(0);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [chatList, setChatList] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [stompClient, setStompClient] = useState(null);
  const userId = sessionStorage.getItem('userId');
  //임시로 숫자로 변환하게 함
  let userIdValue;
  if (userId === 'admin') {
    userIdValue = 1;
  } else {
    userIdValue = userId;
  }

  useEffect(() => {
    // STOMP 클라이언트 설정
    const client = Stomp.client('ws://localhost:8004/vita');
    setStompClient(client);

    // 연결이 열린 경우의 이벤트 핸들러
    const onConnect = (frame) => {
      console.log('STOMP 연결 성공');
      client.subscribe('/sub/chat', onMessageReceived);
    };

    // 연결이 닫힌 경우의 이벤트 핸들러
    const onDisconnect = (frame) => {
      console.log('STOMP 연결 종료');
    };

    // STOMP 클라이언트 연결
    client.connect({}, onConnect, onDisconnect);

    // 컴포넌트가 언마운트될 때 STOMP 클라이언트 연결 종료
    return () => {
      client.disconnect();
    };
  }, []);

  useEffect(() => {
    fetchChatList();
  }, []);

  const fetchChatList = async () => {
    try {
      const sessionId = sessionStorage.getItem('sessionId');

      // 요청 헤더에 세션 정보 추가
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionId}`,
      };

      // fetch 요청 보내기
      const url = `http://localhost:8004/chat/list?userId=${userId}`;
      const response = await fetch(url, {
        credentials: 'include',
        headers: headers,
      });
      const data = await response.json();
      setChatList(data);
      console.log({ chatList });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  //메세지 내용 가져오기
  const selectRoom = (roomId) => {
    setSelectedRoom(roomId);

    // 선택한 채팅방의 메시지 가져오기
    fetch(`/chat/${roomId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Room detail:', data);
        // TODO: 가져온 메시지 처리 로직 추가
      })
      .catch((error) => {
        console.error('Error fetching room detail:', error);
      });
  };
  //메시지 보내기
  const sendMessage = () => {
    const chatMessage = {
      'roomId': 1,
      'message': message,
      'boardId': 1,
      'senderId': userIdValue,
      'receiverId': 2,
    };
    //로그인할때 number저장하기

    // STOMP 클라이언트를 통해 메시지 전송
    if (stompClient) {
      stompClient.send('/pub/send', {}, JSON.stringify(chatMessage));
    }

    setMessage('');
  };

  const onMessageReceived = (message) => {
    const receivedData = JSON.parse(message.body);
    setReceivedMessage(receivedData.message);
  };

  return (
    <div>
      <div>
        Chat List:
        {chatList.map((chatRoom) => (
          <div key={chatRoom.roomId} onClick={() => selectRoom(chatRoom.roomId)}>
            Room: {chatRoom.roomId}, Last Message: {chatRoom.title}
          </div>
        ))}
      </div>
      <div>Received Message: {receivedMessage}</div>
      <input type="text" value={message} onChange={handleInputChange} />
      <button onClick={sendMessage}>Send</button>
      <div>{selectedRoom}</div>
    </div>
  );
}

export default Chat;
