import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

function BD_ReservationSecond({ startDate, endDate, onReservation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
  };

  const handleReservation = () => {
    if (selectedDate) {
      onReservation(selectedDate);
      setSelectedDate(null);
      navigate('/BD_ReservationThird', { state: { selectedDate: selectedDate } });
      console.log(selectedDate);
    }
  };

  const eventStyleGetter = () => {
    return {
      style: {
        backgroundColor: 'gray',
      },
    };
  };
  const events = [
    //여기에다가 백에서 정보를 가져다 배열을 작성하는 코드 작성, 지금 작성한 코드는 테스트용임
    {
      title: '전혈',
      start: new Date(2023, 3, 3),
      end: new Date(2023, 3, 3),
    },
    {
      title: '혈소판',
      start: new Date(2023, 3, 3),
      end: new Date(2023, 3, 7),
    },

    {
      title: '전혈',
      start: new Date(2023, 3, 5),
      end: new Date(2023, 3, 5),
    },
  ];

  const selectable = {
    start: moment(startDate).startOf('day').toDate(),
    end: moment(endDate).endOf('day').toDate(),
  };

  const CustomToolbar = ({ label, onNavigate, onView }) => {
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={() => onNavigate('TODAY')}>
            오늘
          </button>
          <button type="button" onClick={() => onNavigate('PREV')}>
            이전
          </button>
          <button type="button" onClick={() => onNavigate('NEXT')}>
            다음
          </button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => onView('month')}>
            월
          </button>
          <button type="button" onClick={() => onView('week')}>
            주
          </button>
          <button type="button" onClick={() => onView('day')}>
            일
          </button>
        </span>
      </div>
    );
  };

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={selectable}
        onSelectDate={handleSelectDate}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
        components={{
          toolbar: CustomToolbar,
        }}
      />
      {selectedDate && (
        <div>
          <p>선택한 날짜: {moment(selectedDate).format('YYYY-MM-DD')}</p>
          <button onClick={handleReservation}>예약하기</button>
        </div>
      )}
    </div>
  );
}

export default BD_ReservationSecond;
