import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function DBD_Post() {
  const [id, setId] = useState('');
  const [number, setnumber] = useState('');
  const [people, setpeople] = useState('');
  const [age, setage] = useState('');
  const [roomnumber, setroomnumber] = useState('');
  const [hostipalname, sethostipalname] = useState('');
  const [hostipaladdress, sethostipaladdress] = useState('');
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

  const handlesettitleChange = ({ target: { value } }) => settitle(value);
  const handlesetdetailChange = ({ target: { value } }) => setdetail(value);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    //back으로 정보 post함
    fetch('http://localhost:8004/user/board', {
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
        hostipalAddress: hostipaladdress,
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
          hostipalAddress: hostipaladdress,
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
        <StyledTitle>지정헌혈 후기 게시물 작성하기</StyledTitle>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <StyledDiv1>
            <FloatingLabel
              label="사례 제목 작성"
              value={title}
              onChange={handlesettitleChange}
            >
              <Form.Control type="text" placeholder="label" />
            </FloatingLabel>
          </StyledDiv1>
          <StyledDiv2>
            <FloatingLabel
              label="사례 작성"
              value={detail}
              onChange={handlesetdetailChange}
            >
              <Form.Control
                type="text"
                style={{ height: '270px' }}
                placeholder="label"
              />
            </FloatingLabel>
          </StyledDiv2>
          <StyledDiv3>
            <FloatingLabel
              label="사진 주소 작성"
              value={title}
              onChange={handlesettitleChange}
            >
              <Form.Control
                type="file"
                placeholder="label"
                style={{ paddingTop: '40px', height: '90px' }}
              />
            </FloatingLabel>
          </StyledDiv3>
          <StyledButton1
            type="button"
            onClick={handleSubmit}
            disabled={disabled}
          >
            게시하기
          </StyledButton1>
          <div className="home">{error && <div>{error}</div>}</div>
        </form>
      </section>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  margin: auto;
  padding-bottom: 300px;
`;
const StyledTitle = styled.div`
  /* width: 270px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
  margin-top: 35px;
`;

const StyledDiv1 = styled.div`
  margin-top: 10px;
  /* margin-left: 30px; */
  width: 115ch;
`;
const StyledDiv2 = styled.div`
  margin-top: 10px;
  /* margin-left: 30px; */
  width: 115ch;
`;
const StyledDiv3 = styled.div`
  margin-top: 40px;
  /* margin-left: 30px; */
  width: 115ch;
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
export default DBD_Post;
