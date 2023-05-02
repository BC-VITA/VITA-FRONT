import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DBD_PostHospital() {
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
        <StyledTitle>지정헌혈하기</StyledTitle>
        <StyledTitle2>병 원</StyledTitle2>
      </section>
      <Styledsec>
        <StyledTxt>
          <StyledTxtB>* 은 필수 입력란입니다</StyledTxtB>
          <StyledTxtL>
            지정헌혈에 대한 상세한 정보 : www.qwer.zxc/78945/4567
            <br />
            지정헌혈 게시물 작성 양식과 당부드리는 점 : www.abcd.efg/01230/1234
          </StyledTxtL>
        </StyledTxt>
      </Styledsec>
      <Styledsec2>
        <form onSubmit={handleSubmit}>
          <StyledDiv1>
            <StyledGroup1>
              <StyledGroup1_1>
                <StyledGroupTitle>* 의료기관 명</StyledGroupTitle>
                <FloatingLabel
                  label="id"
                  value={hostipalname}
                  onChange={handleChangehostipalname}
                >
                  <Form.Control type="textarea" />
                </FloatingLabel>
              </StyledGroup1_1>
              <StyledGroup1_2>
                <StyledGroupTitle>* 의료기관 전화번호</StyledGroupTitle>
                <FloatingLabel
                  label="01033333333"
                  value={hostipalcall}
                  onChange={handleChangehostipalcall}
                >
                  <Form.Control type="textarea" />
                </FloatingLabel>
              </StyledGroup1_2>
            </StyledGroup1>
            {/* <StyledGroup2>
              <StyledGroup2_1>
                <StyledGroupTitle>* 의료기관 주소</StyledGroupTitle>
                <select onChange={handleSelect2} value={bloodmatch}>
                  {selectList2.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select onChange={handleSelect2} value={bloodmatch}>
                  {selectList2.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <FloatingLabel
                  label="01033333333"
                  value={hostipalcall}
                  onChange={handleChangehostipalcall}
                >
                  <Form.Control type="textarea" />
                </FloatingLabel>
              </StyledGroup2_1>
            </StyledGroup2> */}
            <StyledGroup4>
              <StyledGroup4_1>
                <StyledGroupTitle>* 혈액형</StyledGroupTitle>
                <StyledSelectBox>
                  <select onChange={handleSelect3} value={bloodtype}>
                    {selectList3.map((item) => (
                      <option value={item} key={item}>
                        <div>{item}</div>
                      </option>
                    ))}
                  </select>
                </StyledSelectBox>
              </StyledGroup4_1>
              <StyledGroup4_2>
                <StyledGroupTitle>* RH여부</StyledGroupTitle>
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
              </StyledGroup4_2>
              <StyledGroup4_3>
                <StyledGroupTitle>* 혈액종류</StyledGroupTitle>
                <select onChange={handleSelect} value={donationtype}>
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </StyledGroup4_3>
              <StyledGroup4_4>
                <StyledGroupTitle>* 필요 혈액제제</StyledGroupTitle>
                <select onChange={handleSelect1} value={bloodproduct}>
                  {selectList1.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </StyledGroup4_4>
            </StyledGroup4>
            <StyledGroup5>
              <StyledGroup5_1>
                <StyledGroupTitle>* 혈액 일치여부</StyledGroupTitle>
                <select onChange={handleSelect2} value={bloodmatch}>
                  {selectList2.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </StyledGroup5_1>
              <StyledGroup5_2>
                <StyledGroupTitle>* 신청자 후기 작성 여부</StyledGroupTitle>
                <RadioButton
                  label="&nbsp;예&nbsp;"
                  value={review === 'true'}
                  onChange={handlereviewTChange}
                />
                <RadioButton
                  label="&nbsp;아니오&nbsp;"
                  value={review === 'false'}
                  onChange={handlereviewFChange}
                />
              </StyledGroup5_2>
            </StyledGroup5>
            <StyledGroup6>
              <StyledGroup6_1>
                {' '}
                <StyledGroupTitle>* 진행기간</StyledGroupTitle>
                <input
                  type="Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </StyledGroup6_1>
              <StyledGroupTitle>-</StyledGroupTitle>
              <StyledGroup6_2>
                <StyledGroupTitle>* 마감기간</StyledGroupTitle>
                <input
                  type="Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </StyledGroup6_2>

              <StyledGroup6_3></StyledGroup6_3>
            </StyledGroup6>
          </StyledDiv1>
          <StyledDiv2>
            <FloatingLabel
              label="제목"
              value={title}
              onChange={handlesettitleChange}
            >
              <Form.Control type="textarea" />
            </FloatingLabel>
          </StyledDiv2>
          <StyledDiv3>
            <FloatingLabel
              label="내용"
              value={detail}
              onChange={handlesetdetailChange}
            >
              <Form.Control as="textarea" style={{ height: '270px' }} />
            </FloatingLabel>
          </StyledDiv3>
          <Styledsec3>
            <StyledTxt2>
              # 혈액관리법 제3조(혈액 매매행위 등의 금지)은 "누구든지 금전,
              재산상의 이익 또는 그 밖의 대가 적 급부를 받거나 받기로 하고
              자신의 혈액(헌혈증서 포함)을 제공하거나 제공할 것을 약속하여서는
              아니된다
            </StyledTxt2>
          </Styledsec3>
          <StyledButton1
            type="button"
            onClick={handleSubmit}
            disabled={disabled}
          >
            게시하기
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
  line-height: 48px;

  color: #333333;
  margin-top: 35px;
`;
const StyledTitle2 = styled.div`
  margin-top: 10px;
  margin-left: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 100% */

  letter-spacing: 0.29em;

  color: #333333;
`;
const Styledsec = styled.div`
  margin-top: 20px;
  margin-left: 10px;

  width: 1100px;
  height: 130px;
  /* left: 378px;
  top: 259px; */

  background: #ebebeb;
  border-radius: 10px;
`;
const StyledTxt = styled.div`
  padding-top: 25px;
  padding-left: 25px;
`;
const StyledTxtB = styled.div`
  margin-bottom: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;
const StyledTxtL = styled.div`
  margin-bottom: 3px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 25px;
  /* or 96% */

  color: #333333;
`;
const Styledsec2 = styled.div`
  margin-top: 30px;
  margin-left: 10px;

  width: 1100px;
  height: 190ch;
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
const StyledGroupTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  /* identical to box height, or 100% */

  letter-spacing: 0.29em;

  color: #333333;
`;

const StyledGroup1 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup1_1 = styled.div`
  width: 300px;
`;
const StyledGroup1_2 = styled.div`
  margin-left: 50px;
  width: 500px;
`;
// const StyledGroup2 = styled.div`
//   display: flex;
//   margin-bottom: 20px;
//   margin-top: 40px;
//   margin-left: 20px;
// `;
// const StyledGroup2_1 = styled.div`
//   width: 300px;
//   /* display: flex; */
// `;
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
const StyledGroup4_2 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup4_3 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup4_4 = styled.div`
  margin-left: 50px;
  width: 400px;
`;

const StyledGroup5 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup5_1 = styled.div`
  width: 250px;
`;
const StyledGroup5_2 = styled.div`
  margin-left: 50px;
  width: 400px;
`;

const StyledGroup6 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup6_1 = styled.div`
  width: 200px;
`;
const StyledGroup6_2 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup6_3 = styled.div`
  margin-left: 50px;
  width: 200px;
`;

const StyledDiv2 = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 115ch;
`;
const StyledDiv3 = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  width: 115ch;
`;

const Styledsec3 = styled.div`
  margin-top: 40px;
  margin-left: 20px;

  width: 120ch;
  height: 110px;
  /* left: 378px;
  top: 259px; */

  background: #ebebeb;
  border-radius: 10px;
`;
const StyledTxt2 = styled.div`
  /* padding-top: 25px;
  padding-left: 25px; */
  width: 67ch;
  margin-left: 20px;
  padding-top: 25px;
  margin-bottom: 10px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  /* or 96% */

  color: #333333;
  text-align: center;
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
export default DBD_PostHospital;
