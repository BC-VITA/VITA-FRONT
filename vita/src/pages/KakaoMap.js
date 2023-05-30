/* global kakao */
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export default function KakaoMap(props) {
  const { markerPositions, size, inputData } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const infoWindowRef = useRef(null);
  const navigate = useNavigate();

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b891c4f8e045efa496fd45c8361b34c7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3
        };
        const map = new kakao.maps.Map(container.current, options);
        
        kakao.maps.event.addListener(map, "tilesloaded", () => {
          setKakaoMap(map);
        });
      });
    };
  }, []);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
    
    markers.forEach(marker => {
      marker.setMap(null);
      kakao.maps.event.removeListener(marker, "click");
    });
    
    const newMarkers = positions.map((position, index) => {
      const marker = new kakao.maps.Marker({ map: kakaoMap, position });
      
      kakao.maps.event.addListener(marker, "click", () => {
        
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }
        
        const { latitude, longitude } = inputData[index];
        const matchingData = inputData.find(data => data.latitude === latitude && data.longitude === longitude);
        const { centerName, bloodHouseAddress, bloodHousePhoneNumber } = matchingData;
    
        const infoContent = `
          <div>
            <div>${centerName}</div>
            <div>${bloodHouseAddress}</div>
            <div>${bloodHousePhoneNumber}</div>
            <button id="reservationButton_${index}">
              예약하기
            </button>
            <button type="button">
              자세히보기
            </button>
          </div>
        `;
        
        const infoWindow = new kakao.maps.InfoWindow({
          content: infoContent,
          position: marker.getPosition()
        });
        infoWindow.open(kakaoMap, marker);
        
        infoWindowRef.current = infoWindow;
        
        const reservationButton = document.getElementById(`reservationButton_${index}`);
        if (reservationButton) {
          reservationButton.addEventListener("click", () => {
            handleReservation(centerName);
          });
        }
      });
    
      return marker;
    });

    setMarkers(newMarkers);

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );
      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    
    const center = kakaoMap.getCenter();
    
    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;
    
    kakaoMap.relayout();
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  const handleReservation = (centerName) => {
    navigate('/BD_ReservationSecond', { state: { centerName } });
  };

  return <div id="container" ref={container} />;
}
