import { FC } from "react";
import { Main, Text } from "./App.styled";
import { Header, Converter, Footer } from "../";
import { Htag } from "../Htag/Htag";

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Htag style={{ marginTop: 70 }} tag="h1">
          Global Currency Exchange Rate APP
        </Htag>
        <Text>with live currency exchange rates for over 200 world currencies</Text>
        <Converter />
      </Main>
      <Footer />
    </>
  );
};

export default App;
