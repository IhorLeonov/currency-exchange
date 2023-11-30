import { FC } from "react";
import { Main } from "./App.styled";
import { Converter } from "../Converter/Converter";

const App: FC = () => {
  return (
    <>
      {/* <header>Header</header> */}
      <Main>
        <h1>Currency exchange</h1>
        <Converter />
      </Main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default App;
