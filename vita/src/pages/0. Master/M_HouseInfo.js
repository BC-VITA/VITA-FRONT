import React, { useState } from 'react';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

//헌혈의집 정보 넣는 페이지

function BD_test() {
    //const [id, setId] = useState(''); // 헌혈의 집 ID
    const [area, setArea] = useState(''); //지역
    const [centerName, setCenterName] = useState(''); // 센터명
    const [bloodHouseAddress, setBloodHouseAddress] = useState(''); // 주소
    const [bloodHousePhoneNumber, setBloodHousePhoneNumber] = useState(''); // 전화번호
    const [latitude, setLatitude] = useState(''); //위도
    const [longitude, setLongitude] = useState(''); //경도
    const [weekdayTime, setWeekdayTime] = useState(''); //평일시간
    const [saturdayTime, setSaturdayTime] = useState(''); //토요일시간
    const [sundayRestTime, setSundayRestTime] = useState(''); //일요일 시간 
    const [restTime, setRestTime] = useState(''); // 공휴일 시간

    const [date, setDate] = useState(''); // 날짜
    const [wholeBlood, setWholeBlood] = useState(''); //전혈
    const [plasma, setPlasma] = useState(''); // 혈장
    const [platelet, setPlatelet] = useState(''); // 혈소판

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleChangeArea = ({ target: { value } }) => setArea(value);
    const handleChangeCenterName = ({ target: { value } }) => setCenterName(value);
    const handleChangeBloodHouseAddress = ({ target: { value } }) => setBloodHouseAddress(value);
    const handleChangeBloodHousePhoneNumber = ({ target: { value } }) => setBloodHousePhoneNumber(value);
    const handleChangeLatitude = ({ target: { value } }) => setLatitude(value);
    const handleChangeLongitude = ({ target: { value } }) => setLongitude(value);
    const handleChangeWeekdayTime = ({ target: { value } }) => setWeekdayTime(value);
    const handleChangeSaturdayTime = ({ target: { value } }) => setSaturdayTime(value);
    const handleChangeSundayRestTime = ({ target: { value } }) => setSundayRestTime(value);
    const handleChangeRestTime = ({ target: { value } }) => setRestTime(value);
    const handleChangeDate = ({ target: { value } }) => setDate(value);
    const handleChangeWholeBlood = ({ target: { value } }) => setWholeBlood(value);
    const handleChangePlasma = ({ target: { value } }) => setPlasma(value);
    const handleChangePlatelet = ({ target: { value } }) => setPlatelet(value);

    const handleSubmit = async (event) => {
        setDisabled(true);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        //back으로 정보 post함
        fetch('http://localhost:8004/blood/house/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                area: area,
                centerName: centerName,
                bloodHouseAddress: bloodHouseAddress,
                bloodHousePhoneNumber: bloodHousePhoneNumber,
                latitude: latitude,
                longitude: longitude,
                weekdayTime: weekdayTime,
                saturdayTime: saturdayTime,
                sundayRestTime: sundayRestTime,
                restTime: restTime,
                date: date,
                wholeBlood: wholeBlood,
                plasma: plasma,
                platelet: platelet,
            }),
        })
            .then((res) => {
                res.json();
            })
            .catch((err) => {
                setError(err.message);
            });
        setDisabled(false);
        console.log(
            'data: ' +
            JSON.stringify({
                area: area,
                centerName: centerName,
                bloodHouseAddress: bloodHouseAddress,
                bloodHousePhoneNumber: bloodHousePhoneNumber,
                latitude: latitude,
                longitude: longitude,
                weekdayTime: weekdayTime,
                saturdayTime: saturdayTime,
                sundayRestTime: sundayRestTime,
                restTime: restTime,
                date: date,
                wholeBlood: wholeBlood,
                plasma: plasma,
                platelet: platelet,
            })
        );
    };
    return (
        <div style={{ marginLeft: '15%' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>지역</div>
                    <input type="text" value={area} onChange={handleChangeArea}></input>
                    <div>센터명</div>
                    <input type="text" value={centerName} onChange={handleChangeCenterName}></input>
                    <div>주소</div>
                    <input type="text" value={bloodHouseAddress} onChange={handleChangeBloodHouseAddress}></input>
                    <div>전화번호</div>
                    <input type="text" value={bloodHousePhoneNumber} onChange={handleChangeBloodHousePhoneNumber}></input>
                    <div>위도</div>
                    <input type="text" value={latitude} onChange={handleChangeLatitude}></input>
                    <div>경도</div>
                    <input type="text" value={longitude} onChange={handleChangeLongitude}></input>
                    <div>평일시간</div>
                    <input type="text" value={weekdayTime} onChange={handleChangeWeekdayTime}></input>
                    <div>토요일시간</div>
                    <input type="text" value={saturdayTime} onChange={handleChangeSaturdayTime}></input>
                    <div>일요일시간</div>
                    <input type="text" value={sundayRestTime} onChange={handleChangeSundayRestTime}></input>
                    <div>공휴일시간</div>
                    <input type="text" value={restTime} onChange={handleChangeRestTime}></input>
                    <div>날짜</div>
                    <input type="text" value={date} onChange={handleChangeDate}></input>
                    <div>전혈</div>
                    <input type="text" value={wholeBlood} onChange={handleChangeWholeBlood}></input>
                    <div>혈장</div>
                    <input type="text" value={plasma} onChange={handleChangePlasma}></input>
                    <div>혈소판</div>
                    <input type="text" value={platelet} onChange={handleChangePlatelet}></input>
                </div>
                <button type="submit">저장</button>
            </form>
        </div>
    );
}

export default BD_test;