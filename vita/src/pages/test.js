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


function Test() {
    const userId = sessionStorage.getItem('userId');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [userData, setUserData1] = useState(null);
    const [userData1, setUserData2] = useState(null);
    const [userData3, setUserData3] = useState(null);
    const [userData4, setUserData4] = useState(null);
    const [userData5, setUserData5] = useState(null);

    const [openIndex, setOpenIndex] = useState(-1);
    const handleRowClick = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    const location = useLocation();
    const volunteerId = location.state?.volunteerId;

    //봉사신청내역
    useEffect(() => {
        const url1 = `http://localhost:8004/user/mypage/volunteer-history?userId=${userId}`;
        const url2 = `http://localhost:8004/user/mypage-volunteer-active-history?userId=${userId}`;
        const url3 = `http://localhost:8004/user/mypage-wishList-volunteer?userId=${userId}`;
        const url4 = `http://localhost:8004/volunteer/board/list?userId=${userId}&volunteerType=time`;
        const url5 = `http://localhost:8004/volunteer/reservation/${volunteerId}/list`;

        const fetchData = async () => {
            try {
                const response1 = await fetch(url1);
                const data1 = await response1.json();
                setUserData1(data1);

                const response2 = await fetch(url2);
                const data2 = await response2.json();
                setUserData2(data2);

                const response3 = await fetch(url3);
                const data3 = await response3.json();
                setUserData3(data3);

                const response4 = await fetch(url4);
                const data4 = await response4.json();
                setUserData4(data4);

                const response5 = await fetch(url5);
                const data5 = await response5.json();
                setUserData5(data5);

            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (userData === null) {
        return <div>Loading...</div>;
    }

    if (userData1 === null) {
        return <div>Loading...</div>;
    }

    if (userData3 === null) {
        return <div>Loading...</div>;
    }

    if (userData4 === null) {
        return <div>Loading...</div>;
    }

    if (userData5 === null) {
        return <div>Loading...</div>;
    }

    const handleUserData4Join = (volunteerId) => {
        navigate('/asd1', {state: {volunteerId}});
    };

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
        setUserData5(updatedData);
    };

    //PDF하기
    const handleJoin = (review) => {
        navigate('/S_Deed1', {state: {review}});
    };
    const handlePDF = (id) => {
        fetch(`http://localhost:8004/volunteer/pdf?registerId=${id}`, {
            method: 'POST',
        })
            .then((res) => res.blob())
            .then((blob) => {
                alert('다운이 완료되었습니다.');
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const thStyle = {
        // width: '80px',
        fontFamily: 'Gmarket Sans TTF',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '22px',
        lineHeight: '35px',
        textAlign: 'center',
        color: '#333333',
    };
    const tdStyle = {
        ...thStyle,
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '40px',
    };
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
                    <StyledBox2>
                        <StyledBox2_1>
                            <StyledTxt>시간인증형 봉사시간</StyledTxt>
                            <FloatingLabel
                                label={userData.timeTypeVolunteerHistoryNumber + ' 시간'}
                                //value={roomnumber}
                                //onChange={handleReservation}
                                style={{width: '300px', lineHeight: '15px'}}
                            >
                                <Form.Control
                                    placeholder="name"
                                    disabled
                                    style={{background: '#ffffff', height: '50px'}}
                                />
                            </FloatingLabel>
                        </StyledBox2_1>
                        <StyledBox2_1 style={{marginLeft: '60px'}}>
                            <StyledTxt>시간인증형 자원봉사 참여</StyledTxt>
                            <FloatingLabel
                                label={userData.myPageVolunteerReservationList.length + '번'}
                                //value={roomnumber}
                                //onChange={handleReservation}
                                style={{width: '300px', lineHeight: '15px'}}
                            >
                                <Form.Control
                                    placeholder="name"
                                    disabled
                                    style={{background: '#ffffff', height: '50px'}}
                                />
                            </FloatingLabel>
                        </StyledBox2_1>
                    </StyledBox2>
                    <StyledTab1>
                        <Tabs style={{marginTop: '20px'}}>
                            <Tab eventKey="reservation3" title="작성한 봉사 게시물">
                                <Tab.Content>
                                    <StyledBox1>
                                        <StyledDiv>
                                            <StyledTxt2>작성한 봉사 게시물</StyledTxt2>
                                        </StyledDiv>
                                        {/*  */}
                                        <section id="list">
                                            <Styleddiv2>
                                                <StyledTable>
                                                    <thead>
                                                    <tr>
                                                        <th
                                                            id="area-header"
                                                            style={{...thStyle, width: '150px'}}
                                                        >
                                                            제목
                                                        </th>
                                                        <th
                                                            id="centerName-header"
                                                            style={{...thStyle, width: '100px'}}
                                                        >
                                                            모집기간
                                                        </th>
                                                        <th style={{...thStyle, width: '100px'}}>
                                                            &nbsp;
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody style={{fontWeight: '500', fontSize: '20px'}}>
                                                    {userData4.map((review, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <tr onClick={() => handleRowClick(index)}>
                                                                    <td
                                                                        headers="area-header"
                                                                        style={{
                                                                            ...tdStyle,
                                                                            fontWeight: '500',
                                                                        }}
                                                                    >
                                                                        {review.title}
                                                                    </td>
                                                                    <td
                                                                        headers="centerName-header"
                                                                        style={{...tdStyle, width: '120px'}}
                                                                    >
                                                                        {review.volunteerStartDate}-{review.volunteerEndDate}
                                                                    </td>
                                                                    <td
                                                                        style={{
                                                                            ...tdStyle,
                                                                            width: '130px',
                                                                            fontSize: '15px',
                                                                        }}
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                handleUserData4Join(review.volunteerId)
                                                                            }
                                                                            style={{
                                                                                ...btStyle,
                                                                                background: '#8FAADC',
                                                                                color: 'white',
                                                                                paddingLeft: '15px',
                                                                                paddingRight: '15px',
                                                                            }}
                                                                        >
                                                                            신청자보기
                                                                        </button>
                                                                    </td>
                                                                    {/* </div> */}
                                                                </tr>
                                                            </React.Fragment>

                                                        );
                                                    })}
                                                    </tbody>
                                                </StyledTable>
                                            </Styleddiv2>
                                        </section>
                                    </StyledBox1>
                                </Tab.Content>
                            </Tab>
                        </Tabs>
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
const StyledTxt = styled.div`
  margin-top: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  /* identical to box height */
  text-align: center;

  color: #000000;
`;

const StyledTab1 = styled.div`
  width: 865px;
  margin-top: 5px;
  padding-bottom: 500px;
`;

const StyledBox1 = styled.div`
  margin-top: 20px;
  height: 80px;

  background: #ffe9e9;
`;
const StyledDiv = styled.div`
  margin-left: 30px;
  display: flex;
`;
const StyledTxt2 = styled.div`
  /* margin-top: 10px; */

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 80px;
  /* identical to box height */

  color: #000000;
`;
const StyledBox2 = styled.div`
  display: flex;
`;
const StyledBox2_1 = styled.div`
  display: block;
`;
const Styleddiv2 = styled.div`
  text-align: center;
`;
const StyledTable = styled(Table)`
  margin-top: 30px;
  border-collapse: collapse;
  border: 1px;

  th,
  tbody,
  td td {
    padding: 0;
  }
`;
export default Test;
