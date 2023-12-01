import styled from "styled-components";

export const FooterSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  margin-left: auto;
  margin-right: auto;

  max-width: 1440px;
  height: 60px;
`;

export const GhLink = styled.a`
  display: flex;
  color: var(--color-hover);

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;
