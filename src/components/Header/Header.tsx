import { FC, useEffect } from "react";
import { HeaderSection } from "./Header.styled";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getUAHtoEUR, getUAHtoUSD } from "../../redux/operations";
import { selectData } from "../../redux/selectors";
import { UAHCourse } from "../UAHCourse/UAHCourse";
import { Htag } from "../Htag/Htag";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { UAHtoUSDCourse, UAHtoEURCourse } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(getUAHtoUSD());
    dispatch(getUAHtoEUR());
  }, []);

  return (
    <HeaderSection>
      <UAHCourse currency="USD" course={UAHtoUSDCourse} />
      <Htag tag="h2">UAH Course</Htag>
      <UAHCourse currency="EUR" course={UAHtoEURCourse} />
    </HeaderSection>
  );
};
