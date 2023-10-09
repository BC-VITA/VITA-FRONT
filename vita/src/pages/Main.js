import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Post from '../img/포스터.png';
import Post1 from '../img/포스터-1.png';
import Post2 from '../img/포스터-2.png';
import Post3 from '../img/포스터-3.png';
import Donation from '../img/donationImg.png';
import Service from '../img/봉사.png';
import Reservation from '../img/헌혈.png';
import House from '../img/헌혈의_집.png';
import History from '../img/내역.png';
import img from '../img/Group 10.png';
import img2 from '../img/image 3.png';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ResponsiveBar} from '@nivo/bar';
import {useNavigate} from "react-router-dom";

function Main() {
    const [userInfo, setUserInfo] = useState(null);
    const userId = sessionStorage.getItem('userId');

    const [money, setmoney] = useState('');
    const formattedMoney = Number(money).toLocaleString();
    useEffect(() => {
        fetch('http://localhost:8004/donate/main-donate-sum', {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => setmoney(data))
            .catch(error => console.error(error));
    }, []);

    const [data123, setdata123] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8004/admin/warm-case-admin-list', {
            method: 'get',
        })
            .then((data1) => data1.json())
            .then((data1) => {
                setdata123(data1);
                console.log(data1);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    const data = [
        {bloodType: 'O', percentage: 38.0},
        {bloodType: 'A', percentage: 64.0},
        {bloodType: 'B', percentage: 121.0},
        {bloodType: 'AB', percentage: 67.0}
    ];
    const maxPercentage = Math.max(...data.map(item => item.percentage));

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

    const navigate = useNavigate();
    const handleDetailClick = (board, imageUrl) => {
        navigate('/DBD_NewsDetails', {state: {board, imageUrl}});
    };


    return (
        <div>
            <Carousel variant="dark" style={{height: '400px'}}>
                <Carousel.Item style={{height: '400px'}}>
                    <img
                        style={{height: '400px'}}
                        className="d-block w-100"
                        src={Post3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{height: '400px'}}>
                    <img
                        style={{height: '400px'}}
                        className="d-block w-100"
                        src={Post}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{height: '400px'}}>
                    <img
                        style={{height: '400px'}}
                        className="d-block w-100"
                        src={Post1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{height: '400px'}}>
                    <img
                        style={{height: '400px'}}
                        className="d-block w-100"
                        src={Post2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <StyledDiv1>
                <StyledDiv11>
                    <StyledTxt2>
                        <div>이달의 기부 성금 모집현황</div>
                    </StyledTxt2>
                    <StyledTxt3>
                        <div>봉사시간 포인트로 기부하는 시스템</div>
                    </StyledTxt3>
                </StyledDiv11>
                <StyledDiv12>
                    {/* <Styledimg>
            <img src={Donation} alt="First slide" />
          </Styledimg> */}
                    <Styledimg src={Donation} class name="groupPhoto" alt="groupPhoto"/>
                    <StyledDiv13>
                        <StyledPrice>누적 포인트 : {formattedMoney}원</StyledPrice>
                        <StyledDiv14>
                            <StyledBtn>
                                <Nav.Link href="/D_Main">
                                    <StyledBtnTxt>자세히 보기</StyledBtnTxt>
                                </Nav.Link>
                            </StyledBtn>
                            <StyledBtn>
                                <Nav.Link href="/D_Donation">
                                    <StyledBtnTxt>기부하러 가기</StyledBtnTxt>
                                </Nav.Link>
                            </StyledBtn>
                            <StyledBtn>
                                <Nav.Link href="/S_Ganeral">
                                    <StyledBtnTxt>봉사하러 가기</StyledBtnTxt>
                                </Nav.Link>
                            </StyledBtn>
                        </StyledDiv14>
                    </StyledDiv13>
                </StyledDiv12>
            </StyledDiv1>
            <StyledDiv2>
                <div style={{display: 'flex',}}>
                    {data123.slice(0, 4).map((board) => {
                        const imageUrl = board.imageUrl
                            ? board.imageUrl.replace(
                                //여기 이미지경로 수정하세요
                                // 'C:\\Users\\이민렬\\Desktop\\test\\vita\\public\\',
                                'C:\\Users\\suim7\\OneDrive\\문서\\GitHub\\VITA\\VITA-FRONT\\vita\\public\\',
                                '\\'
                            )
                            : null;
                        // const imageUrl = board.imageUrl
                        //     ? `/images/${encodeURIComponent(board.imageUrl)}`
                        //     : null;
                        return (
                            <div>
                                <StyledBox>
                                    <StyledBox2>
                                        <Card style={{width: '15.5rem'}}>
                                            <Card.Img variant="top" src={imageUrl} style={{margin:"3px",width:'15rem', height:'15rem'}}/>
                                            <Card.Body>
                                                <Card.Title>
                                                    {board.title.length > 10 ? board.title.substring(0, 10) + "..." : board.title}
                                                    {/*{board.title}*/}
                                                </Card.Title>
                                                <Card.Text>
                                                    {board.content.length > 30 ? board.content.substring(0, 30) + "..." : board.content}
                                                    {/*{board.content}*/}
                                                </Card.Text>
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
                </div>
            </StyledDiv2>
            <StyledDiv4>
                <StyledDiv41>
                    <StyledDiv41T>
                        <StyledBtn41>
                            <Nav.Link href="/BD_House">
                                <StyledBtnTxt4>헌혈의집 찾기</StyledBtnTxt4>
                                <Styledimg4
                                    src={House}
                                    class
                                    name="groupPhoto"
                                    alt="groupPhoto"
                                />
                            </Nav.Link>
                        </StyledBtn41>
                        <StyledBtn42>
                            <Nav.Link href="/BD_History">
                                <StyledBtnTxt4>헌혈내역조회</StyledBtnTxt4>
                                <Styledimg4
                                    src={History}
                                    class
                                    name="groupPhoto"
                                    alt="groupPhoto"
                                />
                            </Nav.Link>
                        </StyledBtn42>
                    </StyledDiv41T>
                    <StyledDiv41B>
                        <StyledBtn43>
                            <Nav.Link href="/DBD_General">
                                <StyledBtnTxt4>지정헌혈하기</StyledBtnTxt4>
                                <Styledimg4
                                    src={Reservation}
                                    class
                                    name="groupPhoto"
                                    alt="groupPhoto"
                                />
                            </Nav.Link>
                        </StyledBtn43>
                        <StyledBtn44>
                            <Nav.Link href="/S_Ganeral">
                                <StyledBtnTxt4>봉사하기</StyledBtnTxt4>
                                <Styledimg4
                                    src={Service}
                                    classname="groupPhoto"
                                    alt="groupPhoto"
                                />
                            </Nav.Link>
                        </StyledBtn44>
                    </StyledDiv41B>
                </StyledDiv41>
                <StyledDiv42>
                    <StyledBtnTxt4>오늘의 혈액보유량</StyledBtnTxt4>
                    <div className="blood_list">
                        <ul style={{display: 'flex'}}>
                            {data.map(item => (
                                <div key={item.bloodType}>

                                    <div className="bloodBar" style={{
                                        display: 'flex',
                                        flexDirection: 'column-reverse',
                                        height: '300px',
                                        width: '125px'
                                    }}>
                                        {/*<div className="bloodBar" style={{ height: `${(item.percentage / maxPercentage) * 87}%`, width: '50px' }}>*/}
                                        <div style={{height: `${(item.percentage / maxPercentage) * 230}px`}}>
                                            {/* ResponsiveBar 컴포넌트 추가 */}
                                            <ResponsiveBar
                                                data={[{bloodType: item.bloodType, value: item.percentage}]}
                                                keys={['value']}
                                                indexBy="bloodType"
                                                // margin={{right: 30, left: 30}}
                                                // padding={0.3}
                                            />

                                            {/* span 요소는 width 값으로 백분율을 표시 */}
                                            {/*<span className="progressTag" data-progress={item.percentage}*/}
                                            {/*      style={{width: `${item.percentage}%`}}>{`${item.percentage}%`}</span>*/}
                                        </div>
                                    </div>
                                  <div className="bloodType" style={{textAlign:'center'}}>{item.bloodType}</div>
                                    {/*<div className="num">{item.percentage / 10}</div>*/}
                                </div>
                            ))}
                        </ul>
                    </div>
                </StyledDiv42>
            </StyledDiv4>
            {/*<div>*/}
            {/*    <div> asd</div>*/}
            {/*    {alarm.map((item, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            <p>Send Time: {item.sendTime}</p>*/}
            {/*            <p>Sender Name: {item.senderName}</p>*/}
            {/*            <p>Board Title: {item.boardTitle}</p>*/}
            {/*            <p>Room ID: {item.roomId}</p>*/}
            {/*            <p>=============</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}

const StyledDiv1 = styled.div`
  width: 1130px;
  height: 170px;
  margin-left: 200px;
  margin-top: 50px;
  margin-bottom: 50px;

  background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  display: flex;
`;
const StyledDiv11 = styled.div`
  margin-left: 40px;
  margin-top: 55px;
`;
const StyledTxt1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 36px;
  /* or 100% */

  color: #ff0000;
`;
const StyledTxt2 = styled.div`
  margin-top: 5px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 36px;
  /* or 100% */

  color: #333333;
`;
const StyledTxt3 = styled.div`
  margin-top: 10px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;

  color: #7a7a7a;
`;
const StyledDiv12 = styled.div`
  margin-left: 50px;
  margin-top: 25px;
  display: flex;
`;
const Styledimg = styled.img`
  /* margin-left: 10px; */
  width: 125px;
  height: 125px;
`;
const StyledDiv13 = styled.div`
  margin-left: 20px;
`;
const StyledPrice = styled.div`
  margin-left: 12px;
  margin-top: 25px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 32px;
  /* identical to box height, or 100% */

  color: #333333;
`;
const StyledDiv14 = styled.div`
  display: flex;
  margin-top: 10px;
`;
const StyledBtn = styled.div`
  width: 125px;
  height: 41.32px;
  margin-right: 15px;

  background: #ffe0e0;
  border-radius: 10px;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.1));
`;
const StyledBtnTxt = styled.div`
  width: 100px;
  text-align: center;
  margin-left: 13px;
  margin-top: 13px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */

  color: #333333;
`;

const StyledDiv4 = styled.div`
  margin-left: 180px;
  margin-top: 50px;
  margin-bottom: 50px;

  /* background: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 15px; */
  display: flex;
`;
const StyledDiv2 = styled.div`
  /* background-color: black; */
  width: 120ch;
  margin: auto;
`;
const Styledimg2 = styled.img`
  width: 120ch;
  /* height: 102.46px; */
  /* margin-top: 10px;
  margin-left: 115px; */
  margin-bottom: 50px;
  //padding-bottom: 50px;

`;
const StyledDiv41 = styled.div``;
const StyledDiv41T = styled.div`
  display: flex;
`;
const StyledBtn41 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;
  background: #ffffff;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledBtnTxt4 = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 28px;
  /* or 100% */

  color: #333333;
`;
const Styledimg4 = styled.img`
  width: 107.19px;
  height: 102.46px;
  margin-top: 10px;
  margin-left: 115px;
`;
const Styledimg5 = styled.img`
  margin-left: 25px;
  margin-top: 15px;
  width: 90%;
  /* height: 102.46px; */
  /* margin-top: 10px;
  margin-left: 115px; */
`;
const StyledBtn42 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ffc9c9;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledDiv41B = styled.div`
  display: flex;
`;
const StyledBtn43 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ffe9e9;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;
const StyledBtn44 = styled.div`
  margin-left: 19px;
  margin-bottom: 24px;

  width: 244px;
  height: 178px;

  background: #ff9898;
  border-radius: 15px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15));
`;

const StyledDiv42 = styled.div`
  margin-left: 40px;

  width: 590px;
  height: 380px;

  background: #ffe9e9;
  border-radius: 15px;
`;

const StyledBox = styled.div`
  margin-top: 30px;
  display: flex;
`;
const StyledBox2 = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;
export default Main;
