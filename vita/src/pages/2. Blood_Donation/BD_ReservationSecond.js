import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

function BD_ReservationSecond() {
  const navigate = useNavigate();
  const location = useLocation();

  const centerName = location.state?.centerName;

  const [date, setDate] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [inputData, setInputData] = useState([
    {
      date: '', //날짜
      time: '', //시간
      wholeBlood: '', //전혈
      plasma: '', //혈장
      platelet: '', //혈소판
      centerName: '', //센터명
    },
    {},
  ]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleReservation = () => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const centerName = location.state?.centerName;
    navigate('/BD_ReservationThird', {
      state: { selectedOptions, formattedDate, centerName },
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8004/blood/house/registerReservation/list`, {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
      });
  }, []);

  const filteredData = inputData.filter(
    (data) => data.centerName === centerName
  );

  const filterInputDataByDate = (input) => {
    const inputDate = new Date(input.date);
    const selectedDate = new Date(date);

    if (isNaN(inputDate.getTime()) || isNaN(selectedDate.getTime())) {
      return false; // 유효하지 않은 날짜인 경우 필터링하지 않음
    }

    const inputDateISO = inputDate.toISOString();
    const selectedDateISO = selectedDate.toISOString();

    return inputDateISO === selectedDateISO;
  };

  const filteredInputData = filteredData.filter(filterInputDataByDate);

  const renderRadioButtons = (time) => {
    const data = filteredInputData.find((data) => data.time === time);
    return (
      <>
        {data?.wholeBlood === 'Y' && (
          <>
            <input
              type="radio"
              name="bloodType"
              value="전혈"
              checked={selectedOptions[time] === '전혈'}
              onChange={(event) => handleOptionChange(event, time)}
            />
            <label htmlFor={time}>전혈</label>
          </>
        )}
        {data?.plasma === 'Y' && (
          <>
            <input
              type="radio"
              name="bloodType"
              value="혈장"
              checked={selectedOptions[time] === '혈장'}
              onChange={(event) => handleOptionChange(event, time)}
            />
            <label htmlFor={time}>혈장</label>
          </>
        )}
        {data?.platelet === 'Y' && (
          <>
            <input
              type="radio"
              name="bloodType"
              value="혈소판"
              checked={selectedOptions[time] === '혈소판'}
              onChange={(event) => handleOptionChange(event, time)}
            />
            <label htmlFor={time}>혈소판</label>
          </>
        )}
      </>
    );
  };
  const handleOptionChange = (event, time) => {
    setSelectedOptions({ [time]: event.target.value });
  };

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
          <StyledCircleg>
            <StyledCircleTxtg>예약완료</StyledCircleTxtg>
          </StyledCircleg>
          <StyledBarg />
        </StyledCurrent>

        <StyledDiv>헌혈 예약 - {centerName}</StyledDiv>
        <StyledDiv1>
          03. 예약 시간 및 예약가능 헌혈 종류를 선택해주세요.
        </StyledDiv1>
        <div>
          <StyledDiv2>
            <StyledLabel htmlFor="date">예약날짜 : </StyledLabel>
            <DatePicker id="date" selected={date} onChange={handleDateChange} />
          </StyledDiv2>
          <StyledDivTable>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>시간</th>
                  <th>09:00</th>
                  <th>09:30</th>
                  <th>10:00</th>
                  <th>10:30</th>
                  <th>11:00</th>
                  <th>11:30</th>
                  <th>12:00</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StyledTd>
                    <br />
                    예약 가능
                    <br />
                    헌혈종류
                  </StyledTd>
                  <td>{renderRadioButtons('09:00')}</td>
                  <td>{renderRadioButtons('09:30')}</td>
                  <td>{renderRadioButtons('10:00')}</td>
                  <td>{renderRadioButtons('10:30')}</td>
                  <td>{renderRadioButtons('11:00')}</td>
                  <td>{renderRadioButtons('11:30')}</td>
                  <td>{renderRadioButtons('12:00')}</td>
                </tr>
              </tbody>
            </Table>
          </StyledDivTable>
          <StyledDivTable>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>시간</th>
                  <th>12:30</th>
                  <th>13:00</th>
                  <th>13:30</th>
                  <th>14:00</th>
                  <th>14:30</th>
                  <th>15:00</th>
                  <th>15:30</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StyledTd>
                    <br></br>예약 가능<br></br>헌혈종류
                  </StyledTd>
                  <td>{renderRadioButtons('12:30')}</td>
                  <td>{renderRadioButtons('13:00')}</td>
                  <td>{renderRadioButtons('13:30')}</td>
                  <td>{renderRadioButtons('14:00')}</td>
                  <td>{renderRadioButtons('14:30')}</td>
                  <td>{renderRadioButtons('15:00')}</td>
                  <td>{renderRadioButtons('15:30')}</td>
                </tr>
              </tbody>
            </Table>
          </StyledDivTable>
          <StyledDivTable>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>시간</th>
                  <th>16:00</th>
                  <th>16:30</th>
                  <th>17:00</th>
                  <th>17:30</th>
                  <th>18:00</th>
                  <th>18:30</th>
                  <th>19:00</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StyledTd>
                    <br></br>예약 가능<br></br>헌혈종류
                  </StyledTd>
                  <td>{renderRadioButtons('16:00')}</td>
                  <td>{renderRadioButtons('16:30')}</td>
                  <td>{renderRadioButtons('17:00')}</td>
                  <td>{renderRadioButtons('17:30')}</td>
                  <td>{renderRadioButtons('18:00')}</td>
                  <td>{renderRadioButtons('18:30')}</td>
                  <td>{renderRadioButtons('19:00')}</td>
                </tr>
              </tbody>
            </Table>
          </StyledDivTable>
          <StyledButton onClick={handleReservation}>예약하기</StyledButton>
        </div>
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
  width: 203px;
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

const StyledDiv1 = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  // padding-left : 20px;
  // padding-top : 15px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  color: #333333;
`;

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
  font-weight: 600;
  font-size: 20px;

  color: #333333;
`;

const StyledDiv2 = styled.div`
  display: flex;
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

const StyledDivTable = styled.div`
  margin-left: 15px;

  width: 82ch;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 100% */
  text-align: center;

  color: #333333;
`;

const StyledTd = styled.div`
  height: 100px;
  text-align: center;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  width: 140px;
  height: 40px;
  margin-left: 57ch;

  background: #ff9f9f;
  border-radius: 9px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  // margin-left: 28px;
  /* identical to box height, or 100% */

  color: #ffffff;
  border: none;
`;
export default BD_ReservationSecond;
