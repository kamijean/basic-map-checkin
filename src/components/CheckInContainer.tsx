import React, { useState } from "react";

import LeafletMap from "./Map/LeafletMap";
import CheckInButton from "./CheckInButton/CheckInButton";
import { styled } from "styled-components";
import { LatLngExpression } from "leaflet";

const CheckInContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const CheckinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 1000px;
`;

const londonPosition: LatLngExpression = [51.505, -0.09];

const CheckInContainer = () => {
  const [position, setPosition] = useState<LatLngExpression>(londonPosition);

  const handleUpdatePosition = (currentPosition: LatLngExpression) => {
    setPosition(currentPosition);
  };

  return (
    <CheckInContainerWrapper>
      <CheckinWrapper>
        <CheckInButton handleUpdatePosition={handleUpdatePosition} />
        <LeafletMap position={position} />
      </CheckinWrapper>
    </CheckInContainerWrapper>
  );
};

export default CheckInContainer;
