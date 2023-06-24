import React from 'react';
import {
  Page,
  View,
  Document,
  PDFViewer,
  PDFDownloadLink,
} from '@react-pdf/renderer';
// import styled from '@react-pdf/styled-components';
import styled from 'styled-components';
import { Font } from '@react-pdf/renderer';
import NotoSansBlack from '../fonts/NanumGothic-Bold.ttf';

// 폰트 등록
Font.register({ family: 'NotoSans', src: NotoSansBlack });

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.page}>
          <View style={styles.content}>
            <StyledText>자원봉사활동 확인서</StyledText>
            <StyledName>성명: 김수임</StyledName>
            <StyledNum>주민등록번호: 02308 - ********</StyledNum>
            <StyledAddress>주소: 우편번호 상세주소</StyledAddress>
            <StyledPeriod>
              자원봉사 활동기간: 2023-03-02 ~ 2023-03-02
            </StyledPeriod>
            <StyledTime>자원봉사 활동시간: 총 1시간 0분</StyledTime>
            <StyledNum2>자원봉사 활동횟수: 총 1회</StyledNum2>
            <StyledComment>봉사활동 내용: 봉사제목</StyledComment>
            <StyledText2>
              위와 같은 자원봉사 활동에 참여하였음을 확인함
            </StyledText2>
            <StyledDay>2023년 6월 13일</StyledDay>
            <StyledImg>자원봉사활동 확인서</StyledImg>
            <StyledText3>
              본 증명서는 인터넷으로 발급되었으며, 자원봉사
              포탈시스템(www.1365.go.kr)의 확인서 조회 메뉴를 통해 문서발급 번호
              입력으로 내용의 위변조 여부를 확인해 주십시오. 다만 문서 확인
              번호를 통한 확인은 발급일로부터 90일까지 가능합니다. 발급확인서에
              표시된 유관기관의 자원봉사 실적은 자원봉사 포탈 시스템과 연계를
              통해 취합된 실적 정보입니다.
            </StyledText3>
          </View>
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
  },
};

const StyledText = styled.Text`
  color: #333;
  text-align: center;
  font-size: 20px;
  font-family: 'NotoSans';
  font-weight: 700;
  line-height: 24px;
`;

const StyledName = styled.Text`
  margin-top: 20px;
`;

const StyledNum = styled.Text`
  margin-top: 10px;
`;

const StyledAddress = styled.Text`
  margin-top: 10px;
`;

const StyledPeriod = styled.Text`
  margin-top: 10px;
`;

const StyledTime = styled.Text`
  margin-top: 10px;
`;

const StyledNum2 = styled.Text`
  margin-top: 10px;
`;

const StyledComment = styled.Text`
  margin-top: 10px;
`;

const StyledText2 = styled.Text`
  margin-top: 20px;
`;

const StyledDay = styled.Text`
  margin-top: 30px;
`;

const StyledImg = styled.Text`
  margin-top: 30px;
`;

const StyledText3 = styled.Text`
  margin-top: 30px;
`;

const PreviewAndDownloadPDF = () => (
  <div>
    <PDFViewer width="100%" height="600px">
      <MyDocument />
    </PDFViewer>
    <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
      {({ blob, url, loading, error }) => (loading ? '로딩 중...' : '다운로드')}
    </PDFDownloadLink>
  </div>
);

export default PreviewAndDownloadPDF;
