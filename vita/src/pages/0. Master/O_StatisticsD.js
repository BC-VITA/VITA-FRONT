import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Form, Tab, Tabs, Nav, FloatingLabel, Table} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {format, parseISO} from "date-fns";
import {ResponsivePie} from '@nivo/pie'; // ResponsivePie import

function O_StatisticsD() {
    const [boardList, setBoardList] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8004/donate/donate-board-statistics')
            .then((response) => response.json())
            .then((data) => {
                setBoardList(data);
            })
            .catch((error) => console.error('Error fetching board list:', error));
    }, []);

    useEffect(() => {
        if (boardList.length > 0) {
            let dataForGraph = boardList.map(item => ({
                id: `게시물 ${item.title}`, // Pie chart에서 label로 사용됩니다.
                value: item.boardTotalPoint
            }));

            setGraphData(dataForGraph);
        }
    }, [boardList]);


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
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/O_StatisticsD">
                                <StyledSubDiv2_2>기부금 통계 게시물</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_StatisticsS">
                                <StyledSubDiv2_2g>봉사 통계</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/O_BD_Manage">
                                <StyledSubDiv2_2g>헌혈 통계 게시물</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
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
                    <StyledTitle>기부금 통계 게시물</StyledTitle>
                </StyledTop>
                <StyledFilter>
                    <StyledFilterDiv1 style={{ marginTop: '15px' }}>
                        <StyledFilterDivTitle2>조회기간</StyledFilterDivTitle2>
                        <input
                            type="Date"
                            // value={startDate}
                            style={{
                                border: 'none',
                            }}
                            // onChange={handleStartDateChange}
                        />
                        <StyledFilterDivTitle2>
                            &nbsp;&nbsp;&nbsp;-&nbsp;
                        </StyledFilterDivTitle2>
                        <input
                            type="Date"
                            // values={endDate}
                            style={{
                                border: 'none',
                            }}
                            // onChange={handleEndDateChange}
                        />
                        <StyledButton2>검색</StyledButton2>
                        <StyledButton3>초기화</StyledButton3>
                    </StyledFilterDiv1>
                </StyledFilter>
                <Styledcomment>
                    <StyledTable>
                        <tr>
                            <td colSpan={boardList.length} style={{textAlign: "left", fontWeight: "500", fontSize: "30px"}}>
                                합 계 : {
                                new Intl.NumberFormat().format(boardList.reduce((total, reservation) => total + reservation.boardTotalPoint, 0))
                            }
                            </td>
                        </tr>

                        <tr>
                            {boardList.map((reservation, index) => (
                                <>
                                    <td
                                        key={index}
                                        style={{
                                            width: '175px',
                                            padding: '8px',
                                            color: '#ffffff',
                                            fontWeight: '500',
                                            border: "2px",
                                            borderStyle: "solid",
                                            borderColor: "black",
                                            background: '#FF9F9F',
                                        }}
                                    >
                                        {reservation.title.length > 5 ? reservation.title.substring(0, 5) + "..." : reservation.title}
                                    </td>
                                </>
                            ))}

                        </tr>


                        <tr>
                            {boardList.map((reservation, index) => (
                                <td
                                    key={index}
                                    style={{
                                        width: '175px',
                                        padding: '8px',
                                        color: '#333333',
                                        fontWeight: '500',
                                        border: "2px",
                                        borderStyle: "solid",
                                        borderColor: "black",
                                        background: '#ffffff',
                                    }}
                                >
                                    {reservation.boardTotalPoint.toLocaleString()}

                                </td>
                            ))}
                        </tr>


                        <Tabs style={{marginTop: "10px"}}>
                            <Tab eventKey="history" title="게시물 관리" style={{minHeight: '100vh'}}>
                                <Tab.Content>

                                    <StyledTable style={{marginTop: "10px"}}>
                                        <tr>
                                            {boardList.map((review, index) => (
                                                    <td headers="area-header"
                                                        style={{
                                                            display: "flex",
                                                            textAlign: 'left',
                                                            paddingLeft: '20px',
                                                            fontWeight: '500',
                                                            fontSize: '20px',
                                                            border: "2px",
                                                            borderStyle: "solid",
                                                            borderColor: "black",
                                                            paddingTop: "10px",
                                                            paddingBottom: "10px"

                                                        }}>
                                                        <div style={{display: "block", width: "680px", marginRight:"20px"}}>
                                                            <div style={{display: "flex", fontWeight: '600',}}>
                                                                {review.title}
                                                            </div>
                                                            <div>{review.content.length > 35 ? review.content.substring(0, 35) + "..." : review.content}</div>
                                                            <div style={{display: "flex", fontSize: "17px"}}>
                                                                {/*<div>style={{width: "350px"}}>[일시]&nbsp;{format(parseISO(review.localDateTime), 'yyyy.MM.dd HH:mm')}</div>*/}
                                                                <div>[모인 기부금]&nbsp;{review.boardTotalPoint.toLocaleString()}</div>
                                                            </div>
                                                        </div>
                                                        <div style={{paddingRight: '20px',}}>
                                                            <button
                                                                style={{
                                                                    ...btStyle,
                                                                    // border: '1px solid #FF9C9C',
                                                                    paddingLeft: '40px',
                                                                    paddingRight: '40px',
                                                                    background: '#FFA5A5',
                                                                    marginTop : '3px',
                                                                    marginBottom:'10px',
                                                                    color: '#ffffff',
                                                                    textAlign : "center",
                                                                    marginRight:"30px"
                                                                }}
                                                            >
                                                                수정하기
                                                            </button>
                                                            <br/>
                                                            <button
                                                                style={{
                                                                    ...btStyle,
                                                                    // border: '1px solid #FF9C9C',
                                                                    color: '#ffffff',
                                                                    paddingLeft: '20px',
                                                                    paddingRight: '20px',
                                                                    background: '#8FAADC',
                                                                }}
                                                            >
                                                                기부자 리스트
                                                            </button>
                                                        </div>
                                                    </td>
                                                )
                                            )}
                                        < /tr>
                                    </StyledTable>
                                </Tab.Content>
                            </Tab>
                            <Tab eventKey="graph" title="통계 그래프" style={{minHeight: '100vh'}}>
                                <Tab.Content>
                                    <div style={{width: "900px", height: "650px"}}>
                                        <StyledGraphContainer> {/* StyledGraphContainer 사용 */}
                                            <ResponsivePie
                                                data={graphData}
                                                margin={{ top: 40, right: 80, bottom: 80, left: 100 }}
                                                innerRadius={0.3}
                                                padAngle={0.7}
                                                cornerRadius={3}
                                                // enableArcLinkLabels={false}
                                            />
                                        </StyledGraphContainer>
                                    </div>
                                </Tab.Content>
                            </Tab>
                        </Tabs>
                    </StyledTable>
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
  width: 300px;
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

const StyledGraphContainer = styled.div`
  font-size: 30px;
  height: 600px;
`;

const StyledFilter = styled.div`
  background: #ffe9e9;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 5px;
  padding-bottom: 25px;
`;
const StyledFilterDiv1 = styled.div`
  display: flex;
  margin-left: 20px;
`;
const StyledFilterDivTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 10px;
  line-height: 40px;
`;
const StyledButton2 = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 220px;
  margin-top: 5px;
  border-radius: 9px;
  background: #d9d9d9;
  color: #333333;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  border: none;
`;
const StyledButton3 = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 20px;
  margin-top: 5px;
  border-radius: 9px;
  background: #d9d9d9;
  color: #333333;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  border: none;
`;
export default O_StatisticsD;
