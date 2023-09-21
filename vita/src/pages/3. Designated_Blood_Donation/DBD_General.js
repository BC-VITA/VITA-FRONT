import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Table, Nav, Tab, Tabs, Accordion, Form, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import icon from './heart.png';
import { Stomp } from '@stomp/stompjs';

function DBD_General() {
  const navigate = useNavigate();

  const selectList1 = ['전체', '인천', '서울', '경기도', '강원도'];
  const selectList2 = ['최신순', '마감순'];
  const [firstListValue, setFirstListValue] = useState('전체');
  const [firstList2Value, setFirstList2Value] = useState('최신순');
  const [secondListOptions, setSecondListOptions] = useState([
    '검색할 지역을 골라주세요',
  ]);
  const [openIndex, setOpenIndex] = useState(-1);
  const handleRowClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  function handleFirstListChange(event) {
    const selectedValue = event.target.value;
    setFirstListValue(selectedValue);
    if (selectedValue === '전체') {
      setSecondListOptions(['검색할 지역을 골라주세요']);
    } else if (selectedValue === '서울') {
      setSecondListOptions(['가', '나', '다']);
    } else if (selectedValue === '인천') {
      setSecondListOptions(['가가', '나나', '다다']);
    } else if (selectedValue === '경기도') {
      setSecondListOptions(['가가가', '나나나', '다다다']);
    } else {
      setSecondListOptions(['가가가가', '나나나나', '다다다다']);
    }
  }
  function handleSecondListChange(event) {
    const selected2Value = event.target.value;
    setFirstList2Value(selected2Value);
  }
  const [inputData, setInputData] = useState([{}, {}]);
  const [wishList123, setWishList123] = useState([]);
  const userId = sessionStorage.getItem('userId');
  useEffect(() => {
    fetch(`http://localhost:8004/user/board/filter`, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
        console.log(res);
      });

    fetch('http://localhost:8004/user/wishListTable', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setWishList123(res);
      });
  }, []);

  const handleDetailClick = (element) => {
    navigate('/Chat_Details', { state: { element } });
  };

  const handleClick = async (designatedBloodWriteNumber) => {
    // back으로 정보 post함
    fetch('http://localhost:8004/user/wishList/wishListUpdate', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userId: userId,
        boardId: designatedBloodWriteNumber,
        boardType: "designatedBlood"
      }),
    })
      .then((res) => {
        res.json();
      });
  };

  //채팅방 있는지 비교하기
  const [acceptModal, setAcceptModal] = useState([]);
  const [rejectmodal, setRejectModal] = useState([]);
  const [roomIds, setRoomIds] = useState([]);

  const handleAcceptOpen = (index) => {
    let newArr = [...acceptModal];
    newArr[index] = true;
    setAcceptModal(newArr);
  };
  
  const handleAcceptClose = (index) => {
    let newArr = [...acceptModal];
    newArr[index] = false;
    setAcceptModal(newArr);
  };
  
  const handleRejectOpen = (index) => {
    let newArr2= [...rejectmodal];
    newArr2[index]= true;
    setRejectModal(newArr2);
  };
  
  const handleRejectClose= (index) => {
    let newArr2= [...rejectmodal];
    newArr2[index]= false;
    setRejectModal(newArr2);
  };

  useEffect(() => {
    fetch(`http://localhost:8004/chat/roomId?userId=${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setRoomIds(data);
        console.log(data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
  }, [userId]);

  //비교후 채팅방 없으면 만들기
  const [stompClient, setStompClient] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const [chatList, setChatList] = useState([]);

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

  const sendMessage = (element) => {
    const chatMessage = {
      'boardId': element.designatedBloodWriteNumber,
      'senderId': userId,
      'receiverId': element.registerName,
      'message': "처음 인사말 아무거나",
    };
    if (stompClient) {
      stompClient.send('/pub/send', {}, JSON.stringify(chatMessage));
    }
    setMessage('');
    navigate('/MyPage_DBD');
  };

  const onMessageReceived = (message) => {
    const receivedData = JSON.parse(message.body);
    setReceivedMessage(receivedData.message);
  };

  const gotomypage = () => {
    navigate('/MyPage_DBD');
  };


  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>지정헌혈하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_Main">
                <StyledSubDiv2_2g>지정헌혈이란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/DBD_General">
                <StyledSubDiv2_2>지정헌혈하기</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_WatchList">
                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/DBD_News">
                <StyledSubDiv2_2g>따뜻한 사례</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>지정헌혈하기</StyledTitle>
          <StyledButton>
            <Nav.Link href="/DBD_PostGeneral">
              <StyledButtonDiv>작성하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton>
        </StyledTop>
        <StyledTab1>
          <Tabs>
            <Tab eventKey="profile" title="일반 사용자">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>지역선택</StyledFilterDiv1Two>
                    <select
                      onChange={handleFirstListChange}
                      value={firstListValue}
                      style={{ border: 'none', marginTop: '20px' }}
                    >
                      {selectList1.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </StyledFilterDiv1One>
                  <StyledFilterDiv1One>
                    <StyledFilterDiv1Two>RH 여부</StyledFilterDiv1Two>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3" style={{ marginTop: '20px', display: 'flex' }}>
                          <Form.Check type={type} id={`default-${type}`} label="RH-" style={{ marginRight: '20px' }} />
                          <Form.Check type={type} id={`default-${type}`} label="RH+" />
                        </div>
                      ))}
                    </Form>
                  </StyledFilterDiv1One>
                </StyledFilter>
                <section id="list">
                  <Styleddiv2>
                    <StyledTable>
                      <thead>
                        <tr>
                          <th id="area-header" style={{ width: '350px', fontWeight: '700', fontSize: '22px' }}>
                            제목 / 내용
                          </th>
                          <th style={{ width: '100px' }}>
                            &nbsp;
                          </th>
                          <th
                            id="centerName-header"
                            style={{ width: '200px', fontWeight: '700', fontSize: '22px', }}>
                            모집인원 및 현황
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {' '}
                        {inputData
                          .slice(0)
                          .reverse()
                          .map((element, index) => {
                            let iconFilterValue = '100%'; // 기본적으로 100%로 설정

                            wishList123.forEach((item) => {
                              if (item.designatedBoardId === element.designatedBloodWriteNumber) {
                                iconFilterValue = '0%'; // 조건에 따라 필터 값을 변경
                              }
                            });

                            return (
                              <React.Fragment key={element.id}>
                                <tr>
                                  <td
                                    onClick={() => handleRowClick(index)}
                                    headers="area-header"
                                    style={{
                                      width: '350px',
                                      fontWeight: '500',
                                      fontSize: '18px',
                                      textAlign: 'left',
                                    }}
                                  >
                                    {element.title}
                                    <br />
                                    {element.startDate}
                                    <br />
                                    필요한 혈액형: {element.patientBlood}
                                    <br />
                                    혈액 종류: {element.bloodType}
                                    <br />
                                    장소: {element.hospitalName}
                                  </td>
                                  <td></td>
                                  <td
                                    headers="centerName-header"
                                    style={{
                                      width: '200px',
                                      fontWeight: '500',
                                      fontSize: '18px',
                                    }}
                                  >
                                    <br />
                                    모집중
                                    <br />
                                    <Styledimg
                                      src={icon}
                                      className="main-icon"
                                      alt="logo"
                                      onClick={() => handleClick(element.designatedBloodWriteNumber)}
                                      style={{
                                        cursor: 'pointer',
                                        filter: `grayscale(${iconFilterValue})`,
                                      }}
                                    />
                                    <br />
                                    <button
                                      variant="primary"
                                      style={{ width: '100px', height: '35px', borderRadius: '9px', background: '#d9d9d9', color: '#333333', border: 'none' }}
                                      onClick={() => {
                                        const isReceiverNameInRoomIds =
                                          roomIds.some((room) => room.receiverName === element.registerName);

                                        if (isReceiverNameInRoomIds) {
                                          handleAcceptOpen(index)
                                        } else {
                                          handleRejectOpen(index)
                                        }
                                      }}
                                    >
                                      참여하기
                                    </button>

                                    < Modal size="md" show={acceptModal[index]} onHide={() => handleAcceptClose(index)}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>지정헌혈 채팅방</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        현재 관련한 채팅방이 있습니다.<br />
                                        채팅방으로 이동합니다.<br />
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleDetailClick(element)}>
                                          채팅방으로 이동하기
                                        </Button>
                                        <Button variant="secondary" onClick={gotomypage}>
                                          채팅방 목록으로 이동하기
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>

                                    < Modal size="md" show={rejectmodal[index]} onHide={() => handleRejectClose(index)}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>지정헌혈 채팅방</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        현재 관련한 채팅방이 없습니다<br />
                                        채팅방을 만드시겠습니까?<br />
                                        주의 *채팅방을 만들고 채팅방목록으로 이동합니다*<br />
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={() => sendMessage(element)}>
                                          채팅방 만들기
                                        </Button>
                                      </Modal.Footer>
                                    </ Modal >
                                  </td>
                                </tr>
                                {openIndex === index && (
                                  <tr>
                                    <td colSpan={2}>
                                      <Styledtxt
                                        style={{ width: '450px' }}>
                                        {element.content}
                                      </Styledtxt>
                                    </td>
                                    <td>
                                      <Styledtd2
                                        colSpan={1}
                                        style={{ width: '100px' }}>
                                      </Styledtd2>
                                    </td>
                                  </tr>
                                )}
                              </React.Fragment>
                            );
                          })}
                      </tbody>
                    </StyledTable>
                  </Styleddiv2>
                </section>
              </Tab.Content>
            </Tab>
            <Tab eventKey="home" title="병원">
              <Tab.Content>
                <StyledFilter>
                  <StyledFilterDiv1>
                    <StyledFilterDiv1One>
                      <StyledFilterDiv1Two>지역선택</StyledFilterDiv1Two>
                      <select
                        onChange={handleFirstListChange}
                        value={firstListValue}
                        style={{ border: 'none' }}
                      >
                        {selectList1.map((item) => (
                          <option value={item} key={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </StyledFilterDiv1One>
                    <StyledFilterDiv1One>
                      <StyledFilterDiv1Two>RH 여부</StyledFilterDiv1Two>
                      <Form>
                        {['checkbox'].map((type) => (
                          <div key={`default-${type}`} className="mb-3">
                            <Form.Check type={type} id={`default-${type}`} label="RH-" />
                            <Form.Check type={type} id={`default-${type}`} label="RH+" />
                          </div>
                        ))}
                      </Form>
                    </StyledFilterDiv1One>
                  </StyledFilterDiv1>
                </StyledFilter>
                <Styleddiv2>
                  <Accordion defaultActiveKey="0">
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>제목 / 내용</th>
                          <th>모집인원 및 현황</th>
                        </tr>
                      </thead>
                      <Styledtbody1>
                        {inputData.map((element, index) => {
                          return (
                            <Styledtr>
                              <Styledtd>
                                <Accordion.Item eventKey={index}>
                                  <Accordion.Header>
                                    {element.title}
                                    <br />
                                    {element.startDate}
                                    <br />
                                    필요한 혈액형 : {element.patientBlood}
                                    <br />
                                    혈액 종류 : {element.bloodType}
                                    <br />
                                    장소 : {element.hospitalName}
                                  </Accordion.Header>
                                  <Accordion.Body colSpan={2}>
                                    {element.content}
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Styledtd>
                              <Styledtd>
                                {element.bloodNumber}
                                <br />
                                <Styledimg src={icon} class name="main-icon" alt="logo" />
                                <br />
                                <button
                                  type="button"
                                  style={{ width: '100px', height: '35px', marginTop: '5px', borderRadius: '9px', background: '#d9d9d9', color: '#333333', border: 'none', }}>
                                  참여하기
                                </button>
                              </Styledtd>
                            </Styledtr>
                          );
                        })}
                      </Styledtbody1>
                    </Table>
                  </Accordion>
                </Styleddiv2>
              </Tab.Content>
            </Tab>
          </Tabs>
        </StyledTab1>
      </StyledSubcomment>
    </StyledAll>
  );
}
const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
`;
const Styledtxt = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 30px;
  /* or 158% */
  letter-spacing: 0.05em;
  color: #333333;
`;
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
const StyledSub = styled.div`
  width: 200px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 180px;
`;
const StyledSubDiv1 = styled.div`
  width: 220px;
  height: 60px;
  /* left: 370px;
  top: 123px; */
  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;
const StyledSubDiv2 = styled.div`
  width: 220px;
  height: 242px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;
  height: 24px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */
  text-align: center;
  color: #333333;
`;
const StyledSubDiv2_2g = styled.div`
  border: solid white 3px;
  height: 24px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */
  text-align: center;
  color: #969696;
`;
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;
const StyledTitle = styled.div`
  width: 230px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;
  color: #333333;
`;
const StyledTop = styled.div`
  display: flex;
`;
const StyledButton = styled.div`
  margin-top: 10px;
  width: 125px;
  height: 35px;
  margin-left: 510px;
  background: #ff9f9f;
  border-radius: 9px;
`;
const StyledButtonDiv = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  margin: auto;
  margin-left: 28px;
  /* identical to box height, or 100% */
  color: #ffffff;
`;
const Styleddiv2 = styled.div`
  text-align: center;
`;
const Styledtr = styled.tr`
  border: none;
`;
const Styledtd = styled.td`
  border: none;
`;
const Styledtbody1 = styled.tbody`
  border: none;
`;
const Styledimg = styled.img`
  width: 30px;
  height: 25px;
  object-fit: cover;
`;
// 옛날
const StyledTable = styled(Table)`
  border-collapse: collapse;
  font-family: Gmarket Sans TTF;
  font-style: normal;
  text-align: center;
  color: #333333;
  border: 1px;
  th,
  tbody,
  td td {
    padding: 0;
  }
`;
const StyledFilter = styled.div`
  width: 865px;
  height: 145px;
  background: #ffe9e9;
  margin-bottom: 20px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
`;
const StyledFilterDiv1One = styled.div`
  display: flex;
  margin-top: 20px;
`;
const StyledFilterDiv1Two = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 30px;
  margin-top: 20px;
`;
const Styledtd2 = styled.div`
  /* display: block; */
  margin-top: 50px;
`;
export default DBD_General;
