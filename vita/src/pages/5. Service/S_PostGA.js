import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function S_PostGA() {
  // 지역
  const [volunteerArea, setvolunteerArea] = useState('');
  const handleSelectArea = (e) => {
    setvolunteerArea(e.target.value);
  };
  // 장소
  const [volunteerPlace, setvolunteerPlace] = useState('');
  const handleChangevolunteerPlace = ({ target: { value } }) =>
    setvolunteerPlace(value);

  // 주소
  const [volunteerAddress, setvolunteerAddress] = useState('');
  const handleChangevolunteerAddress = ({ target: { value } }) =>
    setvolunteerAddress(value);
  // 위도
  const [latitude, setlatitude] = useState('');
  const handleChangelatitude = ({ target: { value } }) => setlatitude(value);
  // 경도
  const [longitude, setlongitude] = useState('');
  const handleChangelongitude = ({ target: { value } }) => setlongitude(value);

  // 모집기간
  //const [volunteerSeekStartDate, setvolunteerSeekStartDate] = useState('');
  //const [volunteerSeekEndDate, setvolunteerSeekEndDate] = useState('');

  // 모집인원
  const [needVolunteerNumber, setneedVolunteerNumber] = useState('');
  const handleChangeneedVolunteerNumber = ({ target: { value } }) =>
    setneedVolunteerNumber(value);

  // 봉사기간
  // const [volunteerStartDate, setvolunteerStartDate] = useState('');
  // const [volunteerEndDate, setvolunteerEndDate] = useState('');

  // 봉사시간
  const selectTime = ['시간을', '09:00', '09:30', '10:00', '10:30', '11:00'];
  const [volunteerStartTime, setvolunteerStartTime] = useState('시간을'); //실제로 사용하는 시간의 첫번째 값
  const [volunteerEndTime, setvolunteerEndTime] = useState(['골라주세요']);
  const [volunteerEndTime1, setvolunteerEndTime1] = useState(''); //실제로 사용하는 시간의 두번째 값

  function handleTimeChange(event) {
    const selectedValue = event.target.value;
    setvolunteerStartTime(selectedValue);

    if (selectedValue === '시간을') {
      setvolunteerEndTime(['골라주세요']);
      setvolunteerEndTime1(['골라주세요']);
    } else if (selectedValue === '09:00') {
      setvolunteerEndTime(['09:30', '10:00', '10:30', '11:00']);
      setvolunteerEndTime1('09:30');
    } else if (selectedValue === '09:30') {
      setvolunteerEndTime(['10:00', '10:30', '11:00']);
      setvolunteerEndTime1('10:00');
    } else if (selectedValue === '10:00') {
      setvolunteerEndTime(['10:30', '11:00']);
      setvolunteerEndTime1('10:30');
    } else if (selectedValue === '10:30') {
      setvolunteerEndTime(['11:00']);
      setvolunteerEndTime1('11:00');
    } else if (selectedValue === '11:00') {
      setvolunteerEndTime(['이후 시간대']);
      setvolunteerEndTime1('이후 시간대');
    }
  }
  function handleTimeChange1(event) {
    const selectedValue = event.target.value;
    setvolunteerEndTime1(selectedValue);

    const updatedSelectTime = volunteerEndTime.filter(
      (item) => item !== selectedValue
    );
    updatedSelectTime.sort();
    updatedSelectTime.unshift(selectedValue);

    setvolunteerEndTime(updatedSelectTime);
  }

  // 활동요일
  const [volunteerActivityWeek, setvolunteerActivityWeek] = useState('');
  const handleChangevolunteerActivityWeek = ({ target: { value } }) =>
    setvolunteerActivityWeek(value);
  // 봉사종류
  const [volunteerType, setvolunteerType] = useState('');
  const handleChangevolunteerType = ({ target: { value } }) =>
    setvolunteerType(value);
  // 봉사분야
  // const [volunteerField, setvolunteerField] = useState('');
  // const [needVolunteerNumber, setneedVolunteerNumber] = useState('');

  // 활동구분
  const [activitySection, setactivitySection] = useState('');
  const handleSelectActivitySection = (e) => {
    setactivitySection(e.target.value);
  };
  // 봉사대상
  const [volunteerTarget, setvolunteerTarget] = useState('');
  const handleSelectVolunteerTarget = (e) => {
    setvolunteerTarget(e.target.value);
  };
  // 봉사자유형
  const [volunteerPersonType, setvolunteerPersonType] = useState('');
  const handleSelectVolunteerPersonType = (e) => {
    setvolunteerPersonType(e.target.value);
  };

  // 담당자명
  const [managerName, setmanagerName] = useState('');
  const handleChangemanagerName = ({ target: { value } }) =>
    setmanagerName(value);
  // 이메일
  const [managerEmail, setmanagerEmail] = useState('');
  const handleChangemanagerEmail = ({ target: { value } }) =>
    setmanagerEmail(value);

  // 봉사명
  const [title, settitle] = useState('');
  const handleChangetitle = ({ target: { value } }) => settitle(value);
  // 내용
  const [content, setcontent] = useState('');
  const handleChangecontent = ({ target: { value } }) => setcontent(value);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const selectArea = [
    '전체',
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
  ];

  const selectActivitySection = ['전체', '온라인', '오프라인'];

  const selectVolunteerTarget = [
    '전체',
    '아동.청소년',
    '장애인',
    '노인',
    '쪽방촌',
    '다문화가정',
    '여성',
    '환경',
    '사회적기업',
    '고향봉사',
    '기타',
  ];

  const selectVolunteerPersonType = ['성인', '청소년'];

  //봉사분야
  const selectType = [
    '전체',
    '생활편의시설',
    '주거환경',
    '교육',
    '보건의료',
    '환경보호',
  ];
  const [volunteerBigType, setvolunteerBigType] = useState('전체'); // 실제로 사용하는 분야의 첫번째
  const [volunteerSmallType, setvolunteerSmallType] = useState([
    '검색할 봉사분야를 골라주세요',
  ]);
  const [volunteerSmallType1, setvolunteerSmallType1] = useState(''); //실제로 사용하는 분야의 두번째 값

  function handleTypeChange(event) {
    const selectedValue1 = event.target.value;
    setvolunteerBigType(selectedValue1);

    if (selectedValue1 === '전체') {
      setvolunteerSmallType(['검색할 봉사분야를 골라주세요']);
      setvolunteerSmallType1(['검색할 봉사분야를 골라주세요']);
    } else if (selectedValue1 === '생활편의시설') {
      setvolunteerSmallType([
        '전체',
        '활동보조',
        '아동보조',
        '청결지도',
        '급식지원',
        '식사반찬지원',
        '기타',
      ]);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '주거환경') {
      setvolunteerSmallType(['전체', '주거개선', '마을공동체활동', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '안전예방') {
      setvolunteerSmallType([
        '전체',
        '지역안전',
        '교통안전',
        '어린이 안전',
        '청소년 안전',
        '취약계층 안전',
        '안신고활동',
        '기타',
      ]);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '교육') {
      setvolunteerSmallType([
        '전체',
        '방과후 교육',
        '학습지도 교육',
        '특수교육',
        '평생교육',
        '전문교육',
        '진로체험교육',
        '기타',
      ]);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '보건의료') {
      setvolunteerSmallType(['전체', '간호간병', '의료지원', '헌혈', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '문화행사') {
      setvolunteerSmallType([
        '전체',
        '행사보조',
        '공연활동',
        '켐페인',
        '관광안내',
        '사진촬영',
        '기타',
      ]);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '환경보호') {
      setvolunteerSmallType(['전체', '환경정화', '환경감시', '기타']);
      setvolunteerSmallType1('전체');
    }
  }
  function handleTypeChange1(event) {
    const selectedValue = event.target.value;
    setvolunteerSmallType1(selectedValue);

    const updatedSelectTime = volunteerSmallType.filter(
      (item) => item !== selectedValue
    );
    updatedSelectTime.sort(); // 정렬 어떻게 할지
    updatedSelectTime.unshift(selectedValue);

    setvolunteerSmallType(updatedSelectTime);
  }

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    //back으로 정보 post함
    fetch('http://localhost:8004/volunteer/board/list', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        volunteerArea: volunteerArea,
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
          volunteerArea: volunteerArea,
        })
    );
  };

  return (
    <StyledAll>
      <section>
        <StyledTitle>봉사하기</StyledTitle>
        <StyledTitle2>개인</StyledTitle2>
      </section>
      <Styledsec2>
        <form onSubmit={handleSubmit}>
          <StyledDiv1>
            <StyledGroup1>
              <StyledGroup1_1>
                <StyledGroupTitle>봉사 지역</StyledGroupTitle>
                <select
                  onChange={handleSelectArea}
                  value={setvolunteerArea}
                  style={{
                    width: '145px',
                    height: '50px',
                  }}
                >
                  {selectArea.map((item) => (
                    <option value={item} key={item}>
                      <div>{item}</div>
                    </option>
                  ))}
                </select>
              </StyledGroup1_1>
              <StyledGroup1_2>
                <StyledGroupTitle>봉사장소</StyledGroupTitle>
                <FloatingLabel
                  label="사랑의 집"
                  className="mb-3"
                  value={volunteerPlace}
                  onChange={handleChangevolunteerPlace}
                >
                  <Form.Control type="text" placeholder="label" />
                </FloatingLabel>
              </StyledGroup1_2>
            </StyledGroup1>
            <StyledGroup2>
              <StyledGroup2_1>
                <StyledGroupTitle>봉사주소</StyledGroupTitle>
                <StyledGroup2_2>
                  <FloatingLabel
                    label="인천 연수구 "
                    value={volunteerAddress}
                    onChange={handleChangevolunteerAddress}
                    style={{
                      width: '392px',
                      height: '50px',
                      marginRight: '30px',
                    }}
                  >
                    <Form.Control type="textarea" placeholder="label" />
                  </FloatingLabel>
                  <FloatingLabel
                    label="위도"
                    value={latitude}
                    onChange={handleChangelatitude}
                    style={{
                      // width: '392px',
                      height: '50px',
                      marginRight: '30px',
                    }}
                  >
                    <Form.Control type="textarea" placeholder="label" />
                  </FloatingLabel>
                  <FloatingLabel
                    label="경도"
                    value={longitude}
                    onChange={handleChangelongitude}
                  >
                    <Form.Control type="textarea" placeholder="label" />
                  </FloatingLabel>
                </StyledGroup2_2>
              </StyledGroup2_1>
            </StyledGroup2>
            <StyledGroup3>
              {/* <StyledGroup3_1>
                <StyledGroupTitle>모집기간</StyledGroupTitle>
                <FloatingLabel
                  label="인천병원"
                  value={hostipalname}
                  onChange={handleChangehostipalname}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
                <FloatingLabel
                  label="인천병원"
                  value={hostipalname}
                  onChange={handleChangehostipalname}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup3_1> */}
              <StyledGroup3_2>
                <StyledGroupTitle>모집인원</StyledGroupTitle>
                <FloatingLabel
                  label="032-500-0243"
                  value={needVolunteerNumber}
                  onChange={handleChangeneedVolunteerNumber}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup3_2>
            </StyledGroup3>
            <StyledGroup4>
              {/* <StyledGroup4_1>
                <StyledGroupTitle>봉사기간</StyledGroupTitle>
                <FloatingLabel
                  label="인천광역시 부평구 구산동 47-3"
                  value={hostipaladdress}
                  onChange={handleChangehostipaladdress}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
                <FloatingLabel
                  label="인천광역시 부평구 구산동 47-3"
                  value={hostipaladdress}
                  onChange={handleChangehostipaladdress}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup4_1> */}
              <StyledGroup4_2>
                <StyledGroupTitle>봉사시간</StyledGroupTitle>
                <select
                  onChange={handleTimeChange}
                  value={volunteerStartTime}
                  style={{
                    width: '145px',
                    height: '50px',
                    marginRight: '50px',
                  }}
                >
                  {selectTime.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  onChange={handleTimeChange1}
                  value={volunteerEndTime}
                  style={{
                    width: '145px',
                    height: '50px',
                  }}
                >
                  {volunteerEndTime.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    width: '145px',
                    height: '50px',
                  }}
                >
                  첫번째,{volunteerStartTime},두번쨰 {volunteerEndTime1}
                </div>
              </StyledGroup4_2>
            </StyledGroup4>
            <StyledGroup5>
              <StyledGroup5_1>
                <StyledGroupTitle>활동요일</StyledGroupTitle>
                <FloatingLabel
                  label="월,화,금"
                  value={volunteerActivityWeek}
                  onChange={handleChangevolunteerActivityWeek}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup5_1>
              <StyledGroup5_2>
                <StyledGroupTitle>봉사종류</StyledGroupTitle>
                <FloatingLabel
                  label="시간"
                  value={volunteerType}
                  onChange={handleChangevolunteerType}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup5_2>
              <div>
                <StyledGroupTitle>자격요건</StyledGroupTitle>
                <select
                  onChange={handleTypeChange}
                  value={volunteerBigType}
                  style={{ border: 'none' }}
                >
                  {selectType.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  onChange={handleTypeChange1}
                  value={volunteerSmallType}
                  style={{ border: 'none' }}
                >
                  {volunteerSmallType.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div>
                  첫번째,{volunteerBigType},두번쨰 {volunteerSmallType1}
                </div>
              </div>
            </StyledGroup5>
            <StyledGroup6>
              <StyledGroup6_1>
                <StyledGroupTitle>활동구분</StyledGroupTitle>
                <select
                  onChange={handleSelectActivitySection}
                  value={activitySection}
                >
                  {selectActivitySection.map((item) => (
                    <option value={item} key={item}>
                      <div>{item}</div>
                    </option>
                  ))}
                </select>
              </StyledGroup6_1>
              <StyledGroup6_2>
                <StyledGroupTitle>봉사대상</StyledGroupTitle>
                <select
                  onChange={handleSelectVolunteerTarget}
                  value={volunteerTarget}
                >
                  {selectVolunteerTarget.map((item) => (
                    <option value={item} key={item}>
                      <div>{item}</div>
                    </option>
                  ))}
                </select>
              </StyledGroup6_2>
              <StyledGroup6_3>
                <StyledGroupTitle>봉사자유형</StyledGroupTitle>
                <select
                  onChange={handleSelectVolunteerPersonType}
                  value={volunteerPersonType}
                >
                  {selectVolunteerPersonType.map((item) => (
                    <option value={item} key={item}>
                      <div>{item}</div>
                    </option>
                  ))}
                </select>
              </StyledGroup6_3>
            </StyledGroup6>
            <StyledGroup7>
              <StyledGroup7_1>
                <StyledGroupTitle>담당자명</StyledGroupTitle>
                <FloatingLabel
                  label="김수임"
                  value={managerName}
                  onChange={handleChangemanagerName}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup7_1>
              <StyledGroup7_2>
                <StyledGroupTitle>이메일</StyledGroupTitle>
                <FloatingLabel
                  label="apple@naver.com"
                  value={managerEmail}
                  onChange={handleChangemanagerEmail}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup7_2>
            </StyledGroup7>
          </StyledDiv1>
          <StyledDiv2>
            <FloatingLabel
              label="봉사명"
              value={title}
              onChange={handleChangetitle}
            >
              <Form.Control type="textarea" />
            </FloatingLabel>
          </StyledDiv2>
          <StyledDiv3>
            <FloatingLabel
              label="내용"
              value={content}
              onChange={handleChangecontent}
            >
              <Form.Control as="textarea" style={{ height: '270px' }} />
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
  font-size: 48px;

  color: #333333;
  margin-top: 35px;
`;
const StyledTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;

  letter-spacing: 0.29em;

  color: #333333;

  margin-left: 10px;
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
const StyledGroup1 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup1_1 = styled.div`
  width: 200px;
`;
const StyledGroup1_2 = styled.div`
  margin-left: 50px;
  width: 500px;
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

const StyledGroup2 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup2_1 = styled.div`
  /* width: 350px; */
`;
const StyledGroup2_2 = styled.div`
  display: flex;
`;
const StyledGroup2_3 = styled.div`
  margin-left: 50px;
  width: 200px;
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
const StyledGroup3_2 = styled.div`
  margin-left: 50px;
  /* width: 500px; */
`;

const StyledGroup4 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup4_1 = styled.div`
  width: 800px;
`;
const StyledGroup4_2 = styled.div`
  margin-left: 50px;
  /* width: 500px; */
`;

const StyledGroup5 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup5_1 = styled.div`
  width: 300px;
`;
const StyledGroup5_2 = styled.div`
  margin-left: 50px;
  width: 500px;
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
const StyledSelectBox = styled.div`
  /* width: 200px;
  height: 65px;
  background: #ffffff;
  border: 2px solid #e6e9ec;
  border-radius: 8px; */
`;
const StyledGroup6_2 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup6_3 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup6_4 = styled.div`
  margin-left: 50px;
  width: 400px;
`;

const StyledGroup7 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup7_1 = styled.div`
  width: 250px;
`;
const StyledGroup7_2 = styled.div`
  margin-left: 50px;
  width: 250px;
`;
const StyledGroup7_3 = styled.div`
  margin-left: 50px;
  width: 400px;
`;

const StyledGroup8 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;

const StyledGroup8_1 = styled.div`
  width: 200px;
`;
const StyledGroup8_2 = styled.div`
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
export default S_PostGA;
