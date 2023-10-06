import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Tab, Tabs, Nav} from 'react-bootstrap';
import {ResponsiveBar} from '@nivo/bar';

function O_StatisticsS() {
    const [data, setData] = useState([]);

    const yearToFetch = new Date().getFullYear(); // 현재 연도 또는 원하는 연도

    useEffect(() => {
        fetch(`http://localhost:8004/admin/volunteer-statistics?year=${yearToFetch}`)
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(item => ({
                    year: item.year,
                    month: item.month,
                    count: item.count
                }));

                console.log(formattedData); // 데이터 형태 확인

                setData(formattedData);
            });
    }, [yearToFetch]);

    const [data2, setData2] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8004/admin/volunteer-field-statistics?year=${yearToFetch}`)
            .then(response => response.json())
            .then(data2 => {
                const formattedData = data2.map(item => ({
                    year: item.year,
                    count: item.count,
                    volunteerField: item.volunteerField
                }));

                setData2(formattedData);
            });
    }, [yearToFetch]);


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
                    <StyledTitle>봉사 통계</StyledTitle>
                </StyledTop>
                <Styledcomment>
                    <StyledTable>
                        <Tabs style={{marginTop: "10px"}}>
                            <Tab eventKey="history" title="월별 봉사자 수" style={{width: "120vh", marginTop: '30px'}}>
                                <Tab.Content>
                                    <StyledGraphContainer> {/* StyledGraphContainer 사용 */}
                                        <ResponsiveBar
                                            data={data}
                                            keys={['count']}
                                            indexBy="month"
                                            margin={{top: 50, right: 60, bottom: 50, left: 60}} // margin 추가
                                            padding={0.3}
                                        />
                                    </StyledGraphContainer>
                                    <div style={{textAlign: 'center'}}>{data.year}</div>
                                </Tab.Content>
                            </Tab>
                            <Tab eventKey="graph" title="분야별 봉사자 수" style={{width: "120vh", marginTop: '30px'}}>
                                <Tab.Content>
                                        <StyledGraphContainer> {/* StyledGraphContainer 사용 */}
                                            <ResponsiveBar
                                                data={data2}
                                                keys={['count']}
                                                indexBy="volunteerField"
                                                margin={{top: 50, right: 60, bottom: 50, left: 60}}
                                                padding={0.3}
                                            />
                                        </StyledGraphContainer>
                                    <div style={{textAlign: 'center'}}>{data2.volunteerField}</div>
                                </Tab.Content>
                            </Tab>
                        </Tabs>
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
export default O_StatisticsS;