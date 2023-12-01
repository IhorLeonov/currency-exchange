import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Input = styled.input`
  padding: 0 8px;
  width: 140px;
  height: 30px;
  font-size: 14px;

  outline: none;
  background-color: transparent;
  border: 1px solid var(--color-text);
  color: white;

  &:hover,
  &:focus {
    border: 1px solid var(--color-accent);
    cursor: pointer;
  }
`;

export const Select = styled.select`
  min-width: 70px;
  height: 30px;
  text-align: center;

  background-color: transparent;
  outline: none;
  color: white;

  border: 1px solid var(--color-text);

  &:hover,
  &:focus {
    border: 1px solid var(--color-accent);
    cursor: pointer;
  }
`;

export const Caption = styled.p`
  width: 50px;
  padding: 5.6px 0;
  margin: 0;
  color: var(--color-accent);
`;
