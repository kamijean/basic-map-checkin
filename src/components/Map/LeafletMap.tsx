import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import { styled } from "styled-components";
import MarkerComponent from "./MarkerComponent";
import { LatLngExpression } from "leaflet";

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

type LeafletMapProps = {
  position: LatLngExpression;
};

const LeafletMap = ({ position }: LeafletMapProps) => {
  return (
    <MapWrapper>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: 1000, height: 500, zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerComponent position={position} />
      </MapContainer>
    </MapWrapper>
  );
};

export default LeafletMap;
