import React, { useEffect, useId, useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Modal, Nav, FloatingLabel } from 'react-bootstrap';
import information from '../../img/image 67.png';

function Chat_Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const { element, roomId1 } = location.state;
  const img = () => { navigate('/information'); };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [accept, setAccept] = useState(false);
  const [cancel, setCancel] = useState(false);

  //채팅
  const [stompClient, setStompClient] = useState(null);
  const [roomId, setRoomId] = useState(1);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [chatList, setChatList] = useState([]);
  const [data123, setData123] = useState([]);
  const userId = sessionStorage.getItem('userId');

  //STOMP 연결
  useEffect(() => {
    // STOMP 클라이언트 설정
    const client = Stomp.client('ws://localhost:8004/vita');
    setStompClient(client);

    // 연결이 열린 경우의 이벤트 핸들러
    const onConnect = (frame) => {
      console.log('STOMP 연결 성공');
      client.subscribe('/sub/chat/1', onMessageReceived);
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

  //채팅 보내기
  useEffect(() => {
    fetchChatList();
  }, []);

  const fetchChatList = async () => {
    try {
      // 세션 정보 가져오기
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
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  //채팅 목록 가져오기
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:8004/chat/${roomId1.roomId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Room detail:', data);
          setData123(data);
        })
        .catch((error) => {
          console.error('Error fetching room detail:', error);
        });
    };

    // 최초 실행
    fetchData();

    // // 1초마다 fetchData 함수 호출
    // const intervalId = setInterval(fetchData, 1000);

    // // 컴포넌트 언마운트 시 타이머 정리
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);


  //메시지 보내기
  const sendMessage = () => {
    const chatMessage = {
      'roomId': roomId1.roomId,
      'boardId': roomId1.boardId,
      'senderId': userId,
      'receiverId': roomId1.otherUserId,
      'message': message,
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

  //채팅부분에서 수락하기 버튼
  const [userInfo, setuserInfo] = useState('');
  const handleAccept = (roomId1) => {
    fetch(`http://localhost:8004/chat/agree`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userId: userId,
        roomId: roomId1.roomId,
        isAgree: true
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const url1 = `http://localhost:8004/user/designate-blood-accept-window?designateBloodWriteUserId=${roomId1.boardId}&userId=${userId}`;
    fetch(url1, {
      method: 'get',
    })
      .then((data1) => data1.json())
      .then((data1) => {
        setuserInfo(data1);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <StyledAll>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>채팅</StyledTitle>
          <StyledTitle2>
            <Nav.Link href="/MyPage_DBD">마이페이지로 가기</Nav.Link>{' '}
          </StyledTitle2>
        </StyledTop>
      </StyledSubcomment>
      <Styledcomment>
        <StyledBox>
          <StyledText>{data123.roomTitle}</StyledText>
          <StyledButton>
            <StyledButtonB onClick={() => setAccept(true)}>
              수락하기
            </StyledButtonB>
            <Modal size="md" show={accept} onHide={() => setAccept(false)}>
              <Modal.Header closeButton>
                <Modal.Title>수락하기</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                신청자를 수락하였습니다. <br />
                신청자에게 환자 정보가 보여지게 됩니다. <br />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setAccept(false)}>
                  닫기
                </Button>
                <Button variant="primary" onClick={() => handleAccept(roomId1)}>
                  수락
                </Button>
              </Modal.Footer>
            </Modal>
            <StyledButtonP onClick={() => setCancel(true)}>
              취소하기
            </StyledButtonP>
            <Modal size="md" show={cancel} onHide={() => setCancel(false)}
            // aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title>취소하기</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                취소되었습니다. <br />
              </Modal.Body>
            </Modal>
          </StyledButton>
        </StyledBox>
        <StyledBox2>
          <StyledText2>
            {/* <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>지정헌혈자 안내문</StyledButtonDiv>
            </Nav.Link> */}

            <StyledText2 onClick={handleShow}>지정헌혈자 안내문</StyledText2>

            <Modal size="lg" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>지정헌혈자 안내문</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul>
                  <li>
                    <b>지정헌혈자 유의사항</b>
                  </li>
                  <ol>
                    <li>
                      헌혈장소 방문시 의료기관에서 등록된{' '}
                      <b>
                        <u>수혈자 등록번호</u>
                      </b>
                      를 간호사에게 보여주시기 바랍니다.
                    </li>
                    <li>
                      <b>
                        <u>수혈자 등록번호</u>
                      </b>
                      가 없는 경우 <b>지정헌혈이 불가합니다.</b>
                    </li>
                    <li>
                      지정혈액은 환자의 상태 또는 혈액의 잔여 유효기간 등의
                      사유로 지정된 환자에게 수혈이 불가능 한 경우 다른 의료기관
                      환자에게 수혈될 수 있습니다.
                    </li>
                    <li>
                      임신력이 있는 여성의 경우 혈소판 지정헌혈이 불가능합니다.
                    </li>
                  </ol>
                  <br />
                  <li>
                    <b>지정헌혈자 선별시 유의사항</b>
                    <ol>
                      <li>
                        환자와 혈액관계(4촌이내)가 있는 분의 혈액은 수혈로 인한
                        <b>이식편대숙주병</b> 등의 수혈부작용을 유발할 수
                        있으므로 가급적 직계가 아닌 헌혈자가 헌혈하는 것이
                        좋으며, 혈연관계에 있으신 분이 헌혈할 경우에는 수혈시
                        혈액방사선조사가 필요합니다.
                      </li>
                      <li>
                        <b>신생아용혈성질환</b> 방지를 위해 임신가능 연령의
                        부인에게 남편 또는 남편 친족관계에 있는 분은 지정헌혈을
                        자제해주시고, 신생아 용혈성 질환이 생긴 아기에게
                        아버지는 지정헌혈을 자제해 주시기 바랍니다.
                      </li>
                    </ol>
                  </li>
                  <br />
                  <li>
                    <b>헌혈자 유의사항</b>
                    <ol>
                      <li>
                        헌혈장소 방문시 헌혈자 본인 <b>신분증</b>을 반드시
                        지참해 주시기 바랍니다.
                      </li>
                      <li>헌혈가능 연령, 체중 및 간격</li>
                      <Styledimg
                        src={information}
                        classname="information"
                        alt="information"
                      />
                    </ol>
                    <ul>
                      <li>
                        전국 헌혈장소 및 헌혈에 대한 자세한 정보는 아래 홈페이지
                        또는 앱에서 확인하실 수 있습니다.
                      </li>
                      <li>
                        <b>
                          <u>대한적십자사 혈액관리본부 홈페이지</u>
                        </b>{' '}
                        : <a href="www.bloodinfo.net">www.bloodinfo.net</a>{' '}
                      </li>
                      <li>
                        <b>
                          <u>대한적십자사 레드커넥트 앱</u>
                        </b>{' '}
                        : 네이버에서 레드커넥트 검색 후 다운로드{' '}
                      </li>
                      <li>
                        한마음혈액원 홈페이지 :{' '}
                        <a href="www.bloodnet.or.kr">www.bloodnet.or.kr</a>{' '}
                      </li>
                    </ul>
                  </li>
                  <br />
                  <li>
                    <b>헌혈장소 및 기타 문의사항 연락처</b>
                    <ul>
                      <li>대한적십자사 CRM 센터 1600-3705</li>
                      <li>한마음 혈액원 02-586-2415</li>
                    </ul>
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button> */}
              </Modal.Footer>
            </Modal>
          </StyledText2>
        </StyledBox2>
        <StyledBox3>
          {data123.chatMessageList &&
            data123.chatMessageList.map((messageItem) => (
              <div key={messageItem.messageId}>
                {messageItem.senderId === userId ? (
                  <>
                    <StyledBox3RName>{messageItem.senderName}</StyledBox3RName>
                    <StyledBox3R>
                      <StyledBox3RTextBox>
                        <StyledBox3RTime>{messageItem.sendTime}</StyledBox3RTime>
                        <StyledBox3RText>{messageItem.message}</StyledBox3RText>
                        <div></div>
                      </StyledBox3RTextBox>
                    </StyledBox3R>
                  </>
                ) : (
                  <>
                    <StyledBox3LName>{messageItem.senderName}</StyledBox3LName>
                    <StyledBox3L>
                      <div></div>
                      <StyledBox3LTextBox>
                        <StyledBox3LText>{messageItem.message}</StyledBox3LText>
                        <StyledBox3LTime>{messageItem.sendTime}</StyledBox3LTime>
                      </StyledBox3LTextBox>
                    </StyledBox3L>
                  </>
                )}
              </div>
            ))}
          {roomId1.isAgree === true &&
            <div>
              {Object.entries(userInfo).map(([key, value]) => (
                <p key={key}>{`${key}: ${value}`}</p>
              ))}
            </div>}
        </StyledBox3>
        <StyledBox4>
          <FloatingLabel
            label="메세지 작성"
            name="message"
            style={{ width: '60em' }}
          >
            <Form.Control type="text" placeholder="label" value={message} onChange={handleInputChange} />
          </FloatingLabel>
          <StyledButton4 onClick={sendMessage}>
            전송
          </StyledButton4>
        </StyledBox4>
      </Styledcomment>
    </StyledAll>
  );
}

const StyledAll = styled.div`
  /* display: flex; */
  padding-bottom: 300px;
`;

const StyledSubcomment = styled.div`
  display: block;
  margin: auto;
  /* background-color: pink; */
  width: 70em;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  /* width: 203px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
`;
const StyledTitle2 = styled.div`
  /* width: 203px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 48px;

  color: #333333;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Styledcomment = styled.div`
  width: 70em;
  display: block;
  margin: auto;

  margin-top: 20px;

  /* height: 1364px; */
  background: #ffffff;
  border: 2px solid #939393;
  border-radius: 10px;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;
const StyledText = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 50px;

  color: #333333;
`;
const StyledButton = styled.div`
  display: flex;
  margin-right: 10px;
`;
const StyledButtonB = styled.div`
  background: #8faadc;
  border-radius: 9px;
  width: 145px;
  height: 45px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 3px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;

  line-height: 45px;
  text-align: center;

  color: #ffffff;
`;
const StyledButtonP = styled.div`
  width: 145px;
  height: 45px;
  margin-top: 3px;
  margin-left: 20px;

  background: #ff9f9f;
  border-radius: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 45px;
  text-align: center;

  color: #ffffff;
`;

const StyledBox2 = styled.div`
  background: #d9d9d9;
  height: 65px;
`;
const StyledText2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 65px;
  text-align: center;

  color: #000000;
`;

const Styledimg = styled.img`
  width: 100%;
  height: 200px;
`;
const StyledBox3 = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #ffe9e9;
  display: block;
`;

const StyledBox3LName = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 300;
  font-size: 23px;
  line-height: 32px;
  color: #333333;
  padding-left: 10px;
`;
const StyledBox3RName = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 300;
  font-size: 23px;
  line-height: 32px;
  color: #333333;
  padding-left: 10px;
  text-align: right;
`;
const StyledBox3L = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const StyledBox3LTextBox = styled.div`
  display: flex;
  height: 50px;
`;
const StyledBox3LText = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #333333;
  padding-right: 30px;
  padding-left: 10px;
  background: #ffffff;
  border-radius: 0px 10px 10px 0px;
  line-height: 55px;
`;
const StyledBox3LTime = styled.div`
  /* width: 50%; */
  padding-left: 10px;
  line-height: 70px;
`;

const StyledBox3R = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledBox3RTextBox = styled.div`
  display: flex;
  height: 50px;
`;
const StyledBox3RText = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #333333;
  padding-left: 30px;
  padding-right: 10px;
  background: #ffffff;
  border-radius: 10px 0px 0px 10px;
  line-height: 55px;
`;
const StyledBox3RTime = styled.div`
  padding-right: 10px;
  line-height: 70px;
`;

const StyledBox4 = styled.div`
  display: flex;
  background: #ff9f9f;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;
const StyledButton4 = styled.div`
  width: 130px;
  height: 57px;
  background: #fff2f2;
  border-radius: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 57px;

  text-align: center;

  color: #333333;
`;
export default Chat_Details;
