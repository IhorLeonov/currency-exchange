import { FC } from "react";
import { FooterSection } from "./Footer.styled";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <FooterSection>
      <p>GitHub</p>
      <p>© 2023 Ihor Leonov</p>
    </FooterSection>
  );
};
