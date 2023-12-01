import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 40px;
  margin-left: auto;
  margin-right: auto;

  max-width: 1440px;
  min-height: calc(100vh - 100px);
`;

export const Desc = styled.p`
  margin-top: 10px;
  color: var(--color-accent);
`;
