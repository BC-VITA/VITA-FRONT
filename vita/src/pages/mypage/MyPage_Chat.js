import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Table, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { pink } from '@mui/material/colors';

function MyPage_Chat() {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');

  const [inputData, setInputData] = useState('');

  //지정헌혈 채팅 리스트
  const [roomIds, setRoomIds] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8004/chat/list?userId=${userId}`)
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

  const handleChatRoomClick = (roomId1) => {
    navigate(`/Chat_Details`, { state: { roomId1 } });
  };

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>마이페이지</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_DBD">
                <StyledSubDiv2_2g>지정헌혈</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/MyPage_chat">
                <StyledSubDiv2_2>지정헌혈 채팅</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_BD">
                <StyledSubDiv2_2g>헌혈</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_S">
                <StyledSubDiv2_2g>봉사</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage_D">
                <StyledSubDiv2_2g>기부</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/MyPage">
                <StyledSubDiv2_2g>개인정보</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>지정헌혈 채팅</StyledTitle>
        </StyledTop>
        <Styledcomment>
          <StyledTable>
            <thead style={{ fontWeight: '700', fontSize: '24px' }}>
              <tr style={{border:"1px"}}>
                <th style={{ width: '400px' }}>
                  제목
                </th>
                <th
                  style={{ width: '200px' }}>
                  일시
                </th>
                <th style={{ width: '100px' }}>
                </th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: '500', fontSize: '20px', border:"1px" }}>
              {roomIds.map(room => (
                <tr key={room.id}>
                  <td>{room.title.length > 20 ? room.title.substring(0, 20) + "..." : room.title}</td>
                  <td>{room.boardCreatedAt}</td>
                  <td>
                    <Button
                      style={{ background: '#8FAADC' }}
                      onClick={() => handleChatRoomClick(room)}>
                      채팅방으로 이동
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </Styledcomment>
      </StyledSubcomment>
    </StyledAll>
  );
}

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
  height: 362px;
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
  width: 213px;
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
const Styledcomment = styled.div`
  border: 1px solid #666666;

  margin-top: 10px;
  margin-right: 50px;
`;
const StyledTable = styled(Table)`
  margin-top: 30px;
  /* margin: 10px; */
  border-collapse: collapse;
  border: 1px;
  tr th,
  tbody,
  td td {
    padding: 0;
  }
  font-family: 'Gmarket Sans TTF';
  font-style: normal;

  line-height: 50px;

  color: #333333;

  text-align: center;
`;
export default MyPage_Chat;
