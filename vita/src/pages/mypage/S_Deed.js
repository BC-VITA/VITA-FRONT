import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Page,
  Text,
  View,
  Document,
  Font,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
} from '@react-pdf/renderer';
import styled from 'styled-components';
import Post from '../../img/image 66.png';
import NotoSans from '../../fonts/NanumGothic-Bold.ttf';

Font.register({
  family: 'NotoSans',
  fonts: [{ src: NotoSans }],
});

const MyDocument = () => {
  //   const userId = sessionStorage.getItem('userId');
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const { date, userName, phone, element } = location.state;

  //   function formatDate(date) {
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2, '0');
  //     const day = String(date.getDate()).padStart(2, '0');
  //     return `${year}-${month}-${day}`;
  //   }

  //   const handleClick = async () => {
  //     const formattedDate = formatDate(new Date(date));

  //     try {
  //       const response = await fetch(
  //         'http://localhost:8004/volunteer/reservation',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             volunteerDate: formattedDate,
  //             userId: userId,
  //             infomationAgree: 'true',
  //             volunteerStatus: '대기중',
  //             volunteerPlace: element.volunteerPlace,
  //             volunteerKind: element.volunteerType,
  //             volunteerBoardId: element.volunteerId,
  //           }),
  //         }
  //       );

  //       if (response.ok) {
  //         console.log('요청이 성공했습니다.');
  //       } else {
  //         console.log('요청이 실패했습니다.');
  //       }
  //     } catch (error) {
  //       console.error('요청 중 오류가 발생했습니다.', error);
  //     }
  //   };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <StyledText style={tempStyles.text}>자원봉사활동 확인서</StyledText>

          <StyledName style={tempStyles1.text}>성명: 김수임</StyledName>
          <StyledNum style={tempStyles1.text}>
            주민등록번호: 02308 - ******** <br />
          </StyledNum>
          <StyledAddress style={tempStyles1.text}>주소:</StyledAddress>

          <Styledbox style={tempStylesMargin.text}></Styledbox>

          <StyledPeriod style={tempStyles2.text}>
            자원봉사 활동기간:
          </StyledPeriod>
          <StyledTime style={tempStyles2.text}>자원봉사 활동시간:</StyledTime>
          <StyledComment style={tempStyles2.text}>
            봉사활동 내용: 봉사제목
          </StyledComment>

          <Styledbox style={tempStylesMargin.text}></Styledbox>
          <Styledbox style={tempStylesMargin.text}></Styledbox>
          <Styledbox style={tempStylesMargin.text}></Styledbox>
          <Styledbox style={tempStylesMargin.text}></Styledbox>

          <StyledText2 style={tempStyles3.text}>
            위와 같은 자원봉사 활동에 참여하였음을 확인함
          </StyledText2>
          <StyledDay style={tempStyles3.text}>2023년 6월 13일</StyledDay>

          <Styledbox style={tempStylesMargin.text}></Styledbox>
          <Styledbox style={tempStylesMargin.text}></Styledbox>
          <Styledbox style={tempStylesMargin.text}></Styledbox>

          {/* <img style={{ height: '200px' }} src={Post} alt="Third slide" /> */}
          <StyledText3 style={tempStyles4.text}>
            본 증명서는 인터넷으로 발급되었으며, 자원봉사
            포탈시스템(www.1365.go.kr)의
            <br />
            확인서 조회 메뉴를 통해 문서발급 번호 입력으로 내용의 위변조 여부를
            확인해 주십시오.
            <br />
            다만 문서 확인 번호를 통한 확인은 발급일로부터 90일까지 가능합니다.
            <br />
            * 발급확인서에 표시된 유관기관의 자원봉사 실적은 자원봉사 포탈
            시스템과 연계를 통해
            <br />
            취합된 실적 정보입니다.
          </StyledText3>
        </View>
      </Page>
    </Document>
  );
};

const styles = {
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  content: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    textAlign: 'center',
    color: '#333',
    margin: '20px',
  },
};

const tempStyles = StyleSheet.create({
  text: {
    fontFamily: 'NotoSans',

    fontSize: '40px',
    fontWeight: '700',
    marginTop: '70x',
    marginBottom: '40x',
  },
});

const tempStyles1 = StyleSheet.create({
  text: {
    fontFamily: 'NotoSans',
    fontSize: '18px',
    textAlign: 'left',
    marginLeft: '15px',
    marginTop: '15x',
  },
});

const tempStylesMargin = StyleSheet.create({
  text: {
    marginTop: '30x',
    display: 'block',
  },
});

const tempStyles2 = StyleSheet.create({
  text: {
    fontFamily: 'NotoSans',
    fontSize: '15px',
    textAlign: 'left',
    marginLeft: '30px',
    marginTop: '10x',
  },
});

const tempStyles3 = StyleSheet.create({
  text: {
    fontFamily: 'NotoSans',
    fontSize: '15px',
    textAlign: 'center',
    marginTop: '10x',
  },
});

const tempStyles4 = StyleSheet.create({
  text: {
    fontFamily: 'NotoSans',
    fontSize: '13px',
    textAlign: 'center',
    marginLeft: '15px',
    marginRight: '15px',
  },
});

const StyledText = styled(Text)`
  color: #333;
  text-align: center;
  font-size: 100px;
  font-family: Noto Sans;
  font-weight: 700;
`;

const StyledName = styled(Text)`
  margin-top: 20px;
`;

const Styledbox = styled(Text)`
  margin-top: 20px;
`;

const StyledNum = styled(Text)`
  margin-top: 10px;
`;

const StyledAddress = styled(Text)`
  margin-top: 10px;
`;

const StyledPeriod = styled(Text)`
  margin-top: 10px;
`;

const StyledTime = styled(Text)`
  margin-top: 10px;
`;

const StyledNum2 = styled(Text)`
  margin-top: 10px;
`;

const StyledComment = styled(Text)`
  margin-top: 10px;
`;

const StyledText2 = styled(Text)`
  margin-top: 20px;
`;

const StyledDay = styled(Text)`
  margin-top: 30px;
`;

const StyledImg = styled(Text)`
  margin-top: 30px;
`;

const StyledText3 = styled(Text)`
  margin-top: 30px;
`;

const PreviewAndDownloadPDF = () => (
  <div>
    <PDFViewer width="100%" height="600">
      <MyDocument />
    </PDFViewer>
    <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
      {/* {({ blob, url, loading, error }) => (loading ? '로딩 중...' : '다운로드')} */}
    </PDFDownloadLink>
  </div>
);

export default PreviewAndDownloadPDF;
