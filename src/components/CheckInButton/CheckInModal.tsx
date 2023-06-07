import { LatLngExpression } from "leaflet";
import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../common/Button";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

const FormWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

type ModalProps = {
  isOpen: boolean;
  onClose: (position?: LatLngExpression) => void;
};

const CheckInModal = ({ isOpen, onClose }: ModalProps) => {
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");

  const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setXValue(event.target.value);
  };

  const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYValue(event.target.value);
  };

  const handleSubmit = () => {
    setXValue("");
    setYValue("");
    // Close the modal
    onClose([Number(xValue), Number(yValue)]);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal>
      <ModalContent>
        <h2>Set Coordinates Manually</h2>
        <form>
          <FormWrapper>
            <input
              type="text"
              value={xValue}
              onChange={handleXChange}
              placeholder="Enter x value"
            />
            <input
              type="text"
              value={yValue}
              onChange={handleYChange}
              placeholder="Enter y value"
            />
          </FormWrapper>
        </form>
        <ButtonWrapper>
          <Button onClick={() => handleSubmit()} label="Submit" />
          <Button
            buttonColor="secondary"
            onClick={() => onClose(undefined)}
            label="Close"
          />
        </ButtonWrapper>
      </ModalContent>
    </Modal>
  );
};

export default CheckInModal;
