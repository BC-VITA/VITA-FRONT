import React from 'react';
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Font,
} from '@react-pdf/renderer';
import PrintButton from './PrintButton';
// import NanumGothic from '../fonts/NotoSans-Black.ttf';
import styled from 'styled-components';

Font.register({ family: 'NotoSans', src: '../fonts/NotoSans-Black.ttf' });

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.content}>
        <StyledText>자원봉사활동 확인서</StyledText>
        <StyledName>성명 : 김수임</StyledName>
        <StyledNum>주민등록번호 : 02308 - ********</StyledNum>
        <StyledAddress>주소 : 우편번호 상세주소</StyledAddress>
        <StyledPeriod>자원봉사 활동기간 : 2023-03-02 ~ 2023-03-02</StyledPeriod>
        <StyledTiem>자원봉사 활동시간 : 총 1시간 0분</StyledTiem>
        <StyledNum2>자원봉사 활동횟수 : 총 1회</StyledNum2>
        <StyledComment>봉사활동 내용 : 봉사제목</StyledComment>
        <StyledText2>위와 같은 자원봉사 활동에 참여하였음을 확인함</StyledText2>
        <StyledDay>2023년 6월 13일</StyledDay>
        <StyledImg>자원봉사활동 확인서</StyledImg>
        <StyledText3>
          본 증명서는 인터넷으로 발급되었으며, 자원봉사
          포탈시스템(www.1365.go.kr)의
          <br />
          확인서 조회 메뉴를 통해 문서발급 번호 입력으로 내용의 위변조 여부를
          확인해 주십시오. <br />
          다만 문서 확인 번호를 통한 확인은 발급일로부터 90일까지 가능합니다.{' '}
          <br /> * 발급확인서에 표시된 유관기관의 자원봉사 실적은 자원봉사 포탈
          시스템과 연계를 통해 <br />
          취합된 실적 정보 입니다
        </StyledText3>
      </View>
    </Page>
  </Document>
);

const Test = () => (
  <div>
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
    <PrintButton />
  </div>
);

export default Test;

const styles = {
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  content: {
    width: '50%',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
};

const StyledText = styled(Text)`
  color: #333;
  text-align: center;
  font-size: 100px;
  font-family: NotoSans;
  font-weight: 700;
  line-height: 48px;
`;

const StyledName = styled(Text)``;
const StyledNum = styled(Text)``;
const StyledAddress = styled(Text)``;
const StyledPeriod = styled(Text)``;
const StyledTiem = styled(Text)``;
const StyledNum2 = styled(Text)``;
const StyledComment = styled(Text)``;
const StyledText2 = styled(Text)``;
const StyledDay = styled(Text)``;
const StyledImg = styled(Text)``;
const StyledText3 = styled(Text)``;
