import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

import serviceimg from '../../img/serviceimg.png';
import {useNavigate} from "react-router-dom";
import {Tab, Tabs} from "react-bootstrap";
import {ResponsivePie} from "@nivo/pie";

function D_SelectReceipt() {
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
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Main">
                <StyledSubDiv2_2g>기부란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv2_2g>기부하기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv2_2>기부 영수증</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>기부 영수증</StyledTitle>
        </StyledTop>
          <Styledcomment>
              <StyledTable>
                  <tr>
                      <td colSpan={boardList.length} style={{textAlign : "left", fontWeight: "500", fontSize: "30px" }}>
                          합 계 : {
                          boardList.reduce((total, reservation) => total + reservation.boardTotalPoint, 0)
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
                              {reservation.boardTotalPoint}
                          </td>
                      ))}
                  </tr>


                              {/*<div style={{width: "900px", height: "650px" ,marginTop:"50px"}}>*/}
                              {/*    <StyledGraphContainer> /!* StyledGraphContainer 사용 *!/*/}
                              {/*        <ResponsivePie*/}
                              {/*            data={graphData}*/}
                              {/*            margin={{ top: 40, right: 80, bottom: 80, left: 100 }}*/}
                              {/*            innerRadius={0.3}*/}
                              {/*            padAngle={0.7}*/}
                              {/*            cornerRadius={3}*/}
                              {/*            // enableArcLinkLabels={false}*/}
                              {/*        />*/}
                              {/*    </StyledGraphContainer>*/}
                              {/*</div>*/}
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
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 100% */

  text-align: center;

  /* border-style: solid;
  border-color: black;
  border: 1px; */
`;

const Styledcomment2 = styled.div`
  width: 880px;
  /* height: 300px; */
  margin-top: 20px;
  background: #ffe9e9;
  padding-bottom: 10px;
`;
const StyledTitle2 = styled.div`
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;

  margin-bottom: 5px;

  color: #333333;
`;
const StyledDiv = styled.div`
  padding: 10px;
  padding-left: 20px;
`;
const StyledTable2 = styled.div`
  /* border-collapse: collapse; */
  th,
  tbody,
  td td {
    padding: 0;
  }
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 32px;
  /* identical to box height, or 100% */

  text-align: center;

  border-style: solid;
  border-color: black;
  border: 1px;
`;

const StyledGraphContainer = styled.div`
  font-size: 30px;
  height: 600px;
`;

export default D_SelectReceipt;
