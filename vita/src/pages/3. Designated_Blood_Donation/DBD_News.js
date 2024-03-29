import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DBD_News() {
    const [boardList, setBoardList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBoardList();
        console.log(boardList);
    }, []);

    const Blood = 'Blood';

    const fetchBoardList = () => {
        const url1 = `http://localhost:8004/admin/warm-case-admin-list`;
        fetch(url1)
            .then((response) => response.json())
            .then((data) => setBoardList(data))
            .catch((error) => console.error('Error fetching board list:', error));
    };

    const handleDetailClick = (board, imageUrl) => {
        navigate('/DBD_NewsDetails', {state: {board, imageUrl}});
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
                        <StyledSubDiv2_1>
                            <Nav.Link href="/DBD_General">
                                <StyledSubDiv2_2g>지정헌혈하기</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/DBD_WatchList">
                                <StyledSubDiv2_2g>관심목록</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/DBD_News">
                                <StyledSubDiv2_2>따뜻한 사례</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
                    </StyledSubDiv2>
                </Nav>
            </StyledSub>
            <StyledSubcomment>
                <StyledTop>
                    <StyledTitle>따뜻한 사례</StyledTitle>
                </StyledTop>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                    {boardList.map((board) => {
                        // 이미지 URL에서 'C:\Users\이민렬\Desktop\test\vita\public\' 부분 제거
                        const imageUrl = board.imageUrl
                            ? board.imageUrl.replace(
                                'C:\\Users\\suim7\\OneDrive\\문서\\GitHub\\VITA\\VITA-FRONT\\vita\\public\\',
                                '\\'
                            )
                            : null;
                        // {boardList.map((board) => {
                        //   const imageUrl = board.img
                        //     ? `http://localhost:8004/images${board.img.replace(
                        //         'C:\\Users\\suim7\\OneDrive\\문서\\GitHub\\VITA-FRONT\\vita\\public\\images',
                        //         ''
                        //       )}`
                        //     : null;
                        return (
                            <div key={board.boardId}>
                                <StyledBox>
                                    <StyledBox2>
                                        <Card style={{width: '17rem'}}>
                                            <Card.Img variant="top" src={imageUrl}  style={{margin:"3px",width:'16.5rem', height:'16.5rem'}}/>
                                            <Card.Body>
                                                <Card.Title>
                                                    {board.title.length > 10 ? board.title.substring(0, 10) + "..." : board.title}
                                                    {/*{board.title}*/}
                                                </Card.Title>
                                                <Card.Text>
                                                    {board.content.length > 30 ? board.content.substring(0, 30) + "..." : board.content}
                                                    {/*{board.content}*/}
                                                </Card.Text>
                                                {/*<Card.Text>{imageUrl}</Card.Text>*/}
                                                <Button
                                                    variant="primary"
                                                    onClick={() => handleDetailClick(board, imageUrl)}
                                                >
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

const StyledButton = styled.div`
  margin-top: 10px;
  width: 125px;
  height: 35px;
  margin-left: 535px;

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

const StyledBox = styled.div`
  margin-top: 30px;
  display: flex;
`;
const StyledBox2 = styled.div`
  //margin-left: 5px;
  //margin-right: 5px;
`;
const StyledBox3 = styled.div`
  display: flex;
`;

export default DBD_News;
