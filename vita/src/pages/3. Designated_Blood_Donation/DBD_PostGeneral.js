import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DBD_PostGeneral() {
    const [id, setId] = useState('');
    const [bloodtype, setbloodtype] = useState('');
    const [rhtype, setbrhtype] = useState('');
    const [donationtype, setdonationtype] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleChangeId = ({ target: { value } }) => setId(value);

    const navigate = useNavigate();

    const RadioButton = ({ label, value, onChange }) => {
        return (
            <label>
                <input type="radio" checked={value} onChange={onChange} />
                {label}
            </label>
        );
    };
    const handleAChange = () => {
        setbloodtype('A');
    };
    const handleBChange = () => {
        setbloodtype('B');
    };
    const handleOChange = () => {
        setbloodtype('O');
    };
    const handleABChange = () => {
        setbloodtype('AB');
    };
    const handleRHMChange = () => {
        setbrhtype('RH-');
    };
    const handleRHPChange = () => {
        setbrhtype('RH+');
    };
    const selectList = [
        "전혈", "혈소판", "그외"
    ];
    const handleSelect = (e) => {
        setdonationtype(e.target.value);
    };
    const handleSubmit = async (event) => {
        setDisabled(true);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));

        //back으로 정보 post함
        fetch('http://localhost:8003/join', {
            method: 'post',
            body: JSON.stringify({
                id: 'userID',
                password: 'userPW',
            }),
        })
            //보낸거를 문자열 받아 다시 json(객체)으로 변환하여 비교
            .then((res) => res.json())
            //회원가입 성공시 실행
            .then((res) => {
                navigate('/');
            })
            //회원가입 실패시 실행
            .catch((err) => {
                setError(err.message);
                //에러시 Loading메세지 사라지고
                //에러메세지만 보이도록 설정
            });
        setDisabled(false);
    };
    return (
        <div
            style={{
                marginLeft: '15%',
            }}>
            <section>
                <Styleddiv>지정헌혈하기</Styleddiv>
                <Styleddiv1>일반사용자 | <span>&nbsp;병원</span></Styleddiv1>
            </section>
            <Styledsec>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '700',
                        padding: '0.5%'
                    }}>* 은 필수 입력란입니다</div>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        padding: '0.5%',
                    }}>지정헌혈에 대한 상세한 정보 : www.qwer.zxc/78945/4567</div>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: '500',
                        padding: '0.5%',
                    }}>지정헌혈 게시물 작성 양식과 당부드리는 점 : www.abcd.efg/01230/1234</div>
            </Styledsec>
            <section>
                <form onSubmit={handleSubmit}>
                    <Styleddiv4>
                        <Styleddiv3>
                            <div>
                                <Styleddiv2>* 환자명</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="홍길동"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <Styleddiv2>* 수혈자 등록번호</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="id"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                        </Styleddiv3>
                        <Styleddiv3>
                            <div>
                                <Styleddiv2>* 필요한 헌혈자 명수</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="3명"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <Styleddiv2>환자 나이</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="60"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <Styleddiv2>병실 호수</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="000호"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                        </Styleddiv3>
                        <Styleddiv3>
                            <div>
                                <Styleddiv2>* 의료기관 명</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="id"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div>
                                <Styleddiv2>* 의료기관 전화번호</Styleddiv2>
                                <FloatingLabel
                                    type="id"
                                    label="01033333333"
                                    name="id"
                                    value={id}
                                    onChange={handleChangeId}
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                        </Styleddiv3>
                        <Styleddiv3>
                            <div>
                                <Styleddiv2>* 혈액형</Styleddiv2>
                                <RadioButton
                                    label="&nbsp;A형&nbsp;"
                                    value={bloodtype === 'A형'}
                                    onChange={handleAChange}
                                />
                                <RadioButton
                                    label="&nbsp;B형&nbsp;"
                                    value={bloodtype === 'B형'}
                                    onChange={handleBChange}
                                />
                                <RadioButton
                                    label="&nbsp;O형&nbsp;"
                                    value={bloodtype === 'O형'}
                                    onChange={handleOChange}
                                />
                                <RadioButton
                                    label="&nbsp;AB형&nbsp;"
                                    value={bloodtype === 'AB형'}
                                    onChange={handleABChange}
                                />
                            </div>
                            <div>
                                <Styleddiv2>* RH여부</Styleddiv2>
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
                                <Styleddiv2>* 혈액종류</Styleddiv2>
                                <select onChange={handleSelect} value={donationtype}>
                                    {selectList.map((item) => (
                                        <option value={item} key={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Styleddiv3>
                    </Styleddiv4>
                    <StyledButton1 type="submit" disabled={disabled}>
                        로그인
                    </StyledButton1>
                    <div className="home">{error && <div>{error}</div>}</div>
                </form>
            </section>
        </div>
    );
}
const Styleddiv = styled.div`
    position: static;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 24px;
    font-weight: 700;
    margin-top: 2%;
`;
const Styleddiv1 = styled.div`
    position: static;
    display: flex;
    justify-content: flex-start
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
const Styleddiv3 = styled.div`    
    display:flex;
    justify-content: space-evenly
`;
const Styleddiv4 = styled.div`
    margin-top: 1%;
    margin-bottom: 1%;
    border : solid 1px;
    border-radius: 10px;
    margin-right: 15%;
    padding:1%;
`;
const Styledsec = styled.section`
    background-color: #ebebeb;
    border-radius: 10px;
    margin-right: 15%;
    margin-top: 1%;
`;
const StyledButton1 = styled.button`
    background-color: #ff9f9f;
    color: white;
    border-radius: 8px;
    font-size: 30px;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
`;
export default DBD_PostGeneral;
