import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function D_Donation() {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBoardList();
  }, []);

  const fetchBoardList = () => {
    fetch('http://localhost:8004/donate/board')
      .then((response) => response.json())
      .then((data) => setBoardList(data.content))
      .catch((error) => console.error('Error fetching board list:', error));
  };

  const handleDetailClick = (board,imageUrl) => {
    navigate('/D_DonationDetails', { state: { board,imageUrl } });
  };

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv21>
              <Nav.Link href="/D_Main">
                <StyledSubDiv22g>기부란</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21p>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv22>기부하기</StyledSubDiv22>
              </Nav.Link>
            </StyledSubDiv21p>
            <StyledSubDiv21>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv22g>기부 영수증</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>기부하기</StyledTitle>
        </StyledTop>
        <div>
          <h2>Board List</h2>
          {boardList.map((board) => {
            // 이미지 URL에서 'C:\Users\이민렬\Desktop\test\vita\public\' 부분 제거
            const imageUrl = board.imageUrl ? board.imageUrl.replace(
              'C:\\Users\\이민렬\\Desktop\\test\\vita\\public\\',
              '\\'
            ) : null;

            return (
              <div key={board.boardId}>
                <StyledBox>
                  <StyledBox2>
                    <Card style={{ width: '17rem' }}>
                      <Card.Img variant="top" src={imageUrl} />
                      <Card.Body>
                        <Card.Title>{board.title}</Card.Title>
                        <Card.Text>{board.content}</Card.Text>
                        <Button variant="primary" onClick={() => handleDetailClick(board,imageUrl)}>
                          자세히 보기
                        </Button>
                      </Card.Body>
                    </Card>
                  </StyledBox2>
                </StyledBox>
              </div>
            );
          })}
        </div>
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
  margin-top: 25px;
  margin-left: 180px;
`;
const StyledSubDiv1 = styled.div`
  width: 220px;
  height: 60px;
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
  height: 182px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv21 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv21p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv22 = styled.div`
  border: solid white 3px;
  height: 24px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  text-align: center;
  color: #333333;
`;
const StyledSubDiv22g = styled.div`
  border: solid white 3px;
  height: 24px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
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
  width: 203px;
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
const StyledBox = styled.div`
  margin-top: 30px;
  display: flex;
`;
const StyledBox2 = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;
export default D_Donation;
