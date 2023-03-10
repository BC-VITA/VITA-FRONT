import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DBD_PostGeneral() {
    const [id, setId] = useState('');
    const [number, setnumber] = useState('');
    const [people, setpeople] = useState('');
    const [age, setage] = useState('');
    const [roomnumber, setroomnumber] = useState('');
    const [hostipalname, sethostipalname] = useState('');
    const [hostipalcall, sethostipalcall] = useState('');
    const [bloodtype, setbloodtype] = useState('');
    const [rhtype, setbrhtype] = useState('');
    const [donationtype, setdonationtype] = useState("");
    const [bloodproduct, setbloodproduct] = useState("");
    const [bloodmatch, setbloodmatch] = useState("");
    const [review, setreview] = useState("");
    const [startDate, setstartDate] = useState("");
    const [endDate, setendDate] = useState("");
    const [title, settitle] = useState("");
    const [detail, setdetail] = useState("");


    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleChangeId = ({ target: { value } }) => setId(value);
    const handleChangenumber = ({ target: { value } }) => setnumber(value);
    const handleChangepeople = ({ target: { value } }) => setpeople(value);
    const handleChangeage = ({ target: { value } }) => setage(value);
    const handleChangeroomnumber = ({ target: { value } }) => setroomnumber(value);
    const handleChangehostipalname = ({ target: { value } }) => sethostipalname(value);
    const handleChangehostipalcall = ({ target: { value } }) => sethostipalcall(value);
    const handleStartDateChange = ({ target: { value } }) => setstartDate(value);
    const handleEndDateChange = ({ target: { value } }) => setendDate(value);
    const handlesettitleChange = ({ target: { value } }) => settitle(value);
    const handlesetdetailChange = ({ target: { value } }) => setdetail(value);


    const navigate = useNavigate();

    const RadioButton = ({ label, value, onChange }) => {
        return (
            <label>
                <input type="radio" checked={value} onChange={onChange} />
                {label}
            </label>
        );
    };
    const handleRHMChange = () => {
        setbrhtype('RH-');
    };
    const handleRHPChange = () => {
        setbrhtype('RH+');
    };
    const handlereviewTChange = () => {
        setreview('true');
    };
    const handlereviewFChange = () => {
        setreview('false');
    };
    const selectList = [
        "", "??????", "?????????", "??????"
    ];
    const selectList1 = [
        "", "RBC", "??????"
    ];
    const selectList2 = [
        "", "true", "false"
    ];
    const selectList3 = [
        "", "A???", "B???", "O???", "AB???"
    ];

    const handleSelect = (e) => {
        setdonationtype(e.target.value);
    };
    const handleSelect1 = (e) => {
        setbloodproduct(e.target.value);
    };
    const handleSelect2 = (e) => {
        setbloodmatch(e.target.value);
    };
    const handleSelect3 = (e) => {
        setbloodtype(e.target.value);
    };

    const handleSubmit = async (event) => {
        setDisabled(true);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        //back?????? ?????? post???
        fetch('http://localhost:8004/user/board/1', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                "patientName": id,
                "bloodPersonNumber": number,
                "bloodNumber": people,
                "patientAge": age,
                "hospitalRoomNumber": roomnumber,
                "hospitalName": hostipalname,
                "hospitalPhoneNumber": hostipalcall,
                "patientBlood": bloodtype,
                "patientIsRH": rhtype,
                "bloodType": donationtype,
                "needBloodSystem": bloodproduct,
                "bloodMatchType": bloodmatch,
                "isReview": review,
                "startDate": startDate,
                "endDate": endDate,
                "title": title,
                "content": detail,
            }),
        })
            //???????????? ????????? ?????? ?????? json(??????)?????? ???????????? ??????
            .then((res) => {
                res.json();
                if (res.ok) {
                    navigate('/DBD_General');
                }
            })
            //???????????? ????????? ??????
            .catch((err) => {
                setError(err.message);
                //????????? Loading????????? ????????????
                //?????????????????? ???????????? ??????
            });
        setDisabled(false);
        console.log("data: " + JSON.stringify({
            "patientName": id,
            "bloodPersonNumber": number,
            "bloodNumber": people,
            "patientAge": age,
            "hospitalRoomNumber": roomnumber,
            "hospitalName": hostipalname,
            "hospitalPhoneNumber": hostipalcall,
            "patientBlood": bloodtype,
            "patientIsRH": rhtype,
            "bloodType": donationtype,
            "needBloodSystem": bloodproduct,
            "bloodMatchType": bloodmatch,
            "isReview": review,
            "startDate": startDate,
            "endDate": endDate,
            "title": title,
            "content": detail,
        }))

    };
    return (
        <div
            style={{ marginLeft: '15%' }}>
            <section>
                <Styleddiv>??????????????????</Styleddiv>
                <Styleddiv1>??????????????? | <span>&nbsp;??????</span></Styleddiv1>
            </section>
            <Styledsec>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        padding: '0.5%'
                    }}>* ??? ?????? ??????????????????</div>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        padding: '0.5%',
                    }}>??????????????? ?????? ????????? ?????? : www.qwer.zxc/78945/4567</div>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        padding: '0.5%',
                    }}>???????????? ????????? ?????? ????????? ??????????????? ??? : www.abcd.efg/01230/1234</div>
            </Styledsec>
            <section>
                <form onSubmit={handleSubmit}>
                    <Styleddiv4>
                        <div style={{
                            display: "flex",
                        }}>
                            <div style={{
                                width: "30%",
                                marginLeft: "6%",
                            }}>
                                <Styleddiv2>* ?????????</Styleddiv2>
                                <FloatingLabel
                                    label="?????????"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                            <div style={{
                                width: "50%",
                                marginLeft: "6%",
                                marginRight: "8%"
                            }}>
                                <Styleddiv2>* ????????? ????????????</Styleddiv2>
                                <FloatingLabel
                                    label="id"
                                    value={number}
                                    onChange={handleChangenumber}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                        }}>
                            <div style={{
                                width: "26%",
                                marginLeft: "10%",
                            }}>
                                <Styleddiv2>* ????????? ????????? ??????</Styleddiv2>
                                <FloatingLabel
                                    label="3???"
                                    value={people}
                                    onChange={handleChangepeople}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                            <div style={{
                                width: "13%",
                                marginLeft: "10%",
                            }}>
                                <Styleddiv2>?????? ??????</Styleddiv2>
                                <FloatingLabel
                                    label="60"
                                    value={age}
                                    onChange={handleChangeage}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                            <div style={{
                                width: "22%",
                                marginLeft: "10%",
                                marginRight: "10%",
                            }}>
                                <Styleddiv2>?????? ??????</Styleddiv2>
                                <FloatingLabel
                                    label="000???"
                                    value={roomnumber}
                                    onChange={handleChangeroomnumber}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                        }}>
                            <div style={{
                                width: "35%",
                                marginLeft: "7.5%",
                            }}>
                                <Styleddiv2>* ???????????? ???</Styleddiv2>
                                <FloatingLabel
                                    label="id"
                                    value={hostipalname}
                                    onChange={handleChangehostipalname}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                            <div style={{
                                width: "43%",
                                marginLeft: "7%",
                                marginRight: "7.5%",
                            }}>
                                <Styleddiv2>* ???????????? ????????????</Styleddiv2>
                                <FloatingLabel
                                    label="01033333333"
                                    value={hostipalcall}
                                    onChange={handleChangehostipalcall}
                                >
                                    <Form.Control type="textarea" />
                                </FloatingLabel>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            backgroundColor: "gray",
                        }}>
                            <div >
                                <Styleddiv2>* ?????????</Styleddiv2>
                                <select onChange={handleSelect3} value={bloodtype}>
                                    {selectList3.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Styleddiv2>* RH??????</Styleddiv2>
                                <RadioButton
                                    label="&nbsp;RH-&nbsp;"
                                    value={rhtype === 'RH-'}
                                    onChange={handleRHMChange}
                                />
                                <RadioButton
                                    label="&nbsp;RH+&nbsp;"
                                    value={rhtype === 'RH+'}
                                    onChange={handleRHPChange}
                                />
                            </div>
                            <div>
                                <Styleddiv2>* ????????????</Styleddiv2>
                                <select onChange={handleSelect} value={donationtype}>
                                    {selectList.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            backgroundColor: "gray",
                        }}>
                            <div>
                                <Styleddiv2>* ?????? ????????????</Styleddiv2>
                                <select onChange={handleSelect1} value={bloodproduct}>
                                    {selectList1.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Styleddiv2>* ?????? ????????????</Styleddiv2>
                                <select onChange={handleSelect2} value={bloodmatch}>
                                    {selectList2.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Styleddiv2>* ????????? ?????? ?????? ??????</Styleddiv2>
                                <RadioButton
                                    label="&nbsp;???&nbsp;"
                                    value={review === 'true'}
                                    onChange={handlereviewTChange}
                                />
                                <RadioButton
                                    label="&nbsp;?????????&nbsp;"
                                    value={review === 'false'}
                                    onChange={handlereviewFChange}
                                />
                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            backgroundColor: "gray",
                        }}>
                            <div>
                                <Styleddiv2>* ????????????</Styleddiv2>
                                <input
                                    type="Date"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                />
                            </div>
                            <Styleddiv2>-</Styleddiv2>
                            <div>
                                <Styleddiv2>* ????????????</Styleddiv2>
                                <input
                                    type="Date"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                />
                            </div>
                        </div>
                    </Styleddiv4>
                    <Styleddiv4>
                        <FloatingLabel
                            label="??????"
                            value={title}
                            onChange={handlesettitleChange}>
                            <Form.Control type="textarea" />
                        </FloatingLabel>
                    </Styleddiv4>
                    <Styleddiv4>
                        <FloatingLabel
                            label="??????"
                            value={detail}
                            onChange={handlesetdetailChange}>
                            <Form.Control
                                as="textarea"
                                style={{ height: '270px' }} />
                        </FloatingLabel>
                    </Styleddiv4>
                    <Styledsec>
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: '500',
                                padding: '0.5%'
                            }}># ??????????????? ???3???(?????? ???????????? ?????? ??????)??? "???????????? ??????, ???????????? ?????? ?????? ??? ?????? ??????</div>
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: '500',
                                padding: '0.5%',
                            }}>??? ????????? ????????? ????????? ?????? ????????? ??????(???????????? ??????)??? ??????????????? ????????? ?????? ??????????????????</div>
                        <div
                            style={{
                                fontSize: '13px',
                                fontWeight: '500',
                                padding: '0.5%',
                            }}>????????????</div>
                    </Styledsec>
                    <StyledButton1 type="button" onClick={handleSubmit} disabled={disabled}>
                        ????????????
                    </StyledButton1>
                    <div className="home">{error && <div>{error}</div>}</div>
                </form>
            </section>
        </div>
    );
}
const Styleddiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 24px;
    font-weight: 700;
    margin-top: 2%;
`;
const Styleddiv1 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    margin-top: 0.5%;
`;
const Styleddiv2 = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    margin-top:1%;
`;
const Styleddiv4 = styled.div`
    margin-top: 1%;
    margin-bottom: 1%;
    border : solid 1px;
    border-radius: 10px;
    padding:1%;    
    margin-right: 15%;
`;
const Styledsec = styled.section`
    background-color: #ebebeb;
    border-radius: 10px;
    margin-top: 1%;
    margin-right: 15%;
`;
const StyledButton1 = styled.button`
    background-color: #ff9f9f;
    color: white;
    border-radius: 8px;
    font-size: 30px;
    border: none;
    cursor: pointer;
    margin-bottom:10px;
`;
export default DBD_PostGeneral;