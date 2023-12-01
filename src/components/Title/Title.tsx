import { FC } from "react";
import { Desc } from "./Title.styled";
import { Htag } from "../Htag/Htag";

export const Title: FC = () => {
  return (
    <div>
      <Htag tag="h1">Global Currency Exchange Rate APP</Htag>
      <Desc>with live currency exchange rates for over 200 world currencies</Desc>
    </div>
  );
};
