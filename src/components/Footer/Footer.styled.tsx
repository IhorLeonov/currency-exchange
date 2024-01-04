import styled from "styled-components";

export const FooterSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 0 60px;

  margin-left: auto;
  margin-right: auto;

  max-width: 1440px;
  height: 60px;

  @media (max-width: 455px) {
    padding: 0 30px;
  }
`;

export const GhLink = styled.a`
  display: flex;
  color: var(--color-hover);

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;
