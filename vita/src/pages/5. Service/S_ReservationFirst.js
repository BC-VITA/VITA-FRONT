import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { Nav } from 'react-bootstrap';

function S_ReservationFirst() {
  const userId = sessionStorage.getItem('userId');
  //전페이지에서 유저가 선텍한 봉사목록 가져오기
  const location = useLocation();
  const { element } = location.state;

  //유저가 날짜 선택하는 것
  const [date, setDate] = useState('');
  const [maxSelectableDate, setMaxSelectableDate] = useState(null);
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };
  const SelectableDate = new Date(); // 현재 날짜

  // 유저가 선택 가능한 최대 날짜
  useEffect(() => {
    // element.volunteerSeekEndDate 값을 가져와 maxSelectableDate 설정
    if (element) {
      const endDate = new Date(element.volunteerSeekEndDate);
      setMaxSelectableDate(endDate);
    }
  }, [element]);

  //핸폰이랑 이름
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8004/volunteer/reservation?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error('API 요청이 실패했습니다.');
        }
        const data = await response.json();

        // 응답 데이터 처리
        const { phone, email } = data;
        setUserName(phone);
        setEmail(email);
      } catch (error) {
        console.error('API 요청 오류:', error);
      }
    };

    fetchData();
  }, []);

  //다음 페이지
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate('/S_ReservationSecond', {
      state: {
        element: element,
        date: date,
        userName: userName,
        email: email,
      },
    });
  };

  const handlebeforeClick = () => {
    navigate('/S_Ganeral');
  };

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>봉사하자</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv21>
              <Nav.Link href="/S_Main">
                <StyledSubDiv22g>자원봉사란</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/S_Ganeral">
                <StyledSubDiv22g>개인봉사</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/S_Group">
                <StyledSubDiv22g>기업 단체 봉사</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/S_Other">
                <StyledSubDiv22g>타기관 봉사정보</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21>
              <Nav.Link href="/S_WatchList">
                <StyledSubDiv22g>관심목록</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>봉사 신청하기</StyledTitle>
        </StyledTop>
        <StyledDiv>{element.title}</StyledDiv>
        <StyledDiv2>
          <StyledLabel htmlFor="date">예약날짜 : </StyledLabel>
          <DatePicker
            id="date"
            selected={date}
            onChange={handleDateChange}
            minDate={SelectableDate}
            maxDate={maxSelectableDate}
          />
        </StyledDiv2>
        <StyledDiv3>
          선택일자:{' '}
          {date &&
            new Date(date.getTime() + 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0]}
        </StyledDiv3>
        <StyledDiv4>
          <StyledDiv4Title>신청자 정보</StyledDiv4Title>
          <StyledDiv4Content>
            연락처 번호변경은 오른쪽 연락처 수정 버튼을 클릭한 후 ‘마이페이지
            나의 정보’에서 수정하시기 바랍니다.
          </StyledDiv4Content>
          <StyledBox>
            <StyledBox2>휴대폰 번호: {userName} </StyledBox2>
            <StyledBox2>e-Mail: {email}</StyledBox2>
          </StyledBox>
          <StyledBox1>
            <StyledBox3>
              회원님이 등록하신 정보가 표시 됩니다. 등록된 정보가 정확한지
              확인해주세요.
            </StyledBox3>
            <StyledBox3_1>
              연락처가 미 등록된 경우 봉사활동 정보를 받으실 수 없습니다.
            </StyledBox3_1>
            <StyledBox3>
              휴대폰전화 및 이메일로 봉사활동 정보를 제공 받으시겠습니까?
            </StyledBox3>
          </StyledBox1>
        </StyledDiv4>
        <StyledButtonBox>
          <StyledButton onClick={handlebeforeClick}>
            이&nbsp;&nbsp;&nbsp;&nbsp;전
          </StyledButton>
          <StyledButton onClick={handleNextClick}>
            다&nbsp;&nbsp;&nbsp;&nbsp;음
          </StyledButton>
        </StyledButtonBox>
      </StyledSubcomment>
    </StyledAll>
  );
}

const StyledDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  padding-left: 20px;
  padding-top: 15px;

  width: 870px;
  height: 55px;

  background: #d6d6d6;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  color: #333333;
`;
const StyledDiv2 = styled.div`
  display: flex;
`;
const StyledDiv3 = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  width: 870px;

  text-align: center;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 80px;
  /* identical to box height, or 333% */

  text-align: center;

  color: #000000;
`;
const StyledDiv4 = styled.div`
  /* text-align: center; */
  /* font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 80px;

  color: #000000; */
`;
const StyledDiv4Title = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  color: #333333;

  margin-top: 30px;
`;
const StyledDiv4Content = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  /* Gray */

  color: #757575;

  margin-top: 10px;
`;

const StyledBox = styled.div`
  //display: flex;
  width: 870px;
  background: #ffffff;

  border: 1px solid #a3a3a3;
  margin-top: 10px;
`;

const StyledBox2 = styled.div`
  display: flex;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  /* identical to box height */

  /* Gray */
  margin-left: 40px;
  margin-right: 40px;
  letter-spacing: 2px;
  color: #757575;
`;

const StyledBox1 = styled.div`
  width: 870px;
  background: #ffffff;

  border: 1px solid #a3a3a3;
  padding: 20px;
  margin-top: 10px;
`;
const StyledBox3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height */

  margin-left: 20px;

  color: #757575;
`;
const StyledBox3_1 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  /* identical to box height */
  margin-left: 20px;
  color: #f36200;
`;

const StyledLabel = styled.div`
  margin-left: 15px;
  margin-bottom: 25px;

  width: 120px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #000000;
`;

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
  height: 302px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv21 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv21p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 60px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv22 = styled.div`
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
const StyledSubDiv22g = styled.div`
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
  width: 246px;
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
  width: 148px;
  height: 50px;

  background: #ffd7d7;
  border-radius: 5px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  /* identical to box height, or 125% */

  text-align: center;

  color: #333333;
`;

const StyledButtonBox = styled.div`
  width: 870px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
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

const StyledComment = styled.div`
  /* width: 1100px; */
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-right: 60px;
`;
export default S_ReservationFirst;
