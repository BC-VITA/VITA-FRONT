import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

import serviceimg from '../../img/serviceimg.png';

function D_SelectReceipt() {
  const [error, setError] = useState(null);

  const [inputData, setInputData] = useState([
    {
      hospitalName: '',
      title: '',
      content: '',
      patientBlood: '',
      bloodType: '',
      startDate: '',
      DesignatedBloodWriteNumber: '',
      bloodNumber: '',
    },
    {},
  ]);

  useEffect(() => {
    fetch('http://localhost:8004/blood/house/filter', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setInputData(res);
        console.log(inputData);
      })
      .catch((err) => {
        setError(err.message);
      });
    console.log(inputData);
  }, []);
  return (
    <StyledAll>
      <StyledSub>
        <Nav defaultActiveKey="/" className="flex-column">
          <StyledSubDiv1>기부하기</StyledSubDiv1>
          <StyledSubDiv2>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Main">
                <StyledSubDiv2_2g>기부란</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1>
              <Nav.Link href="/D_Donation">
                <StyledSubDiv2_2g>기부하기</StyledSubDiv2_2g>
              </Nav.Link>
            </StyledSubDiv2_1>
            <StyledSubDiv2_1p>
              <Nav.Link href="/D_Receipt">
                <StyledSubDiv2_2>기부 영수증</StyledSubDiv2_2>
              </Nav.Link>
            </StyledSubDiv2_1p>
          </StyledSubDiv2>
        </Nav>
      </StyledSub>
      <StyledSubcomment>
        <StyledTop>
          <StyledTitle>기부 영수증</StyledTitle>
          {/* <StyledButton>
            <Nav.Link href="/DBDPostGeneral">
              <StyledButtonDiv>수정하기</StyledButtonDiv>
            </Nav.Link>
          </StyledButton> */}
        </StyledTop>
        <Styledcomment>
          <StyledTable>
            <thead style={{ background: '#FF9F9F' }}>
              <tr>
                <th
                  style={{
                    width: '200px',
                    padding: '10px',
                    color: '#ffffff',
                    fontWeight: '500',
                  }}
                >
                  신생아
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '200px', padding: '10px' }}>1000</td>
              </tr>
            </tbody>
          </StyledTable>
        </Styledcomment>
        <Styledcomment2>
          <StyledDiv>
            <StyledTitle2>신생아</StyledTitle2>
            <StyledTable2>
              <thead style={{ background: '#FF9F9F' }}>
                <tr>
                  <th
                    style={{
                      width: '100px',
                      padding: '10px',
                      color: '#ffffff',
                      fontWeight: '500',
                    }}
                  >
                    번호
                  </th>
                  <th
                    style={{
                      width: '200px',
                      padding: '10px',
                      color: '#ffffff',
                      fontWeight: '500',
                    }}
                  >
                    기부한 아이디
                  </th>
                  <th
                    style={{
                      width: '200px',
                      padding: '10px',
                      color: '#ffffff',
                      fontWeight: '500',
                    }}
                  >
                    일시
                  </th>
                  <th
                    style={{
                      width: '200px',
                      padding: '10px',
                      color: '#ffffff',
                      fontWeight: '500',
                    }}
                  >
                    포인트 액수
                  </th>
                </tr>
              </thead>
              <tbody style={{ background: '#ffffff' }}>
                <tr>
                  <td style={{ width: '200px', padding: '10px' }}>1</td>
                  <td style={{ width: '200px', padding: '10px' }}>suim1234</td>
                  <td style={{ width: '200px', padding: '10px' }}>
                    2023.06.13
                  </td>
                  <td style={{ width: '200px', padding: '10px' }}>1000</td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td
                    colspan="2"
                    style={{
                      textAlign: 'right',
                      paddingRight: '30px',
                      fontWeight: '700',
                    }}
                  >
                    기부 총 합계 : 1000
                  </td>
                </tr>
              </tbody>
            </StyledTable2>
          </StyledDiv>
        </Styledcomment2>
      </StyledSubcomment>
    </StyledAll>
  );
}
const StyledAll = styled.div`
  display: flex;
  padding-bottom: 300px;
`;
const StyledSub = styled.div`
  width: 170px;
  /* height: 175px; */
  margin-top: 25px;
  margin-left: 205px;
`;
const StyledSubDiv1 = styled.div`
  width: 190px;
  height: 50px;
  /* left: 370px;
          top: 123px; */

  background: #ff9f9f;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 55px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #ffffff;
`;

const StyledSubDiv2 = styled.div`
  width: 190px;
  height: 167px;
  border: 3px solid #d7d7d7;
`;
const StyledSubDiv2_1 = styled.div`
  border-bottom: 3px solid #d7d7d7;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_1p = styled.div`
  border-bottom: 3px solid #ff9f9f;
  background-color: white;
  height: 55px;
  margin-left: 3px;
  margin-right: 3px;
`;
const StyledSubDiv2_2 = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #333333;
`;
const StyledSubDiv2_2g = styled.div`
  border: solid white 3px;

  height: 24px;

  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 38px;
  /* identical to box height, or 100% */

  text-align: center;

  color: #969696;
`;

const StyledSubcomment = styled.div`
  display: block;
  width: 924px;
  margin-left: 65px;
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 48px;

  color: #333333;
`;
const StyledTop = styled.div`
  display: flex;
`;

const Styledcomment = styled.div`
  display: flex;
  margin-top: 10px;
`;
const StyledTable = styled.div`
  border-collapse: collapse;
  th,
  tbody,
  td td {
    padding: 0;
  }
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 100% */

  text-align: center;

  /* border-style: solid;
  border-color: black;
  border: 1px; */
`;

const Styledcomment2 = styled.div`
  width: 880px;
  /* height: 300px; */
  margin-top: 20px;
  background: #ffe9e9;
  padding-bottom: 10px;
`;
const StyledTitle2 = styled.div`
  width: 203px;
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 48px;

  margin-bottom: 5px;

  color: #333333;
`;
const StyledDiv = styled.div`
  padding: 10px;
  padding-left: 20px;
`;
const StyledTable2 = styled.div`
  /* border-collapse: collapse; */
  th,
  tbody,
  td td {
    padding: 0;
  }
  font-family: 'Gmarket Sans TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 32px;
  /* identical to box height, or 100% */

  text-align: center;

  border-style: solid;
  border-color: black;
  border: 1px;
`;

export default D_SelectReceipt;
