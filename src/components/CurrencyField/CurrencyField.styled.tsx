import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0 8px;
  width: 140px;
  height: 30px;
  font-size: 14px;

  outline: none;
  border-radius: none;
  background-color: transparent;
  border: 1px solid var(--color-text);
  border-right: none;
  color: white;

  &:hover,
  &:focus {
    border: 1px solid var(--color-hover);
    cursor: pointer;
  }
`;

export const Select = styled.select`
  min-width: 70px;
  height: 30px;
  text-align: center;

  outline: none;
  border-radius: none;
  background-color: transparent;
  border: 1px solid var(--color-text);
  color: white;

  &:hover,
  &:focus {
    border: 1px solid var(--color-hover);
    cursor: pointer;
  }
`;

export const Caption = styled.p`
  padding: 5.6px 0;
  margin-right: 20px;

  width: 50px;
  text-align: end;
  color: var(--color-accent);
`;
