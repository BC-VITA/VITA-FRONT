/* global kakao */
import React, { useEffect, useState, useRef } from "react";

export default function KakaoMap(props) {
  const { markerPositions, size, inputData } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const infoWindowRef = useRef(null);

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

        // Wait for map tiles to be loaded
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

    // Clear previous markers
    markers.forEach(marker => {
      marker.setMap(null);
      kakao.maps.event.removeListener(marker, "click");
    });

    // Assign new markers
    const newMarkers = positions.map((position, index) => {
      const marker = new kakao.maps.Marker({ map: kakaoMap, position });
    
      // Add click event listener to each marker
      kakao.maps.event.addListener(marker, "click", () => {
        // Close the previous InfoWindow if it exists
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }
    
        // Create and open new InfoWindow
        const { latitude, longitude } = inputData[index];
        const matchingData = inputData.find(data => data.latitude === latitude && data.longitude === longitude);
        const { centerName, bloodHouseAddress, bloodHousePhoneNumber } = matchingData;
    
        const infoContent = `
          <div>
            <div>${centerName}</div>
            <div>${bloodHouseAddress}</div>
            <div>${bloodHousePhoneNumber}</div>
          </div>
        `;
        const infoWindow = new kakao.maps.InfoWindow({
          content: infoContent,
          position: marker.getPosition()
        });
        infoWindow.open(kakaoMap, marker);
    
        // Update infoWindowRef
        infoWindowRef.current = infoWindow;
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

    // Save center position
    const center = kakaoMap.getCenter();

    // Change viewport size
    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;

    // Relayout and restore
    kakaoMap.relayout();
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  return <div id="container" ref={container} />;
}
