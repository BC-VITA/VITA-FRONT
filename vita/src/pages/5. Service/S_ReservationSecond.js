import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function S_ReservationSecond() {
  const userId = sessionStorage.getItem('userId');
  const navigate = useNavigate();
  const location = useLocation();
  const { date, userName, phone, element } = location.state;

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleClick = async () => {
    const formattedDate = formatDate(new Date(date));

    try {
      const response = await fetch(
        'http://localhost:8004/volunteer/reservation',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            volunteerDate: formattedDate,
            userId: userId,
            infomationAgree: 'true',
            volunteerStatus: '대기중',
            volunteerPlace: element.volunteerPlace,
            volunteerKind: element.volunteerType,
            volunteerBoardId: element.volunteerId,
          }),
        }
      ).then((res) => {
        res.json();
        if (res.ok) {
          setMain(true);
        }
      });

      if (response.ok) {
        console.log('요청이 성공했습니다.');
      } else {
        console.log('요청이 실패했습니다.');
      }
    } catch (error) {
      console.error('요청 중 오류가 발생했습니다.', error);
    }
  };
  const handleReservation = (centerName) => {
    navigate('/', { state: { centerName } });
  };
  const handleReservation2 = (centerName) => {
    navigate('/MyPage_S', { state: { centerName } });
  };
  const [main, setMain] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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
        <StyledDiv>봉사 예약이 완료되었습니다.</StyledDiv>
        <StyledBox>
          <StyledDiv1>
            <StyledDiv2>상태</StyledDiv2>
            <StyledDiv3>대기중</StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>봉사일자</StyledDiv2>
            <StyledDiv3>{date && formatDate(new Date(date))}</StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>봉사시간</StyledDiv2>
            <StyledDiv3>
              {element.volunteerStartTime}~{element.volunteerEndTime}
            </StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>주소</StyledDiv2>
            <StyledDiv3>{element.volunteerAddress}</StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>봉사장소</StyledDiv2>
            <StyledDiv3>{element.volunteerPlace}</StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>봉사유형</StyledDiv2>
            <StyledDiv3>
              {element.volunteerType === 'time'
                ? '시간'
                : element.volunteerType}
            </StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>담당자 명</StyledDiv2>
            <StyledDiv3>{element.managerName}</StyledDiv3>
          </StyledDiv1>
          <StyledDiv1>
            <StyledDiv2>담당자 이메일</StyledDiv2>
            <StyledDiv3>{element.managerEmail}</StyledDiv3>
          </StyledDiv1>
        </StyledBox>
        <Styledbutton type="button" onClick={handleClick}>
          확&nbsp;&nbsp;&nbsp;&nbsp;인
        </Styledbutton>

        <Modal
          size="md"
          show={main}
          onHide={() => setMain(false)}
          onClick={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>안 내</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ※ 헌혈 시 신분증
            <br />
            꼭 지참해주세요
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              // onClick={handleClose}
              onClick={handleReservation}
            >
              다음에 보기
            </Button>
            <Button
              variant="primary"
              // onClick={handleClose}
              onClick={handleReservation2}
            >
              예약내역 보기
            </Button>
          </Modal.Footer>
        </Modal>
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
  width: 230px;
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

const StyledCurrent = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StyledBar = styled.div`
  width: 115px;
  height: 0;
  border: 3.5px solid #ff6565;
  margin-top: 35px;
`;

const StyledCircle = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;

  background: #ffffff;
  border: 5px solid #ff6565;
  border-radius: 50%;
`;
const StyledCircleTxt = styled.div`
  width: 42.49px;
  height: 51px;
  margin-left: 13px;
  margin-top: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 19.5px;
  line-height: 25px;
  /* or 125% */

  letter-spacing: 0.1em;

  color: #333333;
`;

const StyledBox = styled.div``;
const StyledDiv = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 55px;

  color: #2d3c89;
`;
const StyledDiv1 = styled.div`
  display: flex;
`;
const StyledDiv2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 70px;
  text-align: center;

  color: #333333;

  width: 180px;
  height: 70px;
  background: #eff3ff;
  border: 2px solid #626b8b;
`;
const StyledDiv3 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 70px;
  text-align: center;

  color: #101a79;

  width: 37ch;
  height: 70px;
  background: #ffffff;
  border: 2px solid #626b8b;
`;

const Styledbutton = styled.div`
  margin-top: 50px;
  margin-left: 51ch;
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
export default S_ReservationSecond;
