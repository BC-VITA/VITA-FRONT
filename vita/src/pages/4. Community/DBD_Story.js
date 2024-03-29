import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DBD_Story() {
    const [boardList, setBoardList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBoardList();
    }, []);

    const designatedBlood = 'designatedBlood';

    const fetchBoardList = () => {
        const url1 = `http://localhost:8004/review/board/list?reviewType=${designatedBlood}`;
        fetch(url1)
            .then((response) => response.json())
            .then((data) => setBoardList(data))
            .catch((error) => console.error('Error fetching board list:', error));
    };

    const handleDetailClick = (board, imageUrl) => {
        navigate('/DBD_Details', {state: {board, imageUrl}});
    };

    return (
        <StyledAll>
            <StyledSub>
                <Nav defaultActiveKey="/" className="flex-column">
                    <StyledSubDiv1>이야기하자</StyledSubDiv1>
                    <StyledSubDiv2>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/BD_Story">
                                <StyledSubDiv2_2g>헌혈후기</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/DBD_Story">
                                <StyledSubDiv2_2>지정헌혈후기</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
                    </StyledSubDiv2>
                </Nav>
            </StyledSub>
            <StyledSubcomment>
                <StyledTop>
                    <StyledTitle>지정헌혈후기</StyledTitle>
                    <StyledButton>
                        <Nav.Link href="/DBDPostGeneral">
                            <StyledButtonDiv>수정하기</StyledButtonDiv>
                        </Nav.Link>
                    </StyledButton>
                </StyledTop>

                <StyledDiv2>
                    {boardList.map((board) => {
                        // 이미지 URL에서 'C:\Users\이민렬\Desktop\test\vita\public\' 부분 제거'
                        const imageUrl = board.img
                            ? board.imageUrl.replace(
                                'C:\\Users\\suim7\\OneDrive\\문서\\GitHub\\VITA\\VITA-FRONT\\vita\\public\\',
                                '\\'
                            )
                            : null;

                        return (
                            <div>
                                <StyledBox>
                                    <StyledBox2>
                                        <Card style={{width: '15.5rem'}}>
                                            <Card.Img variant="top" src={imageUrl}/>
                                            <Card.Body>
                                                <Card.Title>{board.title}</Card.Title>
                                                <Card.Text>{board.content}</Card.Text>
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
                </StyledDiv2>
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
  height: 123px;
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
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledDiv2 = styled.div`
  /* background-color: black; */
  width: 120ch;
  margin: auto;
`;

export default DBD_Story;
