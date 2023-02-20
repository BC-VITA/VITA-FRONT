import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import icon from './heart.png';

function DBD_News() {
    const [error, setError] = useState(null);

    const [inputData, setInputData] = useState([{
        hospitalName: '',
        title: '',
        content: '',
        patientBlood: '',
        bloodType: '',
        startDate: '',
        DesignatedBloodWriteNumber: '',
        bloodNumber: '',
    },{}]);

    useEffect(() => {
        fetch('http://localhost:8004/user/board/list', {
            method: 'get'
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setInputData(res);
            })
            .catch((err) => {
                setError(err.message);
            });
        console.log(inputData);
    }, []);


    return (
        <div>
            <section>
                <Styleddiv>지정헌혈하기</Styleddiv>
                <Styleddiv1>일반사용자 | &nbsp;병원</Styleddiv1>
            </section>
            <section>
                <Styleddiv2>
                    <Accordion defaultActiveKey="0">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>제목 / 내용</th>
                                    <th>모집인원 및 현황</th>
                                </tr>
                            </thead>
                            <Styledtbody1>
                                <Styledtr>
                                    <Styledtd>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                {inputData[0].title}<br />
                                                {inputData[0].startDate}<br />
                                                필요한 혈액형 : {inputData[0].patientBlood}<br />
                                                혈액 종류 : {inputData[0].bloodType}<br />
                                                장소 : {inputData[0].hospitalName}
                                            </Accordion.Header>
                                            <Accordion.Body colSpan={2}>
                                                {inputData[0].content}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Styledtd>
                                    <Styledtd>
                                        {inputData[0].bloodNumber}{/* 텍스트 컬러랑 현재 모집인원 /로 표현하기 */}
                                        <br />
                                        <Styledimg src={icon} class name="main-icon" alt="logo" />{/* 빈 하트 이미지 추가 후 좋아요 여부로 이미지 다르게 보이기 */}
                                        <br />
                                        <button type="button">
                                            상세보기
                                        </button>
                                        <br />
                                        <button type="button">
                                            참여하기
                                        </button>
                                    </Styledtd>
                                </Styledtr>
                            </Styledtbody1>
                            <Styledtbody1>
                                <Styledtr>
                                    <Styledtd>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                {inputData[1].title}<br />
                                                {inputData[1].startDate}<br />
                                                필요한 혈액형 : {inputData[1].patientBlood}<br />
                                                혈액 종류 : {inputData[1].bloodType}<br />
                                                장소 : {inputData[1].hospitalName}
                                            </Accordion.Header>
                                            <Accordion.Body colSpan={2}>
                                                {inputData[1].content}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Styledtd>
                                    <Styledtd>
                                        {inputData[1].bloodNumber}{/* 텍스트 컬러랑 현재 모집인원 /로 표현하기 */}
                                        <br />
                                        <Styledimg src={icon} class name="main-icon" alt="logo" />{/* 빈 하트 이미지 추가 후 좋아요 여부로 이미지 다르게 보이기 */}
                                        <br />
                                        <button type="button">
                                            상세보기
                                        </button>
                                        <br />
                                        <button type="button">
                                            참여하기
                                        </button>
                                    </Styledtd>
                                </Styledtr>
                            </Styledtbody1>
                        </Table>
                    </Accordion>
                </Styleddiv2>
            </section>
            <div className="home">{error && <div>{error}</div>}</div>
        </div>
    );
}
const Styleddiv = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 48px;
  font-weight: 700;
  margin-top: 3%;
  margin-left: 15%;
`;
const Styleddiv1 = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
  margin-left: 15%;
`;
const Styleddiv2 = styled.div`
 margin-right : 15%;
 margin-left: 15%;
 text-align: center;
`;
const Styledtr = styled.tr`
 border:none;
`;
const Styledtd = styled.td`
 border:none;
`;
const Styledtbody1 = styled.tbody`
 border:none;
`;
const Styledimg = styled.img`
  width: 30px;
  height: 25px;
  object-fit: cover;
`;
export default DBD_News;
