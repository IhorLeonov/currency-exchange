import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1000;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 42px;
  height: 42px;

  border: 4px solid #272a2e;
  border-bottom-color: #20fe51;
  border-radius: 50%;

  animation: ${rotate} 1s linear infinite;
`;
