import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Form, Tab, Tabs, Nav, FloatingLabel, Table} from 'react-bootstrap';
import {format, parseISO} from "date-fns";

function MyPage_D() {
    const userId = sessionStorage.getItem('userId');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const handleStartDateChange = ({target: {value}}) => setstartDate(value);
    const handleEndDateChange = ({target: {value}}) => setendDate(value);
    const [error, setError] = useState(null);

    const [inputData, setInputData1] = useState(null);
    const [inputData2, setInputData2] = useState(null);
    const totalUsePoint = inputData
        ? inputData.reduce((sum, review) => sum + review.usePoint, 0)
        : 0;

    const [openIndex, setOpenIndex] = useState(-1);
    const handleRowClick = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    const type = "Deprecated";

    useEffect(() => {
        const url1 = `http://localhost:8004/donate/mypage/history?userId=${userId}`;
        fetch(url1, {
            method: 'get',
        })
            .then((res) => res.json())
            .then((res) => {
                setInputData1(res);
            })
            .catch((err) => {
                setError(err.message);
            });
        const url2 = `http://localhost:8004/donate/mypage-user-review-point-history?userId=${userId}&reviewType=${type}`;
        fetch(url2, {
            method: 'get',
        })
            .then((res) => res.json())
            .then((res) => {
                setInputData2(res);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    if (inputData === null) {
        return <div>Loading...</div>;
    }

    if (inputData2 === null) {
        return <div>Loading...</div>;
    }

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
        lineHeight: '30px',
    };
    const btStyle = {
        ...thStyle,
        height: '37px',
        background: '#D9D9D9',
        borderRadius: '10px',
        border: 'none',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '37px',
    };

    // const [openIndex, setOpenIndex] = useState(-1);
    // const handleRowClick = (index) => {
    //   setOpenIndex(index === openIndex ? -1 : index);
    // };

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
                                <StyledSubDiv2_2g>채팅</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/MyPage_BD">
                                <StyledSubDiv2_2g>헌혈</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1>
                            <Nav.Link href="/MyPage_S">
                                <StyledSubDiv2_2g>봉사</StyledSubDiv2_2g>
                            </Nav.Link>
                        </StyledSubDiv2_1>
                        <StyledSubDiv2_1p>
                            <Nav.Link href="/MyPage_D">
                                <StyledSubDiv2_2>기부</StyledSubDiv2_2>
                            </Nav.Link>
                        </StyledSubDiv2_1p>
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
                    <StyledTitle>기부</StyledTitle>
                </StyledTop>
                <Styledcomment>
                    <StyledBox2>
                        <StyledBox3>
                            <StyledTxt>기부 내역</StyledTxt>
                            <FloatingLabel
                                label={inputData.length + '번'}
                                style={{width: '300px'}}
                            >
                                <Form.Control
                                    placeholder="name"
                                    disabled
                                    style={{background: '#ffffff', height: '50px'}}
                                />
                            </FloatingLabel>
                        </StyledBox3>
                        <StyledBox3 style={{marginLeft: '60px'}}>
                            <StyledTxt>포인트 내역</StyledTxt>
                            <FloatingLabel
                                label={totalUsePoint + '포인트'}
                                style={{width: '300px'}}
                            >
                                <Form.Control
                                    placeholder="name"
                                    disabled
                                    style={{background: '#ffffff', height: '50px'}}
                                />
                            </FloatingLabel>
                        </StyledBox3>
                    </StyledBox2>
                    <StyledTab1>
                        <Tabs style={{marginTop: '20px'}}>
                            <Tab eventKey="history" title="기부 내역" style={{minHeight:'130vh'}}>
                                <Tab.Content>
                                    <StyledBox1>
                                        <StyledDiv>
                                            <StyledTxt2>기부 내역</StyledTxt2>
                                            <StyledFilterDiv1 style={{marginTop: '20px'}}>
                                                <StyledFilterDivTitle2>조회일자</StyledFilterDivTitle2>
                                                <input
                                                    type="Date"
                                                    value={startDate}
                                                    style={{
                                                        border: 'none',
                                                        marginRight: '20px',
                                                        height: '40px',
                                                    }}
                                                    onChange={handleStartDateChange}
                                                />
                                                <StyledFilterDivTitle3>-</StyledFilterDivTitle3>
                                                <input
                                                    type="Date"
                                                    value={endDate}
                                                    style={{
                                                        border: 'none',
                                                        marginRight: '20px',
                                                        height: '40px',
                                                    }}
                                                    onChange={handleEndDateChange}
                                                />
                                            </StyledFilterDiv1>
                                        </StyledDiv>
                                        {/*  */}
                                        <section id="list">
                                            <Styleddiv2>
                                                <StyledTable>
                                                    <thead>
                                                    <tr>
                                                        <th
                                                            id="area-header"
                                                            style={{...thStyle, width: '210px'}}
                                                        >
                                                            제목
                                                        </th>
                                                        <th
                                                            id="centerName-header"
                                                            style={{...thStyle, width: '90px'}}
                                                        >
                                                            포인트 액수
                                                        </th>
                                                        <th
                                                            id="bloodHouseAddress-header"
                                                            style={{...thStyle, width: '145px'}}
                                                        >
                                                            일 시
                                                        </th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {inputData.map((review, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <tr onClick={() => handleRowClick(index)}>
                                                                    {/* <div key={index}> */}
                                                                    <td
                                                                        headers="area-header"
                                                                        style={{
                                                                            ...tdStyle,
                                                                            fontWeight: '500',
                                                                        }}
                                                                    >
                                                                        {review.donateName}
                                                                    </td>
                                                                    <td
                                                                        headers="centerName-header"
                                                                        style={{...tdStyle, width: '120px'}}
                                                                    >
                                                                        {review.usePoint}
                                                                    </td>
                                                                    <td
                                                                        headers="bloodHouseAddress-header"
                                                                        style={{
                                                                            ...tdStyle,
                                                                            width: '130px',
                                                                            fontSize: '17px',
                                                                        }}
                                                                    >
                                                                        {format(parseISO(review.donateTime), 'yyyy.MM.dd HH:mm')}
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
                                                                                handlePDF(review.reservationId)
                                                                            }
                                                                            style={{
                                                                                ...btStyle,
                                                                                background: '#8FAADC',
                                                                                color: 'white',
                                                                                paddingLeft: '10px',
                                                                                paddingRight: '10px',
                                                                            }}
                                                                        >
                                                                            기부증서 출력
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

                            <Tab eventKey="reservation" title="포인트 조회" style={{minHeight:'130vh'}}>
                                <Tab.Content>
                                    <StyledBox1>
                                        <StyledDiv>
                                            <StyledTxt2>포인트 조회</StyledTxt2>
                                            <StyledFilterDiv1 style={{marginTop: '20px'}}>
                                                <StyledFilterDivTitle2>조회일자</StyledFilterDivTitle2>
                                                <input
                                                    type="Date"
                                                    value={startDate}
                                                    style={{
                                                        border: 'none',
                                                        marginRight: '20px',
                                                        height: '40px',
                                                    }}
                                                    onChange={handleStartDateChange}
                                                />
                                                <StyledFilterDivTitle3>-</StyledFilterDivTitle3>
                                                <input
                                                    type="Date"
                                                    value={endDate}
                                                    style={{
                                                        border: 'none',
                                                        marginRight: '20px',
                                                        height: '40px',
                                                    }}
                                                    onChange={handleEndDateChange}
                                                />
                                            </StyledFilterDiv1>
                                        </StyledDiv>
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
                                                            포인트 액수
                                                        </th>
                                                        <th
                                                            id="bloodHouseAddress-header"
                                                            style={{...thStyle, width: '150px'}}
                                                        >
                                                            일 시
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {inputData2.map((review, index) => {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <tr onClick={() => handleRowClick(index)}>
                                                                    {/* <div key={index}> */}
                                                                    <td
                                                                        headers="area-header"
                                                                        style={{
                                                                            ...tdStyle,
                                                                            fontWeight: '500',
                                                                            fontSize: '20px',
                                                                        }}
                                                                    >
                                                                        후기작성
                                                                    </td>
                                                                    <td
                                                                        headers="centerName-header"
                                                                        style={{...tdStyle, width: '120px', fontSize: '20px',}}
                                                                    >
                                                                        500P
                                                                    </td>
                                                                    <td
                                                                        headers="bloodHouseAddress-header"
                                                                        style={{
                                                                            ...tdStyle,
                                                                            width: '130px',

                                                                            fontSize: '20px',
                                                                        }}
                                                                    >
                                                                        {format(parseISO(review.localDateTime), 'yyyy.MM.dd HH:mm')}
                                                                    </td>
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
const StyledButton = styled.div`
  margin-top: 3px;
  width: 125px;
  height: 35px;
  margin-left: 540px;

  background: #ff9f9f;
  border-radius: 9px;
`;

const StyledButtonDiv = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 38px;
  margin: auto;
  margin-left: 28px;
  /* identical to box height, or 100% */

  color: #ffffff;
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

  /* margin-bottom: 30px;

  padding-bottom: 10px; */

  /* width: 1100px; */
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
const StyledBox3 = styled.div`
  display: block;
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
  margin-right: 20px;
  margin-left: 10px;
  line-height: 40px;
`;
const StyledFilterDivTitle3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  /* margin-left: 10px; */
  line-height: 40px;
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
const Styledtd1 = styled.div`
  width: 500px;
`;
const Styledtd2 = styled.div`
  /* display: block; */
  margin-top: 50px;
`;
const Styledtxt = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 30px;
  /* or 158% */
  letter-spacing: 0.05em;
  color: #333333;
`;
export default MyPage_D;
