import React, { useState } from 'react';
import styled from 'styled-components';

function Main() {
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const [inputData, setInputData] = useState([{
        testNumber: '',
        testName: '',
    }]);

    const handleSubmit = async (event) => {
        setDisabled(true);
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));

        fetch('http://localhost:8004/user/board/list', { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setInputData(res);
            })
            .catch((err) => {
                setError(err.message);
            });
        setDisabled(false);
        console.log(inputData);
    };
    return (
        <div>
            <section>
                <Styleddiv>사용자 : {inputData[0].testNumber}번&nbsp;{inputData[0].testName}님</Styleddiv>
                <Styleddiv1>'확인하기'버튼을 눌러주세요</Styleddiv1>
                <form onSubmit={handleSubmit}>
                    <StyledButton1 type="submit" disabled={disabled}>
                        확인하기
                    </StyledButton1>
                    <div className="home">{error && <div>{error}</div>}</div>
                </form>
            </section>
        </div>
    );
}
const Styleddiv = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 48px;
  font-weight: 700;
  margin-top: 3%;
  margin-left: 15%;
`;
const Styleddiv1 = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 24px;
  font-weight: 500;
  margin-left: 15%;
`;
const StyledButton1 = styled.button`
  background-color: #ff9f9f;
  color: white;
  border-radius: 8px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  margin-left: 15%;
`;
export default Main;
