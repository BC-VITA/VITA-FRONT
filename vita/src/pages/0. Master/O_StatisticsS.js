import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Form, Tab, Tabs, Nav, FloatingLabel, Table} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {format, parseISO} from "date-fns";
import {ResponsiveBar} from '@nivo/bar';

function O_StatisticsS() {
    const [boardList, setBoardList] = useState([]);
    const [graphData, setGraphData] = useState([]); // 추가된 상태 변수
    const navigate = useNavigate();

    const fetchBoardList = () => {
        fetch('http://localhost:8004/donate/donate-board-statistics')
            .then((response) => response.json())
            .then((data) => {
                // const sortedBoardList = data.content.sort((a, b) => a.id - b.id); // 특정 id 값을 기준으로 정렬
                setBoardList(data);
            })
            .catch((error) => console.error('Error fetching board list:', error));
    };

    useEffect(() => {
        fetchBoardList();
    }, []);


    const btStyle = {
        background: '#D9D9D9',
        borderRadius: '10px',
        border: 'none',
        fontFamily: 'Gmarket Sans TTF',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '37px',
        textAlign: 'center',
        color: '#333333',
    };

    return (
        <StyledAll>
            <StyledSub>
                <Nav defaultActiveKey="/" className="flex-column">
                    <StyledSubDiv1>회원 관리</StyledSubDiv1>
                    <StyledSubDiv2>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_BD_Manage">
                                <StyledSubDiv2_2g>헌혈 통계 게시물</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_StatisticsD">
                                <StyledSubDiv2_2g>기부금 통계 게시물</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/O_StatisticsS">
                                <StyledSubDiv2_2>봉사 통계</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_Hospital_Authorizations">
                                <StyledSubDiv2_2g>병원 회원가입 승인</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_Reporting ">
                                <StyledSubDiv2_2g>신고 게시물</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_NewsList ">
                                <StyledSubDiv2_2g>따뜻한 사례 게시물</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                    </StyledSubDiv2>
                </Nav>
            </StyledSub>
            <StyledSubcomment>
                <StyledTop>
                    <StyledTitle>봉사 통계</StyledTitle>
                </StyledTop>
                <Styledcomment>
                </Styledcomment>
            </StyledSubcomment>
        </StyledAll>
    );
}

const Styleddiv2 = styled.div`
  text-align: center;
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

const Styledcomment = styled.div`
  display: flex;
  margin-top: 10px;
`;
const StyledTable = styled.div`
  border-collapse: collapse;

  th,
  tbody,
  td td {
    padding: 0;
  }

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;

  text-align: center;
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

export default O_StatisticsS;
