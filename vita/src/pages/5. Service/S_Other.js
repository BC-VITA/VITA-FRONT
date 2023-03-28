import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function RadioGroup({ label, children }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};


function S_Other() {
  const location = useLocation();
  const { selectedDate } = location.state;
  console.log(selectedDate);
  const formattedDate = selectedDate.toLocaleDateString();

  const handleRHMChange = () => {
    setbrhtype('RH-');
  };
  const handleRHPChange = () => {
    setbrhtype('RH+');
  };
  const [rhtype, setbrhtype] = useState('');

  return (
    <div>
      <h1>날짜데이터가 잘 넘어왔는지 확인</h1>
      <p>{formattedDate}</p>
      <div>
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
              <td>-</td>
              <td><br></br><RadioButton
                label="&nbsp;전혈&nbsp;"
                value={rhtype === 'RH-'}
                onChange={handleRHMChange}
              />
                <br></br>
                <RadioButton
                  label="&nbsp;혈소판&nbsp;"
                  value={rhtype === 'RH-'}
                  onChange={handleRHMChange}
                /></td>
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
              <td>-</td>
              <td><br></br><RadioButton
                label="&nbsp;전혈&nbsp;"
                value={rhtype === 'RH-'}
                onChange={handleRHMChange}
              />
                <br></br>
                <RadioButton
                  label="&nbsp;혈소판&nbsp;"
                  value={rhtype === 'RH-'}
                  onChange={handleRHMChange}
                /></td>
              <td></td>
              <td></td>
              <td><RadioButton
                label="&nbsp;혈소판&nbsp;"
                value={rhtype === 'RH-'}
                onChange={handleRHMChange}
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
              <td>-</td>
              <td><br></br><RadioButton
                label="&nbsp;전혈&nbsp;"
                value={rhtype === 'RH-'}
                onChange={handleRHMChange}
              />
                <br></br>
                <RadioButton
                  label="&nbsp;혈소판&nbsp;"
                  value={rhtype === 'RH-'}
                  onChange={handleRHMChange}
                /></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><RadioButton
                label="&nbsp;혈소판&nbsp;"
                value={rhtype === 'RH-'}
                onChange={handleRHMChange}
              /></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default S_Other;
