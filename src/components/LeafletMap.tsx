import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { styled } from "styled-components";

const MapWrapper = styled.div`
  width: 1000px;
  height: 300px;
`;

const LeafletMap = () => {
  const position = [51.505, -0.09];
  return (
    <MapWrapper id="mapid">
      <MapContainer center={position} zoom={13}>
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
