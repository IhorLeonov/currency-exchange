import { FC } from "react";
import { Main } from "./App.styled";
import { Header, Converter, Footer } from "../";

const App: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>Currency exchange</h1>
        <Converter />
      </Main>
      <Footer />
    </>
  );
};

export default App;
