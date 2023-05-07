import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function BD_PostHouse() {
  const [id, setId] = useState('');
  const [number, setnumber] = useState('');
  const [people, setpeople] = useState('');
  const [age, setage] = useState('');
  const [roomnumber, setroomnumber] = useState('');
  const [hostipalname, sethostipalname] = useState('');
  const [hostipalcall, sethostipalcall] = useState('');
  const [bloodtype, setbloodtype] = useState('');
  const [rhtype, setbrhtype] = useState('');
  const [donationtype, setdonationtype] = useState('');
  const [bloodproduct, setbloodproduct] = useState('');
  const [bloodmatch, setbloodmatch] = useState('');
  const [review, setreview] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [title, settitle] = useState('');
  const [detail, setdetail] = useState('');

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChangeId = ({ target: { value } }) => setId(value);
  const handleChangenumber = ({ target: { value } }) => setnumber(value);
  const handleChangepeople = ({ target: { value } }) => setpeople(value);
  const handleChangeage = ({ target: { value } }) => setage(value);
  const handleChangeroomnumber = ({ target: { value } }) =>
    setroomnumber(value);
  const handleChangehostipalname = ({ target: { value } }) =>
    sethostipalname(value);
  const handleChangehostipalcall = ({ target: { value } }) =>
    sethostipalcall(value);
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
  const selectList = ['', '전혈', '혈소판', '그외'];
  const selectList1 = ['', 'RBC', '그외'];
  const selectList2 = ['', 'true', 'false'];
  const selectList3 = ['', 'A형', 'B형', 'O형', 'AB형'];

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
    //back으로 정보 post함
    fetch('http://localhost:8004/user/board/1', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        patientName: id,
        bloodPersonNumber: number,
        bloodNumber: people,
        patientAge: age,
        hospitalRoomNumber: roomnumber,
        hospitalName: hostipalname,
        hospitalPhoneNumber: hostipalcall,
        patientBlood: bloodtype,
        patientIsRH: rhtype,
        bloodType: donationtype,
        needBloodSystem: bloodproduct,
        bloodMatchType: bloodmatch,
        isReview: review,
        startDate: startDate,
        endDate: endDate,
        title: title,
        content: detail,
      }),
    })
      //보낸거를 문자열 받아 다시 json(객체)으로 변환하여 비교
      .then((res) => {
        res.json();
        if (res.ok) {
          navigate('/DBD_General');
        }
      })
      //회원가입 실패시 실행
      .catch((err) => {
        setError(err.message);
        //에러시 Loading메세지 사라지고
        //에러메세지만 보이도록 설정
      });
    setDisabled(false);
    console.log(
      'data: ' +
        JSON.stringify({
          patientName: id,
          bloodPersonNumber: number,
          bloodNumber: people,
          patientAge: age,
          hospitalRoomNumber: roomnumber,
          hospitalName: hostipalname,
          hospitalPhoneNumber: hostipalcall,
          patientBlood: bloodtype,
          patientIsRH: rhtype,
          bloodType: donationtype,
          needBloodSystem: bloodproduct,
          bloodMatchType: bloodmatch,
          isReview: review,
          startDate: startDate,
          endDate: endDate,
          title: title,
          content: detail,
        })
    );
  };

  return (
    <StyledAll>
      <section>
        <StyledTitle>헌혈의 집</StyledTitle>
      </section>
      <Styledsec2>
        <form onSubmit={handleSubmit}>
          <StyledDiv1>
            <StyledGroup1>
              <StyledGroup1_1>
                <StyledGroupTitle>센터이름</StyledGroupTitle>
                <FloatingLabel
                  controlId="floatingInput"
                  label="홍길동"
                  className="mb-3"
                  value={id}
                  onChange={handleChangeId}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup1_1>
            </StyledGroup1>
            {/* 여기서 부터 디비 바꿔야함 */}
            <StyledGroup2>
              <StyledGroup2_1>
                <StyledGroupTitle>전화번호</StyledGroupTitle>
                <FloatingLabel
                  label="3명"
                  value={people}
                  onChange={handleChangepeople}
                >
                  <Form.Control type="textarea" />
                </FloatingLabel>
              </StyledGroup2_1>
              <StyledGroup2_2>
                <StyledGroupTitle>헌혈종류</StyledGroupTitle>
                <RadioButton
                  label="&nbsp;전혈&nbsp;"
                  value={rhtype === '전혈'}
                  onChange={handleRHMChange}
                />
                <RadioButton
                  label="&nbsp;혈장&nbsp;"
                  value={rhtype === '혈장'}
                  onChange={handleRHPChange}
                />
                <RadioButton
                  label="&nbsp;혈소판&nbsp;"
                  value={rhtype === '혈소판'}
                  onChange={handleRHPChange}
                />
                <RadioButton
                  label="&nbsp;혈소판+혈장&nbsp;"
                  value={rhtype === '혈소판+혈장'}
                  onChange={handleRHPChange}
                />
              </StyledGroup2_2>
            </StyledGroup2>
            <StyledGroup3>
              <StyledGroup3_1>
                <StyledGroupTitle>헌혈의 집 주소</StyledGroupTitle>
                <StyledDiv2>
                  <StyledDiv3>
                    <FloatingLabel
                      label="id"
                      value={hostipalname}
                      onChange={handleChangehostipalname}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledDiv3>
                  <StyledDiv3>
                    <FloatingLabel
                      label="id"
                      value={hostipalname}
                      onChange={handleChangehostipalname}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledDiv3>
                  <StyledDiv4>
                    <FloatingLabel
                      label="id"
                      value={hostipalname}
                      onChange={handleChangehostipalname}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledDiv4>
                </StyledDiv2>
                <StyledDiv2>
                  <StyledDiv3>
                    <FloatingLabel
                      label="id"
                      value={hostipalname}
                      onChange={handleChangehostipalname}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledDiv3>
                  <StyledDiv3>
                    <FloatingLabel
                      label="id"
                      value={hostipalname}
                      onChange={handleChangehostipalname}
                    >
                      <Form.Control type="textarea" />
                    </FloatingLabel>
                  </StyledDiv3>
                </StyledDiv2>
              </StyledGroup3_1>
            </StyledGroup3>
            <StyledGroup4>
              <StyledGroup4_1>
                <StyledGroupTitle>운영시간</StyledGroupTitle>
                <StyledSelectBox>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>월요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>화요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>수요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>목요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>금요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>토요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                  <StyledSelectBox2>
                    <StyledGroupTitle2>일요일</StyledGroupTitle2>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <StyledGroupTitle3>-</StyledGroupTitle3>
                    <input
                      type="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </StyledSelectBox2>
                </StyledSelectBox>
              </StyledGroup4_1>
            </StyledGroup4>
          </StyledDiv1>
          <StyledButton1
            type="button"
            onClick={handleSubmit}
            disabled={disabled}
          >
            등록하기
          </StyledButton1>
          <div className="home">{error && <div>{error}</div>}</div>
        </form>
      </Styledsec2>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  margin: auto;
  padding-bottom: 300px;
`;
const StyledTitle = styled.div`
  width: 270px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;

  color: #333333;
  margin-top: 35px;
`;
const Styledsec2 = styled.div`
  margin-top: 30px;
  margin-left: 10px;

  width: 1100px;
  height: 150ch;
  left: 378px;
  top: 446px;

  background: #ffffff;
  border: 2px solid #939393;
  border-radius: 10px;
`;
const StyledDiv1 = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;
const StyledDiv2 = styled.div`
  display: flex;
  width: 600px;
  margin-bottom: 10px;
`;
const StyledDiv3 = styled.div`
  width: 200px;
  margin-right: 10px;
`;
const StyledDiv4 = styled.div`
  width: 800px;
`;
const StyledGroup1 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup1_1 = styled.div`
  width: 200px;
`;
const StyledGroupTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;

  letter-spacing: 0.29em;

  margin-bottom: 5px;

  color: #333333;
`;
const StyledGroupTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  /* letter-spacing: 0.29em; */

  /* margin-bottom: 5px; */
  margin-left: 5px;
  margin-right: 25px;

  color: #333333;
`;
const StyledGroupTitle3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;

  /* letter-spacing: 0.29em; */

  /* margin-bottom: 5px; */
  margin-left: 15px;
  margin-right: 15px;

  color: #333333;
`;
const StyledGroup2 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup2_1 = styled.div`
  width: 300px;
`;
const StyledGroup2_2 = styled.div`
  margin-left: 50px;
  width: 400px;
`;
const StyledGroup3 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup3_1 = styled.div`
  width: 300px;
`;
const StyledGroup4 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup4_1 = styled.div`
  width: 200px;
`;
const StyledSelectBox = styled.div`
  /* width: 200px;
  height: 65px;
  background: #ffffff;
  border: 2px solid #e6e9ec;
  border-radius: 8px; */
`;
const StyledSelectBox2 = styled.div`
  display: flex;
  width: 400px;
  margin-bottom: 15px;
`;
const StyledButton1 = styled.button`
  background-color: #ff9f9f;
  color: white;
  border-radius: 10px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  width: 180px;
  height: 55px;
  margin-left: 28ch;
  margin-bottom: 10px;
  margin-top: 15ch;
`;
export default BD_PostHouse;
