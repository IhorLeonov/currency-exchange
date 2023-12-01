import { FC } from "react";
import { FooterSection, GhLink } from "./Footer.styled";
import { BsGithub } from "react-icons/bs";

export const Footer: FC = () => {
  return (
    <FooterSection>
      <GhLink
        href="https://github.com/IhorLeonov/currency-exchange"
        target="_blank"
        rel="noreferrer"
      >
        Github
        <BsGithub size={22} style={{ marginLeft: 10 }} />
      </GhLink>
      <p>© 2023 Ihor Leonov</p>
    </FooterSection>
  );
};
