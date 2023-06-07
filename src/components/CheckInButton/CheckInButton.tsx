import React, { useState } from "react";

import Button from "../common/Button";
import { styled } from "styled-components";
import { LatLngExpression } from "leaflet";
import CheckInModal from "./CheckInModal";

type CheckInButtonProps = {
  handleUpdatePosition: (currentPosition: LatLngExpression) => void;
};

const CheckInButton = ({ handleUpdatePosition }: CheckInButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (position?: LatLngExpression) => {
    console.log("clsing", position);
    setIsModalOpen(false);
    if (position) {
      handleUpdatePosition(position);
    }
  };

  return (
    <div>
      <Button label="Check In" onClick={handleOpenModal} />
      <CheckInModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CheckInButton;
