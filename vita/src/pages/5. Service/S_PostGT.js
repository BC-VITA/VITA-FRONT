import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

function S_PostGT() {
  const navigate = useNavigate();
  const location = useLocation();
  const { volunteerArea1, volunteerBigType1, volunteerSmallType11, activitySection1, volunteerTarget1, volunteerCategory } = location?.state || {};

  // 지역
  const selectArea = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
  const [volunteerArea, setvolunteerArea] = useState(volunteerArea1 || '');

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
  const [wantstartDate, setwantstartDate] = useState('');
  const [wantendDate, setwantendDate] = useState('');
  const handleWantStartDateChange = ({ target: { value } }) =>
    setwantstartDate(value);
  const handleWantEndDateChange = ({ target: { value } }) =>
    setwantendDate(value);

  // 모집인원
  const [needVolunteerNumber, setneedVolunteerNumber] = useState('');
  const handleChangeneedVolunteerNumber = ({ target: { value } }) =>
    setneedVolunteerNumber(value);

  // 봉사기간
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const handleStartDateChange = ({ target: { value } }) => setstartDate(value);
  const handleEndDateChange = ({ target: { value } }) => setendDate(value);

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

  // 활동구분
  const selectActivitySection = ['전체', '온라인', '오프라인'];
  const [activitySection, setactivitySection] = useState(activitySection1 || '');

  const handleSelectActivitySection = (e) => {
    setactivitySection(e.target.value);
  };
  // 봉사대상
  const selectVolunteerTarget = ['전체', '아동.청소년', '장애인', '노인', '쪽방촌', '다문화가정', '여성', '환경', '사회적기업', '고향봉사', '기타'];
  const [volunteerTarget, setvolunteerTarget] = useState(volunteerTarget1 || '');

  const handleSelectVolunteerTarget = (e) => {
    setvolunteerTarget(e.target.value);
  };
  // 봉사자유형
  const selectVolunteerPersonType = ['전체', '성인', '청소년'];
  const [volunteerPersonType, setvolunteerPersonType] = useState(volunteerCategory || '');

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
  //봉사분야
  const selectType = ['전체', '생활편의시설', '주거환경', '교육', '보건의료', '환경보호'];
  const [volunteerBigType, setvolunteerBigType] = useState(volunteerBigType1 || '전체');// 실제로 사용하는 분야의 첫번째
  const [volunteerSmallType, setvolunteerSmallType] = useState([volunteerSmallType11]||'검색할 봉사분야를 골라주세요');
  const [volunteerSmallType1, setvolunteerSmallType1] = useState(''); //실제로 사용하는 분야의 두번째 값


  function handleTypeChange(event) {
    const selectedValue1 = event.target.value;
    setvolunteerBigType(selectedValue1);

    if (selectedValue1 === '전체') {
      setvolunteerSmallType(['검색할 봉사분야를 골라주세요']);
      setvolunteerSmallType1(['검색할 봉사분야를 골라주세요']);
    } else if (selectedValue1 === '생활편의시설') {
      setvolunteerSmallType(['전체', '활동보조', '아동보조', '청결지도', '급식지원', '식사반찬지원', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '주거환경') {
      setvolunteerSmallType(['전체', '주거개선', '마을공동체활동', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '안전예방') {
      setvolunteerSmallType(['전체', '지역안전', '교통안전', '어린이 안전', '청소년 안전', '취약계층 안전', '안신고활동', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '교육') {
      setvolunteerSmallType(['전체', '방과후 교육', '학습지도 교육', '특수교육', '평생교육', '전문교육', '진로체험교육', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '보건의료') {
      setvolunteerSmallType(['전체', '간호간병', '의료지원', '헌혈', '기타']);
      setvolunteerSmallType1('전체');
    } else if (selectedValue1 === '문화행사') {
      setvolunteerSmallType(['전체', '행사보조', '공연활동', '켐페인', '관광안내', '사진촬영', '기타']);
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
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    fetch('http://localhost:8004/volunteer/board', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        volunteerArea: volunteerArea,
        volunteerPlace: volunteerPlace,
        volunteerAddress: volunteerAddress,
        latitude: latitude,
        longitude: longitude,
        volunteerSeekStartDate: wantstartDate,
        volunteerSeekEndDate: wantendDate,
        needVolunteerNumber: needVolunteerNumber,
        volunteerStartDate: startDate,
        volunteerEndDate: endDate,
        volunteerStartTime: volunteerStartTime,
        volunteerEndTime: volunteerEndTime1,
        volunteerActivityWeek: volunteerActivityWeek,
        volunteerType: 'time',
        activitySection: activitySection,
        volunteerTarget: volunteerTarget,
        volunteerPersonType: volunteerPersonType,
        managerName: managerName,
        managerEmail: managerEmail,
        title: title,
        content: content,
        volunteerField: volunteerBigType
      }),
    })
      .then((res) => {
        res.json();
        if (res.ok) {
          navigate('/');
        }
      })
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
              <StyledGroup11>
                <StyledGroupTitle>봉사 지역</StyledGroupTitle>
                <select
                  onChange={handleSelectArea}
                  value={volunteerArea}
                  style={{ width: '145px', height: '50px' }}>
                  {selectArea.map((item) => (
                    <option value={item} key={item}>
                      <div>{item}</div>
                    </option>
                  ))}
                </select>
              </StyledGroup11>
              <StyledGroup12>
                <StyledGroupTitle>봉사장소</StyledGroupTitle>
                <FloatingLabel
                  label="사랑의 집"
                  className="mb-3"
                  value={volunteerPlace}
                  onChange={handleChangevolunteerPlace}
                >
                  <Form.Control type="text" placeholder="label" />
                </FloatingLabel>
              </StyledGroup12>
            </StyledGroup1>
            <StyledGroup2>
              <StyledGroup21>
                <StyledGroupTitle>봉사주소</StyledGroupTitle>
                <StyledGroup22>
                  <FloatingLabel
                    label="인천 연수구 "
                    value={volunteerAddress}
                    onChange={handleChangevolunteerAddress}
                    style={{ width: '392px', height: '50px', marginRight: '30px' }}>
                    <Form.Control type="textarea" placeholder="label" />
                  </FloatingLabel>
                  <FloatingLabel
                    label="위도"
                    value={latitude}
                    onChange={handleChangelatitude}
                    style={{ height: '50px', marginRight: '30px' }}>
                    <Form.Control type="textarea" placeholder="label" />
                  </FloatingLabel>
                  <FloatingLabel
                    label="경도"
                    value={longitude}
                    onChange={handleChangelongitude}
                  >
                    <Form.Control type="textarea" placeholder="label" />
                  </FloatingLabel>
                </StyledGroup22>
              </StyledGroup21>
            </StyledGroup2>
            <StyledGroup3>
              <div>
                <StyledGroupTitle>모집기간</StyledGroupTitle>
                <input
                  type="Date"
                  value={wantstartDate}
                  onChange={handleWantStartDateChange}
                />
              </div>
              <StyledGroupTitle>-</StyledGroupTitle>
              <div>
                <StyledGroupTitle>마감기간</StyledGroupTitle>
                <input
                  type="Date"
                  value={wantendDate}
                  onChange={handleWantEndDateChange}
                />
              </div>
              <StyledGroup32>
                <StyledGroupTitle>모집인원</StyledGroupTitle>
                <FloatingLabel
                  label="모집인원"
                  value={needVolunteerNumber}
                  onChange={handleChangeneedVolunteerNumber}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup32>
            </StyledGroup3>
            <StyledGroup4>
              <div>
                <StyledGroupTitle>봉사기간</StyledGroupTitle>
                <input
                  type="Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>
              <StyledGroupTitle>-</StyledGroupTitle>
              <div>
                <StyledGroupTitle>마감기간</StyledGroupTitle>
                <input
                  type="Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                />
              </div>
              <StyledGroup42>
                <StyledGroupTitle>봉사시간</StyledGroupTitle>
                <select
                  onChange={handleTimeChange}
                  value={volunteerStartTime}
                  style={{ width: '145px', height: '50px', marginRight: '50px' }}>
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
              </StyledGroup42>
            </StyledGroup4>
            <StyledGroup5>
              <StyledGroup51>
                <StyledGroupTitle>활동요일</StyledGroupTitle>
                <FloatingLabel
                  label="월,화,금"
                  value={volunteerActivityWeek}
                  onChange={handleChangevolunteerActivityWeek}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup51>
              <StyledGroup52>
                <StyledGroupTitle>봉사종류</StyledGroupTitle>
                <FloatingLabel
                  label="시간"
                  value={volunteerType}
                  onChange={handleChangevolunteerType}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup52>
              <div>
                <StyledGroupTitle>봉사분야</StyledGroupTitle>
                <select onChange={handleTypeChange} value={volunteerBigType}>
                  {selectType.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select onChange={handleTypeChange1} value={volunteerSmallType}>
                  {volunteerSmallType.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </StyledGroup5>
            <StyledGroup6>
              <StyledGroup61>
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
              </StyledGroup61>
              <StyledGroup62>
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
              </StyledGroup62>
              <StyledGroup63>
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
              </StyledGroup63>
            </StyledGroup6>
            <StyledGroup7>
              <StyledGroup71>
                <StyledGroupTitle>담당자명</StyledGroupTitle>
                <FloatingLabel
                  label="김수임"
                  value={managerName}
                  onChange={handleChangemanagerName}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup71>
              <StyledGroup72>
                <StyledGroupTitle>이메일</StyledGroupTitle>
                <FloatingLabel
                  label="apple@naver.com"
                  value={managerEmail}
                  onChange={handleChangemanagerEmail}
                >
                  <Form.Control type="textarea" placeholder="label" />
                </FloatingLabel>
              </StyledGroup72>
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
          >
            게시하기
          </StyledButton1>
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
const StyledGroup11 = styled.div`
  width: 200px;
`;
const StyledGroup12 = styled.div`
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
const StyledGroup21 = styled.div`
  /* width: 350px; */
`;
const StyledGroup22 = styled.div`
  display: flex;
`;
const StyledGroup3 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup32 = styled.div`
  margin-left: 50px;
  /* width: 500px; */
`;
const StyledGroup4 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup42 = styled.div`
  margin-left: 50px;
  /* width: 500px; */
`;
const StyledGroup5 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 20px;
`;
const StyledGroup51 = styled.div`
  width: 300px;
`;
const StyledGroup52 = styled.div`
  margin-left: 50px;
  width: 500px;
`;
const StyledGroup6 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup61 = styled.div`
  width: 200px;
`;
const StyledGroup62 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup63 = styled.div`
  margin-left: 50px;
  width: 200px;
`;
const StyledGroup7 = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 40px;
  margin-left: 20px;
`;
const StyledGroup71 = styled.div`
  width: 250px;
`;
const StyledGroup72 = styled.div`
  margin-left: 50px;
  width: 250px;
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
export default S_PostGT;
