import React, { useState, useEffect} from 'react';
import { useNavigate,useLocation  } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';


const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

function S_Other() {
  const navigate = useNavigate();
  const location = useLocation();

  const centerName = location.state?.centerName;

  const [date, setDate] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [date1, setDate1] = useState('');
  

  const [inputData, setInputData] = useState([
    {
      date: '', //날짜
      time: '', //시간
      wholeBlood: '',  //전혈
      plasma: '',  //혈장
      platelet: '',  //혈소판
      centerName: '',  //센터명
    },
    {},
  ]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleReservation = () => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const centerName = location.state?.centerName;
    navigate('/S_WatchList', { state: { selectedOptions, formattedDate, centerName } });
  };
  

// 유즈이펙트 사용해서 날짜값이 달라질때마다 가능한 헌혈종류를 보여줘야한다
  useEffect(() => {
    fetch(`http://localhost:8004/blood/house/registerReservation/list`, {
      method: 'get'
    })
      .then((res) => res.json())
      .then((res) => {
        setInputData(res);
      })
  }, []);

  const filteredData = inputData.filter((data) => data.centerName === centerName);

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
        {data?.wholeBlood === "Y" && (
          <>
            <input
              type="radio"
              name="bloodType"
              value="wholeBlood"
              checked={selectedOptions[time] === "wholeBlood"}
              onChange={(event) => handleOptionChange(event, time)}
            />
            <label htmlFor={time}>전혈</label>
          </>
        )}
        {data?.plasma === "Y" && (
          <>
            <input
              type="radio"
              name="bloodType"
              value="plasma"
              checked={selectedOptions[time] === "plasma"}              
              onChange={(event) => handleOptionChange(event, time)}
            />
            <label htmlFor={time}>혈장</label>
          </>
        )}
        {data?.platelet === "Y" && (
          <>
            <input
              type="radio"
              name="bloodType"
              value="platelet"
              checked={selectedOptions[time] === "platelet"}
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
    <div>
      <h1>{centerName}</h1>
      <div style={{ marginLeft: '15%', marginRight: '15%' }}>
        <div>
            <label htmlFor="date">예약날짜:</label>
            <DatePicker id="date" selected={date} onChange={handleDateChange} />
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
              <td><br />예약 가능<br />헌혈종류</td>
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
        <button onClick={handleReservation}>예약하기</button>
      </div>
      <div>{date.toString()}</div>
    </div>
  );
}

export default S_Other;
