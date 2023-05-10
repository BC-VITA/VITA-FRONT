import { useLocation } from 'react-router-dom';

function BD_ReservationThird() {
  const location = useLocation();
  const { state: { selectedOptions, formattedDate, centerName } = {} } =
    useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    fetch('http://localhost:8004/blood/reservation', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        wholeBlood: 'b',
        plasma: 'c',
        platelet: 'd',
        bloodHouseName: 'e',
        date: 'f',
        time: 'g',
      }),
    }).then((res) => {
      res.json();
    });
  };

  console.log();

  return (
    <div>
      <div>
        {Object.keys(selectedOptions).map((time) => (
          <div key={time}>
            <p>{time}</p>
            <p>
              {selectedOptions[time] === 'plasma'
                ? '혈장'
                : selectedOptions[time] === 'wholeBlood'
                ? '전혈'
                : selectedOptions[time] === 'platelet'
                ? '혈소판'
                : selectedOptions[time]}
            </p>
            <p>{formattedDate}</p>
            <p>{centerName}</p>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleSubmit}>
        서버저장
      </button>
    </div>
  );
}
export default BD_ReservationThird;
