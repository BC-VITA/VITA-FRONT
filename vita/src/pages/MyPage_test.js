import React, { useState } from "react";
import "./styles.css";
import KakaoMap from "./KakaoMap";

export default function App() {
  const [visible, setVisible] = useState(true);

  const [markerPositions, setMarkerPositions] = useState([]);
  const markerPositions1 = [
    [33.452278, 126.567803],
    [33.452671, 126.574792],
  ];
  const markerPositions2 = [
    [37.499590490909185, 127.0263723554437],
    [37.499427948430814, 127.02794423197847]
  ];

  const [mapSize, setMapSize] = useState([400, 400]);

  return (
    <div className="App">
      <section>
        <button onClick={() => setVisible(!visible)}>
          Toggle(Mount/Unmount)
        </button>
      </section>
      <section>
        <button onClick={() => setMapSize([0, 0])}>Hide</button>
        <button onClick={() => setMapSize([200, 200])}>Resize (200x200)</button>
        <button onClick={() => setMapSize([400, 400])}>Resize (400x400)</button>
      </section>
      <section>
        <button onClick={() => setMarkerPositions(markerPositions1)}>
          Marker Set 1
        </button>
        <button onClick={() => setMarkerPositions(markerPositions2)}>
          Marker Set 2
        </button>
        <button onClick={() => setMarkerPositions([])}>
          Marker Set 3 (empty)
        </button>
      </section>
      <div id="wrap">
        {visible && (
          <>
            <h2>Kakao Map</h2>
            <KakaoMap markerPositions={markerPositions} size={mapSize} />
          </>
        )}
      </div>
      <div>{mapSize},{markerPositions}</div>
    </div>
  );
}

