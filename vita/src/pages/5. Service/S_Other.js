import React, { useState, useEffect} from 'react';
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
//localDateTime // 예약날짜 
//wholeBlood//전혈
//plasma//혈장
//platelet//혈소판
//bloodHouseName//센터명
//date//날짜
//time//시간
function S_Other() {
  const navigate = useNavigate();

  const [rhtype, setbrhtype] = useState('');
  const [date, setDate] = useState('');

  const [inputData, setInputData] = useState([{}, {}]);

  const handleChangeDate = ({ target: { value } }) => setDate(value);

  const handleReservation = () => {
    navigate('/S_WatchList', {
      state: { rhtype,  } // 새로운 달력 인풋에서 날짜 값 받아오기
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

// 유즈이펙트 사용해서 날짜값이 달라질때마다 가능한 헌혈종류를 보여줘야한다
useEffect(() => {
  fetch(`http://localhost:8004/blood/house/registerReservation/list`, {
    method: 'get'
  })
    .then((res) => res.json())
    .then((res) => {
      setInputData(res);
      console.log(inputData);
    })
  console.log(inputData);
}, []);


  return (
    <div>
      <h1>전 페이지에서 센터정보 넘겨받기</h1>
      <div style={{ marginLeft: '15%', marginRight: '15%' }}>
        <div>
           <div>예약날짜 : </div>
           <input
            type="Date"
            name="Date"
            value={date}
            onChange={handleChangeDate}/>
        </div>
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

export default S_Other;
