<section>
  <Styleddiv2>
    <StyledTable>
      <thead>
        <tr>
          <th id="area-header" style={thStyle}>
            제목 / 내용
          </th>
          <th id="centerName-header" style={{ ...thStyle, width: '120px' }}>
            모집인원 및 현황
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((element, index) => {
          const markerPositions = [[element.latitude, element.longitude]];
          return (
            <React.Fragment key={index}>
              <tr onClick={() => handleRowClick(index)}>
                <td headers="area-header" style={{ ...tdStyle }}>
                  {element.area}
                </td>
                <td
                  headers="centerName-header"
                  style={{ ...tdStyle, width: '120px' }}
                >
                  {element.centerName}
                </td>
                <td
                  headers="bloodHouseAddress-header"
                  style={{
                    ...tdStyle,
                    width: '130px',
                    fontSize: '15px',
                  }}
                >
                  {element.bloodHouseAddress}
                </td>
                <td
                  headers="bloodHousePhoneNumber-header"
                  style={{
                    ...tdStyle,
                    width: '130px',
                    fontSize: '15px',
                  }}
                >
                  {element.bloodHousePhoneNumber}
                </td>
                <td>
                  <div
                    style={{
                      flexDirection: 'column',
                    }}
                  >
                    <button
                      onClick={() => handleReservation(element.centerName)}
                      style={{ ...btStyle }}
                    >
                      찜
                    </button>
                    <button
                      type="button"
                      style={{
                        ...btStyle,
                        marginTop: '10px',
                        background: '#FF9F9F',
                      }}
                    >
                      참여하기
                    </button>
                  </div>
                </td>
              </tr>

              {openIndex === index && (
                <tr>
                  <td colSpan={3}>
                    <Styledtd1 id="wrap">
                      <KakaoMap
                        markerPositions={markerPositions}
                        onClick={handleMarkerClick}
                        size={mapSize}
                      />
                    </Styledtd1>
                  </td>
                  <Styledtd2
                    colSpan={2}
                    style={{ width: '240px', marginLeft: '-110px' }}
                  >
                    <Styledtxt>
                      헌혈종류 :
                      <br /> 전혈, 혈장, 혈소판
                    </Styledtxt>
                    <br />
                    <Styledtxt>평 일 : {element.weekdayTime}</Styledtxt>
                    <Styledtxt>토요일 : {element.saturdayTime}</Styledtxt>
                    <Styledtxt>일요일 : {element.sundayRestTime}</Styledtxt>
                    <Styledtxt>공휴일 : {element.restTime}</Styledtxt>
                  </Styledtd2>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </StyledTable>
  </Styleddiv2>
</section>;
