import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../img/icon.png';
import { Icon } from '@iconify/react';
import { Button, Modal } from "react-bootstrap";

const Nav = () => {
    const userId = sessionStorage.getItem('userId');

    const handleLogout = () => {
        sessionStorage.removeItem('userId');
        navigator('/');
        window.location.reload();
    };

    //간단알림
    const [alarm, setalarm] = useState([]);
    const url1 = `http://localhost:8004/chat/alarm/list?userId=${userId}`;
    useEffect(() => {
        if (userId) {
            fetch(url1, {
                method: 'get',
            })
                .then((data) => data.json())
                .then((data) => {
                    setalarm(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [userId]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //지정헌혈 채팅 리스트
    const navigate = useNavigate();
    const [roomIds, setRoomIds] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8004/chat/list?userId=${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setRoomIds(data);
                console.log(data);
            })
            .catch(error => {
                console.error('오류 발생:', error);
            });
    }, [userId]);

    const handleChatRoomClick = () => {
        navigate('/D_main');
        setShow(false);
    };

    //알람
    const [count, setcount] = useState('');
    const url = `http://localhost:8004/chat/count?userId=${userId}`;
    useEffect(() => {
        if (userId) {
            fetch(url, {
                method: 'get',
            })
                .then((data) => data.json())
                .then((data) => {
                    setcount(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [userId]);

    const [hasNavigatedToChatRoom, setHasNavigatedToChatRoom] = useState(false);


    return (
        <Stylednav>
            <StyledDiv1>
                <Styledimg src={icon} class name="main-icon" alt="logo" />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledDiv11>
                        <div>vita</div>
                    </StyledDiv11>
                </Link>
            </StyledDiv1>

            <StyledDiv2>
                <Link to="Learn" style={{ textDecoration: 'none' }}>
                    <StyledDiv21>
                        <div>알아보자</div>
                    </StyledDiv21>
                </Link>

                <Link to="BD_Main" style={{ textDecoration: 'none' }}>
                    <StyledDiv21>
                        <div>헌혈하자</div>
                    </StyledDiv21>
                </Link>

                <Link to="DBD_Main" style={{ textDecoration: 'none' }}>
                    <StyledDiv21L>
                        <div>지정헌혈하자</div>
                    </StyledDiv21L>
                </Link>

                <Link to="BD_Story" style={{ textDecoration: 'none' }}>
                    <StyledDiv21M>
                        <div>이야기하자</div>
                    </StyledDiv21M>
                </Link>

                <Link to="S_Main" style={{ textDecoration: 'none' }}>
                    <StyledDiv21>
                        <div>봉사하자</div>
                    </StyledDiv21>
                </Link>

                <Link to="D_Main" style={{ textDecoration: 'none' }}>
                    <StyledDiv21>
                        <div>기부하자</div>
                    </StyledDiv21>
                </Link>
            </StyledDiv2>
            <StyledDiv3>
                <Link
                    to={userId ? `/` : '/login'}
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <StyledDiv31L>
                        {userId ? `${userId}님` : '로그인'}
                    </StyledDiv31L>
                </Link>
                <StyledDiv31m>
                    <Link
                        to={userId ? (userId === "admin" ? `/O_BD_Manage` : `/MyPage_DBD`) : '/'}
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <div>
                            {userId ? (userId === "admin" ?
                                <Link to="/O_StatisticsD" style={{ textDecoration: 'none', color: 'white' }}>
                                    |&nbsp;&nbsp;관리페이지&nbsp;&nbsp;|
                                </Link>
                                :
                                <div style={{ display: "flex" }}>
                                    <Link to="/MyPage_DBD" style={{ textDecoration: 'none', color: 'white' }}>
                                        |&nbsp;&nbsp;마이페이지
                                    </Link>
                                    {/*<Link to="/O_BD_Manage" style={{textDecoration: 'none', color: 'white', display:"flex"}}>*/}
                                    <div style={{display: "flex", color: "red"}}>
                                        &nbsp;&nbsp;
                                        <Icon icon="material-symbols:notifications-active-outline"
                                            style={{ marginTop: "3px" }} onClick={handleShow} />
                                        <div>
                                            {count}
                                        </div>
                                        <div style={{color:"white"}}>
                                        &nbsp;&nbsp;|
                                        </div>
                                    </div>

                                    <Modal size="lg" show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>채팅방 알림</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {!hasNavigatedToChatRoom && (
                                                <div>
                                                    {roomIds.map(room => (
                                                        <div key={room} style={{
                                                            background: "#FFE9E9",
                                                            padding: "10px",
                                                            borderRadius: "5px",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            marginBottom:"10px"
                                                        }}>
                                                            <div>
                                                                {/*<div>시간: {room.boardCreatedAt}</div>*/}
                                                                <div>지정헌혈 제목: {room.title}</div>
                                                            </div>
                                                            <Button
                                                                style={{background: '#8FAADC'}}
                                                                onClick={() => handleChatRoomClick(room)}>
                                                                채팅방으로 이동
                                                            </Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/*</Link>*/}
                                </div>)
                                :
                                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                                    |
                                </Link>}
                        </div>
                    </Link>
                </StyledDiv31m>
                <Link
                    to={userId ? '/' : '/signup'}
                    style={{ textDecoration: 'none', color: 'white' }}
                    onClick={handleLogout}
                >
                    <StyledDiv31R>
                        <div>{userId ? '로그아웃' : '회원가입'}</div>
                    </StyledDiv31R>
                </Link>

            </StyledDiv3>
        </Stylednav>
    );
};

const Stylednav = styled.nav`
  position: static;
  /* position: fixed; */
  /* bottom: 100; */
  width: 100%;
  height: 60px;
  display: flex;
  border: solid 2px;
  background-color: #333333;
`;

const StyledDiv1 = styled.div`
  width: 90px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  color: white;
  text-decoration-line: none;
  margin-left: 200px;
  margin-top: 10px;
`;
const Styledimg = styled.img`
  width: 25px;
  height: 30px;
  /* object-fit: cover; */
`;
const StyledDiv11 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  text-align: center;
  margin-left: 8px;

  color: #ffffff;
`;

const StyledDiv2 = styled.div`
  width: 700px;
  display: flex;
  /* text-decoration-line: none; */
  color: white;

  text-decoration: none;
  text-decoration-line: none;
  margin-top: 15px;
  margin-left: 95px;
  margin-right: 35px;
`;
const StyledDiv21 = styled.div`
  width: 100px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;
const StyledDiv21L = styled.div`
  width: 150px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;
const StyledDiv21M = styled.div`
  width: 130px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #ffffff;
`;

const StyledDiv3 = styled.div`
  /* flex-direction: row; */
  //width: 210px;
  display: flex;
  align-items: center;
  justify-content: end;
  text-decoration-line: none;
`;
const StyledDiv31L = styled.div`
  /* width: 50px; */
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;
  text-align: right;

  color: #ffffff;
`;
const StyledDiv31m = styled.div`
  //width: 100px;
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;
  text-align: center;

  margin-left: 5px;
  margin-right: 5px;

  color: #ffffff;
  text-decoration: none;
`;
const StyledDiv31R = styled.div`
  /* width: 70px; */
  /* flex-direction: row; */
  text-decoration-line: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -2px;
  text-align: left;

  color: #ffffff;
`;

export default Nav;
