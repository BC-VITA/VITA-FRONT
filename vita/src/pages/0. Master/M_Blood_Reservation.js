import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

// 날짜별 가능한 예약 목록을 저장하는 페이지

function M_Blood_Reservation() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [centerName, setCenterName] = useState('');
  const [options, setOptions] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [wholeBlood, setWholeBlood] = useState('F');
  const [plasma, setPlasma] = useState('F');
  const [platelet, setPlatelet] = useState('F');

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handleOptionChange = (options) => {
    setOptions(options);
  };

  const handleChangeCenterName = ({ target: { value } }) =>
    setCenterName(value);

  const handleSave = (event) => {
    event.preventDefault();
    const iswholeBloodIncluded = options.some(
      (option) => option.value === '전혈'
    );
    if (iswholeBloodIncluded) {
      setWholeBlood('Y');
    }
    const isPlasmaIncluded = options.some((option) => option.value === '혈장');
    if (isPlasmaIncluded) {
      setPlasma('Y');
    }
    const isplateletIncluded = options.some(
      (option) => option.value === '혈소판'
    );
    if (isplateletIncluded) {
      setPlatelet('Y');
    }
    setReservations((prevReservations) => [
      ...prevReservations,
      { date, time, options },
    ]);
  };

  const handleDelete = (index) => {
    setReservations(reservations.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    fetch('http://localhost:8004/blood/house/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        date: date ? date.toString() : null,
        time: time.value,
        wholeBlood: wholeBlood, //전혈
        plasma: plasma, //혈장
        platelet: platelet, //혈소판
        centerName: centerName, //센터명
      }),
    }).then((res) => {
      res.json();
      if (res.ok) {
        navigate('/');
      }
    });
    console.log(
      'data: ' +
        JSON.stringify({
          date: date ? date.toString() : null,
          time: time.value,
          wholeBlood: wholeBlood, //전혈
          plasma: plasma, //혈장
          platelet: platelet, //혈소판
          centerName: centerName, //센터명
        })
    );
  };

  return (
    <div style={{ marginLeft: '15%', marginRight: '15%' }}>
      <form onSubmit={handleSave}>
        <div>
          <div>센터명 :</div>
          <input
            type="centerName"
            name="centerName"
            value={centerName}
            onChange={handleChangeCenterName}
          />
        </div>
        <div>
          <label htmlFor="date">날짜:</label>
          <DatePicker id="date" selected={date} onChange={handleDateChange} />
        </div>
        <div>
          <label htmlFor="time">시간:</label>
          <Select
            id="time"
            value={time}
            onChange={handleTimeChange}
            options={[
              { value: '09:00', label: '09:00' },
              { value: '09:30', label: '09:30' },
              { value: '10:00', label: '10:00' },
              { value: '10:30', label: '10:30' },
              { value: '11:00', label: '11:00' },
              { value: '11:30', label: '11:30' },
              { value: '12:00', label: '12:00' },
              { value: '12:30', label: '12:30' },
              { value: '13:00', label: '13:00' },
              { value: '13:30', label: '13:30' },
              { value: '14:00', label: '14:00' },
            ]}
          />
        </div>
        <div>
          <label htmlFor="options">가능한 헌혈종류 :</label>
          <Select
            id="options"
            value={options}
            onChange={handleOptionChange}
            isMulti
            options={[
              { value: '전혈', label: '전혈' },
              { value: '혈소판', label: '혈소판' },
              { value: '혈장', label: '혈장' },
            ]}
          />
        </div>
        <button type="submit">임시저장</button>
      </form>
      <div></div>
      <h3>저장한 목록:(저장한 목록을 전부 확인 후 맞다면 서버로 보낸다)</h3>
      <div>
        {reservations.map((element, index) => (
          <div key={index}>
            <div>센터 명 : {centerName}</div>
            <div>날짜: {element.date.toString()}</div>
            <div>시간: {element.time.value}</div>
            <div>
              헌혈종류:{' '}
              {element.options.map((option) => option.value).join(', ')}
            </div>
            <button onClick={() => handleDelete(index)}>삭제</button>
            <div>
              <br />
            </div>
          </div>
        ))}
      </div>
      <div>
        setPlasma : {plasma},{wholeBlood},{platelet}
      </div>
      <button type="button" onClick={handleSubmit}>
        저장
      </button>
      <div>{time.value}</div>
    </div>
  );
}

export default M_Blood_Reservation;
