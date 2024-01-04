import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;

  margin-left: auto;
  margin-right: auto;

  max-width: 1440px;
  min-height: calc(100vh - 120px);
  overflow: hidden;

  @media (max-width: 455px) {
    padding: 0 30px;
  }
`;
