import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function BD_ReservationThird() {
  const userId = sessionStorage.getItem('userId');
  const navigate = useNavigate();
  const { state: { selectedOptions, formattedDate, centerName } = {} } =
      useLocation();
  const [times, setTimes] = useState('');

  const handleReservation = (centerName) => {
    navigate('/', { state: { centerName } });
  };
  const handleReservation2 = (centerName) => {
    navigate('/MyPage_BD', { state: { centerName } });
  };

  const [isBloodType, setIsBloodType] = useState('');
  useEffect(() => {
    const times = Object.keys(selectedOptions);

    const bloodTypeString = Object.values(selectedOptions)
        .map((times) => Object.values(times).join(''))
        .join('');
    const bloodTypesString = bloodTypeString.toString();
    setIsBloodType(bloodTypesString);

    const timeString = times.join(',');
    setTimes(timeString);
  }, [selectedOptions]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    const url1 = `http://localhost:8004/blood/reservation?userId=${userId}`;
    fetch(url1, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        isBloodType: isBloodType,
        bloodHouseName: centerName,
        date: formattedDate,
        time: times,
      }),
    }).then((res) => {
      res.json();
      if (res.ok) {
        setMain(true);
      }
    });
  };

  const [main, setMain] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
      <StyledAll>
        <StyledSub>
          <Nav defaultActiveKey="/" className="flex-column">
            <StyledSubDiv1>헌혈하자</StyledSubDiv1>
            <StyledSubDiv2>
              <StyledSubDiv2_1>
                <Nav.Link href="/BD_Main">
                  <StyledSubDiv2_2g>헌혈이란</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1>
                <Nav.Link href="/BD_House">
                  <StyledSubDiv2_2g>헌혈의 집 찾기</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1>
                <Nav.Link href="/BD_Bus">
                  <StyledSubDiv2_2g>헌혈 버스 찾기</StyledSubDiv2_2g>
                </Nav.Link>
              </StyledSubDiv2_1>
              <StyledSubDiv2_1p>
                <Nav.Link href="/BD_Reservation">
                  <StyledSubDiv2_2>헌혈 예약</StyledSubDiv2_2>
                </Nav.Link>
              </StyledSubDiv2_1p>
            </StyledSubDiv2>
          </Nav>
        </StyledSub>
        <StyledSubcomment>
          <StyledTop>
            <StyledTitle>예약하기</StyledTitle>
          </StyledTop>
          <StyledCurrent>
            <StyledBar />
            <StyledCircle>
              <StyledCircleTxt>유의사항</StyledCircleTxt>
            </StyledCircle>
            <StyledBar />
            <StyledCircle>
              <StyledCircleTxt>센터선택</StyledCircleTxt>
            </StyledCircle>

            <StyledBar />
            <StyledCircle>
              <StyledCircleTxt>예약하기</StyledCircleTxt>
            </StyledCircle>

            <StyledBar />
            <StyledCircle>
              <StyledCircleTxt>예약완료</StyledCircleTxt>
            </StyledCircle>
            <StyledBar />
          </StyledCurrent>

          <StyledDiv>헌혈 예약이 완료되었습니다.</StyledDiv>
          <StyledBox>
            {Object.keys(selectedOptions).map((time) => (
                <div key={time}>
                  <StyledDiv1>
                    <StyledDiv2>일시</StyledDiv2>
                    <StyledDiv3>{formattedDate}</StyledDiv3>
                  </StyledDiv1>
                  <StyledDiv1>
                    <StyledDiv2>시간</StyledDiv2>
                    <StyledDiv3>{time}</StyledDiv3>
                  </StyledDiv1>
                  <StyledDiv1>
                    <StyledDiv2>헌혈의 집</StyledDiv2>
                    <StyledDiv3>{centerName}</StyledDiv3>
                  </StyledDiv1>
                  <StyledDiv1>
                    <StyledDiv2>헌혈 종류</StyledDiv2>
                    <StyledDiv3>{selectedOptions[time]}</StyledDiv3>
                  </StyledDiv1>
                </div>
            ))}
          </StyledBox>
          <Styledbutton type="button" onClick={handleSubmit}>
            예약완료하기
          </Styledbutton>

          {/* <Styledbutton type="button" onClick={() => setMain(true)}>
          확&nbsp;&nbsp;&nbsp;&nbsp;인
        </Styledbutton> */}

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

          {/* <Modal
          size="md"
          show={main}
          onHide={() => setAccept(false)}
          onClick={handleSubmit}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              확인
            </Button>
            <Button variant="primary" onClick={handleClose}>
              마이페이지로 가기
            </Button>
          </Modal.Footer>
        </Modal> */}
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
  height: 242px;
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
const StyledBarg = styled.div`
  width: 115px;
  height: 0;
  border: 3.5px solid #828282;
  margin-top: 35px;
`;
// const StyledBarM = styled.div`
//   width: 190px;
//   height: 0;
//   border: 3.5px solid #ff6565;
//   margin-top: 35px;
// `;
const StyledBarMg = styled.div`
  width: 115px;
  height: 0;
  border: 3.5px solid #828282;
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
const StyledCircleg = styled.div`
  box-sizing: border-box;

  width: 75px;
  height: 75px;

  background: #ffffff;
  border: 5px solid #828282;
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
const StyledCircleTxtg = styled.div`
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

  color: #828282;
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
  border: none;
`;
export default BD_ReservationThird;