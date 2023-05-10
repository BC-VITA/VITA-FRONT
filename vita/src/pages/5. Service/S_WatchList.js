import { useLocation } from 'react-router-dom';

function S_WatchList() {
    const location = useLocation();
    const { state: { selectedOptions, formattedDate, centerName } = {} } = useLocation();

    return (
        <div>
            <div>
                {Object.keys(selectedOptions).map((time) => (
                    <div key={time}>
                    <p>{time}</p>                 
                    <p>
                        {selectedOptions[time] === "plasma"
                        ? "혈장"
                        : selectedOptions[time] === "wholeBlood"
                        ? "전혈"
                        : selectedOptions[time] === "platelet"
                        ? "혈소판"
                        : selectedOptions[time]}
                    </p>
                    <p>{formattedDate}</p>
                    <p>{centerName}</p>
                    </div>
                ))}
                </div>
        </div>
        
    );
}
export default S_WatchList;
