import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
    Nav,
    FloatingLabel,
    Form,
    Tab,
    Tabs,
    Button,
    Table, Modal,
} from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';

function S_Details() {
    const userId = sessionStorage.getItem('userId');
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const location = useLocation();
    const volunteerId = location.state?.volunteerId;

    useEffect(() => {
        const apiUrl = `http://localhost:8004/volunteer/reservation/${volunteerId}/list`;
        fetch(apiUrl, {
            method: 'get',
        })
            .then((res) => res.json())
            .then((res) => {
                setUserData(res);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    const handleComplete = (reservationId) => {
        // API 호출
        fetch(`http://localhost:8004/volunteer/reservation/list/${reservationId}?status=참여완료`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
        const updatedData = userData.filter((item) => item.reservationId !== reservationId);
        setUserData(updatedData);
    };

    if (userData === null) {
        return <div>Loading...</div>;
    }

    const btStyle = {
        borderRadius: '10px',
        border: 'none',
        fontFamily: 'Gmarket Sans TTF',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '37px',
        textAlign: 'center',
        color: '#333333',
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
                        <StyledSubDiv2_1>
                            <Nav.Link href="/MyPage_chat">
                                <StyledSubDiv2_2g>지정헌혈 채팅</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/MyPage_BD">
                                <StyledSubDiv2_2g>헌혈</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/MyPage_S">
                                <StyledSubDiv2_2>봉사</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
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
                    <StyledTitle>봉사</StyledTitle>
                </StyledTop>
                <Styledcomment>
                    <StyledTab1>
                        {userData.map((review, index) => (
                            <div key={index} style={{...btStyle}}>
                                <ul>
                                    <li>
                                        <div style={{display: "flex"}}>
                                        <div style={{marginRight: '20px'}}>예약자 : {review.userName}</div>
                                        <button
                                            style={{
                                                ...btStyle,
                                                background: '#8FAADC',
                                                color: 'white',
                                                paddingLeft: '15px',
                                                paddingRight: '15px',
                                            }}
                                            onClick={() => handleComplete(review.reservationId)}
                                        >
                                            참여완료
                                        </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </StyledTab1>
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
const Styledcomment = styled.div``;

const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
`;
export default S_Details;
