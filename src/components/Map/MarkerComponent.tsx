import React, { useEffect } from "react";

import { LatLngExpression } from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";

type MarkerComponentProps = {
  position: LatLngExpression;
};

const MarkerComponent = ({ position }: MarkerComponentProps) => {
  const map = useMap();

  useEffect(() => {
    map.panTo(position);
  }, [map, position]);

  return (
    <Marker position={position}>
      <Popup>Your current location</Popup>
    </Marker>
  );
};

export default MarkerComponent;
