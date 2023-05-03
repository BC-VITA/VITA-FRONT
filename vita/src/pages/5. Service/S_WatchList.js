import { useLocation } from 'react-router-dom';

function S_WatchList() {
    const location = useLocation();
    const { rhtype, formattedDate } = location.state;

    return (
        <div>
            {rhtype},{formattedDate},서울센터,13:00
        </div>
    );
}
export default S_WatchList;
