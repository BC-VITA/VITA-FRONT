import React, { useState, useEffect } from 'react';
import Stomp from 'stompjs';
import io from 'socket.io-client';

const D_Main = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [stompClient, setStompClient] = useState(null);
  const [socketClient, setSocketClient] = useState(null);

  useEffect(() => {
    const client = Stomp.client('ws://localhost:8004/api/websocket');
    client.connect({}, () => {
      setStompClient(client);
    });
  }, []);

  useEffect(() => {
    const client = io('http://localhost:8004');
    client.on('connect', () => {
      setSocketClient(client);
    });
  }, []);

  useEffect(() => {
    if (stompClient && socketClient) {
      const stompSubscription = stompClient.subscribe('/topic/chat', message => {
        const newMessages = [...messages, JSON.parse(message.body)];
        setMessages(newMessages);
      });

      const socketSubscription = socketClient.on('message', message => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });

      return () => {
        stompSubscription.unsubscribe();
        socketSubscription.unsubscribe();
      };
    }
  }, [stompClient, socketClient, messages]);

  // 메시지 전송 이벤트 핸들러 등록
  const handleMessageSend = () => {
    if (messageInput && stompClient && socketClient) {
      const message = { text: messageInput };
      stompClient.send('/app/chat', {}, JSON.stringify(message));
      socketClient.emit('message', message);
      setMessageInput('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default D_Main;