import { FC } from "react";
import { Main, Desc } from "./App.styled";
import { Header, Converter, Footer } from "../";
import { Htag } from "../Htag/Htag";

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Htag tag="h1">Global Currency Exchange Rate APP</Htag>
        <Desc>with live currency exchange rates for over 200 world currencies</Desc>
        <Converter />
      </Main>
      <Footer />
    </>
  );
};

export default App;
