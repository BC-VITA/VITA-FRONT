import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function D_SelectDonation() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = sessionStorage.getItem('userId');
  const board = location.state;
  const [point, setPoint] = useState(null);

  const [donationPoint, setDonationPoint] = useState('');
  const [remainingPoint, setRemainingPoint] = useState('');

  const handleDonationPointChange = (event) => {
    const inputPoint = event.target.value;
    const newRemainingPoint = point - inputPoint;

    if (newRemainingPoint >= 0) {
      setDonationPoint(inputPoint);
      setRemainingPoint(newRemainingPoint);
    } else {
      setDonationPoint('');
      setRemainingPoint('');
    }
  };

  useEffect(() => {
    const url = `http://localhost:8004/donate/user-point?userId=${userId}`;
    fetch(url, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setPoint(res);
      });
  }, []);

  const [main, setMain] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    fetch('http://localhost:8004/donate/donation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userId: userId,
        donateId: board.boardId,
        isAnonymous: false,
        usePoint: donationPoint,
        finalPoint: remainingPoint,
      }),
    })
      .then((res) => {
        res.json();
        if (res.ok) {
          setMain(true);
        }
      })

      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.ok) {
      //     setMain(true);
      //   }
      // })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleClose = () => setShow(false);

  const handleReservation = (centerName) => {
    navigate('/', { state: { centerName } });
  };

  const handleReservation2 = (centerName) => {
    navigate('/MyPage_D', { state: { centerName } });
  };

  const formatter = new Intl.NumberFormat();

  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv21>
              <Nav.Link href="/D_Main">
                <StyledSubDiv22g>기부란</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
            <StyledSubDiv21p>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv22>기부하기</StyledSubDiv22>
              </Nav.Link>
            </StyledSubDiv21p>
            <StyledSubDiv21>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv22g>기부 영수증</StyledSubDiv22g>
              </Nav.Link>
            </StyledSubDiv21>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <div>
          <StyledTitle>기부란?</StyledTitle>
          <StyledTitle2>{board.title}</StyledTitle2>
        </div>
        <StyledDiv>
          <StyledDiv2>
            <StyledBoxTitle>나의 포인트</StyledBoxTitle>
            {/*<FloatingLabel label={point} name="id">*/}
            <FloatingLabel label={formatter.format(point)} name="id">
              <Form.Control type="id" placeholder="label" disabled />
            </FloatingLabel>

            <StyledButton type="button" onClick={handleSubmit}>
              기부하기
            </StyledButton>

            <Modal size="md" show={main} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>안 내</Modal.Title>
              </Modal.Header>
              <Modal.Body>기부가 되었습니다.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleReservation}>
                  확인
                </Button>
                <Button variant="primary" onClick={handleReservation2}>
                  기부내역 보러가기
                </Button>
              </Modal.Footer>
            </Modal>
          </StyledDiv2>
          <StyledDiv3>
            <StyledBoxTitle>기부할 포인트 </StyledBoxTitle>
            <FloatingLabel label="포인트를 입력해주세요" name="id">
              <Form.Control
                  type="text"
                  placeholder="label"
                  value={donationPoint.toLocaleString()}
                  onChange={handleDonationPointChange}
              />

            </FloatingLabel>
          </StyledDiv3>
          <StyledDiv3>
            <StyledBoxTitle>기부하고 남을 포인트</StyledBoxTitle>
            <FloatingLabel label="남은 포인트" name="id">
              <Form.Control
                  type="text"
                  placeholder="label"
                  value={remainingPoint.toLocaleString()}
                  disabled
              />
            </FloatingLabel>
          </StyledDiv3>
        </StyledDiv>
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
  margin-top: 25px;
  margin-left: 180px;
`;
const StyledSubDiv1 = styled.div`
  width: 220px;
  height: 60px;
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
  height: 182px;
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
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;
  color: #333333;
`;
const StyledTitle2 = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-top: 15px;
  margin-left: 5px;
  color: #333333;
`;
const StyledDiv = styled.div`
  width: 880px;
  height: 300px;
  margin-top: 15px;
  padding-left: 30px;
  padding-top: 30px;
  background: #ffe9e9;
`;
const StyledDiv2 = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const StyledDiv3 = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const StyledBoxTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: #333333;
  margin-top: 10px;
  margin-right: 10px;
`;
const StyledButton = styled.div`
  width: 155px;
  height: 42px;
  background: #ff9f9f;
  border-radius: 9px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 42px;
  color: #ffffff;
  text-align: center;
  margin-left: 300px;
`;
export default D_SelectDonation;
