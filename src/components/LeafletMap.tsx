import React, { useEffect, useState } from "react";

import { LatLngExpression, Map } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { styled } from "styled-components";

const MapWrapper = styled.div`
  width: 1000px;
  height: 300px;
`;

const LeafletMap = () => {
  const [map, setMap] = useState<Map>();
  useEffect(() => {
    if ("geolocation" in navigator && map) {
      navigator.geolocation.getCurrentPosition(function (cPosition) {
        console.log(cPosition.coords.latitude, cPosition.coords.longitude);
        map.panTo([cPosition.coords.latitude, cPosition.coords.longitude]);
      });
    }
  }, [map]);

  const center: LatLngExpression = [51.505, -0.09];

  return (
    <MapWrapper id="mapid">
      <MapContainer
        whenReady={() => setMap}
        center={center}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Your current location.</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default LeafletMap;
