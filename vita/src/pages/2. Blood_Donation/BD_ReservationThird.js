import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};


function BD_ReservationThird() {
  const location = useLocation();
  const { selectedDate } = location.state;
  console.log(selectedDate);
  const formattedDate = selectedDate.toLocaleDateString();
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('/S_WatchList', {
      state: { rhtype, formattedDate }
    });
  };
  

  const handleRHMChange = () => {
    setbrhtype('전혈');
  };
  const handleRHPChange = () => {
    setbrhtype('혈소판');
  };

  const handleRHAChange = () => {
    setbrhtype('혈장');
  };
  const [rhtype, setbrhtype] = useState('');

  return (
    <div>
      <h1>날짜데이터가 잘 넘어왔는지 확인</h1>
      <p>{formattedDate}</p>
      <div style={{ marginLeft: '15%', marginRight: '15%' }}>
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
              <td><br></br>예약 가능<br></br>헌혈종류</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
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
              <td><br></br>예약 가능<br></br>헌혈종류</td>
              <td></td>
              <td><br></br><RadioButton
                label="&nbsp;전혈&nbsp;"
                value={rhtype === '전혈'}
                onChange={handleRHMChange}
              />
                <br></br>
                <RadioButton
                  label="&nbsp;혈소판&nbsp;"
                  value={rhtype === '혈소판'}
                  onChange={handleRHPChange}
                /></td>
              <td></td>
              <td></td>
              <td><RadioButton
                label="&nbsp;혈장&nbsp;"
                value={rhtype === '혈장'}
                onChange={handleRHAChange}
              /></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
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
              <td><br></br>예약 가능<br></br>헌혈종류</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <button onClick={handleReservation}>예약하기</button>
      </div>
    </div>
  );
}

export default BD_ReservationThird;
