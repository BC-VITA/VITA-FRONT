import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function S_Ganeral() {
    const userId = sessionStorage.getItem('userId');
    const [userData3, setUserData3] = useState([]);

    useEffect(() => {
        const url3 = `http://localhost:8004/user/mypage-wishList-volunteer?userId=${userId}`;
        fetch(url3, {
            method: 'get',
        })
            .then((res) => res.json())
            .then((res) => {
                setUserData3(res);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <StyledAll>
            <StyledSub>
                <Nav defaultActiveKey="/" className="flex-column">
                    <StyledSubDiv1>봉사하자</StyledSubDiv1>
                    <StyledSubDiv2>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/S_Main">
                                <StyledSubDiv2_2g>자원봉사란</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/S_Ganeral">
                                <StyledSubDiv2_2g>개인봉사</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/S_Group">
                                <StyledSubDiv2_2g>기업 단체 봉사</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/S_Other">
                                <StyledSubDiv2_2g>타기관 봉사정보</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/S_WatchList">
                                <StyledSubDiv2_2>관심목록</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
                    </StyledSubDiv2>
                </Nav>
            </StyledSub>
            <StyledSubcomment>
                <StyledTop>
                    <StyledTitle>관심목록</StyledTitle>
                </StyledTop>
              <section id="list">
                <Styleddiv2>
                  <StyledTable>
                    <thead>
                    <tr>
                      <th
                          id="area-header"
                          style={{ width: '350px', fontWeight: '700', fontSize: '22px' }}>
                        {/*제목 / 내용*/}
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    {userData3.map(wishList => (
                        <React.Fragment key={wishList.volunteerId}>
                            <tr>
                                <td
                                    headers="area-header"
                                    style={{
                                    width: '350px',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    textAlign: 'left',

                                }}>
                                  <div style={{lineHeight: '35px',}}><b>제목</b> : {wishList.title}</div>
                                    <div><b>내용</b> : {wishList.content}</div>
                                    <div style={{lineHeight: '35px',}}><b>활동날짜</b> : {wishList.volunteerStartDate} - {wishList.volunteerEndDate}</div>
                                    {/*<div>몇명 필요한지 : {wishList.needVolunteerNumber}</div>*/}
                                    {/*<div>온/오프라인 여부 : {wishList.activitySection}</div>*/}
                                    {/*<div>주소 : {wishList.volunteerAddress}</div>*/}
                                    {/*<div>봉사하는 장소 : {wishList.volunteerPlace}</div>*/}
                                  <StyledButton>
                                    <Nav.Link href="/S_Ganeral">
                                      <StyledButtonDiv>자세히 보기</StyledButtonDiv>
                                    </Nav.Link>
                                  </StyledButton>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                    </tbody>
                  </StyledTable>
                </Styleddiv2>
              </section>
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
  height: 302px;
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
  margin-top: 3px;
  width: 150px;
  height: 35px;
  margin-left: 740px;

  background: #ff9f9f;
  border-radius: 9px;
`;

const StyledButtonDiv = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  //margin: auto;
  //margin-left: 28px;
  text-align: center;
  /* identical to box height, or 100% */

  color: #ffffff;
`;

const StyledComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-right: 60px;
`;

const Styleddiv2 = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const StyledTable = styled(Table)`
  /* margin-top: 30px; */
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
export default S_Ganeral;
