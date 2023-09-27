import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Form, Tab, Tabs, Nav, FloatingLabel, Table} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {format, parseISO} from "date-fns";
import {ResponsiveBar} from '@nivo/bar';

function Test() {
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
        if (boardList.length > 0) {
            let dates = [...new Set(boardList.map(item => item.localDateTime.split('T')[0]))];

            let dataForGraph = dates.map(date => {
                let filteredItems = boardList.filter(item => item.localDateTime.split('T')[0] === date);
                let totalPointForDate = filteredItems.reduce((total, item) => total + item.boardTotalPoint, 0);

                return {
                    date: date,
                    totalPoint: totalPointForDate
                }
            });

            setGraphData(dataForGraph);
        }
    }, [boardList]);

    const StyledGraphContainer = styled.div`
  height: 500px;
`;

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
            <StyledSubcomment>
                <Styledcomment>
                    <StyledTable>


                        <StyledTable style={{marginTop: "10px"}}>
                            <ResponsiveBar
                                data={graphData}
                                keys={['totalPoint']}
                                indexBy="date"
                                margin={{top: 50, right: 130, bottom: 50, left:60}}
                                padding={0.3}
                            />

                        </StyledTable>
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
const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;
export default Test;
