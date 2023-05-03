// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Select from 'react-select';

// // 날짜별 가능한 예약 목록을 저장하는 페이지

// function M_Blood_Reservation() {
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [reservations, setReservations] = useState([]);

//   const handleDateChange = (date) => {
//     setDate(date);
//   };

//   const handleTimeChange = (time) => {
//     setTime(time);
//   };

//   const handleOptionChange = (options) => {
//     setOptions(options);
//   };

//   const handleSave = (event) => {
//     event.preventDefault();
//     setReservations((prevReservations) => [...prevReservations, { date, time, options }]);
//     setDate(null);
//     setTime(null);
//     setOptions(null);
//     console.log(reservations);
//   };

//   const handleDelete = (index) => {
//     setReservations(reservations.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={{ marginLeft: '15%', marginRight: '15%' }}>
//       <form onSubmit={handleSave}>
//         <div>
//           <label htmlFor="date">날짜:</label>
//           <DatePicker id="date" selected={date} onChange={handleDateChange} />
//         </div>
//         <div>
//           <label htmlFor="time">시간:</label>
//           <Select
//             id="time"
//             value={time}
//             onChange={handleTimeChange}
//             options={[
//               { value: '09:00', label: '09:00' },
//               { value: '09:30', label: '09:30' },
//               { value: '10:00', label: '10:00' },
//             ]}
//           />
//         </div>
//         <div>
//           <label htmlFor="options">가능한 헌혈종류 :</label>
//           <Select
//             id="options"
//             value={options}
//             onChange={handleOptionChange}
//             isMulti
//             options={[
//               { value: '전혈', label: '전혈' },
//               { value: '혈소판', label: '혈소판' },
//             ]}
//           />
//         </div>
//         <button type="submit">저장</button>
//       </form>
//       <div></div>
//       <h3>저장한 목록:(저장한 목록을 전부 확인 후 맞다면 서버로 보낸다)</h3>
//       <div>
//         {reservations.map((element, index) => (
//           <div key={index}>
//             <div>날짜: {element.date.toString()}</div>
//             <div>시간: {element.time.value}</div>
//             <div>헌혈종류: {element.options.map((option) => option.value).join(", ")}</div>
//             <button onClick={() => handleDelete(index)}>삭제</button>
//             <div><br /></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default M_Blood_Reservation;
