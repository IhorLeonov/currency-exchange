import { FC } from "react";
import { Main } from "./Layout.styled";
import { Header, Converter, Footer } from "../";
import { Title } from "../Title/Title";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Title />
        <Converter />
      </Main>
      <Footer />
    </>
  );
};
