import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import urlAPI from "./_helpers/axiosConfig";

function App() {
  const apiKeyMaps = process.env.REACT_APP_API_KEY_MAPS;

  const containerStyle = {
    width: "100%",
    height: `calc(100vh - 4rem)`,
  };

  const initialState = {
    lat: -21.1,
    lng: 55.53,
  };

  const [allMarkers, setAllMarkers] = useState([]);

  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);

  const toggleInfoWindow = (position) => setSelectedMarkerPosition(position);

  const closeInfoWindow = () => setSelectedMarkerPosition(null);

  const [markerRef, marker] = useAdvancedMarkerRef();

  const getTerrainData = async () => {
    try {
      const response = await urlAPI.get("/terrains");
      setAllMarkers(response.data);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    getTerrainData();
  }, []);

  return (
    <>
      <APIProvider apiKey={apiKeyMaps}>
        <Map
          mapId="maps-container"
          style={containerStyle}
          defaultCenter={initialState}
          defaultZoom={10}
        >
          {allMarkers.map((item) => {
            return (
              <>
                <AdvancedMarker
                  ref={markerRef}
                  key={item.id}
                  position={{
                    lat: item.latitude,
                    lng: item.longitude,
                  }}
                  onClick={() =>
                    toggleInfoWindow({
                      lat: item.latitude,
                      lng: item.longitude,
                    })
                  }
                >
                  <img
                    src={require("./assets/pin-basketball.png")}
                    alt="playground"
                    style={{ width: "32px", height: "32px" }}
                  />
                </AdvancedMarker>
                {selectedMarkerPosition &&
                  selectedMarkerPosition.lat === item.latitude &&
                  selectedMarkerPosition.lng === item.longitude && (
                    <InfoWindow
                      maxWidth={300}
                      position={{
                        lat: selectedMarkerPosition.lat + 0.02,
                        lng: selectedMarkerPosition.lng + 0.0002,
                      }}
                      onCloseClick={closeInfoWindow}
                    >
                      <div>
                        <img
                          src={`http://127.0.0.1:8000/${item.image}`}
                          alt="playground"
                          style={{
                            width: "100%",
                            height: 150,
                            objectFit: "cover",
                          }}
                        />
                        <h1 className="font-bold py-1 uppercase">
                          {item.name}
                        </h1>
                        <p className="font-bold py-1">
                          Adresse:{" "}
                          <span className="font-normal">{item.adresse}</span>
                        </p>
                        <p className="font-bold py-1">
                          Nombre de pannier(s):{" "}
                          <span className="font-normal">{item.nbrPaniers}</span>
                        </p>
                        <p className="font-bold py-1">
                          Nombre de terrain(s):{" "}
                          <span className="font-normal">
                            {item.nbrTerrains}
                          </span>
                        </p>
                      </div>
                    </InfoWindow>
                  )}
              </>
            );
          })}
        </Map>
      </APIProvider>
    </>
  );
}

export default React.memo(App);
